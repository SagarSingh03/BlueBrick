import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>BlueBrick</h2>
          <p>
            BlueBrick Real Estate offers modern, reliable,<br />
            and affordable housing solutions with a focus on<br />
            trust, transparency, and customer-first service.
          </p>
        </div>

        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <p className="newsletter-title">Subscribe to our newsletter</p>
          <p className="newsletter-subtext">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <input type="email" placeholder="Enter your email" required />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>Copyright 2025 © BlueBrick. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


