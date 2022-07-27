import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-links">
        <p>
          <a href="#facebook">
            <img src="./src/images/facebook.png" height="20"></img>
          </a>
        </p>
        <p>
          <a href="#twitter">
            <img src="./src/images/twitter.png" height="20"></img>
          </a>
        </p>
        <p>
          <a href="#instagram">
            <img src="./src/images/instagram.png" height="20"></img>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
