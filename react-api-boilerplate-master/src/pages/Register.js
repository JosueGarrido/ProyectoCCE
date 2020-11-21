import React, {useEffect, useState} from 'react';
import Routes from '../constants/routes';
import API from '../data/index';
import { Upload, Switch, Button, Col, Form, Input, message, Row, Typography, Card, Select, DatePicker, Table, Modal, Space } from 'antd';
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    EditOutlined,
    FileTextOutlined,
    CalendarOutlined, SettingOutlined, PhoneOutlined, PlusOutlined, DeleteOutlined,
  FacebookFilled, InstagramFilled, TwitterCircleFilled, ChromeFilled

} from '@ant-design/icons';
import ErrorList from '../components/ErrorList';
import { translateMessage } from '../utils/translateMessage';
import withoutAuth from '../hocs/withoutAuth';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../providers/Auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';
import 'moment/locale/zh-cn';
import ImgCrop from 'antd-img-crop';

const { Text, Title } = Typography;
const { Option } = Select;


const Register = ({
                      visible,
                      update,
                      onSubmit,
                      onCancel
                  }) => {
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
    const [ isSaving, setIsSaving ] = useState( false );
    const onCreate1 = values1 => {

        console.log( 'Received values of form: ', values1 );



    }
    const dataReco = [
        {
            key: '3',
            reco_type: 'RECONOCIMIENTO',
            reco_name: 'Ejemplo1',
            reco_description: 'Mi reconocimiento',
            reco_place:'Quito',
        },
    ];




    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
    const [ list, setList ] = useState( [{reco: '',place:''}] );
    const [ visible1, setVisible1 ] = useState( false );

    const [ visible2, setVisible2 ] = useState( false );
    const [ visible3, setVisible3 ] = useState( false );
    const [ visible4, setVisible4 ] = useState( false );
    const [ form ] = Form.useForm();
    const { setAuthenticated, setCurrentUser } = useAuth();
    const [countries,setCountries]= useState([]);
    const [province,setProvince]= useState([]);
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const columnsReco = [
        {
            title: 'Tipo de reconocimiento',
            dataIndex: 'reco_type',
        },
        {
            title: 'Nombre',
            dataIndex: 'reco_name',
        },
        {
            title: 'Descripción',
            dataIndex: 'reco_description',
        },
        {
            title: 'Lugar',
            dataIndex: 'reco_place',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Space size="middle">
                <Button icon={<EditOutlined />} onClick={ () => {
                    setVisible1( true );
                } }/>
                <Button icon={<DeleteOutlined />}/>
            </Space>,

        },
    ]
    const reconocimiento = {
        data: dataReco,
        form: columnsReco,
    };

    const handleAddReconocimiento = () => {
        const name = document.querySelector( '#reco_name' ).value;
        const place = document.querySelector( '#reco_place' ).value;

       setList(list)
        console.log('name',list);
        document.querySelector( '#reco_name' ).value = '';
        document.querySelector( '#reco_place' ).value='';
    };

    const columnsProject = [
        {
            title: 'Nombre del proyecto',
            dataIndex: 'name_project',
        },
        {
            title: 'Rol en el proyecto',
            dataIndex: 'rol_project',
        },
        {
            title: 'Descripción',
            dataIndex: 'reco_description',
        },
        {
            title: 'Lugar',
            dataIndex: 'place_project',
        },
        {
            title: 'Fecha/Tiempo',
            dataIndex: 'time_project',
        }
    ]
    const columnsFormal = [
        {
            title: 'Institución',
            dataIndex: 'name_institute',
        },
        {
            title: 'Título',
            dataIndex: 'name_title',
        },
        {
            title: 'Área',
            dataIndex: 'name_area',
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
        },

    ]
    const columnsInconclusa = [
        {
            title: 'Tipo de formación',
            dataIndex: 'type_formation',
        },
        {
            title: 'Nombre de la carrera',
            dataIndex: 'name_career',
        },
        {
            title: 'Centro de estudios',
            dataIndex: 'studies_center',
        },

    ]


    useEffect(()=>{

        const getCountries = async () => {
            const countriesResponse = await fetch('https://restcountries.eu/rest/v2/all');
            const countriesJson = await countriesResponse.json();

            console.log('countriesJson', countriesJson);
            setCountries( countriesJson );
        };
        getCountries();


    },[]);

    useEffect(()=>{

        const getProvince = async () => {
            const provinceResponse = await fetch('https://gist.githubusercontent.com/JosueGarrido/bbab87a7577e96d08095c7f8fe0a0519/raw/4b68c7c9fea5ddeb0602bc8f706b04aca8978aa2/provincias.json');
            const provinceJson = await provinceResponse.json();

            console.log('provincejson',Object.values(provinceJson));
            setProvince( Object.values(provinceJson));
        };
        getProvince();

    },[]);

    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };






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
            <Title style={ {marginTop:15, textAlign: 'center' } }>REGISTRO DE ARTISTAS</Title>


      <Row justify='center' className='login'>
        <Col span={ 24 }>
            <Card title="FORMULARIO DE REGISTRO DE INFORMACIÓN: ARTISTAS"  extra="*Información obligatoria" >
          <Form name='register-form'
                {...formItemLayout}
                className='register-form'
                initialValues={ {
                  email: '',
                  password: ''
                } }
                onFinish={ onFinish }
          >
            <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN PERSONAL"  >
                <Form.Item name='identity'
                           label="Cédula de Identidad"
                           extra="Por favor ingrese su cédula de identidad."
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa su cédula de identidad'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={<UserOutlined />} placeholder='Cédula de Identidad' />
                </Form.Item>
                <Form.Item name='name'
                           label="Nombre"
                           extra="Por favor ingrese sus nombre."
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tus nombre'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <UserOutlined /> } placeholder='Nombres' />

                </Form.Item>

                <Form.Item name='last_name'
                           label="Apellido"
                           extra="Por favor ingrese sus apellidos."
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu apellido'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <UserOutlined /> } placeholder='Apellidos' />
                </Form.Item>
                <Form.Item name='birthday'
                           label="Fecha de Nacimiento"
                           extra="Por favor ingrese su fecha de nacimiento ej:1992-07-15."
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu fecha de nacimiento.'
                               }
                           ] }
                           hasFeedback
                >
                    <Input prefix={ <CalendarOutlined /> } placeholder='YYYY-MM-DD' />
                </Form.Item>

                <Form.Item name='culture'
                           label="¿Cómo se autoidentifica según su cultura?"
                           extra="Por favor ingrese como se autoidentifica."
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingrese como se autoidentifica'
                               }
                           ] }
                           hasFeedback
                >
                    <Select
                        placeholder="Ingrese como se autoidentifica"
                    >
                        <Option value="INDÍGENA">INDÍGENA</Option>
                        <Option value="AFROECUATORIANO/A O AFRODESCENDIENTE">AFROECUATORIANO/A O AFRODESCENDIENTE</Option>
                        <Option value="NEGRO/A">NEGRO/A</Option>
                        <Option value="MULATO/A">MULATO/A</Option>
                        <Option value="MONTUBIO/A">MONTUBIO/A</Option>
                        <Option value="MESTIZO/A">MESTIZO/A</Option>
                        <Option value="BLANCO/A">BLANCO/A</Option>
                    </Select>


                </Form.Item>
                <Form.Item name='disability'
                           initialValue='0'
                           label="¿Tiene usted algún tipo de discapacidad?"
                           extra="Por favor indique si tiene algún tipo de discapacidad."
                           hasFeedback
                >

                    <Switch checkedChildren="SI" unCheckedChildren="NO"/>

                </Form.Item>

                <Form.Item name='image_profile'
                           label="Imagen de perfil"
                           extra="Por favor seleccione una foto con la cual sus clientes lo puedan reconocer."
                           hasFeedback
                >

                    <ImgCrop rotate>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>

                </Form.Item>


            </Card>

              <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN DOMICILIARIA"  >
                      <Form.Item name='location'
                                 label="País de domicilio"
                                 rules={ [
                                     {
                                         required: true,
                                         message: 'Ingresa tu localidad'
                                     }
                                 ] }
                                 hasFeedback
                      >
                          <Select
                              placeholder="Selecciona el país en el que resides"
                          >
                              {
                                  countries.map((countries,index)=><Option key={index} value={countries.name} >{countries.name}</Option>)
                              }
                          </Select>
                      </Form.Item>

                      <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, currentValues) => prevValues.location !== currentValues.location}
                      >
                          {({ getFieldValue }) => {
                              return getFieldValue('location') === 'Ecuador' ? (
                                  <Form.Item name='province'
                                             label="Provincia de domicilio"
                                             rules={ [
                                                 {
                                                     required: true,
                                                     message: 'Ingresa tu localidad'
                                                 }
                                             ] }
                                             hasFeedback
                                  >
                                      <Select
                                          placeholder="Selecciona el país en el que resides"
                                      >
                                          {
                                              province.map((province,i)=><Option key={i} value={province.provincia} >{province.provincia}</Option>)
                                          }

                                      </Select>
                                  </Form.Item>
                              ) : null;
                          }}
                      </Form.Item>

                      <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
                      >
                          {({ getFieldValue }) => {
                              return getFieldValue('province') === 'AZUAY' ? (
                                  <Form.Item name='city'
                                             label="Cantón de domicilio"
                                             rules={ [
                                                 {
                                                     required: true,
                                                     message: 'Ingresa tu localidad'
                                                 }
                                             ] }
                                             hasFeedback
                                  >
                                      <Select
                                          placeholder="Ingresa tu ciudad"
                                      >
                                          <Option value="male">male</Option>
                                          <Option value="female">female</Option>
                                          <Option value="other">other</Option>
                                      </Select>
                                  </Form.Item>
                              ) : null;
                          }}
                      </Form.Item>
                      <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, currentValues) => prevValues.city !== currentValues.city}
                      >
                          {({ getFieldValue }) => {
                              return getFieldValue('city') === 'other' ? (
                                  <Form.Item name='caton'
                                             label="Canton de domicilio"
                                             rules={ [
                                                 {
                                                     required: true,
                                                     message: 'Ingresa tu canton'
                                                 }
                                             ] }
                                             hasFeedback
                                  >
                                      <Select
                                          placeholder="Ingresa tu parroquia"
                                      >
                                          <Option value="male">male</Option>
                                          <Option value="female">female</Option>
                                          <Option value="other">other</Option>
                                      </Select>
                                  </Form.Item>
                              ) : null;
                          }}
                      </Form.Item>
                      <Form.Item name='direction'
                                 label="Dirección de domicilio"
                                 rules={ [
                                     {
                                         required: true,
                                         message: 'Ingresa tu dirección de domicilio.'
                                     }
                                 ] }
                                 hasFeedback
                      >
                          <Input.TextArea prefix={ <EditOutlined /> } placeholder='Dirección de domicilio' />
                      </Form.Item>
                      <Form.Item name='reference'
                                 label="Referencia domiciliaria"
                                 rules={ [
                                     {
                                         required: true,
                                         message: 'Ingresa tu referencia domiciliaria.'
                                     }
                                 ] }
                                 hasFeedback
                      >
                          <Input prefix={ <EditOutlined /> } placeholder='Referencia domiciliaria' />
                      </Form.Item>

                  </Card>

              <Card style={{ margin: 10 }} type="inner" title="INFORMACIÓN DE CONTACTO"  >
                  <Form.Item name='phone'
                             label="Número de Telefono"
                             rules={ [
                                 {
                                     required: true,
                                     message: 'Ingresa tu número de telefono'
                                 }
                             ] }
                             hasFeedback
                  >
                      <Input addonBefore={<PhoneOutlined />} placeholder='Número de telefono' />


                  </Form.Item>
                  <Form.Item name='email'
                             label="Correo electrónico"
                             rules={ [
                                 {
                                     required: true,
                                     message: 'Ingresa tu correo electrónico'
                                 },
                                 {
                                     type: 'email',
                                     message: 'Ingresa un correo válido'
                                 }
                             ] }
                             hasFeedback
                  >
                      <Input addonBefore='@' placeholder='Correo Electrónico' />
                  </Form.Item>

                  <Form.Item name='email_verified_at'
                             label="Verificar correo electrónico"
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
                      <Input addonBefore='@' placeholder='Verificar Email' />
                  </Form.Item>

              </Card>

              <Card style={{ margin: 10 }} type="inner" title="TRAYECTORIA ARTÍSTICO / CULTURAL">

                  <Card style={{ margin: 10 }} type="inner" title="TRAYECTORIA"  >

                      <Form.Item name='start_date'
                                 label="Año de inicio de su actividad artístico cultural"
                                 extra="Por favor ingresa el año de inicio de su actividad artístico cultural."
                                 rules={ [
                                     {
                                         required: true,
                                         message: 'Ingresa el año de inicio de su actividad artístico cultural.'
                                     }
                                 ] }
                                 hasFeedback
                      >
                          <Input prefix={ <CalendarOutlined /> } placeholder='YYYY-MM-DD' />

                      </Form.Item>
                      <Form.Item name='trajectory_description'
                                 label="Descripción de su trayectoria"
                                 extra="Por favor describe tu trayectoria artístico cultural, poniendo énfasis en el lapso
                                 de tiempo y lugares en los que ha desarrollado su actividad cultural. Adicionalmente debe
                                 tener en cuenta que su trayectoria debe ir acorde al ÁMBITO y TIPO DE ACTIVIDAD que registró."


                                 rules={ [
                                     {
                                         required: true,
                                         message: 'Por favor describe tu trayectoria artístico cultural.'
                                     }
                                 ] }
                                 hasFeedback
                      >
                          <Input.TextArea prefix={ <EditOutlined /> } placeholder='Descripción' />

                      </Form.Item>
                  </Card>

                  <Modal key="Mod1"
                         visible={ visible1 }
                         title='Ingresar nuevo reconocimiento'
                         okText='Agregar'
                         confirmLoading={ isSaving }
                         cancelText='Cancelar'
                         onOk={() => handleAddReconocimiento() }
                         update={ false }
                         onCancel={ () => {
                             setVisible1( false );
                         } }
                  >

                      <Form

                          form={ form }
                          layout='vertical'
                          name='form_in_modal'
                          initialValues={{ remember: true }}
                          onFinish={onFinish}

                          onFinishFailed={onFinishFailed}                      >
                          <Form.Item
                              name='reco_type'
                              label='Tipo de Reconocimiento'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el tipo de reconocimiento'
                                  }
                              ] }
                          >
                              <Select placeholder="Selecciona el tipo de reconocimiento">
                                  <Option value="male">GALARDÓN / PREMIO</Option>
                                  <Option value="female">RECONOCIMIENTO</Option>
                              </Select>
                          </Form.Item>
                          <Form.Item
                              name='reco_name'
                              label='Nombre de Reconocimiento'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre del reconocimiento'
                                  }
                              ] }>
                              <Input type='textarea' id='reco_name'/>
                          </Form.Item>

                          <Form.Item
                              name='reco_description'
                              label='Descripción'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa la descripción del reconocimiento'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='reco_place'
                              label='Lugar'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el lugar del reconocimiento'
                                  }
                              ] }>
                              <Input type='textarea' id='reco_place'/>
                          </Form.Item>

                          <Form.Item
                              name='reco_year'
                              label='Año'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el año del reconocimiento'
                                  }
                              ] }
                          >
                              <Space direction="vertical">
                                  <DatePicker picker="year" bordered={false} placeholder='Año'/>
                              </Space>

                          </Form.Item>
                          <Button onClick={()=>handleAddReconocimiento()}>ok</Button>
                      </Form>
                  </Modal>
                  <Card style={{ margin: 10 }} type="inner" title="RECONOCIMIENTOS">
                      <Button
                          type="primary"
                          icon={<PlusOutlined />}

                          onClick={ () => {
                              setVisible1( true );
                          } }
                      >
                          Nuevo Reconocimiento
                      </Button>
                      <br />
                      <br />
                      {
                          list.map((lista)=>(

                      <Table
                          columns={columnsReco}
                          dataSource=
                              {
                                  lista.reco


                              }>

                      </Table>
                          ))
                      }


                  </Card>




                  <Modal key="Mod2"
                         visible={ visible2 }
                         title='Ingresar nuevo proyecto cultural'
                         okText='Agregar'
                         confirmLoading={ isSaving }
                         cancelText='Cancelar'
                         onOk={  onCreate1}
                         update={ false }
                         onCancel={ () => {
                             setVisible2( false );
                         } }
                  >

                      <Form

                          form={ form }
                          layout='vertical'
                          name='form_in_modal'
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}                      >
                          <Form.Item
                              name='name_project'
                              label='Nombre del Proyecto'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre del proyecto'
                                  }
                              ] }
                          >
                              <Input type='textarea' />
                          </Form.Item>
                          <Form.Item
                              name='rol_project'
                              label='Rol en el Proyecto'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el rol en el proyecto'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='description_project'
                              label='Descripción'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa la descripción del proyecto'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='place_project'
                              label='Lugar'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el lugar del proyecto'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='year_project'
                              label='Año'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el año del proyecto'
                                  }
                              ] }
                          >
                              <Space direction="vertical">
                                  <DatePicker picker="year" bordered={false} placeholder='Año'/>
                              </Space>

                          </Form.Item>
                      </Form>
                  </Modal>
                  <Card style={{ margin: 10 }} type="inner" title="PROYECTOS CULTURALES">
                      <Button
                          type="primary"
                          icon={<PlusOutlined />}

                          onClick={ () => {
                              setVisible2( true );
                          } }
                      >
                          Nuevo Proyecto Cultural
                      </Button>
                      <br />
                      <br />
                      <Table columns={columnsProject} >

                      </Table>


                  </Card>




              </Card>

              <Card style={{ margin: 10 }} type="inner" title="FORMACIÓN Y CAPACITACIÓN">

                  <Modal key="Mod3"
                         visible={ visible3 }
                         title='Ingresar educación formal finalizada'
                         okText='Agregar'
                         confirmLoading={ isSaving }
                         cancelText='Cancelar'
                         onOk={  onCreate1}
                         update={ false }
                         onCancel={ () => {
                             setVisible3( false );
                         } }
                  >

                      <Form

                          form={ form }
                          layout='vertical'
                          name='form_in_modal'
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}                      >
                          <Form.Item
                              name='name_institute'
                              label='Nombre de la institución'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre de la institución'
                                  }
                              ] }
                          >
                              <Input type='textarea' />
                          </Form.Item>
                          <Form.Item
                              name='name_title'
                              label='Nombre del Título'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre del Título'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='name_area'
                              label='Área'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre del área'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='type'
                              label='Tipo'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el tipo de formación'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>


                      </Form>
                  </Modal>
                  <Card style={{ margin: 10 }} type="inner" title="EDUCACIÓN FORMAL FINALIZADA">
                      <Button
                          type="primary"
                          icon={<PlusOutlined />}

                          onClick={ () => {
                              setVisible3( true );
                          } }
                      >
                          Ingresar Educación Formal Finalizada
                      </Button>
                      <br />
                      <br />
                      <Table columns={columnsFormal} >

                      </Table>


                  </Card>




                  <Modal key="Mod4"
                         visible={ visible4 }
                         title='Ingresar educación formal inconclusa o en curso'
                         okText='Agregar'
                         confirmLoading={ isSaving }
                         cancelText='Cancelar'
                         onOk={  onCreate1}
                         update={ false }
                         onCancel={ () => {
                             setVisible4( false );
                         } }
                  >

                      <Form

                          form={ form }
                          layout='vertical'
                          name='form_in_modal'
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}                      >
                          <Form.Item
                              name='type_formation'
                              label='Tipo de Formación'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el tipo de formación'
                                  }
                              ] }
                          >
                              <Select placeholder="Selecciona el tipo de formación">
                                  <Option value="male">INCONCLUSO</Option>
                                  <Option value="female">EN CURSO</Option>
                                  <Option value="female">EGRESADO</Option>
                              </Select>
                          </Form.Item>
                          <Form.Item
                              name='name_career'
                              label='Nombre de la carrera'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa el nombre de la carrer'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>

                          <Form.Item
                              name='studies_center'
                              label='Centro de estudios'
                              rules={ [
                                  {
                                      required: true,
                                      message: 'Ingresa la centro de estudios'
                                  }
                              ] }>
                              <Input type='textarea' />
                          </Form.Item>


                      </Form>
                  </Modal>
                  <Card style={{ margin: 10 }} type="inner" title="EDUCACIÓN FORMAL INCONCLUSA O EN CURSO">
                      <Button
                          type="primary"
                          icon={<PlusOutlined />}

                          onClick={ () => {
                              setVisible4( true );
                          } }
                      >
                          Ingresar Educación Formal Inconclusa o en Curso
                      </Button>
                      <br />
                      <br />
                      <Table columns={columnsInconclusa} >

                      </Table>


                  </Card>




              </Card>

              

            <Card style={{ margin: 10 }} type="inner" title="ENLACES WEB"  >
                  <Card style={{ margin: 10 }} type="inner" title="Redes Sociales" >

                      <Form.Item name='social_networks'
                                 label="Facebook"

                                 hasFeedback
                      >
                          <Input addonBefore={<FacebookFilled />} placeholder='Facebook' />

                      </Form.Item>
                      <Form.Item name='instagram'
                                 label="Instagram"

                                 hasFeedback
                      >
                          <Input addonBefore={<InstagramFilled />} placeholder='Instagram' />

                      </Form.Item>
                      <Form.Item name='twitter'
                                 label="Twitter"

                                 hasFeedback
                      >
                          <Input addonBefore={<TwitterCircleFilled />} placeholder='Twitter' />

                      </Form.Item>
                      <Form.Item name='otro'
                                 label="Otro"

                                 hasFeedback
                      >
                          <Input addonBefore={<ChromeFilled />} placeholder='Otro' />

                      </Form.Item>
                      <Text type="secondary">Ingresar los links de internet que nos lleven a visualizar su perfil personal
                          (o de la agrupación que pertenece) en las distintas redes sociales detalladas.
                          Esta información servirá para crear un catálogo de artistas y gestores culturales y sus datos
                          son importantes para contactarlos.</Text>

                  </Card>
              </Card>

              <Card style={{ margin: 10 }} type="inner" title="Datos de acceso" >

                  <Form.Item name='identity'
                             label="Cédula de Identidad"
                             rules={ [
                                 {
                                     required: true,
                                     message: 'Ingresa su cédula de identidad'
                                 }
                             ] }
                             hasFeedback
                  >
                      <Input addonBefore={<UserOutlined />} placeholder='Cédula de Identidad' disabled/>
                  </Form.Item>

                  <Form.Item name='password'
                             label="Contraseña"
                             rules={ [
                                 {
                                     required: true,
                                     message: 'Ingrese su contraseña'
                                 }
                             ] }
                             hasFeedback
                  >
                      <Input.Password addonBefore={<LockOutlined />}
                                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                      placeholder='Contraseña' />
                  </Form.Item>

                  <Form.Item name='password_confirmation'
                             label="Confirmar Contraseña"
                             dependencies={ [ 'password' ] }
                             hasFeedback
                             rules={ [
                                 {
                                     required: true,
                                     message: 'Confirma tu Contraseña',
                                 },
                                 ( { getFieldValue } ) => ({
                                     validator( rule, value ) {
                                         if( !value || getFieldValue( 'password' ) === value ) {
                                             return Promise.resolve();
                                         }
                                         return Promise.reject( 'Las contraseñas no coinciden' );
                                     },
                                 }),
                             ] }
                  >
                      <Input.Password addonBefore={<LockOutlined />}
                                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                      placeholder='Confirma tu clave' />
                  </Form.Item>


              </Card>

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

            <Form.Item>
              <Button type='primary' htmlType='submit' className='login-form-button'>
                Registrarme
              </Button>
              <div><Link to={ Routes.LOGIN }>Ya tengo una cuenta</Link></div>
            </Form.Item>

          </Form>
            </Card>


        </Col>
      </Row>
    </>
  );
};

export default withoutAuth( Register );
