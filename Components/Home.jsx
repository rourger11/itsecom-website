import { ProductCatogaryEle } from "./AllPoducts/ProductCatagory/Catagory"
import { EleProductApi } from "./AllPoducts/ProductCatagory/ElectronicsProApi"
import { JwellaryComp } from "./AllPoducts/ProductCatagory/JwellaryItemes/JwellaryProduct"
import { MenProductComp } from "./AllPoducts/ProductCatagory/MenCatagory/MenProductAll"
import { CarouselComponent } from "./Carousel"

export const Home =()=>{
    return(
        <>
        <CarouselComponent />
        <EleProductApi/>
         <MenProductComp />
         <JwellaryComp />
        </>
    )
}