import React from 'react';
import '../styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/d-dhathrichandra" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/d-dhathrichandra" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* Add more social links as needed */}
        </div>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
