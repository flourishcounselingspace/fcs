import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
function Footer() {
  return (

     <div class="footer-box">
       <div class="row">
         <div class="col-md-4">
           <h4>About Us</h4>
           <p className="normal-font">Disclaimer:
    Flourish Counseling Space is equipped to provide care and support for individuals experiencing severe psychological distress, including schizophrenia and other psychotic conditions. For those in need of more intensive care and daily support, we are launching an in-patient care facility in Gopanpally,
    Hyderabad.
    
    If you or someone you know is experiencing thoughts of self-harm, suicide, or any other life-threatening situation, contact a helpline or go to the nearest hospital or emergency room. Having a close family member or friend with you for support can be invaluable during this time.
    
    For emergency mental health support, please call/whatsapp us at +91-9937190927 / +91-7386277619 </p>
         </div>
 
         <div class="col-md-3">
           <h4>Quick Links</h4>
           <ul class="list-unstyled normal-font">
           <li><NavLink to="/fcs/ourmission" className="text-white">Our Mission</NavLink></li>
          <li><NavLink to="/fcs/imcgoal" className="text-white">IMC Goal</NavLink></li>
          <li><NavLink to="/fcs/ourservices" className="text-white">Our Services</NavLink></li>
          <li><NavLink to="/fcs/contactus" className="text-white">Contact Us</NavLink></li>
          <li><NavLink to="/fcs/aboutus" className="text-white">About Us</NavLink></li>
           </ul>
         </div>
 
         <div class="col-md-3">
           <h4>Contact Us</h4>
           <h5>flourishcounselingspace@gmail.com</h5>
           <h5>Phone: +91-9937190927</h5>
           <SocialLinks/>
         </div>
         <div class="text-center mt-2">
         <strong><p>&copy; 2025 Institute of Mental Health and Counseling(IMC). All rights reserved.</p></strong>
       </div>
       </div>
 
      
     </div>
  );

}

export default Footer;