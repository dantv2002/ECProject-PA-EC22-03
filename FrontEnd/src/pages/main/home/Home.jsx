import React from 'react'
import { Row, Col } from 'antd';
import { HomeCarousel } from '../../../components/HomeCarousel/HomeCarousel';
import {
  PhoneOutlined 
} from '@ant-design/icons';


export const Home = () => {
  return (
    <div className="home-container">
      <HomeCarousel/>
      <div className="category">
        <h1 className="category__header">
          Category
        </h1>
     
          <Row className="category__body"  gutter={16}> 
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
            <Col xl={4} className="category__body-item">
              <span className="icon"><PhoneOutlined /></span>
              <span className="title">Phone</span>
            </Col>
          </Row>
        </div>
    </div>
  )
}
