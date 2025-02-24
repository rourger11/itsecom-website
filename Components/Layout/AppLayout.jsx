import { Outlet } from "react-router"
import { FooterComp } from "../Footer/Footer"
import Navigation from "../Navbar"

export const AppLayout=()=>{
    return(
        <>
        <Navigation />
        <Outlet />
        <FooterComp />
        
        </>
    )
}