import React from 'react';
import { Menu, Divider, Row, Col, Layout, Typography } from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const ArtistMenuDashboard = () => (
    <>


                <Menu

                    style={{ marginTop:50, width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="ventas"
                        title={
                            <span>
              <ShoppingOutlined />
              <span>Ventas</span>
            </span>
                        }
                    >

                        <Menu.Item key="Resumen" >Resumen
                            <Link to={ Routes.ARTIST_DASHBOARD } className='artist-dashboard'/>
                        </Menu.Item>
                        <Menu.Item key="Publicaciones" >Publicaciones
                            <Link to={ Routes.ARTIST_PUBLICATIONS_DASHBOARD } className='artist-publications-dashboard'/>
                        </Menu.Item>
                        <Menu.Item key="Preguntas">Preguntas
                            <Link to={ Routes.ARTIST_QUESTIONS_DASHBOARD } className='artist-questions-dashboard'/>
                        </Menu.Item>
                        <Menu.Item key="Ventas">Ventas
                            <Link to={ Routes.ARTIST_SELL_DASHBOARD } className='artist-sell-dashboard'/>
                        </Menu.Item>
                        <Menu.Item key="Métricas">Métricas
                            <Link to={ Routes.ARTIST_METRICS_DASHBOARD } className='artist-metrics-dashboard'/>
                        </Menu.Item>
                        <Menu.Item key="Reputación">Reputación
                            <Link to={ Routes.ARTIST_REPUTATION_DASHBOARD } className='artist-reputation-dashboard'/>
                        </Menu.Item>
                    </SubMenu>
                    <Divider/>
                    <SubMenu
                        key="configuracion"
                        title={
                            <span>
              <SettingOutlined />
              <span>Configuración</span>
            </span>
                        }
                    >
                        <Menu.Item key="Mis Datos">Mis Datos</Menu.Item>
                        <Menu.Item key="Seguridad">Seguridad</Menu.Item>
                        <Menu.Item key="Privacidad">Privacidad</Menu.Item>
                        <Menu.Item key="E-mails">E-mails</Menu.Item>
                        <Menu.Item key="Alertas de Búsqueda">Alertas de Búsqueda</Menu.Item>
                    </SubMenu>
                </Menu>



    </>
);

export default ArtistMenuDashboard;


