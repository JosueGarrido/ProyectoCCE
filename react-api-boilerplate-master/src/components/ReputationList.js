import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar, Rate } from 'antd';
import { useReputationList } from '../data/useReputationList';
import ShowError from './ShowError';

const { Text, Title } = Typography;
const {Meta} = Card;
const ReputationList = ( props ) => {

        const { reputations, isLoading, isError, mutate } = useReputationList();


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
                        reputations.map( ( reputations, i ) => (
                            <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                                { reputations.comment
                                    ? <Card>
                                        <Meta
                                            avatar={<Avatar
                                                size={90}
                                                alt={ reputations.user_data.name }
                                                src={ `http://localhost:8000/storage/${ reputations.user_data.profile_picture }` }
                                            />}
                                            title={`Nombre del Comprador: ${ reputations.user_data.name } ${ reputations.user_data.last_name }`}
                                            description={`Descripción: ${reputations.comment}`}
                                        />

                                        <Text type='secondary'><Text strong>Valoración: </Text>
                                            <Rate disabled defaultValue={ reputations.score } />

                                        </Text>

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

export default ReputationList;
