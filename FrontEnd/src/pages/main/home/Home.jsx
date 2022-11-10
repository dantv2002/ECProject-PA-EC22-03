import React from 'react'
import { Row, Col } from 'antd';
import { HomeCarousel } from '../../../components/HomeCarousel/HomeCarousel';
import { useSelector, useDispatch } from 'react-redux';
import {
  PhoneOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

import Slider from "react-slick";
import { Link } from 'react-router-dom';

import {
  changeSearchNecess,
  changeSearchWord,
  changeSearchType,
  changeSearchProducer,
  changeSearchPrice,
} from '../../../redux/filter/filterSlice'


const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};



export const Home = () => {
  const dispatch = useDispatch()

  return (
    <div className="home-container">
      <HomeCarousel />
      <div className="category">
        <h1 className="category__header">
          Category
        </h1>

        <Row className="category__body" gutter={[16,16]}>
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
      <div className="auctioning">
        <div className="auctioning__header">
          <h1>Auctioning</h1> 
          <Link 
            to="/seachresult"
            onClick={() => {
              dispatch(changeSearchNecess("Auctioning"))
              dispatch(changeSearchWord(""))
              dispatch(changeSearchType("All"))
              dispatch(changeSearchProducer("All"))
              dispatch(changeSearchPrice(""))
            }}
          >
            More <ArrowRightOutlined />
          </Link>
        </div>
        <div className="auctioning__body">
          <Slider {...settings}>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>

            </div>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>

            </div>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>

            </div>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>

            </div>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>

              </div>

            </div>
            <div className="item">
              <span className="item__image">
                <img src="./Laptop.png" />
              </span>
              <div className="item__info">
                <h3 className="item-name">Laptop 123</h3>
                <span className="item-now-price">1.000.000 VND</span>
                <div className="bottom-part">
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>

            </div>
          </Slider>
        </div>
      </div>

      <div className="suggestion">
        <div className="suggestion__header">
          <h1>Maybe You Will Want</h1> 
          <Link 
            to="/seachresult"
            onClick={() => {
              dispatch(changeSearchNecess("Suggestion"))
              dispatch(changeSearchWord(""))
              dispatch(changeSearchType("All"))
              dispatch(changeSearchProducer("All"))
              dispatch(changeSearchPrice(""))
            }}
          >
            More <ArrowRightOutlined />
          </Link>
          
        </div>
        <div className="suggestion__body">

          <Row className='products' gutter={16}>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>

            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='item' xl={4}>
              <div className="item-cover">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>

          </Row>

        </div>
      </div>
    </div>
  )
}