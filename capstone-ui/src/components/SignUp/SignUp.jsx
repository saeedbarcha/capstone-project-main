import * as React from "react";
import "./SignUp.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as config from "../../config";
import LinkedinLogin from "../LinkedinLogin/LinkedinLogin";
import Login from "../Login/Login";

export default function SignUp() {
  const username = React.createRef();
  const password = React.createRef();
  const email = React.createRef();
  const radio = React.createRef();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const register = async () => {
      
      try {
        const res = await axios.post(`${config.API_BASE_URL}/register`, {
          username: username.current.value,
          password: password.current.value,
          email: email.current.value,
        });
        // handleLogin(res.data.user);

        if (res.status === 201) {
          console.log("Account has been created successfully.", "success");
          navigate('/login')
          //this is not being executed
        }

        // console.log("registered success")
        
      } catch (err) {
        alert(err);
        console.log(err);
        console.log('error')
      }
    };

    register();
  };
  const handleSwitch = () => {
    navigate('/login')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signUp">Register</div>
        <label className="form-input">
          <span>Email</span>
          <input type="email" ref={email}></input>
        </label>
        <label className="form-input">
          <span>Username</span>
          <input type="text" ref={username}></input>
        </label>
        <label className="form-input">
          <span>Password</span>
          <input type="password" ref={password}></input>
        </label>

        <div >
        <input className="radio" type="radio" value="Male" name="gender" /> Mentor
        <input type="radio" value="Female" name="gender" /> Mentee
      </div>

        
        <button type="submit" className="button">
          Register  
        </button>
      </form>
      <LinkedinLogin />
      <p>
        Already Have an Account?{" "}
        <button className="button" type="submit" onClick={handleSwitch}>
          Log In
        </button>
      </p>
    </div>
  );
}
