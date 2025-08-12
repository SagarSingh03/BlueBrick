import React from 'react';
import './About.css';
import about from '../../assets/about.png';

function About() {
  return (
    <div className="about">
      {/* Left Side - Image */}
      <div className="about-left">
        <img src={about} className="brand" alt="About BlueBrick" />
      </div>

      {/* Right Side - Text */}
      <div className="about-right">
        <div className="about-heading">
          <strong>About</strong>
          <label>BlueBrick</label>
        </div>

        <div className="stats">
          <strong>23+</strong>
          <p>Years of Excellence</p>
          <strong>500+</strong>
          <p>Projects Completed</p>
        </div>

        <div className="paras">
          <p>
            BlueBrick is a trusted name in real estate, committed to helping you find the
            perfect home, investment, or commercial space. With over 23 years of excellence
            and 500+ successful projects, we blend innovation, transparency, and integrity
            to create lasting value for our clients.
          </p>
          <p>
            At BlueBrick, we believe that a home is more than just a place — it's a feeling,
            a foundation for dreams, and a canvas for life. Our mission is to connect people
            with spaces that reflect their vision and values. Every project we deliver is
            built on strong ethics, smart planning, and an unwavering focus on quality.
          </p>
          <p>
            With advanced tools, expert agents, and customer-first service, BlueBrick is
            redefining how real estate works. We offer a seamless experience with verified
            listings, virtual tours, and personalized support — making your property journey
            simple, smart, and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

