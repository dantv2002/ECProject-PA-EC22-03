import { Col, Row } from 'antd'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaReceipt } from "react-icons/fa";
import { OrderChart } from '../../../components/admin/orderChart/OrderChart';
import { RevenueChart } from '../../../components/admin/revenueChart/RevenueChart';
export const HomePage = () => {
    return (
        <div className="admin-home-container">
            <div className='statistic-part'>
                <Row gutter={80}>
                    <Col span={8}>
                        <div className="data-container">
                            <div className="data-icon" style={{ color: "rgb(3, 201, 215)", backgroundColor: "rgb(229, 250, 251)" }}>
                                <CiMoneyCheck1 />
                            </div>
                            <h3 >
                                Total Revenue (By month)
                            </h3>
                            <div className="data" style={{ color: "rgb(3, 201, 215)" }}>300.000 VND</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="data-container">
                            <div className="data-icon" style={{ color: "rgb(255, 244, 229)", backgroundColor: "rgb(254, 201, 15)", fontSize: "30px", padding: "15px 15px" }}>
                                <FaReceipt />
                            </div>
                            <h3>
                                Total Order (By Month)
                            </h3>
                            <div className="data" style={{ color: "rgb(254, 201, 15)" }}>30</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="data-container">
                            <div className="data-icon" style={{ color: "rgb(0, 194, 146)", backgroundColor: "rgb(235, 250, 242)", fontSize: "30px", padding: "15px 15px" }}>
                                <AiOutlineUser />
                            </div>
                            <h3>
                                Total User (Now)
                            </h3>
                            <div className="data" style={{ color: "rgb(0, 194, 146)" }}>30</div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="chart-part">
                <Row gutter={30}>
                    <Col span={24}>
                        <RevenueChart />
                    </Col>
                    <Col span={12}>
                        <OrderChart />

                    </Col>
                    <Col span={12}>
                        <OrderChart />
                    </Col>

                </Row>

            </div>
        </div>
    )
}
