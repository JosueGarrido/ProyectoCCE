import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import { Button } from 'antd';
import {Link, useParams} from 'react-router-dom';
import { useArtist } from "../data/useArtist";
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import GraphicsSales from '../components/GraphicsSales';
import { Line } from '@ant-design/charts';
import {useProduct} from "../data/useProduct";
import {useCat1Products} from "../data/useCat1Products";
import {useCategories} from "../data/useCategories";


const { Title } = Typography;

const {  Content, Sider } = Layout;

const ArtistStreamingDashboard = () => {
    let { id } = useParams();
    const artist = useArtist( id );

    console.log('artis:', artist);

    return (
        <>
            <Row span={18}>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Title style={{marginTop: 15, textAlign: 'center'}}>Bienvenido Streaming</Title>


                            {<iframe //src= {artist.artists.live}
                                     frameBorder="0"
                                     allowFullScreen="true"
                                     scrolling="no"
                                     height="550"
                                     width="1050"/>}
                            <br/><br/>
                            {<center>
                                <Button type="primary" danger>
                                    Iniciar Streaming
                                </Button>
                            </center>}

                        </div>
                    </Content>
                </Col>


            </Row>

        </>

    );
};
export default ArtistStreamingDashboard;