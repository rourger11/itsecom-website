import "../../ProductCatagory/MenCatagory/MenProductStyle.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Feature/CartSlice";
import { useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";

export const MenClothesCom = ({ props }) => {

  const notify = () => toast("Item Added Successfully");

   const dispatch = useDispatch()

   const handleAddtoCart=(clothes)=>{
    dispatch(addToCart(clothes))
    notify()
   }
  
  return (
    <>
      <span className="productCategory mt-3">
        <b>Catagory:{props[0]?.category}</b>
      </span>
      <div className="container mt-5">
      <div className="row">
      {props?.map((clothes, index) => {
        return (
          
          <div className="col-md-4 mb-4" key={index}>
          <div className="card shadow-sm h-100">
            <img src={clothes.image} className="card-img-top" alt={clothes.title} />
            <div className="card-body">
              <h5 className="card-title">{clothes.title.substring(0, 25)}</h5>
              <p className="text-muted">{clothes.category}</p>
              <p className="card-text">{clothes.description.substring(0, 60)}</p>
              <h6 className="text-primary">$ {clothes.price}</h6>
              <button className="btn btn-primary w-100" onClick={()=>handleAddtoCart(clothes)}>Add to Cart</button>
              <ToastContainer
              position="top-center"
              autoClose={400}
             theme="dark"/>
            </div>
          </div>
        </div>
                );
              })}
            </div>
          </div>
      
    </>
  );
};
