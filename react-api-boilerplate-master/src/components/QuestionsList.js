import {Form, Input, Button, message, Rate, Row, Col, Card} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import '../styles/product.css';
const { TextArea } = Input;

const QuestionsList = ( { questions, productId} ) => {

    console.log( 'props', questions );
    const [ submitting, setSubmitting ] = useState( false );

    const handleSubmit = async( values ) => {
        console.log( 'values', values );
        setSubmitting( true );

        try {

            // setValue( '' );

            await API.post( `/products/${ productId }/questions`, {
                question: values.question,
                product_id: productId
            } );
            questions.mutate(); // get updated data
            setSubmitting( false );
        } catch( error ) {
            console.log( 'error', error );
            setSubmitting( false );

        }
    };

    const Editor = ( { onSubmit, submitting } ) => {
        const [ form ] = Form.useForm();

        return (
            <Card hoverable
                  style={{borderRadius: 10}}>
                <Row>
                    <Col span={22}>
                        <Form
                            form={ form }
                            name='form_question'
                            onFinish={ handleSubmit }>
                            <Form.Item name='question'
                                       rules={ [
                                           {
                                               required: true,
                                               message: 'Ingrese su pregunta'
                                           }
                                       ] }>
                                <TextArea rows={ 2 } />
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType='submit' loading={ submitting } className={'boton-enviar-pregunta'}>
                                    Enviar pregunta
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
        );
    };

    return (
        <>
            <Editor onSubmit={ handleSubmit } submitting={ submitting } />

        </>
    )
};

export default QuestionsList;