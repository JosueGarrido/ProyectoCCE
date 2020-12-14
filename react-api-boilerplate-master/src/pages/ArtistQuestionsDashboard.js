import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import {Divider, Row, Col, Layout, Typography, Menu, Skeleton, Card, Button} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

const { Title } = Typography;
const { SubMenu } = Menu;
const {  Content, Sider } = Layout;


const ArtistQuestionsDashboard = () => (
    <>
        <Row>
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Title style={ { marginTop:15, textAlign: 'center' } }>Preguntas</Title>

                        <Row justify='left' gutter={ 10}>

                            <Col  xs={ 10} sm={18} md={ 10} style={ { marginBottom: 30 } }>
                        <Menu
                            style={{ marginTop:15, width: 240 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >

                            <SubMenu
                                key="Filtros y Ordenar"
                                title={
                                    <span>
              <span>Filtros y Ordenar</span>
            </span>
                                }
                            >

                                <Menu.Item key="Recientes" >Recientes
                                    <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                </Menu.Item>
                                <Menu.Item key="Por número de publicación" >Por número de publicación
                                    <Link to={ Routes.QUESTIONS_PUBLICATIONS_DASHBOARD } className='questions-publications-dashboard'/>
                                </Menu.Item>
                            </SubMenu>

                        </Menu>


                            </Col>
                            <Col  xs={10} sm={18} md={10} style={ { marginBottom: 30 } } >
                                <p>N° de Publicaciones: </p>
                            </Col>

                        </Row>



                        <Row justify='left' gutter={ 5 } style={ { marginBottom:50 }} >

                                <Col xs={ 5} sm={ 5} md={ 5} style={ { marginBottom: 20 } }>
                                        {
                                            <img
                                                src={"https://www.nicepng.com/png/detail/300-3001770_logos-redes-sociales-individuales-muecopalo-01-logo-png.png"} width={150} height={100}/> }
                                    </Col>

                            <Col xs={ 5 } sm={ 5} md={ 5} style={ { marginBottom: 20 } } >

                                <p >N° de Publicación:</p>
                                <p >Título de la Obra: </p>
                                <p >Visitas:</p>
                                <p >Fecha de Publicación:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5 } md={ 5} style={ { marginBottom: 20 } } >

                                <p >Precio:</p>
                                <p >En Stock:</p>
                                <p >Vendidos: </p>
                                <p >Disponibles:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5} md={ 5 } style={ { marginBottom: 20 } } >

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 1:"
                                        title={
                                            <span>
              <span>Pregunta 1:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 2:"
                                        title={
                                            <span>
              <span>Pregunta 2:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                            </Col>
                        </Row>

                        <Row justify='left' gutter={ 5 } style={ { marginBottom:50 }} >

                            <Col xs={ 5} sm={ 5} md={ 5} style={ { marginBottom: 20 } }>
                                {
                                    <img
                                        src={"https://www.nicepng.com/png/detail/300-3001770_logos-redes-sociales-individuales-muecopalo-01-logo-png.png"} width={150} height={100}/> }
                            </Col>

                            <Col xs={ 5 } sm={ 5} md={ 5} style={ { marginBottom: 20 } } >

                                <p >N° de Publicación:</p>
                                <p >Título de la Obra: </p>
                                <p >Visitas:</p>
                                <p >Fecha de Publicación:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5 } md={ 5} style={ { marginBottom: 20 } } >

                                <p >Precio:</p>
                                <p >En Stock:</p>
                                <p >Vendidos: </p>
                                <p >Disponibles:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5} md={ 5 } style={ { marginBottom: 20 } } >

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 1:"
                                        title={
                                            <span>
              <span>Pregunta 1:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 2:"
                                        title={
                                            <span>
              <span>Pregunta 2:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                            </Col>
                        </Row>

                        <Row justify='left' gutter={ 5 } style={ { marginBottom:50 }} >

                            <Col xs={ 5} sm={ 5} md={ 5} style={ { marginBottom: 20 } }>
                                {
                                    <img
                                        src={"https://www.nicepng.com/png/detail/300-3001770_logos-redes-sociales-individuales-muecopalo-01-logo-png.png"} width={150} height={100}/> }
                            </Col>

                            <Col xs={ 5 } sm={ 5} md={ 5} style={ { marginBottom: 20 } } >

                                <p >N° de Publicación:</p>
                                <p >Título de la Obra: </p>
                                <p >Visitas:</p>
                                <p >Fecha de Publicación:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5 } md={ 5} style={ { marginBottom: 20 } } >

                                <p >Precio:</p>
                                <p >En Stock:</p>
                                <p >Vendidos: </p>
                                <p >Disponibles:</p>

                            </Col>
                            <Col xs={ 5 } sm={ 5} md={ 5 } style={ { marginBottom: 20 } } >

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 1:"
                                        title={
                                            <span>
              <span>Pregunta 1:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                                <Menu
                                    style={{ marginTop:15, width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >

                                    <SubMenu
                                        key="Pregunta 2:"
                                        title={
                                            <span>
              <span>Pregunta 2:</span>
            </span>
                                        }
                                    >

                                        <Menu.Item key="Recientes" >Recientes
                                            <Link to={ Routes.QUESTIONS_DASHBOARD } className='questions-dashboard'/>
                                        </Menu.Item>

                                    </SubMenu>

                                </Menu>

                            </Col>
                        </Row>

                        <Row justify='center' gutter={ 5 } style={ { marginBottom:50 }} >
                            { /*aqui va lo de ver mas */}

                        </Row>
                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ArtistQuestionsDashboard;