import React from "react";
import { FaInstagram } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Developed by:</p>
        <div className="developers">
          <a href="https://www.instagram.com/developer1/" className="developer-link">
            <span className="developer-name">Samuel Mwendwa</span> <FaInstagram className="instagram-icon" />
          </a>
          <a href="https://www.instagram.com/developer2/" className="developer-link">
            <span className="developer-name">Jackstone Saitoti</span> <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
