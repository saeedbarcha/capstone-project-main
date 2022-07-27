import * as React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "./LogOutView.css";

export default function LogOutView({ handleLogin }) {
  return (
    <div>
      <Login handleLogin={handleLogin} />
      <SignUp handleLogin={handleLogin} />
    </div>
  );
}
