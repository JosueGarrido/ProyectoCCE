import { Comment, List, Tooltip, Form, Input, Button, Avatar, message, Skeleton } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import API from '../data/index';
import { translateMessage } from '../utils/translateMessage';
import ErrorList from './ErrorList';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';


const SellList2 = ( { sales, productId } ) => {

    console.log( 'sales', sales );

    return (
        <>
            <List
                className='comment-list'
                header="Ventas"
                itemLayout='horizontal'
                dataSource={ processSellData( sales.sales ) }
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

export default SellList2;

const processSellData = ( sales ) => {
    return sales.map( ( sales ) => {
        console.log( 'sales', sales );
        if( sales.id ) {
            return ({

                author: <Link to={ Routes.HOME }>{ sales.user_data.name }</Link>,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>{ sales.id }</p>,
                datetime: <Tooltip title={ moment( sales.created_at ).format( 'YYYY-MM-DD HH:mm:ss' ) }>
                    <span>{ moment( sales.created_at ).fromNow() }</span>
                </Tooltip>,
            });
        } else {
            return {};
        }
    } );
};
