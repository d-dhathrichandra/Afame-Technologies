// src/components/About/About.js
import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Dasari Dhathri Chandra, a passionate and creative developer.
          As an engineering undergraduate passionate about technology, music, books, and art, I constantly explore new ways to innovate and create.
        </p>
        <p>
        With a particular interest in Analog and Digital Electronics, Semiconductor Technology, Telecommunication Networks,Python Programming, Web development and Machine Learning also, I always seek to expand my knowledge and skills.
        The intersection of technology and the arts has the power to transform the world, and I am excited to be a part of this movement.
        </p>
        <p>
        Also I have completed a one month mentorship WiSH program under Texas Instruments, Bangalore in June 2023 where we had hands on experience with circuit design and innovative talks about past,present and future of Semiconductor Technology.
        If you share similar interests, I would love to connect and explore how to collaborate to create something unique.
        </p>
      </div>
    </section>
  );
};

export default About;
