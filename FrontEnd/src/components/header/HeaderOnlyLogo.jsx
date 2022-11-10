import React, {useEffect,useState} from 'react'
import { Col, Row,Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

export const HeaderOnlyLogo = () => {
  const navigate = useNavigate()

  return (
    <>
        <Row className="my-container" gutter={16}>
          <Col xl={5} className="logo">
            <Link to="/"><span>My Logo</span></Link>
            <span className="middle-line">|</span>
            <span className="page-name">Cart</span>
          </Col>
        
        </Row>
             
    </>
  )
}
