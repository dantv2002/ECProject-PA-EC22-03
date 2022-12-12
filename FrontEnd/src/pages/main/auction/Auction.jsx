import { Avatar, Button, Col, Form, Input, InputNumber, Row, Statistic } from 'antd'
import React from 'react'
import { UserOutlined,SendOutlined } from '@ant-design/icons';
const { Countdown } = Statistic;


export const Auction = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
    return (
        <div className="auction-container">
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
                                <Countdown value={deadline} />
                            </div>


                        </div>
                        <div className="bottom-part">
                            <div className="banner">
                                Current Price
                            </div>
                            <div className="number">20.000.000</div>
                            <button>Aucton Now</button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="auction-part">
                <Row gutter={32}>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16}>

                        <div className="pricing-comment">
                            <div className="seller-info">
                                <div className="avatar">
                                    <Avatar size={50} icon={<UserOutlined />} />
                                </div>
                                <div className="info">
                                    <span>Seller</span>
                                    <h3>Huỳnh Thanh Tuấn</h3>
                                </div>
                            </div>
                            <div className="box-chat">
                                <div className='message-container'>
                                    <div className="avatar">
                                        <Avatar size={40} icon={<UserOutlined />} />
                                    </div>
                                    <div className="info">
                                        <div className="name-time">
                                            <h5>Bao Nguyen</h5>
                                            <span>10:20</span>
                                        </div>
                                        <div className="message">
                                            Giá như vậy sao mà người ta mua được bro
                                        </div>
                                        <div className="price">
                                            Price:
                                            <span> 30.000.000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='message-container'>
                                    <div className="avatar">
                                        <Avatar size={40} icon={<UserOutlined />} />
                                    </div>
                                    <div className="info">
                                        <div className="name-time">
                                            <h5>Bao Nguyen</h5>
                                            <span>10:20</span>
                                        </div>
                                        <div className="message">
                                            Giá như vậy sao mà người ta mua được bro
                                        </div>
                                        <div className="price">
                                            Price:
                                            <span> 30.000.000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='message-container me'>
                                    <div className="avatar">
                                        <Avatar size={40} icon={<UserOutlined />} />
                                    </div>
                                    <div className="info">
                                        <div className="name-time">
                                            <h5>Thanh Tuan</h5>
                                            <span>10:20</span>
                                        </div>
                                        <div className="message">
                                            Giá như vậy sao mà người ta mua được bro
                                        </div>
                                        <div className="price">
                                            Price:
                                            <span> 30.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input-form">
                        
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                    
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Price!',
                                            },
                                        ]}
                                    >
                                        <Input type='number' max={20000000} style={{width: "100%"}}/>
                                    </Form.Item>

                                    <Form.Item
                 
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Comment!',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea showCount maxLength={50} />
                                    </Form.Item>

                                    

                                    <Form.Item
                                        wrapperCol={{
                                          
                                            span: 24,
                                        }}
                                        style={{textAlign: "right", marginTop:"20px"}}
                                    >
                                        <button> <SendOutlined /> Send</button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>

                    </Col>
                </Row>
            </div>

            <div className="auction-description">
                <h1>Auction Description</h1>
                <div className="description">
                    <Row gutter={[32, 32]}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Start Time</div>
                            <div className="info">2022/11/19 (T7) 09:31</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">End Time</div>
                            <div className="info">2022/11/20 (CN) 09:31</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Starting Price</div>
                            <div className="info">50.000.000</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Participants</div>
                            <div className="info">5</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Auction ID</div>
                            <div className="info">A12561123</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Session Onner</div>
                            <div className="info">2022/11/20 (CN) 09:31</div>
                        </Col>
                    </Row>
                    <Row gutter={32}>

                    </Row>
                </div>
            </div>
        </div>
    )
}
