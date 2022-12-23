import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import ShippingModal from '../../../components/admin/shippingModal/ShippingModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShippingFee } from '../../../redux/admin/AdminSlice';

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

export const Shipping = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {shippingFeeList} = useSelector(store => store.admin)
    const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: 'Start District',
      dataIndex: 'addressStartName',
      key: 'addressStartName',
      width: '30%',
      ...getColumnSearchProps('addressStartName'),
    },
    {
      title: 'End District',
      dataIndex: 'addressEndName',
      key: 'addressEndName',
      width: '30%',
      ...getColumnSearchProps('addressEndName'),
    },
    {
      title: 'Shipping Fee',
      dataIndex: 'price',
      key: 'price',
      ...getColumnSearchProps('price'),
      render: (text) => {
        return <div>{text.toLocaleString()} VND</div>
      }
    },
    {
        title: 'Action',
        dataIndex: '',
        key: '',
        width:"10%",
        render: () => (
            <div>
                <button onClick={() => setIsModalOpen(true)}>Edit</button>
            </div>
        )
      },
  ];
useEffect(() => {
  if(sessionStorage.getItem("adminName") === null) navigate("/admin")
  dispatch(getShippingFee())
},[])

  return (
    <div className="shipping-container">
        <ShippingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <h1 className="tab-label">Shipping Fee</h1>
        <Table columns={columns} dataSource={shippingFeeList}/>;
    </div>
  )
}
