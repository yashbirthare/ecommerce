import { useCartList } from "../../context/cartListContext";
import { useStore } from "../../context/storeContext"
import { useWishList } from "../../context/wishListContext";
import "./productStore.css"

import { Link } from "react-router-dom";

const ProductStore  = () => {
  const { products } = useStore();
  const {dispatch} = useWishList();
  const {dispatchCart} = useCartList();
  
  return (
    
    <div>
    <div id="ProductStore-Main-Area"> {products.map((item) => {
     
   const  {new_arrival,id,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty} = item
return (

    <div className="ProductStore-Main-Area-2nd">
    <p>{new_arrival && <div className= "ProductStore-Item-new">new</div>}</p>
    <Link to={`/ProductDetail/${id}`}> <img className='ProductStore-Img1-Main' src={image} alt="/"/></Link>
    <p className="ProductStore-tittle-tag">{tittle}</p>
    <div/> 
  
    <div className="ProductStore-Processor-Main">
    <div className="ProductStore-count-Main">
    <p>{count}</p>
    <p>.{rate}☆</p>
    </div>
    <p className="ProductStore-Processer">{processor} </p> 
    <p className="ProductStore-category">{category}</p>
    </div>

   <div className="ProductStore-tittle-Main">
   <p className="ProductStore-description-tag">{description}</p>
   </div>

<div className="ProductStore-Price-Main">
   <p className="ProductStore-pro-price">{price}</p>
   <s> <p className="ProductStore-ori-price">{original_price}</p> </s>
   <p className="ProductStore-dis-price">{discount}%off</p>
   <p className="ProductStore-qty-price">Hurry, Only {qty} left!</p>
 </div>  

 <div className="ProductStore-Main-BTN"> 
      <button className="ProductStore-Cart-btn" onClick={()=> dispatch ({type:"Add_To_WISHLIST",payload: item})}>ADD TO WISHLIST</button>
      <button className="ProductStore-Buy-btn" onClick={()=> dispatchCart({type:"Add_To_CartList",payload: item})} >MOVE TO CART</button>
</div>
</div>)})} 
    
      </div>
      </div>
  )
}

export default ProductStore




