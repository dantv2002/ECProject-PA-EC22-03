import React, { useState } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
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
    const [collapsed, setCollapsed] = useState(false);

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
                        <h1>Store Name</h1>
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
                        <div className="admin" style={{textAlign:"right", marginRight:"30px",display:'flex', alignItems:"center",justifyContent:"flex-end"}}>
                            <span style={{fontSize:"17px",marginRight:"15px"}}>Welcom,nguyen</span>
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
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}
