import React, { useState } from 'react';
import API from '../data';
import { translateMessage } from '../utils/translateMessage';
import PublicationList from '../components/PublicationList';

import {
    DatePicker,
    TimePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Button,
    message,
    Skeleton,
    Row,
    Col,
    Divider,
    Select
} from 'antd';
import { useAuth } from '../providers/Auth';
import {CarryOutOutlined} from '@ant-design/icons';
import { mutate } from 'swr';
import Cookies from "js-cookie";
import ErrorList from "../components/ErrorList";



/**
 * Fetch Appointments from DB
 */
export const fetchAppointments = async() => {
    // console.log( `Show data fetched. Appointments: ${ JSON.stringify( articles ) }` );

    return await API.get( '/products' );
};


/**
 * Appointments list page
 * @param props
 * @constructor
 */
const {Option} = Select;

const Publications = ( {
                           update,
                           //onSubmit,
                           onCancel,

                       } ) => {

    const [ submitting, setSubmitting ] = useState( false );
    const [ form ] = Form.useForm();
    const [ isSaving, setIsSaving ] = useState( false );
    const onCreate = async values => {
        console.log( 'Received values of form: ', values );

        form.validateFields()
            .then( async( values ) => {
                console.log( 'values', values );
                setIsSaving( true );

                // use form data to be able to send a file to the server
                const data = new FormData();
                data.append( 'name', values.datetime );
                data.append( 'description', values.description );
                data.append( 'price', values.price );
                data.append( 'stock', values.stock );
                data.append( 'location', values.location );
                data.append( 'score', values.score );


                try {
                    await API.post( '/products', data ); // post data to server
                    form.resetFields();
                    setIsSaving( false );
                    await mutate('/products');
                    //onSubmit();
                } catch( e ) {
                    setIsSaving( false );

                    const errorList = e.error && <ErrorList errors={ e.error } />;
                    message.error( <>{ translateMessage( e.message ) }{ errorList }</> );
                }
            } )
            .catch( info => {
                console.log( 'Validate Failed:', info );
            } );

    };

    const [ visible, setVisible ] = useState( false );
    const [ showModal, setShowModal ] = useState( false );
    // const doctors = DoctorList();



    const auth = useAuth();

    // console.log( 'categories', categories );

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/products', async products => {
                return { data: [ {}, ...products.data ] };
            }, false );

            await mutate( '/products' );
            setVisible( false ); // close the modal
        } catch( error ) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error( translateMessage( error.message ) );
        }
    };

    const handleViewDetails = () => {
        setShowModal(true);
    }

    // const handleOk = () => {
    //     htmlType='submit' loading={ submitting }
    // }

    const handleCancel = () => {
        setShowModal(false);
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const handleChangeCategory = () => {};
    return (

        <div>
            <Button icon={<CarryOutOutlined />} onClick={ () => handleViewDetails()} type="primary">Crear Publicación</Button>

            <Modal
                title="Crear Publicación"
                visible={showModal}
                confirmLoading={ isSaving }
                onOk={ () => onCreate()}
                onCancel={ () => handleCancel()}
            >
                <Form {...layout} name="nest-messages" form={ form }>
                    <Form.Item name='name'
                               label="Nombre"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese el nombre del producto'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>
                    <Form.Item name='description'
                               label="Descripción"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Describa su producto'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>
                    <Form.Item name='time'
                               label="Hora"
                               rules={ [
                                   {
                                       required: true,
                                       message: 'Ingrese la hora en la que requiere la cita'
                                   }
                               ] }
                               hasFeedback>
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>


            <Divider/>

            <PublicationList />
        </div>
    );
};


export default Publications;