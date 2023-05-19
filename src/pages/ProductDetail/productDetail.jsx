
import { useParams } from "react-router-dom"
import { useStore } from "../../context/storeContext"
import {ProductCard} from "../ProductCard/productCard"

function ProductDetail() {
    const {products} =useStore()
    const {productId} = useParams()
    const findDeatils = (products,productId) => {
        return products.find((item)=>item.id===productId)
    }
    const product = findDeatils(products, productId);
    

    return(
        <div>
      <ProductCard {...product} />
        </div>
    )
    
}
export {ProductDetail}