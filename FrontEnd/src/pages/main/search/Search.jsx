import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { Filter } from '../../../components/filter/Filter';
import {
  PhoneOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

export const Search = () => {
  const {searchNecess,searchWord} = useSelector((store) => store.filter)
  return (
    <div className='seach-container'>
      <div className='banner'>
        <img src="./searchbanner.jpg" />
      </div>
      <p style={{color: "$color-gray-300", display: searchWord === "" ? "none" : "block"}}>{`Search word: "${searchWord}"`}</p>
      <Filter />

      <div className="auctioning" style={{display: searchNecess == "Suggestion" ? "none" : "block"}}>
        <h1 className="auctioning__header">
          Auctioning
        </h1>
        <div className="auctioning__body">
          <Row gutter={10}>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <span className="item-now-price">1.000.000 VND</span>
                  <div className="remain-auction-time"><ClockCircleOutlined /> 1:29:30 </div>
                  <button className="join-auction">Join Auction</button>
                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className="auctioning__footer">
          <button>Show More</button>
        </div>
      </div>

      <div className="suggestion" style={{display: searchNecess == "Auctioning" ? "none" : "block"}}>
        <h1 className="suggestion__header">
            Suggestion
        </h1>
        <div className="suggestion__body">
          <Row gutter={10}>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>
                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>

                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>

                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>

                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>

                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>
            <Col className='' xl={4}>
              <div className="item">
                <span className="item__image">
                  <img src="./Laptop.png" />
                </span>
                <div className="item__info">
                  <h3 className="item-name">Laptop 123</h3>

                  <button className="join-auction">Start Auction</button>
                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className="suggestion__footer">
          <button>Show More</button>
        </div>
      </div>
    </div>
  )
}
