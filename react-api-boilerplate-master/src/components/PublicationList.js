import React, { useEffect, useState } from 'react';
import {Card, Avatar, Skeleton, Table, Tag, Space, Row, Col, Typography, Button, Modal, Divider, message} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { usePublicationList } from '../data/usePublicationList';
import ShowError from './ShowError';
import {Form, Input, Select} from "../pages/Antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Publications from "../pages/Publications";
import API from "../data";
import ErrorList from "./ErrorList";


const { Text } = Typography;
const {Meta} = Card;
const AppointmentList = (props ) => {
        const [ showModal, setShowModal ] = useState( false );
        const [ currentPublicationId, setCurrentPublicationId ] = useState( null );
        const [ currentPublicationName, setCurrentPublicationName ] = useState(null);
        const [ currentPublicationDescription, setCurrentPublicationDescription ] = useState( null );
        const [ currentPublicationPrice, setCurrentPublicationPrice ] = useState( null );
        const [ currentPublicationStock, setCurrentPublicationStock ] = useState( null );
        const [ currentPublicationLocation, setCurrentPublicationLocation ] = useState( null );
        const [ currentPublicationScore, setCurrentPublicationScore ] = useState( null );
        const { products, isLoading, isError, mutate } = usePublicationList();

        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );

        const handleChangeCategory = ( e ) => {
            // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
            // e.target.value ) );
        };

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

        const handleViewDetails = (id) => {
            setCurrentPublicationId(id)
            setShowModal(true);
        }
        const handleViewName = (name) => {
            setCurrentPublicationName(name)
        }
        const handleViewDescription = (description) => {
            setCurrentPublicationDescription(description)
        }
        const handleViewPrice = (price) => {
            setCurrentPublicationPrice(price)
        }
        const handleViewStock = (stock) => {
            setCurrentPublicationStock(stock)
        }
        const handleViewLocation = (location) => {
            setCurrentPublicationLocation(location)
        }
        const handleViewScore = (score) => {
            setCurrentPublicationScore(score)
        }

        const handleCancel = () => {
            setShowModal(false);
        }

        const handleOk = () => {
            setShowModal(false);
        }


        return (
            <>

                <Row>
                    {
                        products.map((product, index)=>{
                            return (
                                <Col >
                                    <Card

                                        onClick={ () => {
                                            handleViewDetails(product.id)
                                            handleViewName(product.name)
                                            handleViewDescription(product.description)
                                            handleViewPrice(product.price)
                                            handleViewStock(product.stock)
                                            handleViewLocation(product.location)
                                            handleViewScore(product.score)


                                        }}
                                        style={{
                                            width: 1000,
                                            marginRight: 20,
                                            marginBottom: 30,
                                            background: '#fffff'

                                        }}



                                    >
                                    <Row>
                                        <Col span={8} >
                                        <Meta
                                            avatar={<Avatar size={120} src="https://www.elcomercio.com/files/article_main/uploads/2017/08/06/5987d8614c821.jpeg" />}
                                            title={`Nombre: ${product.name}`}
                                            description={`Descripción: ${product.description}
                                            `}
                                        />
                                        </Col>

                                            <Col span={8} align='end'>
                                                <p>Precio: ${product.price} </p>
                                                <p>Stock: {product.stock} </p>
                                                <p>Ubicación: {product.location} </p>
                                                <p>Score: {product.score} </p>

                                            </Col>
                                    </Row>
                                            <Button icon ={<EditOutlined />} type="primary"> Editar</Button>
                                            <Button icon={<DeleteOutlined />} type="primary" danger>Eliminar</Button>



                                    </Card>



                                </Col>

                            )
                        })
                    }

                </Row>

            </>
        );
    }
;

export default AppointmentList;
