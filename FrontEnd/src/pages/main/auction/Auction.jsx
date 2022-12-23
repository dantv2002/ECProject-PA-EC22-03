import { Avatar, Button, Col, Form, Input, InputNumber, Row, Statistic } from 'antd'
import React, { useEffect } from 'react'
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionDetail } from '../../../redux/auction/AuctionSlice';
import { Link, useParams } from 'react-router-dom';
import { mainDomain } from '../../../util/constants/mainUrl';
import { registeruser, sendName } from '../../../components/AuctionSocket/AuctionSocket';
const { Countdown } = Statistic;


export const Auction = () => {
    const dispatch = useDispatch()
    let { id } = useParams();
    const { auctionDetail, loading, commentList } = useSelector(store => store.auction)
    console.log(auctionDetail)
    const onFinish = (values) => {
        console.log(values)
        sendName(
            {
                "auctionId": auctionDetail.auctionId,
                "seller": sessionStorage.getItem('accountName'),
                "price": values.price,
                "timeAuction": new Date().toISOString(),
                "comment": values.comment
            }
        )
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const convertRemainTime = (time) => {
        const auctionTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 //2 day
        const startTime = new Date(time)
        const passTime = Date.now() - startTime.getTime()
        return auctionTime - passTime
    }
    console.log(commentList)
    const renderComment = () => {
        return commentList.map((comment) => {
            return <div className={`message-container ${comment.accountNamePerson === sessionStorage.getItem('accountName') ? "me" : ""}`}>
            <div className="avatar">
                <Avatar size={40} icon={<UserOutlined />} />
            </div>
            <div className="info">
                <div className="name-time">
                    <h5>{comment.accountNamePerson}</h5>
                    <span>{comment.timeOffer.slice(0, -7)}</span>
                </div>
                <div className="message">
                    {comment.comment}
                </div>
                <div className="price">
                    Price:
                    <span> {comment.offeredPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
        })
    }

    useEffect(() => {

        const a = {
            auctionid: id,
            accountName: sessionStorage.getItem('accountName') !== null ? sessionStorage.getItem('accountName') : "",
        }
        registeruser()
        dispatch(getAuctionDetail(a))
    }, [])
    return (
        <div className="auction-container">
            <div className="product-info">
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="all-product-img">
                            <div className="product-img">
                                <img style={{ width: "100%" }} src={`../${auctionDetail.imageProduct ? auctionDetail.imageProduct.substring(1) : ""}`} />
                            </div>

                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="main-info">
                            <h1>{auctionDetail.productName}</h1>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Session Owner:</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <a>{auctionDetail.buyer}</a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="info-box">
                                <Countdown value={convertRemainTime(auctionDetail.timeStart)} />
                            </div>


                        </div>
                        <div className="bottom-part">
                            <div className="banner">
                                Current Price
                            </div>
                            <div className="number">{auctionDetail?.startPrice?.toLocaleString()} VND</div>

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
                                    <h3>{sessionStorage.getItem('accountName')}</h3>
                                </div>
                            </div>
                            <div className="box-chat">
                                {renderComment()}
                            </div>
                            {auctionDetail.statusOfCurrentUser === 4 ?
                                <div style={{ textAlign: "center", paddingBlock: "20px" }}>You must <Link to="/login">Login</Link> to join this auction</div>
                                :
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

                                            name="price"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Price!',
                                                },
                                            ]}
                                        >
                                            <Input type='number' max={20000000} style={{ width: "100%" }} />
                                        </Form.Item>

                                        <Form.Item

                                            name="comment"
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
                                            style={{ textAlign: "right", marginTop: "20px" }}
                                        >
                                            <button> <SendOutlined /> Send</button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            }

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
                            <div className="info">{auctionDetail.timeStart}</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">End Time</div>
                            <div className="info">{auctionDetail.timeEnd}</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Participants</div>
                            <div className="info">{auctionDetail.amountSeller}</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Auction ID</div>
                            <div className="info">{auctionDetail.auctionId}</div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="label">Session Onner</div>
                            <div className="info">{auctionDetail.nameBuyer}</div>
                        </Col>
                    </Row>
                    <Row gutter={32}>

                    </Row>
                </div>
            </div>
        </div>
    )
}
