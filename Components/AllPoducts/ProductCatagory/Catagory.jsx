import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router";
export const ProductCatogaryEle=({props})=>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
    return(
        <>
       <span className="productCatogary mt-5 ml-2" > <b>{props[0]?.category} items </b> </span>
 
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={responsive.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1500}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
  deviceType={responsive.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px"
>
{props?.map((products)=>{

return (
  <NavLink to='/electronic' >
<div className="catagoryImage"><img src={products.image} height={'200px'} width={'100%'} />
  </div> </NavLink>

)
})}
</Carousel>
<div className="text-center">
<NavLink to='/electronic' >
<Button variant="warning mt-4" >View Products</Button>

</NavLink>
</div>

        </>
        
    )
}