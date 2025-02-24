import { useEffect, useState, useTransition } from "react";
import { getElectronicsProduct } from "../../ApiData/PostApi";
import { LoadingComp } from "../../LoadingAnim/LoadingAni";
import { ProductCards } from "./ProductCard";
import { useSelector } from "react-redux";

export const AllProducts = () => {

  const ele = useSelector((state)=>state.allCart.electronicItems)
  console.log(ele,"real");
  
  // const [isPending, stratTransition] = useTransition();

  // const [eleProductData, SeteleProductData] = useState([]);

  // useEffect(() => {
  //   stratTransition(async () => {
  //     const res = await getElectronicsProduct();
  //     SeteleProductData(res?.data);
  //   });
  // }, []);

  // if (isPending) return <LoadingComp />;

  return (
      <div className="mainProduct mt-2  mb-5">
        <span className="productCatogary">
          <b>Catagory:{ele?.category} </b>
        </span>
        <div className="container mt-5">
        <div className="row">
        {ele?.map((items,index) => {
          return <ProductCards props={items} key={index}/>;
        })}
        </div>
        </div>
      </div>
  );
};
