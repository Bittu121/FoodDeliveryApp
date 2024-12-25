import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <h3 className="logo">QEats</h3>
          </Link>
          <p>Connecting the dots for a better tomorrow.</p>
          <div className="footer-social-icons">
            <a
              href="https://www.linkedin.com/in/bittu-kumar143/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="linkedin-icon" />
            </a>{" "}
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact</h2>
          <ul>
            <li>+91 9199401774</li>
            <li>bittukumar8713@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © QEats.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
