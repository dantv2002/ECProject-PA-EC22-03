import React, { useEffect, useState } from 'react'
import { Row, Col, Skeleton } from 'antd';
import AddressForm from '../addressform/AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeChosenAddress,
  chooseAddMoreAddress,
  deleteAddressDetail,
  getAddressList,
  getdistrictList,
  getWardList
} from '../../redux/paymentAddress/paymentAddressSlice'
import { poppupNoti } from '../../util/notification/Notification';

export const PaymentAddress = () => {

  const dispatch = useDispatch()
  const { addressList, addingMoreAddress, loading, chosenAddress } = useSelector((store) => store.paymentAddress);
  const [componentDisabled, setComponentDisabled] = useState(true);


  const renderUserAddressList = () => (
    addressList.map(({ id, name, phonenumber, cityprovince, district, ward, addrDetail, chosen }) => {
      return <Col xs={24} sm={24} md={12} lg={8} xl={6} key={id}>
        <div onClick={async (e) => {
          if (chosenAddress.cityprovince.code !== 0) await dispatch(getdistrictList(chosenAddress.cityprovince.code))
          if (chosenAddress.district.code !== 0) await dispatch(getWardList(chosenAddress.district.code))

          if (e.target.className !== 'delete-button') dispatch(changeChosenAddress(id))
          if (e.target.className !== 'change-button' && e.target.className !== 'delete-button' && chosen == false) setComponentDisabled(true)
        }} className={`address-container ${chosen == true ? 'active' : ''}`}>
          <div className='address'>
            <span className="full-name">{name}</span>
            <span className='address-detail'>{`Address: ${addrDetail}, ${ward.name}, ${district.name}, ${cityprovince.name}`}</span>
            <span className='phone-number'>Phone Number: {phonenumber}</span>
          </div>
          <div className="button-group">
            <button onClick={() => { if (componentDisabled) setComponentDisabled(false) }} className="change-button">Change</button>
            <button
              onClick={async () => {
                await dispatch(deleteAddressDetail(id))
                await dispatch(getAddressList(sessionStorage.getItem('accountName')))
                poppupNoti.deleteAddressSuccess()
              }}
              className="delete-button"
            >
              Delete
            </button>
          </div>

        </div>
      </Col>
    })
  )



  return (

    <div className="payment-address_container" style={{ position: 'relative' }}>
      {/* <div style={{display: loading ? "block" : "none"}} className="loading-overlay"></div> */}
      <Row className="Address-list" gutter={[32, 32]}>
        {renderUserAddressList()}
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <div
            onClick={() => {
              dispatch(chooseAddMoreAddress())
              setComponentDisabled(false)
            }}
            className={`add-address address-container ${addingMoreAddress ? "active" : ''}`}
          >
            <span>+ Add more address</span>
          </div>
        </Col>
      </Row>

      <div className="address-form-container"><AddressForm componentDisabled={componentDisabled} setComponentDisabled={setComponentDisabled} /></div>
    </div>

  )
}
