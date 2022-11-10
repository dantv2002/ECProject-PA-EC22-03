import { Modal } from 'antd'
import React from 'react'

export const CusModal = ({children,status,handleCancel}) => {
  return (
    <Modal title="Basic Modal" open={status} footer={null} onCancel={handleCancel}>
        {children}
    </Modal>
  )
}
