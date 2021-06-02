import React from 'react';
import Routes from '../constants/routes';

import '../styles/loginclient.css'
import {useAuth} from '../providers/Auth';
import {Checkbox, Col, Form, Input, Row, Button, message, Layout} from 'antd';
import {LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons/lib';
import API from '../data';
import withoutAuth from '../hocs/withoutAuth';
import Cookies from 'js-cookie';
import {translateMessage} from '../utils/translateMessage';
import {Link} from 'react-router-dom';
import ErrorList from '../components/ErrorList';
import Header2 from '../components/Header2';
import letraVender from '../images/ImgPages/comprar-letras.png';
import logoVertical from "../images/logoVertical.png";
import HowSale from "../images/home_images/explicacion.png";
import '../styles/loginclient.css';
const Header = Layout.Header;
const {Content, Sider} = Layout;
const a = 0;

const LoginClient = () => {
    const {setAuthenticated, setCurrentUser} = useAuth();

    const onFinish = async (userData) => {

        try {
            const response = await API.post('/login', {
                email: userData.username,
                password: userData.password
            });
            console.log('response login', response);

            localStorage.setItem('login', JSON.stringify(true)); // this is to sync auth state in local storage
            Cookies.set('token', response.data.token, {expires: 1});
            API.headers['Authorization'] = 'Bearer ' + response.data.token; // start sending authorization header
            setCurrentUser(response.data.user);
            setAuthenticated(true);
        } catch (e) {
            console.error('No se pudo iniciar sesión', e.message);
            setAuthenticated(false);
            const errorList = e.error && <ErrorList errors={e.error}/>;
            message.error(<>{translateMessage(e.message)}{errorList}</>);
        }
    };

    let registro;



    return (
        <>

            {

                <Content className="margin">

                    <img src={a} className="imagesPageBG" />

                    <Row type='flex' justify='center' className='login' style={{position:"relative"}}>
                        <Col span={10} align='center'>
                            <a href={Routes.HOME}>
                                <img className='logoPages' src={letraVender}/>
                            </a>
                        </Col>

                        <Col span={ 5} >
                            <Form
                                name='login-form'
                                className='login-form'
                                initialValues={ {
                                    remember: true,
                                    username: '',
                                    password: ''
                                } }
                                onFinish={ onFinish }
                            >
                                <Col span={20}  >
                                    <Form.Item
                                        name='username'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa tu nombre de usuario'
                                            },
                                            {
                                                type: 'email',
                                                message: 'Ingresa un correo válido'
                                            }
                                        ] }
                                    >

                                        <Input prefix={ <UserOutlined className='site-form-item-icon' /> }
                                               placeholder='Email'
                                               autoComplete='email' />


                                    </Form.Item>

                                    <Form.Item
                                        name='password'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'Ingresa tu clave'
                                            }
                                        ] }
                                    >
                                        <Input.Password
                                            prefix={ <LockOutlined className='site-form-item-icon' /> }
                                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            placeholder='Password' autoComplete='password'

                                        />
                                    </Form.Item>
                                </Col>
                                <Form.Item name='remember' valuePropName='checked' noStyle>
                                    <Checkbox>Recordarme</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <Link className='login-form-forgot' to=''>
                                        ¡Olvidé mi clave!
                                    </Link>
                                </Form.Item>

                                <Form.Item>

                                    <Button style={{textAlign:'center'}} type='primary' htmlType='submit' className='login-form-button'>
                                        Ingresar
                                    </Button>
                                    <div>Soy nuevo, <Link to={ Routes.REGISTER_CLIENT }>registrarme</Link></div>
                                </Form.Item>

                                <Col span={8} justify='left'>
                                    col-8
                                </Col>



                            </Form>

                        </Col>

                    </Row>

                    <Col span={ 5} >
                        <Form
                            name='login-form'
                            className='login-form'
                            initialValues={ {
                                remember: true,
                                username: '',
                                password: ''
                            } }
                            onFinish={ onFinish }
                        >
                            <Col span={20}  >
                            <Form.Item
                                name='username'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Ingresa tu nombre de usuario'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Ingresa un correo válido'
                                    }
                                ] }
                            >


                    <br/><br/><br/>



                    <div className={"fondo-paginas"}>
                        <div id="dos" className="carta">
                            <img className={"borde-imagen"}
                                 height={480}
                                 width={400}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </div>
                        <br/> <br/> <br/> <br/> <br/>
                        <Row>
                            <Col span={24} align={'center'}>
                                <strong className={"texto-eres-nuevo"}>¿ERES NUEVO EN WASI WALLPAY?</strong>
                                <br/> <br/> <br/>
                                <p className={"para-comprar"}>Para comprar a través de Wasi Wallpay crea una cuenta personal de
                                    comprador,<br/>
                                    sin costo. Llena los campos solicitados en el regisstro de forma correcta y
                                    verídica,<br/>
                                    luego espera la confirmación enviada a tu correo electrónico.
                                </p>
                                <Form.Item>
                                    <Link className={"boton-login-registro"} to={Routes.REGISTER_CLIENT}>REGISTRARSE </Link>
                                </Form.Item>
                            </Col>

                        </Row>
                        <br/> <br/>

                    </div>
                    <div>
                        <Row>

                            <Col span={14} align={'left'}>
                                <br/> <br/><br/> <br/><br/> <br/>
                                <p className={"tex"}>Considera tu grado de reputación dentro de la plataforma,
                                    serás calificado y comentado por tus compradores en cada
                                    transacción realizada.
                                </p>

                            </Col>
                            <Col span={10}  align={'center'}>
                                <p>IMAGEN</p>

                            </Col>

                        </Row>


                        </Form>

                    </Col>

                </Row>

                <br/><br/><br/>



            <div className={"fondo-paginas"}>
                <div id="dos" className="carta">
                    <img className={"borde-imagen"}
                         height={480}
                         width={400}
                         src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                    />
                </div>
                <br/> <br/> <br/> <br/> <br/>
                <Row>
                    <Col span={24} align={'center'}>
                        <strong className={"texto-eres-nuevo"}>¿ERES NUEVO EN WASI WALLPAY?</strong>
                        <br/> <br/> <br/>
                        <p className={"para-comprar"}>Para comprar a través de Wasi Wallpay crea una cuenta personal de
                            comprador,<br/>
                            sin costo. Llena los campos solicitados en el regisstro de forma correcta y
                            verídica,<br/>
                            luego espera la confirmación enviada a tu correo electrónico.
                        </p>
                        <Form.Item>
                            <Link className={"boton-login-registro"} to={Routes.REGISTER_CLIENT}>REGISTRARSE </Link>
                        </Form.Item>
                    </Col>

                </Row>
                <br/> <br/>

            </div>
            <div>
                <Row>

                    <Col span={14} align={'left'}>

                        <br/> <br/><br/> <br/><br/> <br/>
                    </div>




                </Row>
                <br/> <br/><br/> <br/><br/> <br/>
            </div>




                </Content>
            }

        </>
    );
};

export default withoutAuth(LoginClient);