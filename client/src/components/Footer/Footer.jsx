// import React from "react";
// import "./Footer.css";
// import { assets } from "../../assets/frontend_assets/assets.js";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="footer" id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <Link to="/">
//             <h3 className="logo">QEats</h3>
//           </Link>
//           <p>Connecting the dots for a better tomorrow.</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="facebook-icon" />
//             <img src={assets.linkedin_icon} alt="linkedin-icon" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>COMPANY</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>Get In Touch</h2>
//           <ul>
//             <li>+91 9199401774</li>
//             <li>bittukumar8713@gmail.com</li>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">
//         Copyright 2024 © QEats.com - All Right Reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;
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
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
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
