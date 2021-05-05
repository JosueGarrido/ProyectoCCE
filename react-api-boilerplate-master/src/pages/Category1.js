import React, {useState} from 'react';
import '../styles/InfoPages.css';
import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Layout} from 'antd';
import {FacebookOutlined, InstagramFilled, TwitterOutlined, UserAddOutlined,ForkOutlined,WhatsAppOutlined} from "@ant-design/icons";
import Routes from "../constants/routes";
import {useCat1Products} from "../data/useCat1Products";
import Category1Products from "../components/Category1Products";
<<<<<<< HEAD
import CategoryFilter from "../components/CategoryFilter";
import letraComprar from "../images/ImgPages/comprar-letras.png";
import logoVertical from "../images/logoVertical.png";
import {useCategories} from "../data/useCategories";
=======
import Category1Filter from "../components/Category1Filter";

>>>>>>> d3070b7f1d344fcb4547e65a36febc662496b33d
const { Text, Title } = Typography;
const {Meta} = Card;
const {  Content } = Layout;
const Header = Layout.Header;


const Category1 = (props) => {
    let { id } = useParams();
    const category1 = useCat1Products( id );
    const { categories, isLoading, isError } = useCategories();
    console.log('category1', category1.cat1);

    return (
        <>
            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <h1 className="title2">Artes Plásticas</h1>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down"></i></a>

                                            <ul style={{textAlign:"center"}}>
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
            <Row>
                <Col span={ 6 }>
                <Category1Filter/>
                </Col>

                <Col span={ 18 } >

                    <Content style={{ margin: '2px 18px 0' }}>
                        <div className="site-layout-background" style={{ padding: 48, minHeight: 360 }}>

                            <Title style={ { marginTop:15, textAlign: 'center' } }>Productos</Title>
                            <div style={{marginRight:50}}>
                                <Category1Products/>
                            </div>


                        </div>
                    </Content>
                </Col>


            </Row>
        </>
    );

};

export default ( Category1 );
