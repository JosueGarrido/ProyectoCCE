import React, { useEffect, useState } from 'react';
import {Card, Avatar, Skeleton, Table, Tag, Space, Row, Col, Typography, Button, Modal, Divider, message} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { usePublicationList } from '../data/usePublicationList';
import ShowError from './ShowError';
import {Form, Input, Select} from "../pages/Antd";
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
                                <Col>
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
                                            width: 500,
                                            marginRight: 20,
                                            marginBottom: 30,
                                            background: '#fffff'

                                        }}



                                    >
                                        <Meta
                                            avatar={<Avatar size={64} src="https://draherraizmedicoypaciente.files.wordpress.com/2013/12/sin-tc3adtulo.png" />}
                                            title={`Nombre: ${product.name} 
                                            Descripción: ${product.description} Precio: ${product.price} 
                                            Stock: ${product.stock} Ubicación: ${product.location}
                                            Score: ${product.score}`}

                                        />

                                    </Card>
                                    <Modal
                                        title={`Publicacion: ${currentPublicationId}`}
                                        visible={showModal}

                                        onOk={ () => handleOk()}
                                        onCancel={ () => handleCancel()}
                                    >
                                        Nombre: {currentPublicationName}
                                        <Divider/>
                                        Descripción: {currentPublicationDescription}
                                        <Divider/>
                                        Precio: {currentPublicationDescription}
                                        <Divider/>
                                        Stock: {currentPublicationStock}
                                        <Divider/>
                                        Ubicación: {currentPublicationLocation}
                                        <Divider/>
                                        Score: {currentPublicationScore}

                                    </Modal>


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