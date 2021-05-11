import React, {useState} from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import {Link, useParams} from 'react-router-dom';
import { useProductsList } from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import  ProductsList from '../components/ProductsList';
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import { Tabs, Button } from 'antd';
import Routes from "../constants/routes";
import NewComment from "../components/NewComment";
import {useReputationList} from "../data/useReputationList";
import {useQuestionsList} from "../data/UseQuestion";


const { TabPane } = Tabs;
const { Text, Title } = Typography;
const {Meta} = Card;

function callback(key) {
    console.log(key);
}

const Product = () => {
    let { id } = useParams();
    const product= useProduct(id);
    const category= useCategories(id);
    const products = useProductsList( id );

    const { reputations } = useReputationList( id );
    const [ visible, setVisible ] = useState( 2 );
    const { questions } = useQuestionsList(id);
    const user = useUser( id );
    const { users } = useUserList();
    let totalscore=0;


    if (reputations !== undefined) {
        for (let i=0; i< (reputations.length); i++ ){
            totalscore += reputations[i].score;
        }
        totalscore = (totalscore/reputations.length)
    }

    const handleloadmore = () => {
        setVisible(visible+3);
    }
    return (
        <>
            {
                <Row >
                    <Col span={6}>
                        <img
                            height={350}
                            width={350}
                            src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                        />
                    </Col>
                    <Col span={12}>
                        {
                            product.isLoading
                                ? <div>Cargando...</div>
                                : product.isError
                                ? <ShowError error={ product.isError } />
                                : <>
                                    <h1 >
                                        Obra: { product.product.name }
                                    </h1>
                                    <h1>
                                        Precio: $ {product.product.price}
                                    </h1>
                                    <h1>
                                        En inventarío: {product.product.stock}
                                    </h1>
                                    <h1>
                                        Descripción: {product.product.description}
                                    </h1>

                                </>
                        }
                    </Col>
                </Row>
            }
            {
                <Row>
                    <Col span={6}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Descripción" key="1">
                                {
                                    <>
                                        <h2 >
                                            Categoría: Artes plásticas
                                        </h2>
                                        <h2>
                                            Estilo: Impresionismo
                                        </h2>
                                        <h2>
                                            Técnica: Óleo sobre madera
                                        </h2>
                                        <h2>
                                            Temática: Libre
                                        </h2>
                                        <h2>
                                            Soporte: Placa chapadur
                                        </h2>
                                        <h2>
                                            Formato: xxx
                                        </h2>
                                        <h2>
                                            Tamaño: 50 x 70 cm
                                        </h2>
                                        <h2>

                                        </h2>
                                    </>
                                }
                            </TabPane>
                            <TabPane tab="Valoraciones" key="2">
                                <div>Cargando...</div>
                            </TabPane>
                        </Tabs>

                    </Col>

                </Row>
            }

            {


                product.isLoading
                    ? <div>Cargando...</div>
                    : product.isError
                    ? <ShowError error={product.isError}/>
                    : <Button href={Routes.PREPURCHASE.replace(':id', product.product.id)} type="primary">Comprar</Button>

            }
            <br/>

            {
                reputations === undefined
                    ? <Text>No cargan los datos</Text>
                    :
                    <Row gutter={30}>
                        <Col align='center' md={6}>
                            <Title level={3}>Reputación: </Title>
                        </Col>
                        <Col md={18}>
                            <Col md={24}>
                                {
                                    reputations.isLoading ? <Skeleton loading={reputations.isLoading} active avatar/>
                                        : reputations.isError
                                        ? <ShowError error={reputations.isError}/>
                                        : user.user && <NewComment userId={id} reputations={reputations}/>
                                }
                            </Col>
                            <br/>
                            {
                                reputations.slice(0, visible).map((reputations, i) => (
                                    <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                                        {reputations.comment
                                            ? <Card hoverable
                                                    style={{borderRadius: 10}}>
                                                <Row>
                                                    <Col span={14}>
                                                        {
                                                            users === undefined
                                                                ? <Text>No cargan los datos</Text>
                                                                :
                                                                <Meta
                                                                    avatar={<Avatar
                                                                        size={100}
                                                                        alt={users[reputations.user_id - 1].name}
                                                                        src={`http://localhost:8000/storage/${users[reputations.user_id - 1].profile_picture}`}
                                                                    />}


                                                                    title={`Nombre del Comprador: ${users[reputations.user_id - 1].name} ${users[reputations.user_id - 1].last_name}`}
                                                                    description={`Comentario: ${reputations.comment}`}
                                                                />
                                                        }
                                                    </Col>
                                                    <Col span={8} align='end'>

                                                        <Text type='secondary'><Text strong>Valoración: </Text>
                                                            <Rate disabled defaultValue={reputations.score}/>

                                                        </Text>
                                                    </Col>
                                                </Row>

                                            </Card>
                                            : <div style={{textAlign: 'center'}}>
                                                <Card title='' extra='' cover='' loading/>
                                            </div>
                                        }
                                    </Col>
                                ))
                            }

                            {

                                visible < reputations.length
                                    ?
                                    <Col span={22}>
                                        <hr/>
                                        <div style={{textAlign: 'center'}}>
                                            <Button
                                                type={'primary'} onClick={handleloadmore}>
                                                Ver más
                                            </Button>
                                        </div>
                                    </Col>
                                    : <>
                                    </>
                            }
                            <br/>
                        </Col>

                    </Row>
            }

        </>
    );

};

export default ( Product );
