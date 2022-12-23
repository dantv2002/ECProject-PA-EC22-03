import React, {useEffect,useState} from 'react'
import { Col, Row,Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

export const HeaderOnlyLogo = () => {
  const navigate = useNavigate()

  return (
    <>
        <Row className="my-container" gutter={16}>
          <Col xl={5} className="logo">
          <Link to="/" style={{display:'flex', width:"100px", height:"100px", alignItems:"center"}}>
            <img style={{width:"100%"}} src="./logo.png"/>
            <span>Winner</span>
          </Link>
          </Col>
        
        </Row>
             
    </>
  )
}
