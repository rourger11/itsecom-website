import { MenClothesCom } from "./MenProducts";
import {useSelector} from 'react-redux'
export const MenProductPageComp=()=>{
   
       const items = useSelector((state)=> state.allCart.items)
           return (
               <>

                <MenClothesCom props={items} />
           
               </>
           )
}