
import React from 'react'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const { confirm } = Modal;

export const showConfirm = (title,content,OkFunction) => {
  confirm({
    title: title,
    icon: <ExclamationCircleOutlined />,
    content: content,
    onOk() {
      OkFunction()
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};



