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
                <img src="data:image/png;base64,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" />
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
