import React from 'react';
import '../styles/Projects.scss';


const Projects = () => {
    return (
      <section id="projects" className="projects">
        <div className="projects-content">
          <h2>Projects</h2>
          <div className="projects-item">
            <img src="https://i.ytimg.com/vi/jeKKJ-T1D_Q/maxresdefault.jpg" alt="Project 1" />
            <div className="item-details">
              <h3>Automatic Street Lights using 555 timer</h3>
              <p> Designed and implemented an innovative embedded systems project focused on energy-saving techniques for street lights.</p>
              <p>Utilized Light Dependent Resistors (LDR) as sensors to detect darkness, triggering an automatic switch-on mechanism for the lights. Additionally, incorporated a circuit based on a 555 Timer to turn off the street lights when ambient daylight is detected from an alternate light source.</p>
              <a href="https://www.linkedin.com/in/d-dhathrichandra/details/projects/">View Project</a>
            </div>
          </div>
          <div className="projects-item">
            <img src="https://projectabstracts.com/wp-content/uploads/2018/08/pg-20827-student-database-management.jpg" alt="Project 2" />
            <div className="item-details">
              <h3>Student-Department Database Management</h3>
              <p> Created Database containing Student details and Department information using MySQL and Python.</p>
                <p>Developed an algorithm to map the Details of students with the corresponding Department or specialization.</p>
              <a href="https://www.linkedin.com/in/d-dhathrichandra/details/projects/">View Project</a>
            </div>
          </div>
          {/* Add more projects items as needed */}
        </div>
      </section>
    );
  };
  
  export default Projects;