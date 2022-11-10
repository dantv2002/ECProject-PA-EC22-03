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

function App() {
  return (
    <>
    <PayPalScriptProvider options={{"client-id": "AQegottHMk21GDmNFtu6Vaf5ItV4yx8_QbQ1ie-eYBO67ba7Ws7MAFPqg3RdzRuhRpPRhMRAAcPtszIm"}}>
      
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate/>}>
          <Route index element={<Home/>}/>
          <Route path='/seachresult' element={<Search/>}/>
          
        </Route>
        <Route path='/proceed' element={<Proceed/>}/>
      </Routes>
    </BrowserRouter>
    </PayPalScriptProvider>
    </>
  );
}

export default App;
