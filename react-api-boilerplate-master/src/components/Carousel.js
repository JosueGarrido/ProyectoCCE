import React from 'react';
import {Carousel, Row, Col, Input} from "antd";

import { Button } from 'antd';
import '../styles/carousel.css';
import img1 from  '../images/home_gifs/artes-plasticas.gif';
import img2 from  '../images/home_gifs/artes-literarias.gif';
import img3 from  '../images/home_gifs/artes-escenicas.gif';
import img4 from  '../images/home_gifs/artes-musicales.gif';
import img5 from  '../images/home_gifs/artes-visuales.gif';
import img6 from  '../images/home_gifs/artesanias.gif';
/*const contentStyle = {
    display: 'flex',
    flexWrap:'wrap',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',



};*/

const contentStyle = {
    height: '700px',
    color: '#fff',

};

function carousel()  {
    const images=[img1,img2,img3,img4,img5,img6]
    console.log('iamgenes',images)
    return (
        <Row>
            <Col span={24}>
                <div>
                    <div >
                        <Carousel className="images" >
                            {images.map((image,index) => {
                                return (
                                    <div key={index}>
                                        {console.log('el id',index)}
                                        <div style={contentStyle} >
                                            {console.log('el url',image)}

                                            <img src={image} className="images"/>
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default carousel;
