import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import DetailDrawer from '../detailDrawer/DetailDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder, getUserOrderInfo, moreOrderInfo } from '../../redux/userpage/UserPageSlice';
import { Link } from 'react-router-dom';
import { GiBoxUnpacking } from "react-icons/gi";
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
const OrderManage = ({type}) => {
    //Drawer Part
    const [open, setOpen] = useState(false);
    const {userOrders} = useSelector(store => store.userPage)
    const dispatch = useDispatch()
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //Table Part
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Image',
            dataIndex: 'imageProduct',
            key: 'imageProduct',
            render: (text) => {
                return <img style={{width:"100%"}}src={`../${text.substring(1)}`} />
            },
            width: '10%',
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            width: '30%',
            ...getColumnSearchProps('productName'),
            render: (text,record) => <Link to={`/productdetail/${record.productId}`}>{text}</Link>
        },
        {
            title: type === "user" ? "Seller" : "Buyer",
            dataIndex: type === "user" ? "sellerAccount" : "buyerAccount",
            key: type === "user" ? "sellerAccount" : "buyerAccount",
            width: '25%',
            ...getColumnSearchProps(type === "user" ? "sellerAccount" : "buyerAccount"),
            render: (text,record) => <Link>{text}</Link>
        },
        {
            title: 'Status',
            dataIndex: 'statusOrder',
            key: 'statusOrder',
            ...getColumnSearchProps('statusOrder'),
            width: '15%',
            render: (text,record) => {
                if(text === 1) return <div><GiBoxUnpacking/>Packing</div>
                if(text === 2) return <div><CiDeliveryTruck/>Delivering</div>
                if(text === 3) return <div><AiOutlineDeliveredProcedure/>Delivered</div>
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <a onClick={ async () => {
                        showDrawer()
                        await dispatch(getUserOrderInfo(record.orderId))
                        dispatch(moreOrderInfo(record))
                    }}>Detail</a>
                    {record.statusOrder === 3 ? "" :  record.statusOrder === 2 && type==="store" ? "" : record.statusOrder === 1 && type==="user" ? "" : <Button size={32} type="primary" loading={false}>
                        Process
                    </Button>}
                   
                </div>
            ),
        },
    ];
    useEffect(() => {
        dispatch(getUserOrder())
        
    },[])
    return <div>
            <DetailDrawer type="user" open={open} showDrawer={showDrawer} onClose={onClose}/>
          <Table columns={columns} dataSource={userOrders} />
    </div>
  

};
export default OrderManage;