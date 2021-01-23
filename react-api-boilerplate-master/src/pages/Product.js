import React from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import { useParams } from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import  ProductsList from '../components/ProductsList';
import {useProduct} from "../data/useProduct";
const { Text, Title } = Typography;
const {Meta} = Card;

const Product = () => {
    let { id } = useParams();
    const product= useProduct(id);
    const products = useProductsList( id );

    return (
        <>
            <img
                height={550}
                width={1450}
                src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
            />
            {
                product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={ product.isError } />
                    : <>
                        <h1 >
                            Producto: { product.product.name }
                        </h1>

                    </>
            }
            <br/>
        </>
    );

};

export default ( Product );
