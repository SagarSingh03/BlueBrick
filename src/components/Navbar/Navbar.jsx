import React from 'react';
import './Navbar.css';
import header from '../../assets/header.jpg';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="Navbar">
      <img src={header} className="background" alt="header" />

      <div className="nav-logo">BlueBrick</div>

      <ul>
        <li>
          <Link to="home" smooth={true} duration={500} offset={0}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={0}>About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={0}>Projects</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={0}>Testimonials</Link>
        </li>
      </ul>

      <div>
        <button className="buttons">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;


