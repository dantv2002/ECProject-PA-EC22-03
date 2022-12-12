import React, { useState } from 'react'
import { Avatar, Col, Row } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { UserOutlined, InfoCircleOutlined, PlusSquareOutlined, ReconciliationOutlined, ShopOutlined } from '@ant-design/icons';
import { RiAuctionLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export const UserStore = () => {
  const [tabActive, setTabActive] = useState({
    info: "active",
    noti: "",
    order: "",
    store: ""
  })
  return (
    <div className="userstore-container">
      <Row gutter={32}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="user-firstinfo">
            <div className="avatar">
              <Avatar size={50} icon={<UserOutlined />} />
            </div>
            <div className="info">
              <span>Account of</span>
              <h3>Huỳnh Thanh Tuấn</h3>
            </div>
          </div>
          <div className="user-navigation">
            <ul>
              <Link
                to="userstore/allproduct"
                onClick={() => {
                  setTabActive({
                    info: "active",
                    noti: "",
                    order: "",
                    store: ""
                  })
                }}
              >
                <li className={tabActive.info}>
                  <span><InfoCircleOutlined /></span>
                  All Products
                </li>
              </Link>

              <Link
                to="userstore/ordermanage"
                onClick={() => {
                  setTabActive({
                    info: "",
                    noti: "",
                    order: "active",
                    store: ""
                  })
                }}
              >
                <li className={tabActive.order}>
                  <span><ReconciliationOutlined /></span>
                  Order Management
                </li>
              </Link>
              <Link
                to="userstore/auctioningproducts"
                onClick={() => {
                  setTabActive({
                    info: "",
                    noti: "active",
                    order: "",
                    store: ""
                  })
                }}
              >
                <li className={tabActive.noti}>
                  <span style={{ marginRight: "28px" }}><RiAuctionLine /></span>
                  Auctioning Products
                </li>
              </Link>
            </ul>
            <Link
              to="/userstore/realstore"
              className='gotoStore'
              style={{display:"flex", alignItems:"center", marginTop:"20px"}}
            >
              See My Real Store <BsArrowRight style={{marginLeft:"10px"}} />
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}
