import { Col, Row, Avatar, Tabs } from 'antd'
import React from 'react'
import { UserOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const StoreDate = () => (
    <Row gutter={[16, 16]}>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
        <Col span={4}>
            <div className="item-cover">
                <span className="item__image">
                    <img src="https://laptopvang.com/wp-content/uploads/2020/04/MacBook-Pro-16-inch-Intel-Space-Gray-768x768.png" />
                </span>
                <div className="item__info">
                    <h3 className="item-name">Laptop 123</h3>
                    <button className="join-auction">Join Auction</button>
                </div>
            </div>
        </Col>
    </Row>
)


export const RealStore = ({type}) => {


    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="realStore-container">
            {type == "owner" ? <Link className="top-link" to="/userstore/allproduct">Go Back To Managerment <BsArrowRight style={{marginLeft:"10px"}} /></Link> : ""}
            <div className="header-part">

                <div className="userback">
                    <div className="layer"></div>
                    <div className="info-part">
                        <div className="avatar">
                            <Avatar size={80} icon={<UserOutlined />} />
                        </div>
                        <div className="nane">Nguyễn Thanh Tuấn <ShopOutlined /></div>
                    </div>
                    <div className="more-info">

                    </div>
                </div>

            </div>
            <div className="product-part">
                <Tabs
                    defaultActiveKey="1"
                    onChange={onChange}
                    items={[
                        {
                            label: `Tab 1`,
                            key: '1',
                            children: (<StoreDate/>),
                        },
                        {
                            label: `Tab 2`,
                            key: '2',
                            children: `Content of Tab Pane 2`,
                        },
                        {
                            label: `Tab 3`,
                            key: '3',
                            children: `Content of Tab Pane 3`,
                        },
                    ]}
                />
            </div>
        </div>
    )
}
