import React, { useState } from 'react';
import { Avatar, Col, Descriptions, Divider, Drawer, List, Row } from 'antd';
import { useSelector } from 'react-redux';
const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);
const DetailDrawer = ({open,showDrawer,onClose, type}) => {
    const {userOrderInfo, } = useSelector(store => store.userPage)
    return (
        <>
            <Drawer style={{zIndex:"100000000"}} width={640} placement="right" closable={false} onClose={onClose} open={open}>
                <h1
                    className="site-description-item-profile-p"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    Order #{userOrderInfo.orderId}
                </h1>

                <h2>Detail</h2>
                <Row>
                    <Col span={24}>
                    <div style={{ border: "1px solid #909090" }} className="order-info">
                        <Row>

                                <Col span={4}>
                                    <span className="image">
                                        <img style={{ width: '70px', height: '70px' }} src={`./${userOrderInfo?.imageProduct?.substring(1)}`} />
                                    </span>
                                </Col>
                                <Col span={20}>
                                <div style={{ marginLeft: "20px", marginTop:"10px"}}>
                                    <Row>
                           
                                            <Col span={12}>
                                                <div style={{ color: "#61abc1" }}>Name: {userOrderInfo.productName}</div>
                                                <div>Quantity: x1</div>
                                            </Col>
                                            <Col span={12}>
                                                <div>Status:
                                                    
                                                    <span> {userOrderInfo.statusOrder == 1 ? "Packing" : userOrderInfo.statusOrder == 2 ? "Delivering" : "Delivered"}</span>
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
                            <Descriptions.Item label="UserName">{userOrderInfo.buyerAccount}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={12}>
                        <Descriptions>
                            <Descriptions.Item label="Phone Number">{userOrderInfo.phone}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                    <Col span={24}>
                        <Descriptions>
                            <Descriptions.Item label="Email">{userOrderInfo.email}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>

            </Drawer>
        </>
    );
};
export default DetailDrawer;