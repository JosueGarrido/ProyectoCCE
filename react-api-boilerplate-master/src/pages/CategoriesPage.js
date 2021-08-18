import React from 'react';
import '../styles/InfoPages.css'
import {Divider, Row, Col, Layout, Typography, Card, Avatar, Rate, Skeleton} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";
import Routes from "../constants/routes";
import CategoryList from '../components/CategoryList';
import {Link} from "react-router-dom";
import logoVertical from "../images/logoVertical.png";
import Category1Products from "../components/Category1Products";
import Category2Products from "../components/Category2Products";
const { Text, Title } = Typography;
const Header = Layout.Header;
const {  Content } = Layout;
const CategoriesPage = () => {

    const { categories, isLoading, isError } = useCategories();
    const { categories2 } = useCategories2();

    console.log('categorias', categories)
    console.log('categorias2', categories2)

    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <h1 className="title2">Categorias</h1>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down-shadow-menu"></i></a>

                                            <ul style={{textAlign:"center"}}>
                                                <li><a href={Routes.CATEGORIESPAGE }>Categorias</a></li>
                                                <li><a href={Routes.ARTISTS }>Artistas</a></li>
                                                <li><a href="#">Comprar</a></li>
                                                <li><a href="#">Vender</a></li>
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

            <CategoryList/>


            </>
    );
};

export default CategoriesPage;
