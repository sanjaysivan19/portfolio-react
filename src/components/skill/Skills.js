import React from "react";
import  './Skills.css';
import fig1 from '../../assets/logo22.png';
import fig2 from '../../assets/logo32.jpg';
import fig3 from '../../assets/logo33.jpg';



function Skill1(){
    return(
        <div id='aboutt'>
            
<div className="introabout">About</div>
            <hr className="line1"></hr>
            <hr className="line2"></hr>
            <div className="aboutcontainer">
      

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig1} alt="Creative Thinking" />
        </div>
        <div className="skill-content">
          <h2>Language Knwoledge</h2>
          <p>
            I have Knwoledge about various type of programming languages such us HTML,REACT,PYTHON & PHP
          </p>
        </div>
      </div>

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig2} alt="Problem Solving " />
        </div>
        <div className="skill-content">
          <h2>Patience and Perseverance</h2>
          <p>
          Coding can be frustrating when problems arise, but i have patient and resilient. 
          </p>
        </div>
      </div>

      <div className="skillsection">
        <div className="skill-icon">
          <img src={fig3} alt="Leadership" />
        </div>
        <div className="skill-content">
          <h2>Leadership</h2>
          <p>
            My leadership style focuses on motivating others and fostering collaboration to achieve shared goals with clarity and trust.
          </p>
        </div>
      </div>
    </div>
        




        </div>
            
    )
}
export default Skill1;