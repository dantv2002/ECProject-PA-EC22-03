import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo, updateUserInfo } from '../../../../redux/userpage/UserPageSlice';
import UpLoadImage from '../../../../components/uploadImage/UploadImage'
import moment from "moment";
import { getdistrictList, getWardList } from '../../../../redux/paymentAddress/paymentAddressSlice';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const PersonalInfo = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const { loading, userInfo, userImage } = useSelector(store => store.userPage)
  const { districtList,wardList, chosenAddress, addingMoreAddress } = useSelector((store) => store.paymentAddress);

  const [componentDisabled, setComponentDisabled] = useState(true);
  const [cityCode,setCityCode] = useState(76)
  const [districtCode,setDistrictCode] = useState(userInfo.districtId)
  const [wardCode,setWardCode] = useState(userInfo.wardId)

  const onCityChange = async (value) => {
    await dispatch(getdistrictList(value))
    setCityCode(value)
  }

  const onDistrictChange = async (value) => {
    await dispatch(getWardList(value))
    setDistrictCode(value)
    form.setFieldValue('ward',"")
  }

  const onWardChange =(value) => {
    setWardCode(value)
  }




  const onFinised = async (values) => {
   
    const newData = {
      accountName: userInfo.accountName,
      pass: userInfo.pass,
      imageUser: userImage.length === 0 ? null : userImage[0].url,
      statusUser: true,
      roles: "USER",
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: new Date(values.birthday.toString()).toISOString().slice(0,10),
      email: values.email,
      phone: values.phone,
      wardId: wardCode === undefined ? userInfo.wardId : wardCode,
      wardName: values.ward,
      addressDetail: values.addrDetail
   
    }
    await dispatch(updateUserInfo(newData))
    await dispatch(getUserInfo())
    form.setFieldsValue({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      birthday: moment(userInfo.birthday),
      phone: userInfo.phone,
      ward: userInfo.wardName,
      district: userInfo.districtName,
      cityprovince: 'TP Hồ Chí Minh',
      addrDetail: userInfo.addressDetail
    })
  };

  useEffect(() => {
    dispatch(getUserInfo())
  
  
  },[])
  useEffect(() => {
    form.setFieldsValue({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      birthday: moment(userInfo.birthday),
      phone: userInfo.phone,
      ward: userInfo.wardName,
      district: userInfo.districtName,
      cityprovince: 'TP Hồ Chí Minh',
      addrDetail: userInfo.addressDetail
    })
  },[loading])
  return (
    <div className="user-info">
      <Row>
        <Col span={24}>
          <div className="info-form">

            <div className='my-form'>

              <Form
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 14,
                }}
                layout="horizontal"
                onFinish={onFinised}
                form={form}
              >

                <h1>My Profile</h1>
                <Form.Item
                  label="First Name"
                  name='firstName'
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name='lastName'
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'This is not an email!', type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[{ required: true, message: 'Enter Your phone number' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Date of Birth"
                  name="birthday"
                  rules={[{ required: true, message: 'Enter Your Date of Birth' }]}
                >
                  <DatePicker />
                </Form.Item>


                <Form.Item label="Avatar" valuePropName="fileList">
                  <UpLoadImage imageList={userImage} count={1} type="user"/>
                </Form.Item>
                <h1>My Address</h1>
                <Form.Item
                  label="City/Province"
                  name='cityprovince'
                  rules={[
                    {
                      required: true,
                      message: 'Please Choose the City/Province!',
                    },
                  ]}
                >
                  <Select onChange={onCityChange}>
                    <Select.Option value={79}>TP Hồ Chí Minh</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="District"
                  name='district'
                  rules={[
                    {
                      required: true,
                      message: 'Please Choose the District',
                    },
                  ]}
                >
                  <Select onChange={onDistrictChange} options={districtList} disabled={cityCode === -1  ? true : false}>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Ward"
                  name='ward'
                  rules={[
                    {
                      required: true,
                      message: 'Please Choose the Ward',
                    },
                  ]}
                >
                  <Select onChange={onWardChange} options={wardList} disabled={districtCode === -1  ? true : false}>
                  </Select>
                </Form.Item>
                <Form.Item
                  name='addrDetail'
                  label="Address Detail"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address detail!',
                    },
                  ]}
                >
                  <Input disabled={wardCode === -1 ? true : false} />
                </Form.Item >

                <Form.Item >
                  <Button type='primary' htmlType='submit'>Save</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>

      </Row>
    </div>

  )
}
