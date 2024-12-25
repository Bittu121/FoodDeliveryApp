import React, { useContext, useState } from "react";
import "./Login.css";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { url } from "../../config/config.js";
import { toast } from "react-hot-toast";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { useNavigate } from "react-router-dom";

function Login({ setShowLogin }) {
  const { setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        toast.success(response.data.message);
        if (currState === "Login") {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
        } else {
          setCurrState("Login");
          setData({ name: "", email: "", password: "" });
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="login-popup">
        <form onSubmit={handleSubmit} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <RxCross2
              size={30}
              onClick={() => setShowLogin(false)}
              className="cross-icon"
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "Sign Up" ? (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Enter your name"
                required
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">
            {currState === "Login" ? "Login" : "Create account"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
