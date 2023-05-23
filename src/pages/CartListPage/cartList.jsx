import './cartList.css';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im';
import {IoMdHeart} from 'react-icons/io';
import { useGlobal } from "../../context/globalContext";


 const CartList = () => {
 
    const {state,dispatch} = useGlobal();
    const {cartList,cartPrice,cartDiscount,totalAmount} = state;


    

    const GetCartListProduct = ({item}) => {
    const {new_arrival,id,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty} = item
    
   
    return (


    <div id="Cart-Product-Store">
     
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
 <p className="Qty1">Qty: {state.count}</p>

 <button className= "Qty1-plus" onClick={() => dispatch({type: "ADD-TO-BILL",payload:price})}>+</button>
 <button className="Qty1-mainus" onClick={  () => dispatch({type: "SUB-TO-BILL",payload:price})} >-</button>
</div>

</div>
<div className="emoji">
<p className="IM-REMOVE" onClick={() => dispatch({type:"REMOVE_To_CartList",payload:id})}><ImCross/></p>
<p className="emoji-2"   onClick={() => dispatch({type:"Add_To_WISHLIST",payload:item})} ><IoMdHeart/> </p>
</div>

</div>
</section>
</div>
</div>
)}

    return(
  <div>
<section className='Total-Quantity-area-CartList'> Total quantity: {state.count}  </section>


   {cartList.length > 0 && cartList.map((item) => <GetCartListProduct item = {item} />)}

   <section className="Checkout-area-main">
   <h3 className="Price Details">Price Details</h3>
   <div className="divider"></div>
   <div> Total MRP</div>            <div>{cartPrice}</div>
   <div> Discount On MRP</div>      <div>{cartDiscount}</div>
   <div> Coupon Discount</div>      <div>Apply coupon</div>
   <div> Convenience Fee</div>      <div>RS.99</div>
   <div> Total Amount</div>         <div>{totalAmount}</div>
   <button>Checkout</button>
   </section>
    </div>
    )}

export default CartList;

