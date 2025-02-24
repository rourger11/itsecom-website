import { Spinner } from "react-bootstrap"

export const LoadingComp=()=>{
    return(
        <div className="loader mt-2 " style={{textAlign:"center"}}> 
     <Spinner animation="border"/>
        </div>
    )
}