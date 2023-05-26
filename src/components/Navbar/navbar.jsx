
import React from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import laptop from "../../assets/images/laptop.jpg";
import { useGlobal } from "../../context/globalContext";

import "./navbar.css"


const Navbar = () => {
  const { state } = useGlobal();
  const { wishList,cartList } = state;


  return (

    <div id='navigation'>

      <div className='brand-icon'>
        <img src={laptop} alt="" />
        <Link className='link2' to="/"><p className="Eco" >Eco-<span className='Store'>Store</span></p></Link>
      </div>

      <input className='input'
        placeholder='search on Eco-Store    💻' />

      <div id='icons'>

        <div className='icons-1'> <BsPersonFill /></div>
        <div className='icons-1'> <Link className='icon'  to="/WishList"><IoMdHeart/><div  className='icons-2'>{wishList.length} </div> </Link></div>
        <div className='icons-1'> <Link className='icon' to="/CartPage"> <ImCart/><div className='icons-2' > {cartList.length} </div></Link> </div>
      </div>
      <Link className='btn' to="/LoginPage"> <a>Log Out</a></Link>
    </div>
  )
}

export default Navbar 


 