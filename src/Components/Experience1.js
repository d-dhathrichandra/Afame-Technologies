import React from 'react';
import '../styles/Experience.scss';

const Experience = () => {
    return (
      <section id="experience" className="experience">
        <div className="experience-content">
          <h2>Experience</h2>
          <div className="experience-item">
            <img src="https://usercontent.one/wp/www.samacsys.com/wp-content/uploads/2018/01/Texas-Instruments-Brands-Logo.png?media=1671074484" alt="Experience 1" />
            <div className="item-details">
              <h3>One Month Mentorship Proram WiSH(Women in Semiconductor Hardware)-2023</h3>
              <h4>Texas Instruments,Bangalore,India</h4>
              <p> Skills Developed : Learned operation of tools QUCS and CCS by executing some experiments and simulations through them.</p>
              <p> Mentorship and Networking : Mentored by two employees of Texas Instruments who provided guidance, support and advice related to the semiconductor industry. Interacted and also had Innovative talks with industry professionals who gave valuable insights into the history development and future prospects of the Semiconductor Technology.</p>
              <p>  Presentations and Awards : We have done presentation on JEDEC Qualification Standards and Wide Band-Gap Semiconductors with a team of 4 members. Also We received the Certificate of Appreciation. </p>
              <a href="https://www.linkedin.com/in/d-dhathrichandra/details/experience/">View Details</a>
            </div>
          </div>
          {/* Add more items as needed */}
        </div>
      </section>
    );
  };
  
  export default Experience;