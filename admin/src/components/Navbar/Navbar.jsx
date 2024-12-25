import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h2 className="logo">QEats</h2>
        <CgProfile size={30} className="profile" />
      </div>
    </>
  );
}

export default Navbar;
