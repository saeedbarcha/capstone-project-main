import React from "react";
import Navbar from "../../../src/components/Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import _ from "lodash";
import Login from "../Login/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Faqs from "../FAQs/FAQs";
import SuccesStories from "../SuccessStories/SuccessStories";
import ProfileCard from "../ProfileCard/ProfileCard";
import Profile from "../Profile/Profile";
import SearchPage from "../SearchPage/SearchPage";
// 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'

function App() {
  const navigate = useNavigate();
  const [firstName, setFirsName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("current_user_id") != null
  );

  const updateProfile = (profile) => {
    setFirsName({
      firstName: _.get(profile, "localizedFirstName", ""),
    });
  };
  useEffect(() => {
    window.addEventListener("message", handlePostMessage);
  }, []);
  const handlePostMessage = (event) => {
    if (event.data.type === "profile") {
      updateProfile(event.data.profile);
      alert.success(
        `Login successful: ${event.data.profile.localizedFirstName}`,
        { position: "top" }
      );
    }
  };

  const addAuthenticationHeader = () => {
    const currentUserId = localStorage.getItem("current_user_id");
    if (currentUserId !== null) {
      axios.defaults.headers.common = {
        current_user_id: currentUserId,
      };
    }
  };
  addAuthenticationHeader();

  const handleLogout = () => {
    localStorage.removeItem("current_user_id");
    axios.defaults.headers.common = {};
    setIsLoggedIn(false);
  };


 
  return (
    <div className="App">
      <main>
        <Navbar  />

        {isLoggedIn && <ProfileCard firstName={firstName} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <About/>
              </>
            }
          />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/successStories" element={<SuccesStories />} />
           <Route
            path="/register"
            element={<SignUp/>}
          />

          <Route path="/login" element={<Login/>}/>

          <Route path="/profile" element={<Profile/>} />
          <Route path="/searchPage" element={<SearchPage/>} />

          <Route
            path="/profileCard"
            element={<ProfileCard firstName={firstName} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
