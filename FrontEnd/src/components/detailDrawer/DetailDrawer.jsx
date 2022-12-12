import React, { useState } from 'react';
import { Avatar, Col, Descriptions, Divider, Drawer, List, Row } from 'antd';
const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);
const DetailDrawer = ({open,showDrawer,onClose}) => {
    
    return (
        <>
            <Drawer style={{zIndex:"100000000"}} width={640} placement="right" closable={false} onClose={onClose} open={open}>
                <h1
                    className="site-description-item-profile-p"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    Order #11238951
                </h1>

                <h2>Detail</h2>
                <Row>
                    <Col span={24}>
                    <div style={{ border: "1px solid #909090" }} className="order-info">
                        <Row>

                                <Col span={4}>
                                    <span className="image">
                                        <img style={{ width: '70px', height: '70px' }} src="https://dienthoaigiakho.vn/_next/image?url=https%3A%2F%2Fcdn.dienthoaigiakho.vn%2Fphotos%2F1658485104350-mbair2022-m2-256gb-midnight.jpg&w=640&q=75" />
                                    </span>
                                </Col>
                                <Col span={20}>
                                <div style={{ marginLeft: "20px", marginTop:"10px"}}>
                                    <Row>
                           
                                            <Col span={12}>
                                                <div style={{ color: "#61abc1" }}>Name: Macbook super promax</div>
                                                <div>Quantity: x1</div>
                                            </Col>
                                            <Col span={12}>
                                                <div>Status:
                                                    <span> Delivery</span>
                                                </div>
                                                <div style={{ fontSize:"20px", fontWeight:"bold", color: "#368196" }}>Price: 100.000.000</div>
                                            </Col>
                                    
                                    </Row>
                                    </div>
                                </Col>
                        
                        </Row>
                        </div>
                    </Col>

                </Row>
                <Divider />
                <h2 className="">Delivery address</h2>
                <Row>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="City/Province">Hồ Chí Minh</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="District">Quận 9</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="Ward">Phường Tăng Nhơn Phú A</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={24}>
                        <Descriptions>
                            <Descriptions.Item label="Address Detail">484 Lê Văn Việt</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>

                <Divider />
                <h2>Buyer Info</h2>
                <Row>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="Phone Number">0123512</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={24}>
                        <Descriptions>
                            <Descriptions.Item label="Email">adsjhasj@gmail.com</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>

            </Drawer>
        </>
    );
};
export default DetailDrawer;