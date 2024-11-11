import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; 
const Contact1 = () => {
  return (
    <div id='contactt'>
            
    <div className="introcontact">Contact</div>
                <hr className="line1"></hr>
                <hr className="line2"></hr>

                <div className="contactcontainer">
      <div className="contactinfo">
        <h1>Contact <span className="highlight">Me</span></h1>
        <p>Get in <span className="highlight">Touch</span></p>
        
        <div className="contactdetails">
          <div className="contactitem">
            <FaPhoneAlt />
            <span>9645452900</span>
          </div>
          <div className="contactitem">
            <FaEnvelope />
            <span>sanjaysivankmr@gmail.com</span>
          </div>
          
        </div>
      </div>

      <div className="contactform">
        <input type="text" placeholder="Your name" />
        <div className="formrow">
          <input type="email" placeholder="Your Email" />
          <input type="number" placeholder="Your Number" />
        </div>
        <input type="" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>    
    
    
   </div> 
  );
};

export default Contact1;
