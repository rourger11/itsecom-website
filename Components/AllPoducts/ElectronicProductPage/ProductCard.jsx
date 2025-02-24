import { useDispatch } from "react-redux";
import { addToCart } from "../../Feature/CartSlice";
import { toast, ToastContainer } from "react-toastify";

export const ProductCards = ({props} ) => {
  const notify = () => toast("Item Added Successfully");
  
     const dispatch = useDispatch()
  
     const handleAddtoCart=(clothes)=>{
      dispatch(addToCart(clothes))
      notify()
     }
  
  
  return (
      
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={props?.image}
                className="card-img-top"
                alt={props?.title}
              />
              <div className="card-body">
                <h5 className="card-title">{props?.title.substring(0, 20)}</h5>
                <p className="text-muted">{props?.category}</p>
                <p className="card-text">{props?.description.substring(0, 55)}</p>
                <h6 className="text-primary">$ {props?.price}</h6>
                <button className="btn btn-primary w-100" onClick={()=>handleAddtoCart(props)}>Add to Cart</button>
                <ToastContainer 
                position="top-center"
                autoClose={400}
               theme="dark"
                />
              </div>
            </div>
          </div>
  );
};
