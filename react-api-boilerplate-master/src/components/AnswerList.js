import {Form, Input, Button, message, Rate, Row, Col, Card} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import '../styles/answer.css';
const { TextArea } = Input;

const AnswerList = ( {  questionId} ) => {

    //console.log( 'props', answers );
    const [ submitting, setSubmitting ] = useState( false );


    const handleSubmit = async( values ) => {
        console.log( 'values', values );
        setSubmitting( true );
        try {

            // setValue( '' );

            await API.post( `/questions/${ questionId }/answers`, {
                answer: values.answer,
                question_id: questionId
            } );
            //answers.mutate(); // get updated data
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
                  style={{borderRadius: 20}} className={'cuadro'}>


                <Row >

                    <Col span={22} >



                        <Form

                            form={ form }
                            name='form_answer'
                            onFinish={ handleSubmit }>
                            <Form.Item name='answer'
                                       rules={ [
                                           {
                                               required: true,
                                               message: 'Ingrese su respuesta'
                                           }
                                       ] }>
                                <TextArea rows={ 2 } />
                            </Form.Item>
                            <Form.Item>

                                <Button htmlType='submit' loading={ submitting } type='primary' className={'boton-enviar-pregunta'}>
                                    Enviar respuesta
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

export default AnswerList;
