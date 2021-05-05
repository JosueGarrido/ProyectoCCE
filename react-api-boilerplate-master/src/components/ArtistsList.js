import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';
import penguin from '../images/others/penguin.svg';
const { Text } = Typography;

const ArtistsList = ( props ) => {

        const { users, isLoading, isError, mutate } = useUserList();


        const artist = [];

        if(users !== undefined) {
            console.log('usuarios',users);
                for (var i = 0; i < (users.length); i++) {
                    if (users[i].userable_type === 'App\\Artist') {
                        artist.push(users[i]);
                    }
                }
        }

        console.log('artistas', artist);

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
                        artist.map( ( users, i ) => (
                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                { users.name
                                    ?<a href={Routes.ARTIST.replace( ':id', users.id )}>
                                        <Card
                                            hoverable
                                            style={{textAlign:"center"}}
                                        >
                                            <div>
                                                <Avatar
                                                    size={100}
                                                    alt={ users.name }
                                                    src={penguin}
                                                    style={{textAlign:"center"}}
                                                />
                                            </div>
                                            <br/>
                                            <Text type='primary' className="subtitle">
                                                    <b>{ users.name }</b>
                                            </Text>
                                            <br/>
                                            <Text type='secondary'>Creado desde: { users.created_at }</Text>


                                        </Card>
                                    </a>

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

export default ArtistsList;
