

import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserStatus, getAllUser } from '../../../redux/admin/AdminSlice';
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

export const UserManage = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const { loading, userList } = useSelector(store => store.admin)
  const dispatch = useDispatch()
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
      title: 'AccountName',
      dataIndex: 'accountName',
      key: 'accountName',
      width: '15%',
      ...getColumnSearchProps('accountName'),
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '15%',
      ...getColumnSearchProps('firstName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '10%',
      ...getColumnSearchProps('lastName'),

    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      width: '10%',
      ...getColumnSearchProps('phone'),

    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),

    },
    {
      title: 'Status',
      dataIndex: 'statusUser',
      key: 'statusUser',
      width: '10%',
      ...getColumnSearchProps('statusUser'),
      render: (text) => {
        return <Tag color={text ? "green" : "volcano"}>
          {text ? "Active" : "Blocked"}
        </Tag>
      }
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '',
      width: "10%",
      render: (_,{statusUser,accountName}) => (
        <div>
          <Button onClick={async () => {
            await dispatch(changeUserStatus({accountName}))
            await dispatch(getAllUser())
          }} type='primary' danger={statusUser}>{statusUser ? "Block" : "Activate"}</Button>
        </div>
      )
    },
  ];

  useEffect(() => {
    if(sessionStorage.getItem("adminName") === null) navigate("/admin")
    dispatch(getAllUser())
  }, [])
  return (
    <div className="userManagae-container">
      <h1 className="tab-label">User Manage</h1>
      <Table columns={columns} dataSource={userList} />;
    </div>
  )
}
