import React, { useEffect, useState } from 'react';
import {Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar} from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';

const { Text } = Typography;

const ArtistsList = ( props ) => {

    const { users, isLoading, isError, mutate } = useUserList();

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
                        users.map( ( users, i ) => (
                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                { users.name
                                    ? <Card
                                        title={ users.name }
                                        extra={ <Link to={ Routes.ARTIST.replace( ':id', users.id ) }>Más</Link> }
                                        cover={
                                            <Avatar
                                                size={100}
                                                alt={ users.name }
                                                src={ `http://localhost:8000/storage/${ users.profile_picture }` }
                                            /> }
                                    >
                                        <Text type='secondary'>{ users.created_at }</Text>
                                        <p> { users.name }</p>
                                        <Text type='secondary'>Escrito por: <Button type='link'>
                                            { users.name }
                                        </Button></Text>
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

export default ArtistsList;
