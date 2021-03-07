import React, {useState} from 'react';

import ShowError from '../components/ShowError';
import { useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Layout} from 'antd';
import {FacebookOutlined, InstagramFilled, TwitterOutlined, UserAddOutlined,ForkOutlined,WhatsAppOutlined} from "@ant-design/icons";
import Routes from "../constants/routes";
import {useCat2Products} from "../data/useCat2Products";
import Category2Products from "../components/Category2Products";
import CategoryFilter from "../components/CategoryFilter";

const { Text, Title } = Typography;
const {Meta} = Card;
const {  Content, Sider } = Layout;


const Category = (props) => {
    let { id } = useParams();
    const category2 = useCat2Products( id );

    console.log('category2', category2.cat2);

    return (
        <>

            <Row>
                <CategoryFilter/>

                <Col span={ 18 } >

                    <Content style={{ margin: '2px 18px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            <Title style={ { marginTop:15, textAlign: 'center' } }>Productos</Title>

                            <Category2Products/>

                        </div>
                    </Content>
                </Col>


            </Row>
        </>
    );

};

export default ( Category );
