import React, {useEffect,useState} from 'react'
import { Col, Row,Input } from 'antd';
import {
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
  DeleteOutlined,
  BellOutlined
} from '@ant-design/icons';

const { Search } = Input;

export const Header = () => {
  const onSearch = (value) => console.log(value);
  const [searchResultStatus, setSearchResultStatus] = useState(false)
  const [userOptionStatus, setUserOptionStatus] = useState(false)
  const [cartDetailStatus, setCartDetailStatus] = useState(false)
  const [userActive, setUserActive] = useState(false)
  const [cartActive, setCartActive] = useState(false)

  

  return (
    <>
        <Row className="my-container" gutter={16}>
          <Col xl={5} className="logo">
            <span>My Logo</span>
          </Col>
          <Col xl={9} className="search-bar">
            <form>
              <Search 
                onBlur={(e) => {
                  setTimeout(() => {
                    setSearchResultStatus(false)
                  },100)
                 
                }}
                onFocus={() => setSearchResultStatus(true)}
                
                placeholder="input search text" 
                onSearch={onSearch}
                enterButton size='large' 
               />
            </form>
            <div className='search-result-box' style={{display: searchResultStatus ? "block" : "none"}}>
              <div className='search-result-box__header'>
                <span className="label">Products</span>
                <span className="number-of-result">See all (17)</span>
              </div>
              <div className='search-result-box__body'>
                <ul>
                  <li>
                    <span className="product-img">
                      <img src="./electronic_20_1.jpeg"/>
                    </span>
                    <div className="product-info">
                      <span className="product-name">May xay sinh to</span>
                      <span className="product-price">100.000 VND</span>
                    </div>
                  </li>
                  <li>
                    <span className="product-img">
                      <img src="./electronic_20_1.jpeg"/>
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
               <ShoppingCartOutlined/>
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
              <div className="user__option" style={{display: userOptionStatus ? "flex" : "none"}}>
                <span>My Info</span>
                <span>Logout</span>
              </div>
            </div>
            <div className='notification'><BellOutlined /></div>
            <div className="cart-detail" style={{display: cartDetailStatus ? "block" : "none"}}>
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
                      <span className='product-img'><img src="./electronic_20_1.jpeg"/></span>
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
                  <span className="proceed-button">PROCEED</span>
                </div>
              </div>
          </Col>
        </Row>
             
    </>
  )
}
