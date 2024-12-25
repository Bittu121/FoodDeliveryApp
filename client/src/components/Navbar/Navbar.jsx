import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import { HiOutlineLogout } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFoodBank } from "react-icons/md";

function Navbar({ setShowLogin }) {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check for token in local storage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [setToken]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    } else {
      return location.hash === path;
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h3
            className="logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MdOutlineFoodBank size={35} />
            QEats
          </h3>
        </Link>
        <ul className="navbar-menu">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <a
            href="#explore-menu"
            className={isActive("#explore-menu") ? "active" : ""}
          >
            Menu
          </a>
          <a href="#footer" className={isActive("#footer") ? "active" : ""}>
            Contact us
          </a>
        </ul>
        <div className="navbar-right">
          <Link to="/cart" className="navbar-search-icon">
            <RiShoppingBag4Fill size={30} />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>sign in</button>
          ) : (
            <div className="navbar-profile">
              <div className="navbar-profile-icon">
                <CgProfile size={30} />
                <p>Profile</p>
              </div>
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>My Orders</p>
                </li>
                <hr />
                <li onClick={logoutHandler}>
                  <HiOutlineLogout size={25} />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
