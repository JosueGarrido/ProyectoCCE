import React from 'react';
import { Menu, Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';

const { Title } = Typography;
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const ArtistDashboard = () => (
    <>
        <Row>
            <Col>
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
                <Menu.Item key="Resumen">Resumen</Menu.Item>
                <Menu.Item key="Publicaciones">Publicaciones</Menu.Item>
                <Menu.Item key="Preguntas">Preguntas</Menu.Item>
                <Menu.Item key="Ventas">Ventas</Menu.Item>
                <Menu.Item key="Métricas">Métricas</Menu.Item>
                <Menu.Item key="Reputación">Reputación</Menu.Item>
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
            </Col>


            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Title style={ { marginTop:15, textAlign: 'center' } }>Bienvenido a tu cuenta</Title>
                        content
                        content123

                    </div>
                </Content>
            </Col>

        </Row>

    </>
);

export default ArtistDashboard;

