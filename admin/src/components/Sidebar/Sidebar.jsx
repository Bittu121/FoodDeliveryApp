import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";

function Sidebar() {
  
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
            <IoMdAdd size={25} />
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="sidebar-option">
            <MdFormatListBulleted size={25} />
            <p>List Items</p>
          </NavLink>
          <NavLink to="/orders" className="sidebar-option">
            <img src={assets.order_icon} alt="order" />
            <p>Orders</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
