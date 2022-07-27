import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <p>@2022 Meet and Match. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
        <p>
          <a href="#">Privacy</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
