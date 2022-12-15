import React from 'react'
import { Row, Col, Spin, Statistic } from 'antd';
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
import { useEffect } from 'react';
import { getAuctioning, getcategory, getProducts } from '../../../redux/home/HomeSlice';
const { Countdown } = Statistic;


const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};
const testDate = new Date(2022,12,15,3,32,30)

const auctionTime = Date.now() + 1000 * 60 * 60 * 24*10 + 1000

const passTime = Date.now() - testDate
const remainTime = passTime + auctionTime

console.log(new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 60000 * 32 + 1000 * 30))


const temp = Date.now() + 1000 * 60 * 60 * 24 * 2 + 60000 * 32 + 1000 * 30



export const Home = () => {
  const { loading, categoryList, auctionList, productList } = useSelector(store => store.home)
  const dispatch = useDispatch()

  const renderCategory = () => {
    return categoryList.map((category) => (
      <Col xl={4} className="category__body-item" key={category.id}>
        <span className="icon">
          <img src={category.imageUrl} alt="" />
        </span>
        <span className="title">{category.name}</span>
      </Col>
    ))
  }

  const renderAuctionList = () => {
    return auctionList.map((auction) => (
      <div className="item">
        <span className="item__image">
          <img src={`./${auction.imageProduct}`} />
        </span>
        <div className="item__info">
          <h3 className="item-name">
            <Link>{auction.productName}</Link>
          </h3>
          <span className="item-now-price">1.000.000 VND</span>
          <div className="bottom-part">
            <div className="remain-auction-time">
              <Countdown style={{ color: "red" }} title="Countdown" value={auctionTime} />
            </div>
          </div>
        </div>

      </div>
    ))
  }

  const renderProductList = () => {
    return productList.map((product) => (
      <Col className='item' xl={4}>
        <div className="item-cover">
          <div className="item__image">
            <img src={`./${product.imageProduct}`} />
          </div>
          <div className="item__info">
            <h3 className="item-name">
              <Link>{product.name}</Link>
            </h3>
            <span>Seller: <Link>{product.accountName}</Link></span>
          </div>
          <button className="join-auction">Join Auction</button>
        </div>
      </Col>
    ))
  }

  useEffect(() => {
    dispatch(getcategory())
    dispatch(getAuctioning())
    dispatch(getProducts(12))
  }, [])

  return (
    <div className="home-container">

      <HomeCarousel />
      <div className="category">
        <div className="loader" style={{ display: loading ? "flex" : "none" }}><Spin size="large" /></div>
        <h1 className="category__header">
          Category
        </h1>

        <Row className="category__body" gutter={[16, 16]}>
          {renderCategory()}
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
            {renderAuctionList()}
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
            {renderProductList()}

          </Row>
          <button
            className="more-btn"
            onClick={() => dispatch(getProducts(24))}
          >
            More
          </button>
        </div>
      </div>
    </div>
  )
}
