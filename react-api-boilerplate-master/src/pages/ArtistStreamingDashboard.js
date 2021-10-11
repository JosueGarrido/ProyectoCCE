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
import ShowError from "../components/ShowError";
import {useAuth} from "../providers/Auth";


const { Title } = Typography;
const {  Content, Sider } = Layout;

const ArtistStreamingDashboard = () => {

    const {currentUser} = useAuth();
    console.log('usuario:', currentUser);
    console.log('id artista:', currentUser.userable_id);
    const artist = useArtist(currentUser.userable_id);

    console.log('artista:', artist);

    return (
        <>
            <Row span={18}>
                <ArtistMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Title style={{marginTop: 15, textAlign: 'center'}}>Streaming</Title>


                            {
                                artist.isLoading
                                    ?<div> Cargando</div>
                                    : artist.isError
                                    ? <ShowError error={artist.isError}/>
                                    :
                                <iframe src= {artist.artist.live}
                                     frameBorder="0"
                                     allowFullScreen="true"
                                     scrolling="no"
                                     height="550"
                                     width="1050"/>
                            }
                            <br/><br/>
                            {
                                <center>
                                <Button type="primary" danger>
                                    Iniciar Streaming
                                </Button>
                            </center>
                            }

                        </div>
                    </Content>
                </Col>


            </Row>

        </>

    );
};
export default ArtistStreamingDashboard;
