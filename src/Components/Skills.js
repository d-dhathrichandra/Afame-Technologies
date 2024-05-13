import React from 'react';
import '../styles/Experience.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills">
          <div className="skills-content">
            <h2>Skills</h2>
            <div className="skills-item">
              <div className="item-details">
                <h3>Technical Skills</h3>
                <p>Python,HTML,CSS</p>
              </div>
            </div>
            <div className="skills-item">
              <div className="item-details">
                <h3>Soft Skills</h3>
                <p>Time Managamenet,Leadership and Team Work,Good Communication</p>
              </div>
            </div>
            <div className="education-item">
              <div className="item-details">
                <h3>Area of Interests</h3>
                <p>Software Development and Web Development</p>
              </div>
            </div>
            {/* Add more skills items as needed */}
          </div>
        </section>
      );
    };
    
    export default Skills;
