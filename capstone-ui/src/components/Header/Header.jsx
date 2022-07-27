import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-text">How Match and Meet Works:</h1>
        <ol> ENTER YOUR INFORMATION </ol>
        <ol> FIND A MENTOR </ol>
        <ol> GET DIRECTLY CONNECTED </ol>
        <div className="get-started">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
