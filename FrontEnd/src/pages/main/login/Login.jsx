import { Button, Checkbox, Form, Input, Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../redux/userAuthentication/UserAuthenticationSlice';
import { poppupNoti } from '../../../util/notification/Notification';

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLogin,loading} = useSelector(store => store.userAuthentication)
    const onFinish = async (values) => {
      await dispatch(userLogin(values))
      if(sessionStorage.getItem("accountName") !== null)
      navigate("/")
    };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  useEffect(() => {
    if(sessionStorage.getItem("accountName") !== null){
      navigate("/")
      poppupNoti.alreadyLoggedIn()
    }
  },[])
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
        name="accountName"
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
