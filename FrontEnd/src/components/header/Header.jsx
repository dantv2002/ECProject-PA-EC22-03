import React, { useEffect, useState } from 'react'
import { Col, Row, Input, Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
  DeleteOutlined,
  BellOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';

import {
  changeSearchWord,
  changeSearchType,
  changeSearchProducer,
  changeSearchPrice,
  changeSearchNecess,
  filterWithWord,

} from '../../redux/filter/filterSlice'
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { BiRegistered } from 'react-icons/bi';
import { poppupNoti } from '../../util/notification/Notification';

const { Search } = Input;

export const Header = () => {

  const { notiList } = useSelector(store => store.userNotification)
  const { itemList } = useSelector((store) => store.cart);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSearch = async (value, object) => {
    await dispatch(changeSearchWord(value))
    await dispatch(changeSearchType("All"))
    await dispatch(changeSearchProducer("All"))
    await dispatch(changeSearchPrice(""))
    await dispatch(changeSearchNecess("All"))
    await dispatch(filterWithWord(value))
    navigate("/seachresult")
  };
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
            <img src={noti.imageUrl} />
          </Col>
          <Col xs={21} sm={21} md={21} lg={21} xl={21} className="item-info no-center">
            {noti.type === "0" ?
              <>
                <div className="description">
                  Bạn vừa được mời vào một phiên đấu giá của sản phẩm <Link>{noti.productName}</Link>
                </div>
                <div className="date">{noti.date}</div>
              </>
              :
              <>
                <div className="description">
                  Sản phẩm
                  <Link> {noti.productName} </Link>
                  của phiên đấu giá
                  <Link> {noti.auctionId} </Link>

                  <span style={{ color: "red" }}><ArrowDownOutlined /> Đã bị Giảm</span>
                </div>
                <div className="date">{noti.date}</div>
              </>
            }

          </Col>
        </Row>
      </li>
    ))
  )
  const renderCartItems = () => (

    itemList.map((item, index) => (
      <li key={index}>
        <span className='product-img' style={{ width: "50px", height: "50px" }}><img style={{ width: "100%" }} src={`./${item.image ? item.image.substring(1) : ""}`} /></span>
        <div className='product-info'>
          <span className='product-info__name'>{item.name}</span>
          <span className='product-info__price'>{item.price.toLocaleString()} VND</span>
        </div>
        <span className='no-of-product'>1</span>
      </li>
    ))
  )

  return (
    <>
      <Row className="my-container" gutter={16}>
        <Col xl={5} className="logo">
          <Link to="" style={{display:'flex', width:"100px", height:"100px", alignItems:"center"}}>
            <img style={{width:"100%"}} src="./logo.png"/>
            <span>Winner</span>
          </Link>
        </Col>
        <Col xl={9} className="search-bar">

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton size='large'
          />


        </Col>
        {sessionStorage.getItem("accountName") !== null ?
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
              <span className="label">{sessionStorage.getItem("accountName")}</span>
              <div className="user__option" style={{ display: userOptionStatus ? "flex" : "none" }}>
                <span onClick={() => { navigate('/userstore/allproduct') }}>My Store</span>
                <span onClick={() => { navigate('/user/personalinfo') }}>My Info</span>
                <span onClick={() => {
                  sessionStorage.removeItem("accountName")
                  sessionStorage.removeItem("accessToken")
                  poppupNoti.logoutSuccess()
                }}>Logout</span>
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
                  {renderNoti().length === 0 ? <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    style={{ padding: "30px" }}
                    imageStyle={{
                      height: 60,
                    }}
                    description={
                      <span>
                        You don't have any notification
                      </span>
                    }
                  >

                  </Empty> :
                    renderNoti()}
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
                  {renderCartItems()}
                </ul>
              </div>
              <div className='cart-detail__footer' style={{ justifyContent: 'flex-end' }}>

                <span
                  className="proceed-button"
                  onClick={() => navigate('/proceed')}
                >
                  PROCEED
                </span>
              </div>
            </div>
          </Col>
          :
          <Col xl={10} className="cart-user">
            <div
              className={`cart ${cartActive ? "active" : ""}`}
              style={{ paddingBlock: " 7px" }}
              onClick={() => {
                navigate('/login')
              }}
            >
              <span className="icon" style={{ display: "flex" }}>
                <AiOutlineLogin />
              </span>
              <span className="label">Login</span>

            </div>
            <div
              className={`user ${userActive ? "active" : ""}`}
              style={{ paddingBlock: " 7px" }}
              onClick={() => {
                navigate('/register')
              }}
            >
              <span className="icon" style={{ display: "flex" }}>

                <BiRegistered />
              </span>
              <span className="label">Register</span>
            </div>
          </Col>
        }

      </Row>

    </>
  )
}
