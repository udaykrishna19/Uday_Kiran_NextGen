import React from "react";
import "./ContactUs.css";
import contactImage from "../assets/contact-image.jpg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us.</p>
      <img src={contactImage} alt="Contact us" />
    </div>
  );
};

export default ContactUs;
