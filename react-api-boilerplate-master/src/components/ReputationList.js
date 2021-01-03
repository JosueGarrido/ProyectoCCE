import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button, Avatar, Rate } from 'antd';
import { useProductsList } from '../data/useProductsList';
import { useUserList } from '../data/useUserList';
import ShowError from './ShowError';
import {LoadingOutlined, LogoutOutlined} from "@ant-design/icons";
import {useAuth} from "../providers/Auth";

const { Text, Title } = Typography;
const {Meta} = Card;

const ReputationList = ( props ) => {

    const {currentUser} = useAuth();

        const { products, isLoading, isError, mutate } = useProductsList(currentUser && currentUser.id);
        const { users } = useUserList();


    //console.log('productos', products);
    const commentsconcat = [];
    const comments = [];



    if (products !== undefined) {
        for (var i=0; i< (products.length); i++ ){
            commentsconcat.push(products[i].comment);
        }
    }

    for (var n = 0; n < commentsconcat.length; n++ ){
        Array.prototype.push.apply(comments, commentsconcat[n]);
    }



    if (users !== undefined) {
        console.log('usuarios', users);
    }

    console.log('comentarios', comments);



        // const [ articles, setArticles ] = useState( props.articles );

        // useEffect( () => {
        //   console.log( 'props.articles', props.articles );
        //   setArticles( props.articles );
        // }, [ props.articles ] );


        if( isLoading ) {
            return <Row justify='center' gutter={ 30 }>
                {
                    [ ...new Array( 9 ) ].map( ( _, i ) =>
                        <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                            <div style={ { textAlign: 'center' } }>
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
                        comments.map( ( reputations, i ) => (
                            <Col xs={ 24 } sm={ 18 } md={ 24 } style={ { marginBottom: 20 } } key={ i }>
                                { reputations.comment
                                    ? <Card>
                                        <Row>
                                            <Col span={14} >
                                        {
                                            users === undefined
                                                ? <Text>No cargan los datos</Text>
                                                :
                                                <Meta
                                                      avatar={<Avatar
                                                        size={100}
                                                        alt={ users[reputations.user_id-1].name }
                                                        src={ `http://localhost:8000/storage/${ users[reputations.user_id-1].profile_picture }` }
                                                      />}


                                                    title={`Nombre del Comprador: ${users[reputations.user_id-1].name} ${users[reputations.user_id-1].last_name}`}
                                                    description={`Comentario: ${reputations.comment}`}
                                                />
                                        }
                                            </Col>
                                            <Col span={8} align='end'>

                                        <Text type='secondary'><Text strong>Valoración: </Text>
                                            <Rate disabled defaultValue={ reputations.score } />

                                        </Text>
                                            </Col>
                                        </Row>

                                    </Card>
                                    : <div style={ { textAlign: 'center' } }>
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
