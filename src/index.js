import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./context/storeContext"
import { WishListProvider } from "./context/wishListContext";
import { CartListProvider } from "./context/cartListContext";
// Call make Server
makeServer();

ReactDOM.render(
   
<React.StrictMode>
<BrowserRouter>
<StoreProvider>
<WishListProvider>
<CartListProvider>
    <App />
</CartListProvider>
</WishListProvider>
</StoreProvider>    
</BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
