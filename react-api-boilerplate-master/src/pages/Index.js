import React, { useState } from 'react';
import Carousel from '../components/Carousel';

import '../styles/app.css';
import {Row, Col} from "antd";
import Routes from "../constants/routes";
import logoW from "../images/logoW.png";
import artesanias from '../images/Categories_logos/artesanias.png';
import escénicas from '../images/Categories_logos/escénicas.png';
import literarias from '../images/Categories_logos/literarias.png';
import musicales from '../images/Categories_logos/musicales.png';
import plasticas from '../images/Categories_logos/plasticas.png'
import visuales from '../images/Categories_logos/visuales.png';
const contentStyle = {
    background: '#fff',

};
const HomePage = () => {


  return (
      <div style={contentStyle}>
          <Carousel/>
          <section>
              <div className="imgExplanation" >

                  <Row>
                      <Col span={7}>
                      </Col>
                      <Col span={10}>
                          <div><br/><br/><br/>
                              <h1  className="title">
                                  EXPLICACIÓN
                              </h1>

                          </div><br/><br/>
                          <p className="text">
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                          </p><br/><br/><br/><br/>

                      </Col>
                      <Col span={7}>

                      </Col>
                  </Row>

              </div>

          </section>

          <section ><br></br><br></br>
              <h1 className="subtitle2">CATEGORÍAS</h1>
              <div>
                  <Row>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME} >
                              <img className='categories' src={ musicales }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Musicales</span></h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME} >
                              <img className='categories' src={ literarias }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Literarias</span></h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME} >
                              <img className='categories' src={ escénicas }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Escénicas</span></h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME}  >
                              <img className='categories' src={ plasticas }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Plásticas</span></h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME} >
                              <img className='categories' src={ visuales }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artes Visuales</span></h1>
                          </a>
                      </Col>
                      <Col span={4} align='center'>
                          <a href={Routes.HOME} >
                              <img className='categories' src={ artesanias }  />
                              <h1 className="btnCategories"><span className="btnCategories-text">Artesanías</span></h1>
                          </a>
                      </Col>

                  </Row>

              </div>
          </section>



          <section ><br/><br/>
              <div className="imgHowBuy" >

                  <Row>
                      <Col span={13}>
                      </Col>
                      <Col span={10}>
                          <div>
                              <h1 className="title1">
                                  ¿CÓMO COMPRAR?
                              </h1>

                          </div>
                          <p className="text">
                              Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
                          </p>
                          <div className="button-container-2">
                              <span className="mas">VER MÁS</span>
                              <button id='work' type="button" name="Hover">VER MÁS</button>
                          </div><br></br>
                      </Col>
                      <Col span={1}>

                      </Col>
                  </Row>

              </div>
          </section>





        </div>





  );
};


export default HomePage;
