import React from "react";
import "./productCard.css"
import { useGlobal } from "../../context/globalContext";


 const ProductCard = (item) => {

  const  {new_arrival,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty} = item;

  const {dispatch} = useGlobal();

  return (
    <div id="ProductCard-Item-List">
  <div>
  <p>{new_arrival && <div className="ProductCard-Item-new">new</div> }</p>
       <img className="ProductCard-Item-items" src={image} alt="" />
       
       <div className="Main-BTN"> 
      <button className="Cart-btn" onClick={() => dispatch({ type:"Add_To_WISHLIST",payload: item})} >ADD TO WISHLIST</button>
      
      <button className="Buy-btn"  onClick={() => dispatch({ type:"Add_To_CartList",payload: item})}>MOVE TO CART</button>
      </div>
     </div>

    
    <div id="ProductCard-main">
    <p className="ProductCard-tittel-tag">{tittle}</p>
    <p className="ProductCard-description-tag">{description}</p>


    <div className="ProductCard-last-Item">
    <p className="ProductCard-off-Ex">Extra ₹10000 off</p>
    <p className="ProductCard-category">{category}</p>
    <p className="ProductCard-category">{processor}</p>
    </div>

<div id="ProductCard-rating-main">
    <div className="ProductCard-rating">
    <p>{count}</p>
    <p>.{rate}☆</p>
  </div>

  <p className="ProductCard-Reviews">783 Ratings & 76 Reviews</p>
</div>


<div id="ProductCard-price">
    <p className="ProductCard-pro-price">{price}</p>
    <s> <p className="ProductCard-ori-price">{original_price}</p></s>
    <p className="ProductCard-dis-price">{discount}%off</p>
    <p className="ProductCard-qty">Hurry, Only {qty} left!</p>
</div>


    <div id="ProductCard-offers">
    <h4 className="ProductCard-offers-A">Available offers</h4>
    <p className="ProductCard-offers-p">
    🏷️Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,250. On orders of ₹5,000 and above<span className="ProductCard-T-C">T&C</span></p>
    <p className="ProductCard-offers-p">
    🏷️Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,250 on orders of ₹5,000 and above<span className="ProductCard-T-C">T&C</span></p>
    <p className="ProductCard-offers-p" >
    🏷️Bank Offer10% off on Kotak Bank Debit Card Transactions, up to ₹500. On orders of ₹5,000 and above<span className="ProductCard-T-C">T&C</span></p>
    <p className="ProductCard-offers-p">🏷️FreebieAirtel Xstream Entertainment Plan<span className="ProductCard-T-C">T&C</span></p>
    </div>
     </div>
    </div>
    
  );
}
export {ProductCard}
