import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="logo">QEats</h2>
        <img
          className="profile"
          src={assets.profile_image}
          alt="profile-image"
        />
      </div>
    </>
  );
}

export default Navbar;
