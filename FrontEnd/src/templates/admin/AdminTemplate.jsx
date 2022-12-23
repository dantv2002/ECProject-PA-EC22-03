import React, { useEffect, useState } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { get7MonthList, getTotalUser } from '../../redux/admin/AdminSlice';
const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: 0,
        icon: <AiOutlinePieChart />,
        label: <Link to="/admin/home">Statistical</Link>
    },
    {
        key: 1,
        icon: <FaShippingFast />,
        label: <Link to="/admin/shipping">Shipping</Link>
    },
    {
        key: 2,
        icon: <TbBrandProducthunt />,
        label: <Link to="/admin/directory">Product Directory</Link>
    },
    {
        key: 3,
        icon: <BiUserCircle />,
        label: <Link to="/admin/usermanage">User</Link>
    },
]



export const AdminTemplate = () => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem("adminName") === null) navigate("/admin")
        const currentdate = new Date()
        currentdate.setDate(1)
        const newMonthList = []
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(currentdate)
            newDate.setMonth(currentdate.getMonth() - i)
            newMonthList.push(newDate.toISOString())
        }
        dispatch(get7MonthList(newMonthList))
        dispatch(getTotalUser())

    }, [])
    return (
        <div className="admin-template-container">
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                        <Link to="" style={{ display: 'flex', height: "100px", alignItems: "center" }}>
                          
                            <h1>Winner</h1>
                        </Link>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['0']}
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: "white",

                        }}
                    >
                        <div className="admin" style={{ textAlign: "right", marginRight: "30px", display: 'flex', alignItems: "center", justifyContent: "flex-end" }}>
                            <span onClick={() => {
                                sessionStorage.removeItem("adminName")
                                sessionStorage.removeItem("adminAccessToken")
                                navigate("/admin")
                            }} style={{ color: "red", marginRight: "15px", textDecoration: "underline", cursor: "pointer" }}>Logout</span>
                            <span style={{ fontSize: "17px", marginRight: "15px" }}>Welcom, Admin</span>
                            <Avatar size={48} icon={<UserOutlined />} />
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                height: "100%"
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
