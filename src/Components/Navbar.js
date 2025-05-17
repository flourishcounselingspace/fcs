// src/Navbar.js
import React from "react";
import "./Navbar.css"; // Ensure styles are updated
import imclogo from "../assets/imclogo.jpg";
import wapp from "../assets/whatsapplogo.png";
import { NavLink, useNavigate } from "react-router-dom";
//import { Offcanvas } from "bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  const closeOffcanvas = (route) => {
    // Use React Router's navigate function to navigate to the route
    navigate(route);
  };

  return (
    <nav className="navbar">
      <div>
        <img src={imclogo} alt="Logo" width="100" height="100" />
      </div>
      <ul>
      <NavLink to="/fcs/ourmission">
          <li>Our Mission</li>
        </NavLink>
        <NavLink to="/fcs/imcgoal">
          <li>IMC Goal</li>
        </NavLink>
        <NavLink to="/fcs/ourservices">
          <li>Our Services</li>
        </NavLink>
        <NavLink to="/fcs/aboutus">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/fcs/contactus">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <a
        href="https://wa.me/919937190927"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img
          src={wapp}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      {/* Offcanvas Toggler Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
              <NavLink className="nav-link"
               to="/fcs/ourmission"
               onClick={() => closeOffcanvas("/fcs/ourmission")} data-bs-dismiss="offcanvas">
              Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link"
              to="/fcs/imcgoal"
              onClick={() => closeOffcanvas("/fcs/imcgoal")} data-bs-dismiss="offcanvas">
              IMC Goal
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/fcs/ourservices"
                onClick={() => closeOffcanvas("/fcs/ourservices")} data-bs-dismiss="offcanvas"
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/fcs/aboutus"
                onClick={() => closeOffcanvas("/fcs/aboutus")} data-bs-dismiss="offcanvas"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/fcs/contactus"
                onClick={() => closeOffcanvas("/fcs/contactus")} data-bs-dismiss="offcanvas"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
