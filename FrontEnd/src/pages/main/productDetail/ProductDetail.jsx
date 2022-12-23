import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../redux/product/ProductSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createAuction, resetTempAuctionId } from '../../../redux/auction/AuctionSlice';
import SuccessfullCreated from '../../../components/createAuctionModalSuccess/SuccessfullCreated';

export const ProductDetail = () => {
    const dispatch = useDispatch()
    let { id } = useParams();
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loading, productDetail,tempAuctionId } = useSelector(store => store.product)
    const { auctionDetail } = useSelector(store => store.auction)
    console.log(auctionDetail)
    const renderComments = () => {
        if(productDetail.comments){
        return productDetail.comments.map((comment) => (
            <div className="evaluate">
                <div className="first-line-info">
                    <div className="name">{comment.buyer}</div>
                    <div className="check"><CheckCircleOutlined /> Already Buyed</div>
                </div>
                <div className="feedback">
                    {comment.comment}
                </div>
            </div>
        ))
        }
    }


    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [])
   
    return (
        <div className="product-detail_container">
            <SuccessfullCreated isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <div className="product-info">
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="all-product-img">
                            <div className="product-img">
                                <img style={{ width: "100%" }} src={`../${productDetail.imageProduct ? productDetail.imageProduct.substring(1) : ""}`} />
                            </div>
                            
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="main-info">
                            <h1>{productDetail.name}</h1>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Seller</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <Link>{productDetail.seller}</Link>
                                    </Col>
                                </Row>
                            </div>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Thuong Hieu</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <Link>{productDetail.manufacturer}</Link>
                                    </Col>
                                </Row>
                            </div>
                            <div className="info-box">
                                <Row gutter={32}>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <span>Danh muc</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <a>{productDetail.categoryName}</a>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                        <div className="bottom-part">
                            <div className="banner">
                                So Luong
                            </div>
                            <div className="number">{productDetail.amount} Cai</div>
                            <button onClick={async () => {
                              
                                await dispatch(createAuction({
                                    productId: id,
                                    buyer: sessionStorage.getItem('accountName'),
                                }))
                                setIsModalOpen(true)
                            }}>Aucton Now</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="Product-description">
                <h1>Product Description</h1>
                <p>{productDetail.description}</p>
            </div>
            <div className="product-evaluate">
                <h1>Product Description</h1>
                {renderComments()}
            </div>
        </div>
    )
}
