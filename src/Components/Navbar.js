// src/Navbar.js
import React from "react";
import "./Navbar.css"; // Ensure styles are updated
import imclogo from "../assets/imclogo.jpg";
import wapp from "../assets/whatsapplogo.png";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "bootstrap";

const Navbar = () => {
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement) {
      const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <nav className="navbar">
      <div>
        <img src={imclogo} alt="Logo" width="70" height="70" />
      </div>
      <ul>
      <NavLink to="/ourmission">
          <li>Our Mission</li>
        </NavLink>
        <NavLink to="/imcgoal">
          <li>IMC Goal</li>
        </NavLink>
        <NavLink to="/ourservices">
          <li>Our Services</li>
        </NavLink>
        <NavLink to="/aboutus">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/contactus">
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
              <NavLink className="nav-link" to="/ourmission" onClick={closeOffcanvas}>
              Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/imcgoal" onClick={closeOffcanvas}>
              IMC Goal
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/ourservices"
                onClick={closeOffcanvas}
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/aboutus"
                onClick={closeOffcanvas}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/contactus"
                onClick={closeOffcanvas}
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
