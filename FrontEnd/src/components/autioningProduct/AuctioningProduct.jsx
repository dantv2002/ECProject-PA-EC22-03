import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import DetailDrawer from '../detailDrawer/DetailDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuction } from '../../redux/userStore/UserStoreSlice';
import { useNavigate } from 'react-router-dom';
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
const AuctioningProduct = () => {
    const navigate = useNavigate()
    //Drawer Part
    const [open, setOpen] = useState(false);
    const { auctionLists } = useSelector(store => store.userStore)
    console.log(auctionLists)
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()

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
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Image',
            dataIndex: 'imageProduct',
            key: 'imageProduct',
            width: '10%',
            render: (text) => {
                return <img style={{ width: "100%" }} src={`../${text.substring(1)}`} />
            }
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            width: '30%',
            ...getColumnSearchProps('productName'),
        },
        {
            title: 'Buyer Name',
            dataIndex: 'buyer',
            key: 'buyer',
            width: '25%',
            ...getColumnSearchProps('buyer'),
        },
        {
            title: 'Auction Price',
            dataIndex: 'priceTransaction',
            key: 'priceTransaction',
            width: '15%',
            render: (text) => {
                return <div>{text.toLocaleString()}</div>
            }
        },
    ];

    useEffect(() => {
        dispatch(getAllAuction())
    }, [])
    return <div>
        <DetailDrawer open={open} showDrawer={showDrawer} onClose={onClose} />
        <Table columns={columns} dataSource={auctionLists} onRow={(record, rowIndex) => {
            return {
                onClick: (event) => {navigate(`/auction/${record.id}`) }, // click row

            };
        }} />
    </div>


};
export default AuctioningProduct;