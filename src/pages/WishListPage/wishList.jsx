import React from 'react'
import './wishList.css';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im';
import { useWishList } from '../../context/wishListContext';


const WishList = () => {

 const {state,dispatch} = useWishList();   
 const {wishList} = state;

const getWishListProduct = ({new_arrival,id,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty}) =>  (


<div id="Wishlist-Product-Store">  


    <div className="Wishlist-Product-Main-Area-2nd">
    <div>
    <p>{new_arrival && <div className= "Wishlist-Product-Item-new">new</div>}</p>
    <Link to={`/ProductDetail/${id}`}> <img className='Wishlist-Product-Img1-Main' src={image} alt="/"/></Link>
    <p className="Wishlist-Product-tittle-tag">{tittle}</p>
    </div>

   <div>
    <div className="Wishlist-Product-Processor-Main">
    <div className="Wishlist-Product-count-Main">
    <p>{count}</p>
    <p>.{rate}☆</p>
    </div>
    <p className="Wishlist-Product-Processer">{processor} </p> 
    <p className="Wishlist-Product-category">{category}</p>
    </div>


   <div className="Wishlist-Product-tittle-Main">
   <p className="Wishlist-Product-description-tag">{description}</p>
   </div>

<div className="Wishlist-Product-Price-Main">
   <p className="Wishlist-Product-pro-price">{price}</p>
   <s> <p className="Wishlist-Product-ori-price">{original_price}</p> </s>
   <p className="Wishlist-Product-dis-price">{discount}%off</p>
   <p className="Wishlist-Product-qty-price">Hurry, Only {qty} left!</p>
 </div>  
 <div className="Wishlist-Product-Main-BTN"> 
      <button className="Wishlist-Product-Buy-btn" onClick ={() => dispatch({type:"REMOVE_To_WISHLIST",id:id})} >MOVE TO CART</button>
</div>

</div>
<p className="IM-REMOVE" onClick={() => dispatch({type:"REMOVE_To_WISHLIST",id:id})}><ImCross/></p>


</div> 

</div>
    
    )

  return(
        <div>
          {wishList.length > 0 && wishList.map((item) => getWishListProduct(item) )}
        </div>
    )
}


export default WishList