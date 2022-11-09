import React from 'react'
import { Row, Col } from 'antd';
import AddressForm from '../addressform/AddressForm';
import LocationForm from '../addressform/resource/components/LocationForm';

export const PaymentAddress = () => {
  return (

    <div className="payment-address_container">

      <Row className="Address-list" gutter={32}>
        <Col xl={6}>
          <div className="address-container active">
            <div className='address'>
              <span className="full-name">Nguyễn Văn A</span>
              <span className='address-detail'>Address: 101,Xã B,Huyện C,Tỉnh A</span>
              <span className='phone-number'>Phone Number: 011111111</span>
            </div>
            <button className="change-button">Change</button>
          </div>
        </Col>
        <Col xl={6}>
          <div className='add-address address-container'>
            <span>+ Add more address</span>
          </div>
        </Col>
      </Row>

      <div className="address-form-container"><AddressForm/></div>
      <LocationForm/>
    </div>

  )
}
