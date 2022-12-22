import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsRegister, userRegister } from '../../../redux/userAuthentication/UserAuthenticationSlice';
import { poppupNoti } from '../../../util/notification/Notification';

export const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isRegister, loading } = useSelector(store => store.userAuthentication)
  const onFinish = async (values) => {

    if (values.password === values.repassword) {
      const a = {
        accountName: values.username,
        pass: values.password
      }
      await dispatch(userRegister(a))
     
     

     
    }else{
      poppupNoti.passwordIncorrect()
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    if(isRegister){
      navigate('/login')
      dispatch(setIsRegister())
    }
  },[isRegister])
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
          label="Retype Password"
          name="repassword"
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
