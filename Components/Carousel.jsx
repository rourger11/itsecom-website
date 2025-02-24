import { Carousel } from "react-bootstrap"
import shoeImage from '../Images/shoe.jpg'
import headphoneImage from '../Images/headphone.jpg'
import beautyImage from '../Images/beauty.jpg'
import './CarouselStyle.css'



export const CarouselComponent=()=>{
    return(
        <>
        <div className="carouselData"  >
        <Carousel>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100'src={shoeImage}  alt="first image" height={"440vh"} style={{margin:'0',padding:'0'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img className='d-block w-100'src={headphoneImage} alt="second image" height={"440vh"} style={{margin:'0',padding:'0'}}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item interval={1000}>
      <img className='d-block w-100' src={beautyImage} alt="third image" height={"440vh"} style={{margin:'0',padding:'0'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}