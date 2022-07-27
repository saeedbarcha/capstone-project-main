import React from "react";
import { useState } from "react";
import "./updateUser.css";
import * as config from "../../../config";

import axios from 'axios'

const UpdateUser = ({ openUpdatePopup }) => {
  const [updateInputs, setUpdateInputs] = useState({
    name : "", email : "", role : "", skills : "" , language : "" , country : ""
  });


  console.log(updateInputs)

  const handleInputs = (e) => {
    const {name , value} = e.target;
  setUpdateInputs({...updateInputs ,[name] : value})
  }

  const HandleUpdate = (e) => {
      e.preventDefault();

      axios.post(`${config.API_BASE_URL}/update/users/:id`,{
        
      })
  }

  return (
    <div className="update-user">
      <div className="update-user-popup">
        <button className="close-button" onClick={openUpdatePopup}>
          X
        </button>
        <form className="user-update-inputs">
          <label className="label" htmlFor="">
            <b>Name</b>
          </label>
          <input className="input" name="name" type="text" placeholder="Edit Name" onChange={handleInputs}/>
          <br></br>

          <label className="label" htmlFor="">
            <b>Email</b>
          </label>
          <input className="input" name="email" type="text" placeholder="Edit Email" onChange={handleInputs}/>
          <br></br>

          <label className="label" htmlFor="">
            <b>Role</b>
          </label>
          <div className="radiobutton">
            
            <input className="input" type="radio" id="1" name="role" value="mentor" onChange={handleInputs}/><label>Mentor</label>
            
            <input className="input" type="radio" id="0" name="role" value="mantee" onChange={handleInputs}/><label>Mantee</label>
          </div>

          <br></br>

          <label className="label" htmlFor="">
            <b>Skills</b>
          </label>
          <input className="input" name="skills" type="text" placeholder="Edit Skills" onChange={handleInputs}/>
          <br></br>

          <label className="label" htmlFor="">
            <b>Language</b>
          </label>
          <input className="input" name="language" type="text" placeholder="Edit Language" onChange={handleInputs}/>
          <br></br>

          <label className="label" htmlFor="">
            <b>Country</b>
          </label>
          <input className="input" name="country" type="text" placeholder="Edit Country" onChange={handleInputs}/>
          <br></br>
        </form>
        <button className="update-button" onClick={HandleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateUser;
