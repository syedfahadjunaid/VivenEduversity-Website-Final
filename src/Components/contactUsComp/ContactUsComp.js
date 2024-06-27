import React from "react";
import "./ContactUsComp.css";
import ContactMap from "../../Assets/Contact/Rectangle 32.jpg";
import Contact from "../../Components/contactFormMain/contactFormMain";

export default function ContactUsComp() {
  return (
    <div className='contactus-comp'>
      <div className='contactus-comp-bg-main'>
        <div className='contactus-comp-bg'></div>
      </div>
      <div className='contactus-comp-bg-main-content'>
        <div className='contactus-comp-bg-main-content-left'>
          <h1>Get In Touch</h1>
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <div className='home-banner-form-section'>
            <h2>Enquire Now</h2>
            <div className='home-banner-form'>
              <Contact />
            </div>
          </div>
        </div>
        <img
          className='contactus-comp-bg-main-content-img'
          src={ContactMap}
          alt='contactMap'
        />
      </div>
    </div>
  );
}
