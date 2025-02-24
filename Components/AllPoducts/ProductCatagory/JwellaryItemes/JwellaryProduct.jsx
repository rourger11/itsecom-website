import { useEffect, useState, useTransition } from "react";
import { LoadingComp } from "../../../LoadingAnim/LoadingAni";
import { getWomenProduct } from "../../../ApiData/PostApi";
import { Button} from "react-bootstrap";
import Carousel from "react-multi-carousel";


export const JwellaryComp = () => {
  const [isPending, stratTransition] = useTransition();
  const [jeweleryProductData, SetJweleryProductData] = useState([]);

  useEffect(() => {
    stratTransition(async () => {
      const res = await getWomenProduct();
      SetJweleryProductData(res?.data);
    });
  }, []);

  if (isPending) return <LoadingComp />;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <span className="productCatogary mt-5" >
        <b>{jeweleryProductData[0]?.category}</b>
      </span>
    <div>
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
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        deviceType={responsive.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        {jeweleryProductData?.map((products) => {
          return (
            <div className="catagoryImage"><img src={products.image} height={"150px"} width={"100%"} />
            </div>
          );
        })}
      </Carousel>
      </div>
      <div className="text-center">
        <Button variant="warning mt-4">View Products</Button>
      </div>
    </>
  );
};
