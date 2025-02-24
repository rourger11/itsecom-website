import { useEffect, useTransition } from "react"
import { getElectronicsProduct } from "../../ApiData/PostApi";
import { useState } from "react";
import { ProductCatogaryEle } from "./Catagory";
import { LoadingComp } from "../../LoadingAnim/LoadingAni";

export const EleProductApi =()=>{

   const[isPending,stratTransition]= useTransition()
   const [eleProductData, SeteleProductData] = useState([])

    useEffect(()=>{

        stratTransition(async()=>{

        const res =await getElectronicsProduct();
        SeteleProductData(res?.data)

        })

    },[]);

    if (isPending) return <LoadingComp/>
        

    return (
        <>
        
    <ProductCatogaryEle props ={eleProductData} />
    
        </>
    )
};