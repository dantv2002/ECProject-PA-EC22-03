import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import UploadImage from '../uploadImage/UploadImage';
const { Option } = Select;
const ProductDrawer = ({drawerStatus,drawerData, showDrawer, onClose, onFinish}) => {

  return (
    <>
      <Drawer
        title="Create a new account"
        style={{ zIndex:"9999999999"}}
        width={720}
        onClose={onClose}
        open={drawerStatus}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
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
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
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
               <UploadImage/>
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
            <Button  type="primary" htmlType='submit'>
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