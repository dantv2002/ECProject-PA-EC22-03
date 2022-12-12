import { Col, Row } from 'antd'
import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons';

export const ProductDetail = () => {
    return (
        <div className="product-detail_container">
            <div className="product-info">
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="all-product-img">
                            <div className="product-img">
                                <img style={{ width: "100%" }} src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1658485104350-mbair2022-m2-256gb-midnight.jpg&w=640&q=75" />
                            </div>
                            <ul>
                                <li className="active">
                                    <img src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1658485104350-mbair2022-m2-256gb-midnight.jpg&w=640&q=75" />
                                </li>
                                <li>
                                    <img src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1655452036715-macbookair-m2-sb-2.jpg&w=640&q=75" />
                                </li>
                                <li>
                                    <img src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1655452036729-macbookair-m2-sb-3.jpg&w=640&q=75" />
                                </li>
                                <li>
                                    <img src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1655452036703-macbookair-m2-sb-1.jpg&w=640&q=75" />
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="main-info">
                            <h1>Macbook Air M2 2022</h1>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Seller</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <a>Huynh Thanh Tuan</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Thuong Hieu</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <a>Apple</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Danh muc</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <a>Laptop</a>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                        <div className="bottom-part">
                            <div className="banner">
                                So Luong
                            </div>
                            <div className="number">99 Cai</div>
                            <button>Aucton Now</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="Product-description">
                <h1>Product Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum accusantium, doloremque reiciendis facilis eius debitis ipsa nam. Veniam eum quod consequatur obcaecati laudantium natus tempore esse aliquid iusto maxime.</p>
            </div>
            <div className="product-evaluate">
                <h1>Product Description</h1>
                <div className="evaluate">
                    <div className="first-line-info">
                        <div className="name">Nguyen Van A</div>
                        <div className="check"><CheckCircleOutlined /> Already Buyed</div>
                        <div className="date">12/12/2022</div>
                    </div>
                    <div className="feedback">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, maxime debitis mollitia nihil, reprehenderit voluptatem quam animi distinctio ad fugiat iste voluptate architecto vel. Dolor nihil ratione aperiam in asperiores.
                    </div>
                </div>
                <div className="evaluate">
                    <div className="first-line-info">
                        <div className="name">Nguyen Van A</div>
                        <div className="check"><CheckCircleOutlined /> Already Buyed</div>
                        <div className="date">12/12/2022</div>
                    </div>
                    <div className="feedback">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, maxime debitis mollitia nihil, reprehenderit voluptatem quam animi distinctio ad fugiat iste voluptate architecto vel. Dolor nihil ratione aperiam in asperiores.
                    </div>
                </div>
            </div>
        </div>
    )
}
