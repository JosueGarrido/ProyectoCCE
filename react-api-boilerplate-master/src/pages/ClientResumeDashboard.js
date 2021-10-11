import React from 'react';
import ClientMenuDashboard from "../components/ClientMenuDashboard";
import {Divider, Row, Col, Layout, Typography, Menu,} from 'antd';
import {LoadingOutlined, LogoutOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";
import letraComprar from "../images/ImgPages/comprar-letras.png";
import "../styles/clientResumeDash.css"
import logoVertical from "../images/logoVertical.png";
const Header = Layout.Header;
const { Title, Link } = Typography;
const {  Content, Sider } = Layout;


const ClientResumeDashboard = () => {

    const {currentUser} = useAuth();


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

                                            <ul style={{textAlign: "center"}} >
                                                <li><a href={Routes.CATEGORY1.replace( ':id', 1 )}>Categorias</a></li>
                                                <li><a href={Routes.ARTIST.replace( ':id', 1 )}>Artistas</a></li>
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
                <ClientMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Col>
                                <Title style={{marginTop: 15, textAlign: 'center'}}>Bienvenido a tu cuenta {currentUser && currentUser.name}</Title>

                                <img alt={ currentUser && currentUser.name }
                                     class="image-center"
                                     height={200}
                                     width={200}
                                     src={ `http://localhost:8000/storage/${ currentUser && currentUser.profile_picture }` } />

                                <Title style={{marginTop: 15, textAlign: 'center'}} type="secondary" level={3}>RESUMEN</Title>
                                <Row>
                                    <Col span={ 8 }>
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Responde a tus compradores</Title>
                                        <Link href={ Routes.CLIENT_QUESTIONS_DASHBOARD } >
                                            Ver Preguntas
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Ventas</Title>
                                        <Link href={ Routes.CLIENT_BUY_DASHBOARD } >
                                            Ver ventas
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Reputación</Title>
                                        <Link href={ Routes.CLIENT_REPUTATION_DASHBOARD } >
                                            Ver más métricas
                                        </Link>
                                    </Col>

                                </Row>
                            </Col>
                        </div>
                    </Content>
                </Col>
            </Row>

        </>
    );
};

export default ClientResumeDashboard;

