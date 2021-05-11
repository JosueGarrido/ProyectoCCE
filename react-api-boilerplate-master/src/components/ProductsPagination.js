
import React from 'react';
import ShowError from "./ShowError";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import imagen12 from "../images/logo-menta.png";

const ProductsPagination = ({ products, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            {
                products.isLoading
                    ? <div>Cargando...</div>
                    : products.isError
                    ? <ShowError error={ products.isError } />
                    :<div className="site-card-wrapper">
                        <Row justify='center'  gutter={24}>
                            {
                                products.map( ( product, i ) => (
                                    <Col span={6} style={ { marginBottom: 10 } } key={ i }>
                                        { product.name
                                            ?<a href={ Routes.PRODUCT.replace( ':id', product.id ) }>
                                                <Card
                                                    hoverable
                                                    extra={ <Link to={ Routes.PRODUCT.replace( ':id', product.id ) }></Link> }
                                                    style={{
                                                        width:200,
                                                        marginRight: 20,
                                                        marginBottom: 30,
                                                        background: '#fffff'

                                                    }}

                                                >
                                                    <Row >

                                                        <img src={imagen12} style={{width:"100px"}}/>
                                                        <Col span={24} align='center'>
                                                            <p>name: {product.name}</p>
                                                            <p>user_id: {product.user_id}</p>
                                                            <p>Precio: ${product.price} </p>
                                                            <p>Stock: {product.stock} </p>
                                                            <p>Venta: {product.sales} </p>
                                                            <p>Ubicación: {product.location} </p>
                                                            <p>category1id: {product.category_id} </p>

                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </a>


                                            : <div style={ { textAlign: 'center' } }>
                                                <Card title='' extra='' cover='' loading />
                                            </div>
                                        }
                                    </Col>
                                ) )
                            }


                        </Row>
                    </div>


            }
        </>
    );
};

export default ProductsPagination;
