import React from 'react';
import { Menu, Divider, Row, Col } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

const ArtistDashboard = () => (
    <>
        <Row>
            <Col>
        <Menu

            style={{ width: 256 }}
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


            <Col span={ 6 } align='end'>
                <h1 className='title'>
                    Página Dashboard
                </h1>
                <h1 className='title'>
                    xddddddd
                </h1>
            </Col>

        </Row>

    </>
);

export default ArtistDashboard;

