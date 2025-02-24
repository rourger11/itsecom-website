
import { useSelector } from "react-redux";
import { CartComp } from "./Cart";

export const CartItemsComp=()=>{   
  const cartData = useSelector((state)=> state.allCart)
    return(
        <>
     
      
          <CartComp product={cartData} />
      
     
    </>
    )
}