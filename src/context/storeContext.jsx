import { useState ,useEffect ,createContext, useContext} from "react" 
import axios from "axios";


const StoreContext = createContext();
const useStore = () => useContext(StoreContext);

const  StoreProvider = ({children}) =>{

    const [products, setProducts] = useState([]);
    useEffect(() => {
  
      
        (async () => {
          const response = await axios.get("/api/products")
          setProducts(response.data.products)
        })()
   
    },[])

    return(
    <StoreContext.Provider value={{products, setProducts}}>
        {children}
    </StoreContext.Provider>
    )
}


export {useStore,StoreProvider}

