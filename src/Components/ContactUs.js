// export default ContactUs;
// ContactUsPage.jsx
import React from "react";
import "./ContactUs.css"; // Import the CSS file
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Icon components
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../assets/map.jpg';
// import {faMapMarkerAlt } from '@fortawesome/free-brands-svg-icons';

// import contact  from '../assets/contactus.jpg'

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <h1 className="contact-us-title">Book Appointment</h1>

      <div className="contact-details">
        <p className="contact-info my-color-black">
          For any requirement related to counseling/mental health services, please call or WhatsApp us
          at the numbers below. Kindly connect this message to your family or friends who need help.
        </p>
        <div className="contact-items">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span className="contact-text">Book Appointment via 📞 09937190927 / 07386277619</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/919937190927" className="contact-text" target="_blank" rel="noopener noreferrer">
              Book Appointment via WhatsApp
            </a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span className="contact-text">Address: 102, Golden Crest Apartment, Opposite to Wipro, NTR Nagar, Gopanpally, Gachibowli, Hyderabad, Telangana, 500046</span>
          </div>
        </div>

        <div className="map-link">
          <a
            href="https://maps.app.goo.gl/guLpYh7MsWzuTdSX6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-text"
            style={{
              display: 'inline-block',
              backgroundImage: `url(${backgroundImage})`, // Use the imported image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              textDecoration: 'none',
            }}
          >
            <FaMapMarkerAlt className="icon" /> View on Google Maps
          </a>
          <a href="https://maps.app.goo.gl/NX9oedCEcu8ukWFv6" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={FaMapMarkerAlt} size="2x" />
          </a>
          <SocialLinks/>
        </div>
      </div>
      <div>
      {/* <iframe title="Contact Flourish Counseling Space Experts"  src="https://docs.google.com/forms/d/e/1FAIpQLSfzNdKtOI23ZWGKbsOoI5z7kFNIqsxO5ki1KKT_1OLEpf-Liw/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      <iframe title="Book an appointment today" src="https://docs.google.com/forms/d/e/1FAIpQLSfzNdKtOI23ZWGKbsOoI5z7kFNIqsxO5ki1KKT_1OLEpf-Liw/viewform?embedded=true" width="640" height="1587" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
};

export default ContactUs;
