import React, {useEffect, useState} from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Skeleton, Card } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import SellList1 from "../components/SellList1";
import ArtistsList from "../components/ArtistsList";
import Header2 from '../components/Header2';
import { useUserList } from '../data/useUserList';
import ProductsPagination from "../components/ProductsPagination";
import ShowError from '../components/ShowError';
import Pagination from "../components/Pagination";
const { Title } = Typography;
const {  Content, Sider } = Layout;


const Artists = (props) => {

    //pagination
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch('http://localhost:8000/api/artists');
            const json=await res.json();
            setArtists(json);
            setLoading(false);
        };
        fetchPosts();
    }, []);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = artists.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
return(
    <>

        <Header2/>
        <Row>
            <ArtistMenuDashboard/>
            <Col span={ 18 } >
                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Col>
                            <Title style={ { marginTop:15, textAlign: 'center' } }>Artistas</Title>
                            <Col>
                                <ArtistsList artists={currentPosts} loading={loading} />
                                <div className='paginationButtons'>
                                    <Pagination
                                        postsPerPage={postsPerPage}
                                        totalPosts={artists.length}
                                        paginate={paginate}
                                    />
                                </div>
                            </Col>
                        </Col>
                    </div>
                </Content>
            </Col>
        </Row>
    </>
    );
}

export default Artists;
