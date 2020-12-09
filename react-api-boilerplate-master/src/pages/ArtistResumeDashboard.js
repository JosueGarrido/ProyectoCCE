import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import {Divider, Row, Col, Layout, Typography, } from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";

const { Title } = Typography;
const {  Content, Sider } = Layout;


const ArtistResumeDashboard = () => {

    const {isAuthenticated, isCheckingAuth, currentUser} = useAuth();


    return (
    <>
        <Row>
            <ArtistMenuDashboard/>

            <Col span={18}>

                <Content style={{margin: '2px 18px 0'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {
                            isAuthenticated
                                ?
                                <Col>
                                <Title style={{marginTop: 15, textAlign: 'center'}}>Bienvenido a tu cuenta {currentUser && currentUser.name}</Title>

                                    <img alt={ currentUser && currentUser.name }
                                         class="image-center"
                                         height={200}
                                         width={200}
                                         src={ `http://localhost:8000/storage/${ currentUser && currentUser.profile_picture }` } />

                                    <Title style={{marginTop: 15, textAlign: 'center'}} type="secondary" level={2}>RESUMEN</Title>
                                    </Col>
                                :
                                <Col>
                                < Title style={{marginTop: 15, textAlign: 'center'}}>
                                    Inicie Sesion
                                </Title>
                            </Col>

                        }
                    </div>
                </Content>
            </Col>


        </Row>

    </>
    );
};

export default ArtistResumeDashboard;

