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
import { Link, useNavigate } from 'react-router-dom';

import {
  changeSearchNecess,
  changeSearchWord,
  changeSearchType,
  changeSearchProducer,
  changeSearchPrice,
  fullSearch,
  getCategory,
} from '../../../redux/filter/filterSlice'
import { useEffect } from 'react';
import { getAuctioning, getcategory, getProducts } from '../../../redux/home/HomeSlice';
import { getCartItems } from '../../../redux/cart/cartSlice';
import { getAllNoti } from '../../../redux/usernotification/userNotificationSlice';
const { Countdown } = Statistic;


const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};
const testDate = new Date("2022-12-12 16:20:30.000")

const auctionTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000

const passTime = Date.now() - testDate.getTime()
const remainTime = auctionTime - passTime






export const Home = () => {
  const { loading, categoryList, auctionList, productList } = useSelector(store => store.home)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const convertRemainTime = (time) => {
    const auctionTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 //2 day
    const startTime = new Date(time)
    const passTime = Date.now() - startTime.getTime()
    return auctionTime - passTime
  }



  const renderCategory = () => {
    return categoryList.map((category) => (
      <Col
        xl={4}
        className="category__body-item"
        key={category.id}
        onClick={async () => {
          const newObj = {
            nameCategory: category.name,
            nameManufacturer: "all",
            statusProduct: "all",
            increase: "",
            maxPrice: 1000000000,
            minPrice: 0,
            keyValue: ""
          }
          await dispatch(fullSearch(newObj))
          await dispatch(changeSearchNecess("All"))
          await dispatch(changeSearchWord(""))
          await dispatch(changeSearchProducer("All"))
          await dispatch(changeSearchPrice(""))
          await dispatch(changeSearchType(category.name))
          navigate("/seachresult")
        }}
      >
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
          <span className="item-now-price">{auction.priceTransaction.toLocaleString()} VND</span>
          <div className="bottom-part">
            <div className="remain-auction-time">
              <Countdown style={{ color: "red" }} title="Countdown" value={convertRemainTime(auction.timeStart)} />
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
              <Link to={`/productdetail/${product.id}`}>{product.name}</Link>
            </h3>
            <span>Seller: <Link to={`/store/${product.accountName}`}>{product.accountName}</Link></span>
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
    dispatch(getCategory())
    dispatch(getCartItems(sessionStorage.getItem('accountName')))
    dispatch(getAllNoti())
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
     

      <div className="suggestion">
        <div className="suggestion__header">
          <h1>Maybe You Will Want</h1>
          <Link
            to="/seachresult"
            onClick={async () => {


              const newObj = {
                nameCategory: "all",
                nameManufacturer: "all",
                statusProduct: "suggestion",
                increase: "",
                maxPrice: 1000000000,
                minPrice: 0,
                keyValue: ""
              }
              await dispatch(fullSearch(newObj))
              await dispatch(changeSearchNecess("Suggestion"))
              await dispatch(changeSearchWord(""))
              await dispatch(changeSearchType("All"))
              await dispatch(changeSearchProducer("All"))
              await dispatch(changeSearchPrice(""))
              navigate("/seachresult")
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
