import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
const { Title } = Typography;
const {  Content, Sider } = Layout;
const HowToBuy = () => (
    <>
        <Row>

            <Content style={{ margin: '2px 18px 0' }}>

        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Title style={ { marginTop:50, textAlign: 'left' } }>¿Cómo Comprar?</Title>
            <Row justify='left' gutter={ 5 } style={ { marginBottom:5 }} >
                <Col xs={ 5 } sm={ 5} md={ 15} style={ { marginBottom: 5 } } >
            <p>1.- Busque la obra de su agrado. Puede encontrarla rápidamente realizando una búsqueda avanzada por medio de los filtros del menú.</p>
            <p>2.- RECUERDE que la tienda online de la CCE es un intermediario entre usted y el artista, por lo tanto no se responsabiliza por el servicio de envío elegido por Ud. y por lo tanto tampoco es responsable de que el producto llegue a destino o no, o que llegue un producto distinto, o en condiciones distintas a las acordadas con el Artista. </p>
            <p>3.- Revise los detalles del producto para contactar con el artista</p>
            <p>4.- Ud coordinará con el dueño de la obra el medio de entrega y la forma de pago de la misma.</p>
</Col>
                <Row justify='center' gutter={ 5 } style={ { marginBottom:50 }} >

                <Col xs={5} sm={ 5} md={ 5} style={ { marginBottom: 20 } }>
                    {
                        <img
                            src={"https://www.nicepng.com/png/detail/300-3001770_logos-redes-sociales-individuales-muecopalo-01-logo-png.png"} width={250} height={370}/> }
                </Col>
                    </Row>
</Row>

        </div>
            </Content>


        </Row>
    </>
);

export default HowToBuy;