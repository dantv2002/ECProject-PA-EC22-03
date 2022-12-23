import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "./sass/Main.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainTemplate from './templates/main/MainTemplate';
import { Home } from './pages/main/home/Home';
import { Search } from './pages/main/search/Search';
import { Proceed } from './pages/main/proceed/Proceed';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserInfo } from './pages/main/user/UserInfo';
import { Notification } from './pages/main/user/notification/Notification';
import { PersonalInfo } from './pages/main/user/personalinfo/PersonalInfo';
import { ProductDetail } from './pages/main/productDetail/ProductDetail';
import { Auction } from './pages/main/auction/Auction';
import { UserStore } from './pages/main/userstore/UserStore';
import { AllProduct } from './pages/main/userstore/allproduct/AllProduct';
import  OrderManage  from './components/ordermanage/OrderManage';
import  AuctioningProduct  from './components/autioningProduct/AuctioningProduct';
import { RealStore } from './pages/main/userstore/realStore/RealStore';
import { AdminTemplate } from './templates/admin/AdminTemplate';
import { HomePage } from './pages/admin/homepage/HomePage';
import { Shipping } from './pages/admin/shipping/Shipping';
import { ProductDirectory } from './pages/admin/productDirectory/ProductDirectory';
import { UserManage } from './pages/admin/userManage/UserManage';
import { Authentication } from './templates/authentication/Authentication';
import { Login } from './pages/main/login/Login';
import { Register } from './pages/main/register/Register';
import { AdminLogin } from './pages/admin/login/AdminLogin';
import { Test } from './pages/test/Test';

function App() {
  return (
    <>
    <PayPalScriptProvider options={{"client-id": "AQegottHMk21GDmNFtu6Vaf5ItV4yx8_QbQ1ie-eYBO67ba7Ws7MAFPqg3RdzRuhRpPRhMRAAcPtszIm"}}>
      
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate/>}>
          <Route index element={<Home/>}/>
          <Route path='/seachresult' element={<Search/>}/>
          <Route element={<UserInfo/>}>
            <Route path='user/notification' element={<Notification/>}/>
            <Route path='user/personalinfo' element={<PersonalInfo/>}/>
            <Route path='user/ordermanage' element={<OrderManage type="user"/>}/>
          </Route>
          <Route path='/productdetail/:id' element={<ProductDetail/>}/>
          <Route path='/auction/:id' element={<Auction/>}/>
          <Route element={<UserStore/>}>
            <Route path='userstore/allproduct' element={<AllProduct/>}/>
            <Route path='userstore/ordermanage' element={<OrderManage type="store"/>}/>
            <Route path='userstore/auctioningproducts' element={<AuctioningProduct type="store"/>}/>
          </Route>
          <Route path='userstore/realstore' element={<RealStore type="owner"/>}/>
          <Route path='store/:id' element={<RealStore type="seller"/>}/>
        </Route>
        <Route element={<AdminTemplate/>}>
          <Route path='/admin/home' element={<HomePage/>}/>
          <Route path='/admin/shipping' element={<Shipping/>}/>
          <Route path='/admin/directory' element={<ProductDirectory/>}/>
          <Route path='/admin/usermanage' element={<UserManage/>}/>
        </Route>
        <Route path='/proceed' element={<Proceed/>}/>
        <Route element={<Authentication/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
        </Route>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
    </PayPalScriptProvider>
    </>
  );
}

export default App;
