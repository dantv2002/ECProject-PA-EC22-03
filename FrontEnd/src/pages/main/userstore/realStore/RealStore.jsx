import { Col, Row, Avatar, Tabs } from 'antd'
import React from 'react'
import { UserOutlined, ShopOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProductByCategory } from '../../../../redux/userStore/UserStoreSlice';
import { getSellerProduct } from '../../../../redux/home/HomeSlice';
const StoreDate = ({ renderItemList }) => (
    <Row gutter={[16, 16]}>
        {renderItemList()}
    </Row>
)



export const RealStore = ({ type }) => {
    let { id } = useParams();
    const dispatch = useDispatch()
    const { categoryLists, producerLists } = useSelector(store => store.userStore)
    const { sellerProducts, categoryList } = useSelector(store => store.home)

    const renderItemList = () => {
        const a = type === "owner" ? producerLists : sellerProducts
        return a.map((product) => {
            return <Col span={4}>
                <div className="item-cover">
                    <span className="item__image">
                        <img src={`./${product.imageProduct.substring(1)}`} />
                    </span>
                    <div className="item__info">
                        <h3 className="item-name">{product.name}</h3>

                    </div>
                </div>
            </Col>
        })
    }


    const renderCategory = () => {
        if (type === 'owner') {
            return categoryLists.map((category) => (
                {
                    label: category.label,
                    key: category.value,
                    children: (<StoreDate renderItemList={renderItemList} />),
                }
            ))
        } else {
            return categoryList.map((category) => (
                {
                    label: category.name,
                    key: category.id,
                    children: (<StoreDate renderItemList={renderItemList} />),
                }
            ))
        }
    }


    const onChange = (key, item) => {
        if (type == "owner") {
            const index = categoryLists.findIndex(category => category.value === key)
            dispatch(getAllProductByCategory(categoryLists[index].label))
        }else{
            const index = categoryList.findIndex(category => category.id === key)
            dispatch(getSellerProduct({
                sellerName: id,
                categoryName: categoryList[index].name
            }))
        }
    };

    useEffect(() => {

        if (type === "owner") {
            dispatch(getAllProductByCategory("Điện thoại"))
        } else {
            dispatch(getSellerProduct({
                sellerName: id,
                categoryName: "Điện thoại"
            }))
        }
    }, [])

    return (
        <div className="realStore-container">
            {type == "owner" ? <Link className="top-link" to="/userstore/allproduct">Go Back To Managerment <BsArrowRight style={{ marginLeft: "10px" }} /></Link> : ""}
            <div className="header-part">

                <div className="userback">
                    <div className="layer"></div>
                    <div className="info-part">
                        <div className="avatar">
                            <Avatar size={80} icon={<UserOutlined />} />
                        </div>
                        <div className="nane">{type === "owner" ? sessionStorage.getItem("accountName") : id} <ShopOutlined /></div>
                    </div>
                    <div className="more-info">

                    </div>
                </div>

            </div>
            <div className="product-part">
                <Tabs
                    defaultActiveKey="1"
                    onChange={onChange}
                    items={renderCategory()}
                />
            </div>
        </div>
    )
}
