import React, { useState } from 'react';
import './Navbar.css';
import header from '../../assets/header.jpg';
import { Link } from 'react-scroll';
import Signup from '../Signup/Signup';

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="Navbar">
        <img src={header} className="background" alt="header" />

        <div className="nav-logo">BlueBrick</div>

        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          </li>
        </ul>

        <div>
          <button className="buttons" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Modal */}
      {showSignup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowSignup(false)}>✖</button>
            <Signup />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

