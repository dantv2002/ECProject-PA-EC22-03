import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import UploadImage from '../uploadImage/UploadImage';
import { useDispatch, useSelector } from 'react-redux';
import { getProducer } from '../../redux/userStore/UserStoreSlice';
const { Option } = Select;
const ProductDrawer = ({ drawerStatus, drawerData, showDrawer, onClose, onFinish }) => {
  const { categoryLists } = useSelector(store => store.userStore)
  const dispatch = useDispatch()
  const onChange = (e) => {
    console.log(e)
  }
  const renderCategoryOptions = () => {
    return categoryLists.map((category) => {
      return <option value={category.value}>{category.label}</option>
    })
  }
  return (
    <>
      <Drawer
        title="Create a new account"
        style={{ zIndex: "9999999999" }}
        width={720}
        onClose={onClose}
        open={drawerStatus}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter product name',
                  },
                ]}
              >
                <Input placeholder="Please enter product name" />
              </Form.Item>
              <Form.Item
                name="owner"
                label="Owner"

              >
                <select placeholder="Please select an owner" style={{width:"100%", paddingBlock:"5px",borderColor:"rgba(0, 0, 0, 0.2)"}} onChange={onChange}>
                  {renderCategoryOptions()}
                </select>
              </Form.Item>
              <Form.Item
                name="type"
                label="Type"

              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Image"
                label="image"

              >
                <UploadImage imageList={[]} count={1} type="store" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item

          >
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" htmlType='submit'>
                Submit
              </Button>
            </Space>
          </Form.Item>

        </Form>
      </Drawer>
    </>
  );
};
export default ProductDrawer;