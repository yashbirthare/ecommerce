import { createContext, useContext, useReducer } from "react";


const GlobalContext = createContext();
const useGlobal = () => useContext(GlobalContext);


const GlobalProvider = ({children}) => {

   const [state, dispatch] = useReducer(wishListFun,{wishList:[],cartList:[],count:1,totalPrice:[]}) 
    
    function wishListFun (state, action)  {
        switch(action.type){


           case "Add_To_CartList":
           const cartData = state.cartList.find((item) => item.id === action.payload.id)
            if (cartData){
               alert("data is already present in cartlist")
            }else{
                return {...state, cartList: [...state.cartList , action.payload],
                totalPrice: [...state.totalPrice + action.payload.price]
               }
           }

   
           case "REMOVE_To_CartList":
           return {...state, cartList: state.cartList.filter((crt) => crt.id !== action.payload)}

           case "Add_To_WISHLIST":
           const data = state.wishList.find((item) => item.id === action.payload.id)
           if(data){
              alert('data is already present in wishlist')
           }else{
            return {...state, wishList: [...state.wishList , action.payload]}
           }  

           case "REMOVE_To_WISHLIST":
            console.log('iddd', action)
           return {...state, wishList: state.wishList.filter((Wis) => Wis.id !== action.payload )}

           case "MOVE_TO_CART":
            const checkCartData = state.cartList.find((item) => item.id === action.payload.id)
            if(checkCartData){
               alert("data is already present in cartlist")
            } else {
               const newCart = [...state.cartList, action.payload]
               const newWishlist = state.wishList.filter((Wis) => Wis.id !== action.payload.id )
               return {...state, cartList: newCart, wishList: newWishlist,cartPrice: state.cartPrice + action.payload}
             }
             
           case "Move_to_wishlist": 
           const checkWishlistData = state.wishList.find((item) => item.id === action.payload.id)
           if(checkWishlistData){
              alert("data is already present in wishlist")
           } else {
               return {...state, wishList: [...state.wishList , action.payload]}  
            }

           case "INCREMENT_QTY":
              const product = state.cartList.map((item) => {
               if(item.id === action.payload.id) {
                  return {...item, quantity: item.quantity + 1}
               } else {
                  return item
               }  
            }    
               )
               return {...state, cartList: product}
            
            case "DECREMENT_QTY":
               const product1 = state.cartList.map((item) => {
                  if(item.id === action.payload.id) {
                     return {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1   }
                  } else {
                     return item
                  }  
               }    
                  )
                  return {...state, cartList: product1}
           
            
        default:
            return state;
        }
       }
    return(
    <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>
    )
}

export {useGlobal,GlobalProvider}