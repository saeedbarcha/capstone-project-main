import * as React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/home">
        <img src="./src/images/logo.png" alt="meet and match" style={{color:"white"}} />
      </Link>
    </div>
  );
}
