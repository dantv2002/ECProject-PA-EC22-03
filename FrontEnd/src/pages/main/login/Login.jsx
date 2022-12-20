import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className="login-page">
        <h1 className="page-name">Login</h1>
        <Form
      name="basic"
      labelCol={{
        span: 6,
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
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
        wrapperCol={{
          offset: 6,
          span: 15,
        }}
        
      >
        
        <button className="main-btn" htmlType="submit">
          Login
        </button>
        <button className="second-btn" onClick={() => navigate('/register')}>
          Register
        </button>
      </Form.Item>
    </Form>
    </div>
  )
}
