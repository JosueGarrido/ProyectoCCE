import React, {useState} from 'react';
import '../styles/InfoPages.css';
import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Layout} from 'antd';
import {FacebookOutlined, InstagramFilled, TwitterOutlined, UserAddOutlined,ForkOutlined,WhatsAppOutlined} from "@ant-design/icons";
import Routes from "../constants/routes";
import {useCat2Products} from "../data/useCat2Products";
import Category2Products from "../components/Category2Products";
import CategoryFilter from "../components/CategoryFilter";
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from "../images/logoVertical.png";
const Header = Layout.Header;
const { Text, Title } = Typography;
const {Meta} = Card;
const {  Content, Sider } = Layout;



const Category = (props) => {
    let { id } = useParams();
    const category2 = useCat2Products( id );
    const [Cat3,setCat3]= useState('');
    const [filter,setFilter]= useState(false);


    console.log('category2', category2.cat2);

    const handleCat3 = (cat3) => {
        console.log('valorcat3', cat3);
        setCat3(cat3);
        if (cat3 !== ''){
            setFilter(true);
        }else {
            setFilter(false);
        }

    }

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
                                    <img className='logoPages' src={letraComprar}/>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down-shadow-menu"></i></a>

                                            <ul style={{textAlign:"center",position:"absolute" }}>
                                                <li><a href="#">Categorias</a></li>
                                                <li><a href="#">Artistas</a></li>
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
            <Row>
                <CategoryFilter handleCat3={handleCat3}/>

                <Col span={ 18 } style={{position: "relative" }}>

                    <Content style={{ margin: '0 36px 0' }} className="capa1">
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            <Title style={ { marginTop:15, textAlign: 'center' } }>Productos</Title>

                            <Category2Products cat3={Cat3} filter={filter}/>

                        </div>
                    </Content>
                </Col>


            </Row>
        </>
    );

};

export default ( Category );
