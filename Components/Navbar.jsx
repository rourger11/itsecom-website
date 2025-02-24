import { NavLink } from "react-router";
import "./NavbarStyle.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  } 

  const {cart} = useSelector((state)=> state.allCart)

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#3D3D3D" }}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="./src/images/logo.svg"
            alt="Logo"
            className="me-2"
            height={"30x"}
          />
          <span className="fw-bold fs-4">E-Commerce</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>  
          </ul>
        </div>
          <NavLink to="/cart">
          <Button variant="outline-warning" size="sm">Cart({cart?.length})</Button>
          </NavLink>
      </div>
    </nav>
    </>
  );
}
