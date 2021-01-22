import React, { useState } from 'react';
import {Modal, Form, Input, message, Upload, Select, Rate, Button, Card} from 'antd';
import { translateMessage } from '../utils/translateMessage';
import API from '../data/index';
import ErrorList from './ErrorList';
import { PlusOutlined } from '@ant-design/icons';
import { mutate } from 'swr';

const { Option } = Select;

function getBase64( file, callback ) {
    console.log( 'file', file );
    const reader = new FileReader();
    reader.addEventListener( 'load', () => callback( reader.result ) );
    reader.readAsDataURL( file );
}

const NewComment = ( {
                          onSubmit,
                          onCancel,
                          categories
                      } ) => {
    const [ form ] = Form.useForm();
    const [ imageUrl, setImageUrl ] = useState( null );
    const [ fileList, setFileList ] = useState( [] );
    const [ isSaving, setIsSaving ] = useState( false );
    /**
     * onCreate article
     * Called when the user clicks on button to create article
     * @param values
     */
    const onCreate = async values => {
        console.log( 'Received values of form: ', values );

        form.validateFields()
            .then( async( values ) => {
                console.log( 'values', values );
                setIsSaving( true );

                // use form data to be able to send a file to the server
                const data = new FormData();
                data.append( 'image', values.image[ 0 ] );
                data.append( 'title', values.title );
                data.append( 'body', values.body );
                data.append( 'category_id', values.category_id );

                try {
                    await API.post( '/articles', data ); // post data to server
                    form.resetFields();
                    setFileList( [] );
                    setImageUrl( null );
                    setIsSaving( false );
                    onSubmit();
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



    return (
        <Card style={{borderRadius: 10}}>
            <Form
                form={ form }
                layout='vertical'
                name='form_in_modal'
            >
                <Form.Item
                    name='title'
                    label='Comentario'
                    rules={ [
                        {
                            required: true,
                            message: 'Ingresa un comentario'
                        }
                    ] }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='body'
                    label='Valoración'
                    rules={ [
                        {
                            required: true,
                            message: 'Ingresa el texto del artículo'
                        }
                    ] }>
                    <Rate />
                </Form.Item>

                <Button type={"primary"}>
                    Agregar Reseña
                </Button>

            </Form>
        </Card>

    );
};

export default NewComment;
