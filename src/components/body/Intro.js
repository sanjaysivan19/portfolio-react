import React from 'react';
import personImage from '../../assets/logo23.jpeg'; 
import './Intro.css';

const Intro1 = () => {
  return (
    <div className='introo'>
    <div className='bb'>
      <section id="intro">
        <div className="introContent">
          <div className="textContent">
            
            <span className="hello">HI,</span>
            <span className="introtext">
              I’m <span className="introname">SANJAY</span>
            </span>
            <span className="role">Web Developer</span>
            <p className="intropara">
              I am a skilled and profesional front-end developer, creating verity type of stylish  website using HTML,REACT & PHP. let's build somthing big!
            </p>
            <button className="btn">
             Hire Me
            </button>
          </div>
          
        </div>
      </section>
      <img src={personImage} alt="Profile" className="profileImage" />
    </div>
    </div> 
  );
};

export default Intro1;
