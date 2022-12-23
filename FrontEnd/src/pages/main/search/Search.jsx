import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Statistic, Spin, Empty } from 'antd';
import { Filter } from '../../../components/filter/Filter';
import {
  PhoneOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { cleanSearchWords } from '../../../redux/filter/filterSlice';
const { Countdown } = Statistic;

export const Search = () => {
  const { searchNecess, searchWord, searchAuction, searchProduct, loading } = useSelector((store) => store.filter)

  const dispatch = useDispatch()

  const convertRemainTime = (time) => {
    const auctionTime = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 //2 day
    const startTime = new Date(time)
    const passTime = Date.now() - startTime.getTime()
    return auctionTime - passTime
  }
  const renderSearchAuction = () => {
    console.log(searchAuction)
    return searchAuction.map((auction, index) => (
      <Col className='' xl={4} key={index}>
        <div className="item">
          <span className="item__image">
            <img src={`./${auction.imageProduct.substring(1)}`} />
          </span>
          <div className="item__info">
            <h3 className="item-name"><Link to={`/auction/${auction.id}`}>{auction.productName}</Link></h3>
            <span className="item-now-price">{auction.priceTransaction.toLocaleString()} VND</span>
            <div className="remain-auction-time">
              <Countdown style={{ color: "red" }} title="" value={convertRemainTime(auction.timeStart)} />
            </div>
          </div>
        </div>
      </Col>
    ))
  }

  const renderSearchProduct = () => {
    return searchProduct.map((product,index) => (
      <Col className='' xl={4} key={index}>
        <div className="item">
          <span className="item__image">
            <img src={`./${product.imageProduct.substring(1)}`} />
          </span>
          <div className="item__info">
            <h3 className="item-name"><Link to={`/productdetail/${product.id}`}>{product.name}</Link></h3>
            <Link>{product.accountName}</Link>
          </div>
        </div>
      </Col>
    ))
  }

  return (
    <div className='seach-container'>
      <div className='banner'>
        <img src="./searchbanner.jpg" />
      </div>
      <p style={{ color: "$color-gray-300", display: searchWord === "" ? "none" : "block" }}>
        {`Search word: "${searchWord}"`} <span onClick={() => dispatch(cleanSearchWords())} style={{textDecoration:"underline", color: 'red', cursor:"pointer", marginLeft:"10px"}}>Clean</span>
      </p>
      <Filter />

      <div className="auctioning" style={{ display: searchNecess == "Suggestion" ? "none" : "block" }}>
        <h1 className="auctioning__header">
          Auctioning
        </h1>
        <div className="auctioning__body">
        {renderSearchAuction().length ?  <Row gutter={[20,20]}>{renderSearchAuction()}</Row> : <div style={{padding:"20px"}}><Empty/></div>}
         
        </div>
      </div>

      <div className="suggestion" style={{ display: searchNecess == "Auctioning" ? "none" : "block" }}>
        <h1 className="suggestion__header">
          Suggestion
        </h1>
        <div className="suggestion__body">
        {/* <div className="loader" style={{ display: loading ? "flex" : "none" }}><Spin size="large" /></div> */}
        
            {renderSearchProduct().length ?  <Row gutter={[20,20]}>{renderSearchProduct()}</Row> : <div style={{padding:"20px"}}><Empty/></div>}
      
        </div>
      </div>
    </div>
  )
}
