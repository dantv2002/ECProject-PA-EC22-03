import React from 'react'

export const PaymentAddress = () => {
  return (
    <div className="payment-address_container">
        <div className="Address-list">
            <div className='address'>
                <span className="full-name">Nguyễn Văn A</span>
                <span className='address-detail'>Address: 101,Xã B,Huyện C,Tỉnh A</span>
                <span className='phone-number'>011111111</span>
            </div>
            <button className="change-button">Change</button>
            <div className='add-address'>
                <span>+ Add more address</span>
            </div>
        </div>
    </div>
  )
}
