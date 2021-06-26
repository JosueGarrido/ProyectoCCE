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
                                        <li><a href="#"> <i className="down"></i></a>

                                            <ul style={{textAlign: "center"}}>
                                                <li><a href="#">Categorias</a></li>
                                                <li><a href="#">Artistas</a></li>
                                                <li><a href="#">Comprar</a></li>
                                                <li><a href="#">Vender</a></li>
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
            <Col span={3} align={'right'}>
                <img className={"borde-imagen"}
                     height={200}
                     width={200}
                     src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                />
            </Col>

            <br/><br/>

            {
                user.isLoading
                    ? <div>Cargando...</div>
                    : user.isError
                    ? <ShowError error={user.isError}/>
                    :
                    <Col span={15} align='center' className={"texto"}>
                        <p>Datos del vendedor:</p>

                        <p>Nombre: { user.user.name } </p>
                        <p>Apellido: {user.user.last_name} </p>
                        <p>Teléfono: {user.user.phone} </p>
                        <img src={user.user.profile_picture}/>

                        <Button className={"boton-comprar"}
                                href={Routes.HOME}>ACEPTAR</Button>
                    </Col>
            }





       </>
    );



};

export default Purchase;