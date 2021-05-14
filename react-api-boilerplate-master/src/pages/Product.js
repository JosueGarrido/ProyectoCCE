import React, {useState} from 'react';
import CommentsList from '../components/CommentsList';
import ShowError from '../components/ShowError';
import {Link, useParams} from 'react-router-dom';
import {useProductsList} from '../data/useProductsList';
import {Avatar, Card, Col, Rate, Row, Skeleton, Typography, Image, Layout, Form} from 'antd';
import {useUser} from "../data/useUser";
import {useUserList} from "../data/useUserList";
import ProductsList from '../components/ProductsList';
import {useProduct} from "../data/useProduct";
import {useCategories} from "../data/useCategories";
import {Tabs, Button} from 'antd';
import Routes from "../constants/routes";
import NewComment from "../components/NewComment";
import {useReputationList} from "../data/useReputationList";
import {useQuestionsList} from "../data/UseQuestion";
import {useQuestionComments} from "../data/useQuestionComments";
import QuestionsList from "../components/QuestionsList";

const {TabPane} = Tabs;
const {Text, Title} = Typography;
const {Meta} = Card;
const Header = Layout.Header;

function callback(key) {
    console.log(key);
}

const Product = () => {
    let {id} = useParams();
    const product = useProduct(id);
    const category = useCategories(id);
    const user = useUser( id );
    const {products} = useProductsList(id);
    const {questions} = useQuestionComments(id);



    const { reputations } = useReputationList( id );
    const [ visible, setVisible ] = useState( 2 );
    const { questions2 } = useQuestionsList(id);
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
            <br/><br/><br/><br/>
            {

                <Row>
                    < Col span={3} align={'right'}>

                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>


                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>


                        <Col>

                            <img className={"borde-imagen"}
                                 height={90}
                                 width={90}
                                 src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                            />
                        </Col> <br/>
                    </Col>

                    <Col span={10} align={'center'}>

                        <img className={"borde-imagen"}
                             height={400}
                             width={400}
                             src='https://sergimateo.com/wp-content/2012/11/portadas-twitter-1.jpg'
                        />
                    </Col>


                    {

                        product.isLoading
                            ? <div>Cargando...</div>
                            : product.isError
                            ? <ShowError error={product.isError}/>
                            : <>

                                < Col span={7} align={'left'}>

                                    <Col>
                                        <h2 className={"subtitulo"}>
                                            {product.product.name}
                                        </h2>
                                        <p className={"texto"}>
                                            Categoría:
                                        </p>
                                        <p className={"texto"}>
                                            Autor:
                                        </p>
                                        <p className={"texto"}>
                                            Ubicación: {product.product.location}
                                        </p>

                                        <h2 className={"subtitulo"}>
                                            FICHA TÉCNICA
                                        </h2>
                                        <p className={"texto"}>
                                            Estilo: Impresionismo
                                        </p>
                                        <p className={"texto"}>
                                            Técnica: Óleo sobre madera
                                        </p>
                                        <p className={"texto"}>
                                            Temática: Libre
                                        </p>
                                        <p className={"texto"}>
                                            Soporte: Placa chapadur
                                        </p>
                                        <p className={"texto"}>
                                            Formato: xxx
                                        </p>
                                        <p className={"texto"}>
                                            Tamaño: 50 x 70 cm
                                        </p>

                                        <h2>

                                        </h2>
                                            </Col>
                                </Col>
                                    </>
                                }

                            <TabPane tab="Valoraciones" key="2">
                                <div>Cargando...</div>
                            </TabPane>




                </Row>

            }

            {


            }
            <br/><br/><br/>
            {

                <Row>
                    <Col span={24} align={'center'}>


                        <strong>Preguntas del producto </strong>
                    </Col>
                </Row>
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

            {

               questions === undefined
                    ? <Text>No cargan los datos</Text>
                    :
                    <Row gutter={30}>
                        <Col align='center' md={6}>
                            <Title level={3}>Preguntas: </Title>
                        </Col>
                        <Col md={18}>
                            <Col md={24}>
                                {
                                    questions.isLoading
                                        ? <Skeleton loading={questions.isLoading} active avatar/>
                                        : questions.isError
                                        ? <ShowError error={questions.isError}/>
                                        :  <QuestionsList productId={id} questions={questions}/>

                                }
                            </Col>
                            <br/>
                            {
                                questions.slice(0, visible).map((questions, i) => (
                                    <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>
                                        {questions.question
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
                                                                        alt={users[questions.user_id - 1].name}
                                                                        src={`http://localhost:8000/storage/${users[questions.user_id - 1].profile_picture}`}
                                                                    />}


                                                                    title={`Nombre de Usuario: ${users[questions.user_id - 1].name} ${users[questions.user_id - 1].last_name}`}
                                                                    description={`Pregunta: ${questions.question}`}
                                                                />
                                                        }
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

                                visible < questions.length
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

export default (Product);
