
import React from 'react';
import '../styles/Education.scss';


const Education = () => {
    return (
      <section id="education" className="education">
        <div className="education-content">
          <h2>Education</h2>
          <div className="education-item">
            <img src="https://iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="Education 1" />
            <div className="item-details">
              <h3>Undergraduate Degree</h3>
              <p>College Name : Indian Institute of Technology, Varanasi</p>
              <p>Degree in Electronics Engineering</p>
              <p>CGPA : 7.5</p>
              <p>Graduation Year: 2025</p>
            </div>
          </div>
          <div className="education-item">
            <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/277680133_314836824094825_412132571357861741_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eZ5gt9lL50IAX_3m3aW&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBG-isF-75tkKLyXlVNJjIP0J0YvHzkOk5PUXjalh34Zw&oe=65F81ABE" alt="Project 2" />
            <div className="item-details">
              <h3>Higher Secondary School</h3>
              <p>College Name : Tirumala Junior College, Bhimavaram</p>
              <p>Intermediate - Maths, Physics, Chemistry</p>
              <p>Percentage : 96.8</p>
              <p>Graduation Year: 2021</p>
            </div>
          </div>
          <div className="education-item">
            <img src="https://play-lh.googleusercontent.com/6Wf3TLKoUArmITxODLOPa4oMcy7kmThwg67yLh_tpsQTbytG6VFftJl80VA2aSgvij0" alt="Project 2" />
            <div className="item-details">
              <h3>Secondary School</h3>
              <p>College Name : Sri Kakatiya Merit School, Bhimavaram</p>
              <p>SSC - 10th</p>
              <p>CGPA : 9.8</p>
              <p>Graduation Year: 2019</p>
            </div>
          </div>
          {/* Add more projects items as needed */}
        </div>
      </section>
    );
  };
  
  export default Education;