import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useQuestionsList } from '../data/UseQuestion';
import ShowError from './ShowError';
import Title from "antd/es/skeleton/Title";

const { Text } = Typography;
const {Meta} = Card;
const QuestionsList = ( props ) => {

        const { questions, isLoading, isError, mutate } = useQuestionsList();
        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );


        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
                                <Skeleton.Image style={ { width: 200 } } />
                                <Card title='' extra='' cover='' loading />
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

                <Row justify='center' gutter={ 30 }>
                    {
                        questions.map( ( questions, i ) => (
                            <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                                { questions.id
                                    ? <Card>
                                            <Meta
                                            avatar={<Avatar
                                                size={90}
                                                alt={ questions.id }
                                                src={ `http://localhost:8000/storage/${ questions.user_data.profile_picture}` }
                                            />}
                                           title={`N° de Publicación: ${ questions.id } `}

                                            />
                                            <Col>
                                            <Text type='secondary'>Título de la obra:{ questions.user_data.name }</Text>
                                            </Col>
                                        <Col>
                                        <Text type='secondary'>Escrito por:{ questions.user_data.name }</Text>
                                        </Col>
                                        <Col>
                                        <Text type='secondary'>Fecha de Publicación:{ questions.created_at }</Text>
                                        </Col>

                                    </Card>
                                    : <div style={ { textAlign: 'center' } }>
                                        <Skeleton.Image style={ { width: 200 } } />
                                        <Card title='' extra='' cover='' loading />
                                    </div>
                                }
                            </Col>
                        ) )
                    }
                </Row>
            </>
        );
    }
;


export default QuestionsList;