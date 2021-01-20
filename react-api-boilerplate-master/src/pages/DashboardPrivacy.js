import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
<<<<<<< HEAD
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Privacy from "../components/Privacy";
=======
import {Divider, Row, Col, Layout, Typography, Card, Avatar} from 'antd';
import {MailOutlined} from '@ant-design/icons';

>>>>>>> dev
const { Title } = Typography;
const {  Content, Sider } = Layout;

const DashboardPrivacy = () => {

    return (
        <>
            <Row>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

<<<<<<< HEAD
                        <Title style={ { marginTop:15, textAlign: 'center' } }>Privacidad</Title>
                        <Col>
                            <Privacy/>

                        </Col>

=======
                            <Title style={{marginTop: 15, textAlign: 'center'}}>Privacidad</Title>
>>>>>>> dev


                        </div>
                    </Content>
                </Col>


            </Row>

        </>
    );
}

export default DashboardPrivacy;
