import { Button } from "react-bootstrap"
import { NavLink, useRouteError } from "react-router"

export const ErrorComp=()=>{

    let error = useRouteError()
    return(

        <>
        {/* <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>} */}
      <div className="text-center">

      <img src="../src/Images/notFound.jpg" width={"40%"} />
      <div>
      <NavLink to="/" className="text-center">
        <Button variant="success" size="m"> Go Home </Button>
      </NavLink>
      </div>
      
      </div>
      
      </>
    )
}