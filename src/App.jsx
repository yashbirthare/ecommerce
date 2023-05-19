import "./App.css";
import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import { Routes,Route } from "react-router-dom";
import ProductStore from "./pages/ProductStore/productStore"
import {ProductDetail} from "./pages/ProductDetail/productDetail";
import WishList from "./pages/WishListPage/wishList";
import CartPage  from "./pages/CartListPage/cartList";



const App = () => {
  
  return (
    <div className="App">
    <div> <Header /></div>
    <div>  <Navbar/></div>
   

  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/ProductStore" element={<ProductStore />}/>
   <Route path="/ProductDetail/:productId" element={<ProductDetail />}/>
   <Route path="/WishList" element={<WishList/>}/>
   <Route path="/CartPage" element={<CartPage/>}/>
  </Routes>
   
   <div><footer/></div>

    </div>
  )
}

export default App
