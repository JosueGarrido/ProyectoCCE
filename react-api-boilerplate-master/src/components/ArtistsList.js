import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useUserList } from '../data/useUserList';
import ShowError from '../components/ShowError';
import penguin from '../images/others/penguin.svg';
const { Text } = Typography;

const ArtistsList = ( { artists, loading }) => {

    if (loading) {
        return <h2>Cargando...</h2>;
    }


        console.log('artistas1212', artists);



        return (
            <>
                <Row justify='center' gutter={ 30 }>
                    {
                        artists.map( ( users, i ) => (
                            <Col span={6} style={ { marginBottom: 10 } }  key={ i }>
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
                                                    <b>{ users.name } {users.last_name}</b>
                                            </Text>
                                                <br/>
                                            <Text type='secondary'>Ocupacion principal: { users.main_activity }</Text>


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
