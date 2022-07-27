// import React from "react";
import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import SearchPage from "../SearchPage/SearchPage";
import axios from "axios";
import * as config from "../../config";
import { createRef } from "react";

const ProfileCard = ({ handleLogin, firstName }) => {
  const username = createRef();
  const password = createRef();

  


  const login = async () => {
    try {
      console.log("Logging in");
      const res = await axios.post(`${config.API_BASE_URL}/login`, {
        username: username.current.value,
        password: password.current.value,
      });
      handleLogin(res.data.user);
    } catch (err) {
      alert(err);
    }
  };
  login();

  return (
    <div className="profile">
      <div className="profile-container">
        <p className="welcome-user"> Welcome </p>
        <img src={""} alt="" height="10px" width="100px" />
        <h1>
          <a href={""} target="_blank">
            {firstName} {""}
          </a>
        </h1>
      </div>
      
      <SearchPage />
    </div>
  );
};

export default ProfileCard;
