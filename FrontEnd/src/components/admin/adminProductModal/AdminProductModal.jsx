import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import UploadImage from '../../uploadImage/UploadImage';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../redux/admin/AdminSlice';
import { getCategory } from '../../../redux/filter/filterSlice';
const AdminProductModal = ({isModalOpen,setIsModalOpen,actionType, modalType, clickedCategory}) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [imageList, setImageList] = useState(actionType === 'add' ? [] : [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: clickedCategory.imageUrl,
    },
  ])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (values) => {
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values) => {
    if(actionType !== 'add'){
      await dispatch(updateCategory({
        id: clickedCategory.id,
        name: values.categoryname,
        imageUrl: clickedCategory.imageUrl
      }))
      setIsModalOpen(false);
      dispatch(getCategory())
    }else if(actionType !== 'update'){
      await dispatch(updateCategory({
        id: null,
        name: values.categoryname,
        imageUrl: null
      }))
      setIsModalOpen(false);
      dispatch(getCategory())
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    if(actionType !== 'add'){
      form.setFieldValue('categoryname',clickedCategory.name)
    }
  })
  return (
    <>
      <Modal footer={[]} title={`${actionType === 'add' ? "Add" : "Update"} ${modalType === 'category' ? 'Category' : "Producer"}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
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
        name={modalType === 'category' ? 'categoryname' : "producername"}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Avatar" valuePropName="fileList">
        <UploadImage setImageList={setImageList} imageList={imageList} count={1} type="admin"/>
      </Form.Item>

  

      <div style={{textAlign:'right'}}><Button type='primary' htmlType='submit'>Submit</Button></div>
    </Form>
      </Modal>
    </>
  );
};
export default AdminProductModal;