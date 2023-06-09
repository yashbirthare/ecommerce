import "./App.css";
import React from 'react'
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/footer"

import { Routes,Route } from "react-router-dom";
import ProductStore from "./pages/ProductStore/productStore"
import {ProductDetail} from "./pages/ProductDetail/productDetail";
import WishList from "./pages/WishListPage/wishList";
import CartPage  from "./pages/CartListPage/cartList";
import LoginPage from "./pages/LoginPage/loginPage";



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
   <Route path="/LoginPage" element={<LoginPage/>}/>
 </Routes>
   
  <Footer/>

    </div>
  )
}

export default App
