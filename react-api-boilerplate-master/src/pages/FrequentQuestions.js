import React from 'react';
import '../styles/InfoPages.css';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Collapse } from 'antd';
import {CaretRightOutlined } from '@ant-design/icons';
import Routes from "../constants/routes";
import HowBuy from '../images/ImgPages/comprar-imagen.png';
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from '../images/logoVertical.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;
const {Panel} =Collapse;
const FrequentQuestions = props => {
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
                                                <li><a href={Routes.LOGIN_CLIENT}>Comprar</a></li>
                                                <li><a href={Routes.LOGIN}>Vender</a></li>
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
            <Content className="margin">
                <img src={HowBuy} className="imagesPageHB"/>

                <div className="imgPage">
                    <Row >
                        <Col span={3}>
                        </Col>

                        <Col span={18}><br/><br/><br/><br/>
                            <h1 className="title">
                                Registro
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Cómo me registro en la Tienda?</b>} key="1">
                                    <p>Debes ingresar al portal www………….., ir a la sección de registro seleccionar la etiqueta comprador/vendedor y completar el formulario.  </p>
                                </Panel>
                                <Panel header={<b>¿Qué debo hacer si olvidé mi contraseña?</b>} key="2">
                                    <p>Debes ingresar a OLVIDÉ MI CONTRASEÑA, llenar los datos que se solicita y enviaremos a tu correo electrónico el link para recuperar la contraseña.</p>
                                </Panel>
                                <Panel header={<b >¿Son confidenciales mis datos que comparto en la tienda?</b>} key="3">
                                    <p >Sí, los datos que registres en la Tienda son confidenciales.  La Casa de la Cultura Ecuatoriana es la única encargada del manejo y almacenamiento de los datos.</p>
                                </Panel>
                                <Panel header={<b>¿Puedo registrarme como organización, colectivo o comunidad?</b>} key="4">
                                    <p>Sí, porque la tienda está dirigida a personas naturales y jurídicas en el ámbito de la cultura y el arte.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Compra
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Qué debo hacer para comprar en la Tienda? </b>} key="1">
                                    <p>Debes generar una cuenta personal, registrarte llenando los campos solicitados y aceptar.  El producto  artístico y artesanal que desees comprar lo puedes encontrar a través del buscador o por medio de las categorías.</p>
                                </Panel>
                                <Panel header={<b >¿Seguridad en la compra/venta en la Tienda?</b>} key="2">
                                    <p>Los datos de compradores y vendedores se verificarán una vez que se concrete la compra, cuya validación la realizará también la comunidad.</p>
                                </Panel>
                                <Panel header={<b>¿Por qué comprar en la Tienda?</b>} key="3">
                                    <p>Los productos que se venden son elaborados por los propios creadores, artistas y artesanos.  La venta es directa entre el productor y el consumidor, para fomentar y dinamizar la economía de la cultura.</p>
                                </Panel>
                                <Panel header={<b>¿Qué productos puedo encontrar en la Tienda?</b>} key="4">
                                    <p>Productos culturales en diversas manifestaciones: artes plásticas, artes literarias, artes musicales, artes escénicas, artes audiovisuales y artesanía.</p>
                                </Panel>
                                <Panel header={<b>¿Recibiré el mismo producto que miro en la fotografía de la Tienda?</b>} key="5">
                                    <p >Sí, excepto en aquellos productos elaborados por medio de procesos artesanales en los que podría haber mínimas diferencias de acabado.</p>
                                </Panel>
                                <Panel header={<b>¿Cuál es el beneficio por estar como vendedor en la Tienda?</b>} key="6">
                                    <p>Es una oportunidad para exhibir el producto de manera gratuita en la Tienda de la institución cultural más importante del país.</p>
                                </Panel>
                                <Panel header={<b>¿La  CCE realiza la difusión de los productos?</b>} key="7">
                                    <p>Sí, al ser la Tienda un servicio cultural de la Institución realizará la difusión a través de sus redes sociales y multiplicará este servicio en cada uno de los núcleos provinciales.</p>
                                </Panel>

                            </Collapse><br/>

                            <h1 className="title">
                                Pago
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Cómo puedo realizar el pago de mis compras?</b>} key="1">
                                    <p>El pago lo debes realizar directamente con el vendedor, tomando en cuenta esta recomendación:

                                        Verifica que el titular de la cuenta bancaria en la que vayas a realizar la transferencia coincida con los datos de contacto del vendedor y conserva el comprobante de pago.
                                    </p>
                                </Panel>
                                <Panel header={<b>¿Cómo solicito una factura?</b>} key="2">
                                    <p>Tienes que comunicarte con el vendedor y solicitar la factura. Pregunta antes de comprar.</p>
                                </Panel>
                                <Panel header={<b>¿Puedo financiar mi compra?</b>} key="3">
                                    <p>El pago o formas de pago lo tienes que consultar y acordar directamente con el vendedor.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Envío
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Tiene algún costo el envío?</b>} key="1">
                                    <p>El envío lo debes coordinar directamente con el vendedor.</p>
                                </Panel>
                                <Panel header={<b>¿Cómo recibo o retiro mis productos?</b>} key="2">
                                    <p>Con el vendedor te pondrás de acuerdo en la forma que más te convenga, si deseas que te  envíe y cuáles son los costos, o deseas retirar directamente el producto. Te recomendamos tomar las respectivas medidas de seguridad.</p>
                                </Panel>
                                <Panel header={<b>¿Cuánto tardará mi compra en llegar?</b>} key="3">
                                    <p>Los plazos de entrega dependen del destino geográfico al que se dirijan los envíos, para lo cual debes coordinar con el vendedor.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Garantía
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Los productos tienen garantía?</b>} key="1">
                                    <p>Sí,  todos los productos que se venden en la Tienda son elaborados directamente por los creadores, artistas y artesanos del país, por lo cual se garantiza su autenticidad.</p>
                                </Panel>
                                <Panel header={<b>¿Con quién debo contactar en caso de que el producto me llegue en mal estado? </b>} key="2">
                                    <p>En este caso debes contactar directamente con el vendedor ya que si el producto te llegó defectuoso, te lo cambiará por uno nuevo o en su defecto será restaurada, sin que tengas que pagar ningún costo adicional por este trabajo ni  por el envío.</p>
                                </Panel>
                                <Panel header={<b>¿Cómo saber si una obra es auténtica?</b>} key="3">
                                    <p>El vendedor te entregará un certificado de autenticidad de obras únicas (no seriales) que demostrará que la obra es genuina y original. </p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Cambios y devoluciones
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>¿Puedo cambiar mis productos?</b>} key="1">
                                    <p>Lo debes consultar y acordar con el vendedor antes de concretar la compra.</p>
                                </Panel>
                                <Panel header={<b>¿En qué tiempo puedo realizar el proceso de cambio del producto?</b>} key="2">
                                    <p>En un plazo de 48 horas</p>
                                </Panel>
                            </Collapse><br/><br/><br/><br/>
                        </Col>

                        <Col span={3}>
                        </Col>
                    </Row>


                </div>
            </Content>


        </>
    );

};

export default FrequentQuestions;
