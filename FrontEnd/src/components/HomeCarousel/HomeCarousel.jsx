import React from 'react'
import Slider from "react-slick";
import { Col, Row, } from 'antd';
import {
    ArrowRightOutlined
  } from '@ant-design/icons';

export const HomeCarousel = () => {
    const settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear"
      };
  return (
    <div className='carousel-container'>
        <Slider {...settings}>
          <Row className="item" gutter={16}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={'./court-hammer-books-judgment-law-concept.jpg'}/>
            </Col>
            <Col className="info" xs={12} sm={12} md={12} lg={12} xl={12}>
                <span>Welcom to Reverse Auction Online </span>
                <a>Learn more <ArrowRightOutlined /></a>
            </Col>
          </Row>
        </Slider>
      </div>
  )
}
