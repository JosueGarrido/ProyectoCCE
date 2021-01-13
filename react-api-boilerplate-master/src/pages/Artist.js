import React from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import { Skeleton } from 'antd';
import {useUser} from "../data/useUser";

const Artist = () => {
    let { id } = useParams();
    const user = useUser( id );
    const products = useProductsList( id );

    return (
        <>
            {
                user.isLoading
                    ? <div>Cargando...</div>
                    : user.isError
                    ? <ShowError error={ user.isError } />
                    : <>
                        <h1 >
                            Usuario: { user.user.name }
                        </h1>
                        <p>{ user.last_name }</p>
                    </>
            }


        </>
    );

};

export default withAuth( Artist );
