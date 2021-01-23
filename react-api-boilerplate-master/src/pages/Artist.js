import React from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import { useParams } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import NewComment from "../components/NewComment";

const { Text, Title } = Typography;
const {Meta} = Card;

const Artist = () => {
    let { id } = useParams();
    const user = useUser( id );
    const products = useProductsList( id );

    const { users } = useUserList();

    console.log('productos', products);
    console.log('user', user);
    const commentsconcat = [];
    const comments = [];
    const sales =[];
    let totalsales =0;
    let totalproducts;




    if (products.products !== undefined) {
        for (let i=0; i< (products.products.length); i++ ){
            commentsconcat.push(products.products[i].comment);
            sales.push(products.products[i].sales);
        }
        totalproducts = products.products.length;
    }

    console.log('ventas', sales);

    console.log('total products', totalproducts);

    for (let n = 0; n < commentsconcat.length; n++ ){
        Array.prototype.push.apply(comments, commentsconcat[n]);
    }
    for (let n = 0; n < sales.length; n++ ){
        totalsales +=  sales[n].length
    }

    console.log('ventas totales', totalsales);
    console.log('comentarios', comments);
    return (
        <>
            <img
                height={550}
                width={1450}
                src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
            />


            {
                user.isLoading
                    ? <div>Cargando...</div>
                    : user.isError
                    ? <ShowError error={ user.isError } />
                    : <>
                        <h1 >
                            Usuario: { user.user.name }
                        </h1>
                        <p>{ user.last_name }</p>
                        <br/>
                        <Col span={24}>
                            Información de usuario
                        </Col>
                        <br/>
                        <Col span={24}>
                            Promociones
                        </Col>
                        <br/>
                        <Col span={24}>
                            Productos
                        </Col>
                        <br/>
                    </>
            }



            <Row gutter={ 30 }>
                <Col align='center' md={6}>
                <Title level={3}>Reputación: </Title>
                </Col>
                <Col md={18}>
                    <Col md={22}>
                    <NewComment/>
                    </Col>
                {
                    comments.map( ( reputations, i ) => (
                        <Col xs={ 24 } sm={ 18 } md={ 22 } style={ { marginBottom: 20 } } key={ i }>
                            { reputations.comment
                                ? <Card hoverable
                                        style={{borderRadius: 10}}>
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
                </Col>

            </Row>


        </>
    );

};

export default ( Artist );
