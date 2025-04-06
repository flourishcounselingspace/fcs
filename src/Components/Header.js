import React from "react";
import { Link, Outlet } from "react-router-dom";
function Header({brandName}) {
  return (
<>
<nav class="navbar bg-primary-subtle fixed-top">
  <div class="container-fluid">
        <h1 class="m-1 pr-0">
            <i class="bi-globe"></i>
        </h1>
    <Link class="navbar-brand" to="/"><h3>{brandName}</h3></Link>
    <div class="nav-item">
           <Link class="nav-link active font-" aria-current="page" to="/fcs/ourmission"><h2>Our Mission</h2></Link>
         </div>
         <div class="nav-item">
           <Link class="nav-link active font-" aria-current="page" to="/fcs/imcgoal"><h2>IMC Goal</h2></Link>
         </div>
         <div class="nav-item">
           <Link class="nav-link" to="/fcs/ourservices"><h2>Our Services</h2></Link>
         </div>
         <div class="nav-item">
           <Link class="nav-link" to="/fcs/aboutus"><h2>About Us</h2></Link>
         </div>
         <div class="nav-item">
           <Link class="nav-link" to="/fcs/contactus"><h2>Contact Us</h2></Link>
         </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        {/* <h2 class="offcanvas-title" id="offcanvasNavbarLabel">{brandName}</h2> */}
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
           <Link class="nav-link active font-" aria-current="page" to="/fcs/ourmission"><h2>Our Mission</h2></Link>
         </li>
        <li class="nav-item">
           <Link class="nav-link active font-" aria-current="page" to="/fcs/imcgoal"><h2>Imc Goal</h2></Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/fcs/ourservices"><h2>Our Services</h2></Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/fcs/contactus"><h2>Contact Us</h2></Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="/fcs/about"><h2>About Us</h2></Link>
         </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
 <main>
 <Outlet />
</main>
</>
  );
}

export default Header;
