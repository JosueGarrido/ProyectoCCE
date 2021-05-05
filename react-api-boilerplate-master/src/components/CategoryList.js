import React from 'react';
import '../styles/InfoPages.css'
import {Divider, Row, Col, Layout, Typography, Card, Avatar, Rate, Skeleton} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";
import logoVertical from "../images/logoVertical.png";
import Category1Products from "../components/Category1Products";
import Category2Products from "../components/Category2Products";
import ShowError from "./ShowError";
const { Text, Title } = Typography;
const Header = Layout.Header;
const {  Content } = Layout;
const CategoryList = () => {

    const { categories, isLoading, isError } = useCategories();
    const { categories2 } = useCategories2();

    console.log('categorias', categories)
    console.log('categorias2', categories2)
    if( isLoading ) {
        return <Row justify='center' gutter={ 30 }>
            {
                [ ...new Array( 9 ) ].map( ( _, i ) =>
                    <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                        <div style={ { textAlign: 'center' } }>
                            <Skeleton.Image style={ { width: 200 } } />
                            <Card title='' extra='' cover='' loading />
                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if( isError ) {
        return <ShowError error={ isError } />;
    }
    return(
        <>
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <Row>
                        {

                        }
                        { categories !== undefined
                            ?
                            categories.map((categories, i) => (
                                <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                                    {categories.id
                                        ?<div className="cardCatList">
                                            <Card
                                                style={{borderRadius: 10, width:'100%', marginTop:'15px'}}
                                                title={ <h1 className="texto">{categories.name}</h1> }
                                            >
                                                <Row>
                                                    <Col span={24}>

                                                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                            {  categories2 !== undefined
                                                                ?
                                                                categories2.map((categories2, i) => {
                                                                    if(categories2.category1_id === categories.id) {
                                                                        return (
                                                                            <Col span={6} style={{marginBottom: 20}}
                                                                                 key={i}>
                                                                                {categories2.id
                                                                                    ?<a href={Routes.CATEGORY.replace( ':id', categories2.id )}>
                                                                                        <Card hoverable
                                                                                              style={{borderRadius: 10, textAlign:'center'}}>
                                                                                            <Row>
                                                                                                <Col className="gutter-row" span={6}>
                                                                                                    <h1 className="texto" style={{textAlign:'center'}}> {categories2.name}</h1>
                                                                                                </Col>
                                                                                            </Row>

                                                                                        </Card>
                                                                                    </a>

                                                                                    : <div style={{textAlign: 'center'}}>
                                                                                        <Card title='' extra='' cover='' loading/>
                                                                                    </div>
                                                                                }
                                                                            </Col>
                                                                        )
                                                                    }
                                                                })
                                                                :<div style={{textAlign: 'center'}}>
                                                                    <Card title='' extra='' cover='' loading/>
                                                                </div>
                                                            }

                                                        </Row>
                                                    </Col>
                                                </Row>

                                            </Card>
                                        </div>


                                        : <div style={{textAlign: 'center'}}>
                                            <Card title='' extra='' cover='' loading/>
                                        </div>
                                    }
                                </Col>
                            )) : <div style={{textAlign: 'center'}}>
                                <Card title='' extra='' cover='' loading/>
                            </div>

                        }
                    </Row>
                </Content>

            </Layout>


        </>
    );
};

export default CategoryList;
