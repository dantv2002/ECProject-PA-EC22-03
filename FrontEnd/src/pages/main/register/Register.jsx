import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className="register-page">
        <h1 className="page-name">Register</h1>
        <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
           <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input type="number"/>
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Retype Password"
        name="re-password"
        rules={[
          {
            required: true,
            message: 'Please re-input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 15,
        }}
        
      >
        
        <button className="main-btn" htmlType="submit">
          Register
        </button>
        <button className="second-btn" onClick={() => navigate('/login')}>
          Login
        </button>
      </Form.Item>
    </Form>
    </div>
  )
}
