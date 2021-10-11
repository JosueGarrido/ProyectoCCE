import React, {useState, useEffect} from 'react';
import Pagination from '../components/Pagination';
import ProductsPagination from '../components/ProductsPagination';

import ShowError from '../components/ShowError';
import {  useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image,Button,Modal, Divider} from 'antd';
import Routes from "../constants/routes";
import {useCat1Products} from "../data/useCat1Products";
import imagen12 from "../images/logo-menta.png";

//import ReactPaginate from "react-paginate";
const { Text, Title } = Typography;
const {Meta} = Card;

const Category1Products = (props) => {
    let { id } = useParams();
    const category1 = useCat1Products( id );

//pagination
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(16);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:8000/api/category1/"+id+"/products");
            const json=await res.json();
            setProducts(json);
            setLoading(false);
        };
        fetchPosts();
    }, []);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    console.log('current de products', currentPosts);
    console.log('solo de products', products);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log('category1', category1.cat1);
    return (
        <>
            <ProductsPagination products={currentPosts} loading={loading} id={id}/>
            <div className='paginationButtons'>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={products.length}
                    paginate={paginate}

                />
            </div>
        </>
    );
};
export default ( Category1Products );


/*

{ categories !== undefined
                    ?
                    categories.map((categories, i) => (
                        <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                            {categories.id
                                ? <Card
                                        style={{borderRadius: 10}}>
                                    <Row>
                                        <Col span={24}>
                                            {categories.name}
                                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                                {  categories2 !== undefined
                                                    ?
                                                    categories2.map((categories2, i) => {
                                                        if(categories2.category1_id === categories.id) {
                                                            return (
                                                                <Col span={6} style={{marginBottom: 20}}
                                                                     key={i}>
                                                                    {categories2.id
                                                                        ? <Card hoverable
                                                                                style={{borderRadius: 10}}>
                                                                            <Row>
                                                                                <Col className="gutter-row" span={6}>
                                                                                    <Link to={ Routes.CATEGORY.replace( ':id', categories2.id ) }>{categories2.name}</Link>
                                                                                </Col>
                                                                            </Row>

                                                                        </Card>
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
                                : <div style={{textAlign: 'center'}}>
                                    <Card title='' extra='' cover='' loading/>
                                </div>
                            }
                        </Col>
                    )) : <div style={{textAlign: 'center'}}>
                        <Card title='' extra='' cover='' loading/>
                    </div>

                }
                */

{
    /*
    import React, {useState, useEffect} from 'react';
import Pagination from '../components/Pagination';
import ProductsPagination from '../components/ProductsPagination';

import ShowError from '../components/ShowError';
import {  useParams, Link } from 'react-router-dom';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image,Button,Modal, Divider} from 'antd';
import Routes from "../constants/routes";
import {useCat1Products} from "../data/useCat1Products";
import imagen12 from "../images/logo-menta.png";

import ReactPaginate from "react-paginate";
const { Text, Title } = Typography;
const {Meta} = Card;

const Category1Products = (props) => {


    let { id } = useParams();
    const id_1= useParams();
    const category1 = useCat1Products( id );


//pagination


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch('http://localhost:8000/api/category1/1/products');
            const json=await res.json();
            setProducts(json);
            setLoading(false);
        };
        fetchPosts();
    }, []);


    // Get current posts

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = products
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((products) => {
            return (
                <>
                    {
                        products.isLoading
                            ? <div>Cargando...</div>
                            : products.isError
                            ? <ShowError error={ products.isError } />
                            :<div className="site-card-wrapper">
                                <Row justify='center'  gutter={24}>
                                    {
                                        products.map( ( product, i ) => (
                                            <Col span={6} style={ { marginBottom: 10 } } key={ i }>
                                                { product.name
                                                    ? <Card
                                                        hoverable={ <Link to={ Routes.PRODUCT.replace( ':id', product.id ) }></Link> }
                                                        extra={ <Link to={ Routes.PRODUCT.replace( ':id', product.id ) }></Link> }
                                                        style={{
                                                            width:200,
                                                            marginRight: 20,
                                                            marginBottom: 30,
                                                            background: '#fffff'

                                                        }}

                                                    >
                                                        <Row >

                                                            <img src={imagen12} style={{width:"100px"}}/>
                                                            <Col span={24} align='center'>
                                                                <p>name: {product.name}</p>
                                                                <p>user_id: {product.user_id}</p>
                                                                <p>Precio: ${product.price} </p>
                                                                <p>Stock: {product.stock} </p>
                                                                <p>Venta: {product.sales} </p>
                                                                <p>Ubicación: {product.location} </p>
                                                                <p>category1id: {product.category_id} </p>

                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                    : <div style={ { textAlign: 'center' } }>
                                                        <Card title='' extra='' cover='' loading />
                                                    </div>
                                                }
                                            </Col>
                                        ) )
                                    }


                                </Row>
                            </div>


                    }
                </>
            );
        });

    const pageCount = Math.ceil(products.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <>
            {displayUsers}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>

    );

};

export default ( Category1Products );

     */
}
