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
import '../styles/product.css';
import {useQuestionComments} from "../data/useQuestionComments";
import QuestionsList from "../components/QuestionsList";
import AnswerList from "../components/AnswerList";
import {useQuestionAnswer} from "../data/useQuestionAnswer";
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
const {TabPane} = Tabs;
const {Text, Title} = Typography;
const {Meta} = Card;
const Header = Layout.Header;

function callback(key) {
    console.log(key);
}

const Product = () => {
    let {id} = useParams();
    let {questionId} = useParams();
    const product = useProduct(id);
    const category = useCategories(id);
    const user = useUser( id );
    const {products} = useProductsList(id);
    const {questions} = useQuestionComments(id);
    const {answers} = useQuestionAnswer(questionId);


    const { reputations } = useReputationList( id );
    const [ visible, setVisible ] = useState( 2 );
    const [show, setShow] = React.useState(false);


    const onChangeAnswer = () => {
        setShow(!show);
    }





    const { users } = useUserList();
    const [disabled, setDisabled] = React.useState(true);


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
    const toggle = () => {
        setDisabled(!disabled);
    };

    console.log(questions)
    return (
        <>

            <br/><br/><br/><br/>
            {

                <Row>


                    {

                        product.isLoading
                            ? <div>Cargando...</div>
                            : product.isError
                            ? <ShowError error={product.isError}/>
                            : <>

                                < Col span={3} align={'right'}>

                                    <Col>

                                        <img className={"borde-imagen"}
                                             height={90}
                                             width={90}
                                             src={`http://localhost:8000/storage/${product.product.image}`}
                                        />
                                    </Col> <br/>


                                    <Col>

                                        <img className={"borde-imagen"}
                                             height={90}
                                             width={90}
                                             src={`http://localhost:8000/storage/${product.product.image}`}
                                        />
                                    </Col> <br/>


                                    <Col>

                                        <img className={"borde-imagen"}
                                             height={90}
                                             width={90}
                                             src={`http://localhost:8000/storage/${product.product.image}`}
                                        />
                                    </Col> <br/>
                                </Col>

                                <Col span={10} align={'center'}>

                                    <img className={"borde-imagen"}
                                         height={400}
                                         width={400}
                                         src={`http://localhost:8000/storage/${product.product.image}`}
                                    />
                                </Col>

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

                                <Col span={16} align={'right'}>
                                    <br/> <br/>
                                    <Button className={"boton-comprar"}
                                            href={Routes.PREPURCHASE.replace(':id', product.product.id)}>COMPRAR</Button>
                                </Col>
                            </>

                    }

                    <TabPane tab="Valoraciones" key="2">
                        <div>Cargando...</div>
                    </TabPane>

                </Row>



            }
            <br/><br/><br/>
            {

            }


                <Row>
                    <Col span={16} align={'center'}>


                        <h3>Preguntas del producto </h3>
                    </Col>
                </Row>
            }
            <br/>



            {

                questions === undefined
                    ? <Text>No cargan los datos</Text>
                    :
                    <Row gutter={30} >
                        <Col align='center' md={6}>
                            <Title level={3}>Preguntas: </Title>
                        </Col>
                        <Col md={18}  >
                            <Col md={24} >

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
                                    <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}  >
                                        {questions.question
                                            ? <Card className={'cuadro'}>
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

                                                {
                                                    questions.answers.slice(0, visible).map((answers, i) => (

                                                        <Col xs={24} sm={18} md={24} style={{marginBottom: 20}} key={i}>

                                                            {answers
                                                                ?

                                                                <Card className={'cuadro'}>
                                                                    <Row>

                                                                        <Col span={14}>

                                                                            {
                                                                                users === undefined
                                                                                    ? <Text>No cargan los datos</Text>

                                                                                    :
                                                                                    <Meta
                                                                                        avatar={<Avatar
                                                                                            size={100}
                                                                                            alt={users[answers.user_id - 1].name}
                                                                                            src={`http://localhost:8000/storage/${users[answers.user_id - 1].profile_picture}`}

                                                                                        />}


                                                                                        title={`Nombre de Usuario: ${users[answers.user_id - 1].name} ${users[answers.user_id - 1].last_name}`}
                                                                                        description={`Respuesta: ${answers.answer}`}
                                                                                    />
                                                                            }


                                                                        </Col>

                                                                    </Row>

                                                                </Card> : <div style={{textAlign: 'center'}}>
                                                                    <Card title='' extra='' cover='' loading/>
                                                                </div>
                                                            }
                                                        </Col>
                                                    ))
                                                }







                                                <Button type="primary" onClick={onChangeAnswer}>
                                                    Open
                                                </Button>

                                                <Col
                                                    show={show}
                                                    md={24}>

                                                    {
                                                        questions.isLoading
                                                            ? <Skeleton loading={questions.isLoading} active avatar/>
                                                            : questions.isError
                                                            ? <ShowError error={questions.isError}/>
                                                            : <AnswerList questionId={questions.id} />

                                                    }

                                                </Col>

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
                                                type={'primary'} onClick={handleloadmore} className={'boton-ver-mas'}>
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
