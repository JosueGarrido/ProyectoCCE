import React from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import {Link, useParams} from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import  ProductsList from '../components/ProductsList';
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import { Tabs, Button } from 'antd';
import Routes from "../constants/routes";

const { TabPane } = Tabs;
const { Text, Title } = Typography;
const {Meta} = Card;

function callback(key) {
    console.log(key);
}

const Product = () => {
    let { id } = useParams();
    const product= useProduct(id);
    const category= useCategories(id);
    const products = useProductsList( id );


    return (
        <>
            {
                <Row >
                    <Col span={6}>
                        <img
                            height={350}
                            width={350}
                            src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                        />
                    </Col>
                    <Col span={12}>
                        {
                            product.isLoading
                                ? <div>Cargando...</div>
                                : product.isError
                                ? <ShowError error={ product.isError } />
                                : <>
                                    <h1 >
                                        Obra: { product.product.name }
                                    </h1>
                                    <h1>
                                        $ {product.product.price}
                                    </h1>
                                    <h1>
                                        En inventarío: {product.product.stock}
                                    </h1>
                                    <h1>
                                        Descripción: {product.product.description}
                                    </h1>

                                </>
                        }
                    </Col>
                </Row>
            }
            {
                <Row>
                    <Col span={6}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Descripción" key="1">
                                {
                                    <>
                                        <h2 >
                                            Categoría: Artes plásticas
                                        </h2>
                                        <h2>
                                            Estilo: Impresionismo
                                        </h2>
                                        <h2>
                                            Técnica: Óleo sobre madera
                                        </h2>
                                        <h2>
                                            Temática: Libre
                                        </h2>
                                        <h2>
                                            Soporte: Placa chapadur
                                        </h2>
                                        <h2>
                                            Formato: xxx
                                        </h2>
                                        <h2>
                                            Tamaño: 50 x 70 cm
                                        </h2>
                                        <h2>
                                            Color: café
                                        </h2>
                                    </>
                                }
                            </TabPane>
                            <TabPane tab="Valoraciones" key="2">
                                <div>Cargando...</div>
                            </TabPane>
                        </Tabs>

                    </Col>

                </Row>
            }

            {


                product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={product.isError}/>
                    : <Link to={Routes.PREPURCHASE.replace(':id', product.product.id)}><Button
                        type="primary">Comprar</Button></Link>
            }

        </>
    );

};

export default ( Product );
