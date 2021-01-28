import { Form, Input, Button, message, Rate } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const NewComment = ( { user, products} ) => {

    console.log( 'props', user );
    const [ submitting, setSubmitting ] = useState( false );

    const handleSubmit = async( values ) => {
        console.log( 'values', values );
        setSubmitting( true );

        try {

            // setValue( '' );
            user.mutate( {
                data: [
                    {}, // to show the skeleton for new comment
                    ...user.comments,
                ]
            }, false );
            await API.post( `/reputations`, {
                comment: values.comment,
                score: values.score,
                user_id: user,
                product_id: products,
            } );
            user.mutate(); // get updated data
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
                <Form.Item name='comment'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa el texto de tu comentario'
                               }
                           ] }>
                    <TextArea rows={ 4 } />
                </Form.Item>
                <Form.Item name='score'
                           rules={ [
                               {
                                   required: true,
                                   message: 'Ingresa el texto de tu comentario'
                               }
                           ] }>
                    <Rate />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' loading={ submitting } type='primary'>
                        Enviar comentario
                    </Button>
                </Form.Item>
            </Form>
        );
    };
};

export default NewComment;

