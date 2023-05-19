
import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import  laptop  from "../../assets/images/laptop.jpg";
import {useWishList} from "../../context/wishListContext";
import {useCartList} from '../../context/cartListContext';
import "./navbar.css"


const navbar = () => {
  const {state} = useWishList();   
  const {wishList} = state;
  const {stateCart} = useCartList();
  const {cartList} = stateCart;

  return (
    
<div id='navigation'>

<div className='brand-icon'>
<img src={laptop} alt=""/>
<Link className='link2' to="/"><p className="Eco" >Eco-<span className='Store'>Store</span></p></Link>
</div>

<input  className='input'
placeholder='search on Eco-Store    💻'/>

<div id='icons'>
<p className='icons-1'><BsPersonFill/></p>


<Link to="/CartPage"><p className='icons-1'> {cartList.length} <ImCart/></p></Link>

<Link to="/WishList"><p className='icons-1'> {wishList.length}<IoMdHeart/></p></Link>
<button className='btn'>Log Out</button>
</div>
</div>
  )
}

export default navbar 
