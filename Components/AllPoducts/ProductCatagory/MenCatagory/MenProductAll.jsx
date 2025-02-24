import { useEffect, useTransition } from "react"
import { useState } from "react";
import { MenCatagoryComp } from "./MenCatagory";
import { getMenProduct } from "../../../ApiData/PostApi";
import { LoadingComp } from "../../../LoadingAnim/LoadingAni";

export const MenProductComp=()=>{
    const[isPending,stratTransition]= useTransition()
       const [menProductData, SetmenProductData] = useState([])
    
        useEffect(()=>{
    
            stratTransition(async()=>{
    
            const res =await getMenProduct();
            SetmenProductData(res?.data)    

            })
    
        },[]);
    
        if (isPending) return <LoadingComp/>
            
    
        return (
            <>
            <MenCatagoryComp props={menProductData}  />
        
            </>
        )
}