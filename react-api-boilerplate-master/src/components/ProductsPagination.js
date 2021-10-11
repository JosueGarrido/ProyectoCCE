
import React from 'react';
import ShowError from "./ShowError";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import imagen12 from "../images/others/prodImage.png";

const ProductsPagination = ({ products, loading, id }) => {
    if (loading) {
        return <h2>Cargando...</h2>;
    }
    console.log('idcategoryen products',id);
    //recibir id de acuerdo a la categoria para poner los productsos de dicha categoria

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

                                                    style={{
                                                        width:200,
                                                        marginRight: 20,
                                                        marginBottom: 30,
                                                        background: '#fffff'

                                                    }}

                                                >
                                                    <Row >

                                                        <img src={ `http://localhost:8000/storage/${ product.image }` } style={{width:"150px",textAlign:'center'}}/>
                                                        <Col span={24} align='center'>
                                                            <p>name: {product.name}</p>
                                                            <p>Precio: ${product.price} </p>
                                                            <p>Stock: {product.stock} </p>
                                                            <p>Venta: {product.sales} </p>
                                                            <p>Ubicación: {product.location} </p>

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
