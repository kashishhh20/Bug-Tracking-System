// src/Footer.jsx
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Bug Tracking System. All Rights Reserved.</p>
      <div className="social-icons">
        {/* <a href="#"><FaFacebook /></a>
        <a href="#"><FaGoogle /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a> */}

        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
