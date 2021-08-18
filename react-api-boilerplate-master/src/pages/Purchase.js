import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image, Layout, Divider} from 'antd';
import API from '../data/index';
import {Tabs, Button} from 'antd';
import ShowError from "../components/ShowError";
import {useParams, Link} from "react-router-dom";
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import {useProductsList} from "../data/useProductsList";
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useReputationList} from "../data/useReputationList";
import Routes from '../constants/routes';
import '../styles/prepurchase.css';
import {useProductSell} from "../data/useProductSell";
import logoVertical from "../images/logoVertical.png";
import PrePurchase from "./PrePurchase";


const {TabPane} = Tabs;
const {Text, Title} = Typography;
const {Meta} = Card;
const Header = Layout.Header;

const Purchase = ( props) => {

    let {id} = useParams();
    const user = useUser( id );
    const { users } = useUserList();

    const product = useProduct(id);


    console.log('user', user);


    return(
        <>
            <Row type='flex' justify='center' className='header-wrapper' style={{position: "relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>

                                </a>
                            </Col>


                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down-shadow-menu"></i></a>

                                            <ul style={{textAlign: "center"}} >
                                                <li><a href={Routes.CATEGORY1.replace( ':id', 1 )}>Categorias</a></li>
                                                <li><a href={Routes.ARTIST.replace( ':id', 1 )}>Artistas</a></li>
                                                <li><a href={Routes.LOGIN_CLIENT}>Comprar</a></li>
                                                <li><a href={Routes.LOGIN}>Vender</a></li>
                                                <li><a href={Routes.LOGOUT}>Salir</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </Col>
                            <Col span={3}>
                                <img src={logoVertical} className='logoPages'/>
                            </Col>


                        </Row>

                    </Header>

                </Col>

            </Row>


            <br/><br/><br/><br/>
<Row>



    < Col span={16} align='center'>

        <Col >

            <h2 className={"subtitulo"} >
             CONTÁCTATE CON TU VENDEDOR
            </h2>
                <br/>

                {
                    user.isLoading
                        ? <div>Cargando...</div>
                        : user.isError
                        ? <ShowError error={user.isError}/>
                        :
                        <Col span={16} align='left'  className={"texto-iz"}>
                            <h4>Datos del vendedor:</h4>

                            <p>Nombre: { user.user.name } {user.user.last_name} </p>
                            <p>E-mail: { user.user.email }</p>
                            <p>Teléfono: {user.user.phone} </p>
                            <br/>
                            <img src={user.user.profile_picture}/>
                            <br/>    <br/>    <br/>

                        </Col>

                }


        </Col>
        <br/>     <br/>       <br/>     <br/>
        <Col span={16} align='right'  >
            <Button className={"boton-comprar"}
                    href={Routes.HOME}>ACEPTAR</Button>
        </Col>
    </Col>


    <Col span={8} align='center'  >
        <br/>
        <h3>CONFIRMASTE LO SIGUIENTE</h3>
        <br/>
        <img className={"borde-imagen"}
             height={450}
             width={425}
             src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
        />
        <br/>     <br/>
        {
            product.isLoading
                ? <div>Cargando...</div>
                : product.isError
                ? <ShowError error={product.isError}/>
                :


                <Col span={15} align='center' className={"texto"}>
                    <p>NOMBRE DEL PRODUCTO: {product.product.name}  </p>
                    <p>STOCK: {product.product.stock}</p>
                    <p>Cantidad</p>
                    <Divider orientation="center"></Divider>

                    <p>TOTAL: ${product.product.price} </p>

                </Col>


        }
    </Col>



</Row>


       </>


    );



};

export default Purchase;