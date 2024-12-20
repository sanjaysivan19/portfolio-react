import React from 'react';
import './Edu.css';

function Edu1() {
    const educationSteps = [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "Certifications",
        "Workshops",
        "Internships",
        "Projects",
        "Awards",
    ];

    return (
        <div id="eduu">
            <div className="introedu">Education</div>
            <div className="circular-container">
                {/* Center Content */}
                <div className="center-content">
                    <h3>My Education</h3>
                    <p>Milestones of my academic journey</p>
                </div>

                {/* Circular Items */}
                {educationSteps.map((step, index) => (
                    <div key={index} className="circular-item">
                        {step}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Edu1;
