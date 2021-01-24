import React from 'react';

import ShowError from '../components/ShowError';
import { useParams } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import ProductsList from '../components/ProductsList';
import NewComment from "../components/NewComment";
import moment from "moment";
import {FacebookOutlined, InstagramFilled,TwitterOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;
const {Meta} = Card;

const Artist = () => {
    let { id } = useParams();
    const user = useUser( id );
    const products = useProductsList( id );

    const { users } = useUserList();

    console.log('productos', products);
    console.log('user', user);
    console.log('users', users);

    const commentsconcat = [];
    const comments = [];
    const sales =[];
    let totalsales =0;
    let totalproducts;


    if (products.products !== undefined) {
        for (let i=0; i< (products.products.length); i++ ){
            commentsconcat.push(products.products[i].comment);
            sales.push(products.products[i].sale);
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
                        <br/>
                        <Row >
                            <Col span={4}>

                                {<Avatar
                                    size={100}
                                    alt={ user.user.name }
                                    src={ `http://localhost:8000/storage/${ user.user.profile_picture }` }

                                />}

                            </Col>
                            <Col span={10}>
                                <p>{ user.user.name} { user.user.last_name } </p>
                                <p>{ user.user.email }</p>

                                <p> SEGUIDORES: {totalproducts} </p>
                                <p> VENTAS: {totalsales} </p>
                                <p> PRODUCTOS: {totalproducts} </p>


                                <br/>
                            </Col>

                            <Col align={'center' } span={10}>
                                <p>Compartir</p>
                                <p>PROPIETARIO DE LA TIENDA</p>
                                {<Avatar
                                    size={50}
                                    alt={ user.user.name }
                                    src={ `http://localhost:8000/storage/${ user.user.profile_picture }` }
                                />}
                                <p>{ user.user.name }</p>
                                <p>Desde { moment( user.user.created_at ).format( 'YYYY' ) }-{ user.user.location } </p>
                                <p>Contacto:</p>
                                <Col >
                                    <a href='https://www.facebook.com' target='_blank'>
                                        <FacebookOutlined twoToneColor="red" />
                                    </a>
                                </Col>
                                <Col >
                                    <a href='https://www.instagram.com' target='_blank'>
                                        <InstagramFilled />
                                    </a>

                                </Col>
                                <Col twoToneColor="red">
                                    < a href='https://www.twitter.com' target='_blank' >
                                        <TwitterOutlined  />
                                    </a>
                                </Col>

                            </Col>

                        </Row>

                        <Col span={24}>Promociones</Col>
                        <br/>
                        <Col span={24}>Productos</Col>
                        <ProductsList/>
                        <br/>
                        <p>{ user.last_name }</p>
                        <br/>

                    </>
            }

            <Row gutter={ 30 }>
                <Col align='center' md={6}>
                    <Title level={3}>Reputación: </Title>
                </Col>
                <Col md={18}>
                    <Col md={22}>

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
