import { Avatar, Col, Row } from 'antd'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserOutlined, InfoCircleOutlined, NotificationOutlined, ReconciliationOutlined,ShopOutlined } from '@ant-design/icons';

export const UserInfo = () => {

  const [tabActive, setTabActive] = useState({
    info: "",
    noti: "active",
    order: "",
    store: ""
  })

  return (
    <div className="userinfo-container">
      <Row gutter={32}>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
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
                to="user/personalinfo"
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
                Personal Infomation
              </li>
              </Link>
              <Link 
                to="user/notification"
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
                <span><NotificationOutlined /></span>
                My Notification
              </li>
              </Link>
              <Link 
                to="user/personalinfo"
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
                to="user/personalinfo"
                onClick={() => {
                  setTabActive({
                    info: "",
                    noti: "",
                    order: "",
                    store: "active"
                  })
                }}
              >

              </Link>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
        <Outlet/>
        </Col>
      </Row>
   
    </div>
  )
}
