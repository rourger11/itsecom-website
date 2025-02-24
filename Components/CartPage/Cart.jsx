
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { getCartTotal, increaseItemQuantity,removeItem,decreaseItemQuantity } from "../Feature/CartSlice";
import { useEffect } from "react";

export const CartComp = ({product}) => {
  const {cart,totalQuantity,totalPrice}=product

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getCartTotal())

},[cart])

  return (
   <>
         <section className="h-100 bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5>Cart - {cart?.length} items</h5>
              </div>
              <div className="card-body">
                {cart?.map((item) => (
                  <div key={item.id} className="row align-items-center mb-3">
                    <div className="col-md-3">
                      <img src={item.image} className="img-fluid rounded" alt={item.title} />
                    </div>
                    <div className="col-md-5">
                      <h6>{item?.title}</h6>
          
                      <button className="btn btn-sm btn-danger me-2" onClick={()=>dispatch(removeItem(item?.id))}>Remove</button>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-primary me-2"onClick={()=>dispatch(decreaseItemQuantity(item?.id))}>-</button>
                        <input type="number" className="form-control w-26 text-center" value={item?.quantity}min="1" readOnly />
                        <button className="btn btn-sm btn-primary ms-2" onClick={()=>dispatch(increaseItemQuantity(item?.id))}>+</button>
                      </div>
                      <p className="text-end mt-2"><strong>$ {item?.price}</strong></p>
                    </div>
                    <hr  className="mt-4"/>
                  </div>
                  
                ))}
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>Summary</h5>
              </div>
              <div className="card-body">
                <p>Products: <span className="float-end">{cart?.length}</span></p>
                <p>Shipping: <span className="float-end">Free</span></p>
                <hr />
                <p><strong>Total: <span className="float-end">$ {totalPrice}</span></strong></p>
               <button className="btn btn-success w-100">Go to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     
   </>
  );
  
  };