import React, { useState } from 'react';
import { Button, Col, Form, Input, Modal, Row, Select, Space } from 'antd';
import UploadImage from '../uploadImage/UploadImage';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllProduct, getProducer } from '../../redux/userStore/UserStoreSlice';
const AddItemModal = ({ drawerStatus, drawerData, showDrawer, onClose, onFinish ,modalType}) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const { categoryLists, anotherProducerList } = useSelector(store => store.userStore)
    const [imageUrl, setImageUrl] = useState("")
    const [imageList, setImageList] = useState([
        {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: null,
        }
    ])
    const [category, setCategory] = useState(null)
    const [producer, setProducer] = useState(null)

    const showModal = () => {

    };
    const handleOk = async (values) => {
        const mydata = {
            name: values.name,
            description: values.description,
            manufacturer: producer.label,
            amount: 1,
            categoryId: category.value,
            accountName: sessionStorage.getItem('accountName'),
            imageProduct: imageUrl,
            status: true
        }
        await dispatch(addProduct(mydata))
        dispatch(getAllProduct())
        form.resetFields()
        onClose()
    };
    const handleCancel = () => {
        onClose()
        setImageList([
            {
                uid: "-1",
                name: "image.png",
                status: "done",
                url: null,
            }
        ])
    };
    const onCategoryChange = (e, a) => {
        setCategory(a)
        dispatch(getProducer(a.label))
    }
    const onProducerChange = (e,a) => {
        setProducer(a)
    }
    return (
        <>
            <Modal title="Add Product" open={drawerStatus} onOk={handleOk} onCancel={handleCancel} footer={false}>
                <Form layout="vertical" onFinish={handleOk} form={form}>
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
                                name="category"
                                label="Category"

                            >
                                <Select placeholder="Please select an owner" options={categoryLists} onChange={onCategoryChange} />


                            </Form.Item>
                            <Form.Item
                                name="producer"
                                label="Producer"

                            >
                                <Select placeholder="Please choose the type" disabled={category !== null ? false : true} options={anotherProducerList} onChange={onProducerChange}>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="Image"
                                label="image"

                            >
                                <UploadImage setImageList={setImageList} setImageUrl={setImageUrl} imageList={imageList} count={1} type="store" />
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
                            <Button >Cancel</Button>
                            <Button type="primary" htmlType='submit'>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};
export default AddItemModal;