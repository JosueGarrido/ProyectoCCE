import React, { useEffect, useState } from 'react';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import API from '../data/index';
import { Tabs, Button } from 'antd';
import ShowError from "../components/ShowError";
import {useParams, Link} from "react-router-dom";
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import {useProductsList} from "../data/useProductsList";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useReputationList} from "../data/useReputationList";
import Routes from '../constants/routes';

import {useProductSell} from "../data/useProductSell";
const { TabPane } = Tabs;
const { Text, Title } = Typography;
const {Meta} = Card;



const PrePurchase = (props) => {


    let { id } = useParams();
    const product= useProduct(id);
    const category= useCategories(id);
    const products = useProductsList( id );

    const { sales } = useProductSell( id );
    const [ submitting, setSubmitting ] = useState( false );


    

console.log(products)

    const handleSubmit = async( values ) => {
        console.log( 'values', values );

        try {
            // setValue( '' );

            await API.post( `/products/${product.product.id}/sales`, {
               // product_id: product.product.id,
            } );
            sales.mutate(); // get updated data

        } catch( error ) {
            console.log( 'error', error );
        }
    };
    return (
        <>

            <Row>


                <Col span={14}>
                <h1>Revisa y confirma tu compra</h1>
                <h2>Detalles del envio</h2>

                <Card

                style={{
                    width: 500,
                    marginRight: 20,
                    marginBottom: 30,
                    background: '#fffff'

                }}
                >

                <Row>
                <Col span={14}>
                <Meta
                avatar={<Avatar size={20}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png"/>}
                title={`Acordar entrega con el vendedor`}


                />
                </Col>

                </Row>


                </Card>

                <h2>Detalles de pago</h2>

                <Card

                style={{
                    width: 500,
                    marginRight: 20,
                    marginBottom: 30,
                    background: '#fffff'

                }}
                >

                <Row>
                <Col span={14}>
                <Meta
                avatar={<Avatar size={20}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/1024px-Approve_icon.svg.png"/>}
                title={`Acordar pago con el vendedor`}


                />
                </Col>

                </Row>


                </Card>


                </Col>

                <Col span={8} >

                    {
                    product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={ product.isError } />
                    :
                <div>

                    <Meta
                        avatar={<Avatar size={150} src={ `http://localhost:8000/storage/${product.product.image }` }/>}
                        title={`Autor: ${product.product.name}`}
                        description={`Descripción: ${product.product.description}
                              
                                 `}
                    />
                    <Col span={8} align='center'>
                        <p>Precio: ${product.product.price} </p>
                        <p>Ubicación: {product.product.location} </p>

                    </Col>


                    <h2>Asegure su compra</h2>
                    <Button id="boton" onclick={handleSubmit()} href={Routes.HOME} >Asegura tu Comprar</Button>



                </div>
                    }

                </Col>
            </Row>

        </>
    );

};

export default  PrePurchase;
