import React, { useState } from 'react';
import { Button, Modal, Result } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SuccessfullCreated = ({isModalOpen,setIsModalOpen}) => {
    const { loading, productDetail,tempAuctionId } = useSelector(store => store.auction)
    const navigate = useNavigate()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log(tempAuctionId)
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
                <Result
                    status="success"
                    title="You have successfully created a new auction"
                    subTitle="Click the button below to view it"
                    extra={[
                        <Button type="primary" key="console" onClick={() => {
                            navigate(`/auction/${tempAuctionId}`)
                        }}>
                            Go to auction
                        </Button>,
                        
                    ]}
                />
            </Modal>
        </>
    );
};
export default SuccessfullCreated;