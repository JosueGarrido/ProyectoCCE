import React, { useEffect, useState } from 'react';
import {Card, Avatar, Skeleton, Table, Tag, Space, Row, Col, Typography, Button, Modal, Divider, message} from 'antd';
import Routes from '../constants/routes';
import {Link, useParams} from 'react-router-dom';
import { usePublicationList } from '../data/usePublicationList';
import ShowError from './ShowError';
import {Form, Input, Select} from "../pages/Antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Publications from "../pages/Publications";
import API from "../data";
import ErrorList from "./ErrorList";
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import '../styles/ProductList.css';


const { Text } = Typography;
const {Meta} = Card;
const style = { background: '#0092ff', padding: '8px 0' };
const ProductsList = () => {
        let { id } = useParams();
        const user = useUser( id );
        const { products, isLoading, isError, mutate } = usePublicationList();
        const { users} = useUserList();


        const [loading, setLoading] = useState(true);
        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />

                            </div>
                        </Col>
                    )
                }
            </Row>;
        }

        if( isError ) {
            return <ShowError error={ isError } />;
        }

        return (
            <>

                <Row gutter={[16, 24]}  >

                    {
                        users === undefined
                            ? <Text>No cargan los datos</Text>
                            :
                            products.map((product)=>{
                                if(product.user_id===user.user.id){
                                    return (

                                        <Col  className="gutter-row" span={6}  align='center'     >

                                            <Card
                                                title={ product.name }
                                                extra={ <Link to={ Routes.PRODUCT.replace( ':id', product.id ) }>Más</Link> }
                                                style={{
                                                    width: 300,
                                                    marginRight: 5,
                                                    marginBottom: 15,
                                                    background: '#ffffff',

                                                }}
                                            >

                                                    <Col className="gutter-row" span={24} >
                                                        <Meta align='center'
                                                              avatar={<Avatar size={75} src={ `http://localhost:8000/storage/${ product.image }` }/>}
                                                            title={`Autor: ${product.name}`}
                                                            description={`Descripción: ${product.description}`}


                                                        />
                                                    </Col>


                                                    <Col className="gutter-row" span={24}  align='left'>
                                                        <p>user_id: {product.user_id}</p>
                                                        <p>Precio: ${product.price} </p>
                                                        <p>Stock: {product.stock} </p>
                                                        <p>Venta: {product.sales} </p>
                                                        <p>Ubicación: {product.location} </p>
                                                        {  /*     <iframe
                                                            src={product.description}
                                                            frameBorder="0" allowFullScreen="true" scrolling="no"
                                                            height="378" width="620"></iframe>  */ }
                                                    </Col>



                                            </Card>
                                        </Col>

                                    )
                                }

                            })
                    }
                </Row>
            </>
        );
    };

export default (ProductsList);
