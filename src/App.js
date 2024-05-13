// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/About1';
import Home from './Components/Home1';
import Experience from './Components/Experience1';
import Education from './Components/Education1';
import Navbar from './Components/Navbar1';
import Projects from './Components/Projects1';
import Footer from './Components/Footer1';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Header /> */}
        <Home />
        <About />
        <Experience/>
        <Education/>
        <Projects />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;