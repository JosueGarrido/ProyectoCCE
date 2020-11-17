import React from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import { Button, Col, Form, Input, message, Row, Typography } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined, EditOutlined, FileTextOutlined } from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import withoutAuth from '../hocs/withoutAuth';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../providers/Auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';

const { Title } = Typography;

const Register = () => {
  // const auth = useAuth();
  // const router = useRouter();

  // React.useEffect( () => {
  //   const checkAuthentication = () => {
  //     console.log( 'auth.token', auth );
  //     if( auth.token ) {
  //       router.push( Routes.HOME );
  //     }
  //   };
  //
  //   checkAuthentication();
  // }, [ auth ] );

  const { setAuthenticated, setCurrentUser } = useAuth();

  const onFinish = async( userData ) => {
    console.log( 'Received values of form: ', userData );
    const { name, last_name, email, email_verified_at, password, password_confirmation, identity,
        birthday, phone, location, culture, disability, stage_name, field_cultural, main_activity,
        secondary_activity, education_level, career_name, studies_institution,social_networks } = userData;

    try {
      const user = await API.post( '/register', {
        name,
        last_name,
        email,
        email_verified_at,
        password,
        password_confirmation,
        identity,
        birthday,
        phone,
        location,
        culture,
        disability,
        stage_name,
        field_cultural,
        main_activity,
        secondary_activity,
        education_level,
        career_name,
        studies_institution,
        social_networks
      } );

      console.log( 'User', user );

      localStorage.setItem( 'login', JSON.stringify( true ) ); // this is to sync auth state in local storage
      Cookies.set( 'token', user.data.token, { expires: 1 } );
      API.headers[ 'Authorization' ] = 'Bearer ' + user.data.token; // start sending authorization header
      delete user.data.token;
      setCurrentUser( user.data );
      setAuthenticated( true );
    } catch( e ) {
      console.error( 'No se pudo registrar el usuario', e );
      setAuthenticated( false );
      const errorList = e.error && <ErrorList errors={ e.error } />;
      message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
    }
  };

  return (
    <>
      <Title style={ { textAlign: 'center' } }>Registro</Title>

      <Row justify='center' className='login'>
        <Col span={ 8 }>
          <Form name='register-form'
                className='register-form'
                initialValues={ {
                  email: '',
                  password: ''
                } }
                onFinish={ onFinish }
          >
            <Form.Item name='name'
                       rules={ [
                         {
                           required: true,
                           message: 'Ingresa tu nombre'
                         }
                       ] }
                       hasFeedback
            >
              <Input prefix={ <UserOutlined /> } placeholder='Nombre' />

            </Form.Item>

            <Form.Item name='last_name'
                        rules={ [
                            {
                                required: true,
                                message: 'Ingresa tu apellido'
                            }
                        ] }
                        hasFeedback
          >
              <Input prefix={ <UserOutlined /> } placeholder='Apellido' />
            </Form.Item>

            <Form.Item name='email'
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
                       hasFeedback
            >
              <Input prefix={ <MailOutlined /> } placeholder='Email' />
            </Form.Item>

              <Form.Item name='email_verified_at'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu nombre de usuario'
                             },
                             {
                                 type: 'email',
                                 message: 'Ingresa un correo válido'
                             },
                             ( { getFieldValue } ) => ({
                                 validator( rule, value ) {
                                     if( !value || getFieldValue( 'email' ) === value ) {
                                         return Promise.resolve();
                                     }
                                     return Promise.reject( 'Los correos no coinciden' );
                                 },
                             }),
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <MailOutlined /> } placeholder='Verificar Email' />
              </Form.Item>

            <Form.Item name='password'
                       rules={ [
                         {
                           required: true,
                           message: 'Ingresa tu clave'
                         }
                       ] }
                       hasFeedback
            >
              <Input.Password prefix={ <LockOutlined /> }
                              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                              placeholder='Clave' />
            </Form.Item>

            <Form.Item name='password_confirmation'
                       dependencies={ [ 'password' ] }
                       hasFeedback
                       rules={ [
                         {
                           required: true,
                           message: 'Confirma tu clave',
                         },
                         ( { getFieldValue } ) => ({
                           validator( rule, value ) {
                             if( !value || getFieldValue( 'password' ) === value ) {
                               return Promise.resolve();
                             }
                             return Promise.reject( 'Las claves no coinciden' );
                           },
                         }),
                       ] }
            >
              <Input.Password prefix={ <LockOutlined /> }
                              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                              placeholder='Confirma tu clave' />
            </Form.Item>

            <Form.Item name='identity'
                       rules={ [
                         {
                           required: true,
                           message: 'Ingresa la identidad con la cual te consideras'
                         }
                       ] }
                       hasFeedback
            >
              <Input prefix={ <EditOutlined /> } placeholder='Editorial' />
            </Form.Item>

            <Form.Item name='birthday'
                       rules={ [
                         {
                           required: true,
                           message: 'Ingresa tu fecha de nacimiento.'
                         }
                       ] }
                       hasFeedback
            >
              <Input.TextArea prefix={ <FileTextOutlined /> }
                              placeholder='yyyy-mm-dd'
                               />
            </Form.Item>

              <Form.Item name='phone'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu número de telefono'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Número de telefono' />

              </Form.Item>

              <Form.Item name='location'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu localidad'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Localidad' />

              </Form.Item>

              <Form.Item name='culture'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu cultura'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Culture' />

              </Form.Item>
              <Form.Item name='disability'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu disability'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='disability' />

              </Form.Item>

              <Form.Item name='stage_name'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu stage name'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Stage name' />

              </Form.Item>

              <Form.Item name='field_cultural'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu field cultural'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='field_cultural' />

              </Form.Item>

              <Form.Item name='main_activity'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu Activida principal'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Main_activity' />

              </Form.Item>

              <Form.Item name='secondary_activity'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu actividad secudanria'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='actividad secudaria' />

              </Form.Item>

              <Form.Item name='education_level'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu nivel de educación'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Nivel de educación' />

              </Form.Item>

              <Form.Item name='career_name'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu nombre de carrera'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='Nombre de carrera' />

              </Form.Item>

              <Form.Item name='studies_institution'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu intitucion'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='institucion' />

              </Form.Item>

              <Form.Item name='social_networks'
                         rules={ [
                             {
                                 required: true,
                                 message: 'Ingresa tu red social'
                             }
                         ] }
                         hasFeedback
              >
                  <Input prefix={ <UserOutlined /> } placeholder='red social' />

              </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Registrarme
              </Button>
              <div><Link to={ Routes.LOGIN }>Ya tengo una cuenta</Link></div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withoutAuth( Register );
