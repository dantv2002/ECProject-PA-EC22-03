import React from "react";
import { Table } from "antd";
import { ChangeBuyList, DeleteItem, getCartItems } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { showConfirm } from "../../util/confirmModal/ConfirmModal";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const CartDetail = () => {
  
  const dispatch = useDispatch();
  const { itemList, buyList, loading } = useSelector((store) => store.cart);

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
      render: (text) => <img src={text} style={{width:"100%"}}/>,
      width: '10%',
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text,record) => {
        return <Link to={`/productdetail/${record.productId}`} className="name-tag">{text}</Link>;
      },
      width: '28%',
    },
    {
      title: "Seller",
      dataIndex: "seller",
      render: (text) => {
        return <a className="name-tag">{text}</a>;
      },
      width: '28%',
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      className: "quantity",
      render: (text) => <span className="quantity-number">{text}</span>,
      width: '10%',
    },
    {
      title: "Price",
      dataIndex: "price",
      className: "price",
      render: (text) => (
        <span className="price-number">{text.toLocaleString()} VND</span>
      ),
      width: '14%',
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

  useEffect(() => {
    dispatch(getCartItems(sessionStorage.getItem('accountName')))
  },[])

  return (
    <>
      <Table
        loading={loading}
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
