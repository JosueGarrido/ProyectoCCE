import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import GraphicsSales from '../components/GraphicsSales';
import { Line } from '@ant-design/charts';
import Header2 from '../components/Header2';
import Routes from "../constants/routes";
import logoVertical from "../images/logoVertical.png";
const { Title } = Typography;
const {  Content, Sider } = Layout;
const Header = Layout.Header;


const ArtistMetricsDashboard = () => (
    <>
        <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
            <Col span={24}>
                <Header className='headerPage'>
                    <Row type='flex' justify='space-between' align='bottom'>


                        <Col span={7} align='left' className='main-menu'>


                        </Col>
                        <Col span={10} align='center'>
                            <a href={Routes.HOME}>
                                <h1 className="title2">Métricas</h1>
                            </a>
                        </Col>



                        <Col span={1}>

                        </Col>
                        <Col span={3}>
                            <nav>
                                <ul>
                                    <li><a href="#"> <i className="down"></i></a>

                                        <ul style={{textAlign:"center"}}>
                                            <li><a href={Routes.CATEGORIESPAGE }>Categorias</a></li>
                                            <li><a href={Routes.ARTISTS }>Artistas</a></li>
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
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <GraphicsSales />
                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ArtistMetricsDashboard;

