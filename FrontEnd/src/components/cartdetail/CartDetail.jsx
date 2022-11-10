import React from "react";
import { Table } from "antd";
import { ChangeBuyList, DeleteItem } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { showConfirm } from "../../util/confirmModal/ConfirmModal";

export const CartDetail = () => {
  
  const dispatch = useDispatch();
  const { itemList, buyList } = useSelector((store) => store.cart);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(ChangeBuyList(selectedRows));
    },
    getCheckboxProps: (record) => {
      
      return {
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked
        name: record.name,
      }
    },
    
  };

  const DeleteConfirm = (record) => dispatch(DeleteItem(record));

  const columns = [
    {
      title: "All",
      dataIndex: "image",
      render: (text) => <img src={text} />,
      width: 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => {
        return <a className="name-tag">{text}</a>;
      },
      width: 400,
    },
    {
      title: "Seller",
      dataIndex: "seller",
      render: (text) => {
        return <a className="name-tag">{text}</a>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 50,
      className: "quantity",
      render: (text) => <span className="quantity-number">{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 130,
      className: "price",
      render: (text) => (
        <span className="price-number">{text.toLocaleString()} VND</span>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={
            () => {
              showConfirm(
                "Do you Want to delete this item?",
                "If you delete this item you will have to re-auction it to buy this item again.",
                () => {DeleteConfirm(record)}
              )
            }
          }
        >
          Delete
        </span>
      ),
      width: 100,
    },
  ];

  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
          defaultSelectedRowKeys:() => {
            const SelectedRowKeysArray = []
            buyList.forEach(item => {
              SelectedRowKeysArray.push(item.key)
            });
            return SelectedRowKeysArray
          }
        }}
        columns={columns}
        dataSource={itemList}
        className="cart-detail-table"
        pagination={false}
      />
    </>
  );
};
