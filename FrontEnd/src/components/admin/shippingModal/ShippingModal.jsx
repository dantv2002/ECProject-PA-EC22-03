import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
const ShippingModal = ({isModalOpen,setIsModalOpen}) => {

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Modal footer={[]} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 19,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
     
    >
      <Form.Item
        label="Shipping Fee"
        name="shippingfee"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

   

  

      <div style={{textAlign:'right'}}><Button type='primary' htmlType='submit'>Submit</Button></div>
    </Form>
      </Modal>
    </>
  );
};
export default ShippingModal;