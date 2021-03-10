import React from 'react';
import {Menu, Divider, Row, Col, Layout, Typography, Select, List, Card} from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link, useParams} from "react-router-dom";
import {useCategories} from "../data/useCategories";
import {useCategories2} from "../data/useCategories2";

const { SubMenu } = Menu;
const { Title } = Typography;
const {  Content, Sider } = Layout;
const { Option } = Select;



const Category1Filter = (props) => {
    let {id} = useParams();
    const { categories, isLoading, isError } = useCategories();
    const { categories2 } = useCategories2();


        console.log('cat', categories);

    console.log('categorias2', categories2)

    if(categories2 !== undefined) {
        console.log('catexdd', categories2.category1_id === categories[id-1].id)
    }

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <>
            <Row>

                <Col span={24}>

                    {categories !== undefined
                        ?

                        <Content style={{margin: '2px 18px 0'}}>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                                <Col>

                                    <Title style={{marginTop: 15, textAlign: 'center'}}>{categories[id-1].name}</Title>


                                    {  categories2 !== undefined
                                        ?
                                        categories2.map((categories2, i) => {
                                            if(categories2.category1_id === categories[id-1].id) {
                                                return (
                                                    categories2.id
                                                            ?
                                                            <Col>
                                                                <ul>
                                                                    <Link
                                                                        to={Routes.CATEGORY.replace(':id', categories2.id)}>{categories2.name}</Link>
                                                                </ul>
                                                            </Col>
                                                            : <div style={{textAlign: 'center'}}>
                                                                <Card title='' extra='' cover='' loading/>
                                                            </div>

                                                )
                                            }
                                        })

                                        :<div style={{textAlign: 'center'}}>
                                            <Card title='' extra='' cover='' loading/>
                                        </div>
                                    }

                                </Col>

                                <Col>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
                                </Col>

                                <Col>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
                                </Col>

                                <Col>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
                                </Col>

                                <Col>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
                                </Col>

                            </div>
                        </Content>
                        : <div style={{textAlign: 'center'}}>
                            <Card title='' extra='' cover='' loading/>
                        </div>
                    }
                </Col>

            </Row>

        </>
    );
}

export default Category1Filter;
