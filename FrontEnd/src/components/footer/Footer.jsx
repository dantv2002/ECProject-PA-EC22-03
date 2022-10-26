import React from 'react'
import { Row, Col } from 'antd';

export const Footer = () => {
  return (
    <footer>
    <div className='footer'>
      <Row className='promotion-part' gutter={32}>
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <img src="./shipping.png"/>
          <span>Miễn Phí Giao Hàng</span>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <img src="./kisspng.png"/>
          <span>Trả Hàng Trong Vòng 7 Ngày</span>
        </Col>
        <Col sm={24}  md={12} lg={8} xl={6} className='item' >
          <img src="./card.png" style={{width:"35%"}}/>
          <span>Bảo Mật Thanh Toán</span>
        </Col>
        <Col sm={24}  md={12} lg={8} xl={6} className='item'>
          <img src="./icondt.png" style={{width:"35%"}}/>
          <span>Hỗ Trợ 24/7</span>
        </Col>
      </Row>
    </div>
    <div className='ano-footer'>
      <div className="inner-container">
      <Row gutter={16} >
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <h1>Về Winner</h1>
          <ul>
            <li>Giới Thiệu</li>
            <li>Bài Viết</li>
            <li>Liên Hệ</li>
          </ul>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <h1>Chăm sóc khách hàng</h1>
          <ul>
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn bán hàng</li>
          </ul>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <h1>Về Winner</h1>
          <ul>
            <li>Winner Pay</li>

          </ul>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6} className='item'>
          <h1>Theo dõi chúng tôi trên</h1>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedln</li>
          </ul>
        </Col>
      </Row>
      </div>
    </div>
    </footer>
  )
}
