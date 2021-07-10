/*import { Comment, List, Tooltip, Form, Input, Button, Avatar, message, Skeleton } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import { useQuestionComments } from '../data/useQuestionComments';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const QuestionsList = ( { questions, productId } ) => {

    console.log( 'props', questions );
    const [ submitting, setSubmitting ] = useState( [] );

    const handleSubmit = async( values ) => {
        console.log( 'values', values );
        setSubmitting( true );

        try {

            // setValue( '' );
            questions.mutate( {
                data: [
                    {}, // to show the skeleton for new comment
                    ...questions.question,
                ]
            }, false );
            await API.post( `/products/${ productId }/questions`, {
                question: values.question,
                product_id: productId
            } );
            questions.mutate(); // get updated data
            setSubmitting( false );
        } catch( error ) {
            console.log( 'error', error );
            setSubmitting( false );
            const errorList = error.response.error_list && <ErrorList errors={ error.response.error_list } />;

            message.error( <>
                { translateMessage( error.message ) }
                { errorList }
            </> );
        }
    };

    const Editor = ( { onSubmit, submitting } ) => {
        const [ form ] = Form.useForm();

        return (
            <Form
                form={ form }
                name='form_comment'
                onFinish={ handleSubmit }>
                <Form.Item name='question'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa tu pregunta'
                               }
                           ] }>
                    <TextArea rows={ 4 } />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' loading={ submitting } type='primary'>
                        Enviar pregunta
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    return (
        <>
            <Comment
                avatar={ <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' alt='Han Solo' /> }
                content={ <Editor onSubmit={ handleSubmit } submitting={ submitting } /> }
            />

            <List
                className='comment-list'
                header={ `${ questions.question && questions.question.length } preguntas` }
                itemLayout='horizontal'
               // dataSource={ processCommentsData( questions.question ) }
                renderItem={ ( item ) => {
                    if( item.author ) {
                        return (
                            <Comment
                                // actions={ item.actions }
                                author={ item.author }
                                content={ item.content }
                                datetime={ item.datetime }
                            />
                        );
                    } else {
                        return <Skeleton loading={ true } active avatar />;
                    }
                } }
            />
        </>
    );
};

export default QuestionsList;

const processCommentsData = ( questions ) => {

    return questions.map( ( question ) => {
        console.log( 'question', question );
        if( question.question ) {
            return ({
                // actions: [ <span key='comment-list-reply-to-0'>Reply to</span> ],
                author: <Link to={ Routes.USERS_ID }>{ questions.user_data.name }</Link>,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>{ questions.question }</p>,
                datetime: <Tooltip title={ moment( questions.created_at ).format( 'YYYY-MM-DD HH:mm:ss' ) }>
                    <span>{ moment( questions.created_at ).fromNow() }</span>
                </Tooltip>,
            });
        } else {
            return {};
        }
    } );
};*/

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

