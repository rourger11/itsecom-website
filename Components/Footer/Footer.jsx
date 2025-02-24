import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa";
import { NavLink } from "react-router";
export const FooterComp=()=>{

  return (
    <>
    <footer className="text-white py-4 mt-2" style={{ backgroundColor: "#343a40" }}>
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">E-Commerce.com</h5>
            <p>Providing quality content and services to our users with passion.</p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink className="text-white text-decoration-none" to="/about">About Us</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/">Services</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">&copy; 2025 MyWebsite. All Rights Reserved.</div>
      </div>
    </footer>
        
        {/* <div className=" footerContent col-12 col-md ">
                <img
                  className="d-block"
                  src="./src/images/logo.svg"
                  alt="pp-img"
                  height={"30x"}/>
                <small className="d-block mb-3 text-muted">
                  &copy;© Copyright Ecommerce.com
                </small>
              </div>
        <div className="socialIcon" >
         <i> <FaFacebook/></i>
         <i><FaTwitter/></i>
         <i><FaLinkedin/></i>
         <i><FaInstagram/></i>
        </div> */}
        </>
    )
}