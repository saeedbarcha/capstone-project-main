import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'

function Navbar() {
  const onClick = (event) => {
    Cookies.remove("accessToken")
  };
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-container">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/successStories">Success Stories</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-login">
          {!Cookies.get("accessToken") ? 
          <>
          <Link className="button" to="/register">
            Sign Up
          </Link>
          <Link className="button" to="/login">
            Log In
          </Link>
          </>
          :
          <>
            <Link
              className="button"
              to="/profile"
            >
              Profile
            </Link>
            <Link
              className="button"
              to="/logout"
              onClick={onClick}
            >
              Log Out
            </Link>
            </>
            }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
