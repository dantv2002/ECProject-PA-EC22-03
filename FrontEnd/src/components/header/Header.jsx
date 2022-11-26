import React, { useEffect, useState } from 'react'
import { Col, Row, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
  DeleteOutlined,
  BellOutlined
} from '@ant-design/icons';

import {
  changeSearchWord,
  changeSearchType,
  changeSearchProducer,
  changeSearchPrice,
  changeSearchNecess,
} from '../../redux/filter/filterSlice'
import { useNavigate, Link } from 'react-router-dom';

const { Search } = Input;

export const Header = () => {

  const { notiList } = useSelector(store => store.userNotification)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSearch = (value) => {
    dispatch(changeSearchWord(value))
    dispatch(changeSearchType("All"))
    dispatch(changeSearchProducer("All"))
    dispatch(changeSearchPrice(""))
    dispatch(changeSearchNecess("All"))
    navigate("/seachresult")
  };
  const [searchResultStatus, setSearchResultStatus] = useState(false)
  const [userOptionStatus, setUserOptionStatus] = useState(false)
  const [cartDetailStatus, setCartDetailStatus] = useState(false)
  const [notiDetailStatus, setNotiDetailStatus] = useState(false)
  const [userActive, setUserActive] = useState(false)
  const [cartActive, setCartActive] = useState(false)
  const [notiActive, setNotiActive] = useState(false)

  const renderNoti = () => (
    notiList.map((noti) => (
      <li key={noti.id}>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="item-info">
            <img src="https://elmich.vn/FileUpload/Images/1849_1.jpg" />
          </Col>
          <Col xs={21} sm={21} md={21} lg={21} xl={21} className="item-info no-center">
            <div className="description">
              {noti.description}
            </div>
            <div className="date">{noti.date}</div>
          </Col>
        </Row>
      </li>
    ))
  )

  return (
    <>
      <Row className="my-container" gutter={16}>
        <Col xl={5} className="logo">
          <Link to=""><span>My Logo</span></Link>
        </Col>
        <Col xl={9} className="search-bar">
          <form>
            <Search
              onBlur={(e) => {
                setTimeout(() => {
                  setSearchResultStatus(false)
                }, 100)

              }}
              onFocus={() => setSearchResultStatus(true)}

              placeholder="input search text"
              onSearch={onSearch}
              enterButton size='large'
            />
          </form>
          <div className='search-result-box' style={{ display: searchResultStatus ? "block" : "none" }}>
            <div className='search-result-box__header'>
              <span className="label">Products</span>
              <span className="number-of-result">See all (17)</span>
            </div>
            <div className='search-result-box__body'>
              <ul>
                <li>
                  <span className="product-img">
                    <img src="./electronic_20_1.jpeg" />
                  </span>
                  <div className="product-info">
                    <span className="product-name">May xay sinh to</span>
                    <span className="product-price">100.000 VND</span>
                  </div>
                </li>
                <li>
                  <span className="product-img">
                    <img src="./electronic_20_1.jpeg" />
                  </span>
                  <div className="product-info">
                    <span className="product-name">May xay sinh to</span>
                    <span className="product-price">100.000 VND</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xl={10} className="cart-user">
          <div
            className={`cart ${cartActive ? "active" : ""}`}
            onClick={(e) => {
              setCartActive(!cartActive)
              setCartDetailStatus(!cartDetailStatus)
            }}
          >
            <span className="icon">
              <ShoppingCartOutlined />
            </span>
            <span className="label">My Cart</span>

          </div>
          <div
            className={`user ${userActive ? "active" : ""}`}
            onClick={() => {
              setUserActive(!userActive)
              setUserOptionStatus(!userOptionStatus)
            }}
          >
            <span className="icon">
              <UserOutlined />
            </span>
            <span className="label">Username</span>
            <div className="user__option" style={{ display: userOptionStatus ? "flex" : "none" }}>
              <span>My Info</span>
              <span>Logout</span>
            </div>
          </div>
          <div className={`notification ${notiActive ? "active" : ""}`}
            onClick={() => {
              setNotiActive(!notiActive)
              setNotiDetailStatus(!notiDetailStatus)
            }}
          >
            <BellOutlined />
            <div className="all-noti" style={{ display: notiDetailStatus ? "block" : "none" }}>
              <div className='top-part'>
                <h3>Notification</h3>
                <span><CloseOutlined /></span>
              </div>

              <ul>
                {renderNoti()}
              </ul>

              <div className='bottom-part'>
                <button><Link to="user/notification">See All</Link></button>
              </div>
            </div>
          </div>
          <div className="cart-detail" style={{ display: cartDetailStatus ? "block" : "none" }}>
            <div className="cart-detail__header">
              <span className="label">Your Cart</span>
              <span className="close-button" onClick={() => {
                setCartActive(false)
                setCartDetailStatus(false)
              }}><CloseOutlined /></span>
            </div>
            <div className="cart-detail__body">
              <ul>
                <li>
                  <span className='product-img'><img src="./electronic_20_1.jpeg" /></span>
                  <div className='product-info'>
                    <span className='product-info__name'>May xay sinh to</span>
                    <span className='product-info__price'>100.000 VND</span>
                  </div>
                  <span className='no-of-product'>1</span>
                  <span className='delete-product'><DeleteOutlined /></span>
                </li>
              </ul>
            </div>
            <div className='cart-detail__footer'>
              <span className="total-price">Total Price: <span>100.000 VND</span></span>
              <span
                className="proceed-button"
                onClick={() => navigate('/proceed')}
              >
                PROCEED
              </span>
            </div>
          </div>
        </Col>
      </Row>

    </>
  )
}
