import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-top">
       
        <div className="footer-left">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              className="logo-img"
            />
          </div>
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest features and updates delivered to you.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email here" />
            <button className="btn-pink">Join</button>
          </div>
          <small className="privacy-text">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </small>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>Connect With Us</h4>
            <ul className="social-icons">
              <li><i className="fab fa-facebook"></i> Facebook</li>
              <li><i className="fab fa-instagram"></i> Instagram</li>
              <li><i className="fab fa-x-twitter"></i> X</li>
              <li><i className="fab fa-linkedin"></i> LinkedIn</li>
              <li><i className="fab fa-youtube"></i> YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 SapanaIngale. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
