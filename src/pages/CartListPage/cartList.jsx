import { useCartList } from "../../context/cartListContext"
import './cartList.css';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im';
import {IoMdHeart} from 'react-icons/io';
import { useWishList } from "../../context/wishListContext";

 const CartList = () => {
 
const {stateCart,dispatchCart} = useCartList();
const {cartList} = stateCart;
const {dispatch} = useWishList();


const getCartListProduct = ({new_arrival,id,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty}) => (

    
    <div id="Cart-Product-Store">
     <section><h2>Total quantity: </h2></section>
     <div className="section-main">  
    <section className="Cart-Product-Item-secound">
    <div className="Cart-Product-Main-Area-2nd">
    
    <div>
    <p>{new_arrival && <div className= "Cart-Product-Item-new">new</div>}</p>
    <Link to={`/ProductDetail/${id}`}> <img className='Cart-Product-Img1-Main' src={image} alt="/"/></Link>
    <p className="Cart-Product-tittle-tag">{tittle}</p>
    </div>

   <div>
    <div className="Cart-Product-Processor-Main">
    <div className="Cart-Product-count-Main">
    <p>{count}</p>
    <p>.{rate}☆</p>
    </div>
    <p className="Cart-Product-Processer">{processor} </p> 
    <p className="Cart-Product-category">{category}</p>
    </div>


   <div className="Cart-Product-tittle-Main">
   <p className="Cart-Product-description-tag">{description}</p>
   </div>

<div className="Cart-Product-Price-Main">
   <p className="Cart-Product-pro-price">{price}</p>
   <s> <p className="Cart-Product-ori-price">{original_price}</p> </s>
   <p className="Cart-Product-dis-price">{discount}%off</p>
   <p className="Cart-Product-qty-price">Hurry, Only {qty} left!</p>
 </div>  
 <div className="Cart-Product-Main-BTN"> 
 <p className="Qty1" >Qty:</p>
 <button className="Qty1-plus" >+</button>
 <button className="Qty1-mainus">-</button>

</div>

</div>
<div className="emoji">
<p className="IM-REMOVE" onClick={() => dispatchCart({type:"REMOVE_To_CartList",id:id})}><ImCross/></p>
<p className="emoji-2"   onClick={() => dispatch({type:"ADD_TO_WishList",payload:id})} ><IoMdHeart/> </p>
</div>
</div>
</section>

 <section className="Checkout-area-main">
   <h3 className="Price Details">Price Details</h3>
   <div className="divider"></div>
   <p>Discount On MRP</p>
   <p>Coupon Discount</p>
   <p>Convenience Fee</p>
   <p>Total Amount</p>
   <button>Checkout</button>
</section>
</div>
</div>


)
    return(
        <div>
           {cartList.length > 0 && cartList.map((item) => getCartListProduct(item) )}
        </div>
    )
}

export default CartList;

