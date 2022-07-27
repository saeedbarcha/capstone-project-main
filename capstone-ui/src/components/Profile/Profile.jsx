import React from 'react'
import { useState } from 'react'
import '../Profile/Profile.css'
import UpdateUser from './popUp/updateUser'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken';

const Profile = () => {

    const [updatePopup, setUpdatePopup] = useState(false);

    const onUser = {
        name : jwt.decode(Cookies.get("objectId")).name,
        email : jwt.decode(Cookies.get("objectId")).email,
        role : jwt.decode(Cookies.get("objectId")).role,
        skills : jwt.decode(Cookies.get("objectId")).skills,
        language : jwt.decode(Cookies.get("objectId")).language,
        country : jwt.decode(Cookies.get("objectId")).country
    }

    console.log(onUser.name)

    const openUpdatePopup = () => {
        setUpdatePopup(!updatePopup)
    }

  return (
    <div className='profile'>

        {/* <div style={{textAlign:"center"}}>
            <h1 style={{color:"black", alignItems:"center"}} >Mentor</h1>
        </div>

        <div className='mentor' style={{display:"flex", justifyContent:"space-evenly", marginTop:"100px"}}>
           <h1 style={{color:"black"}}>Zohaib</h1>
           <button>Edit mentor</button>
        </div> */}

        <div className='accountProfile'>
            <h1>Account Profile</h1>
        </div>
        <br />
        <hr />

        <div className="bio">
            <label className='label' htmlFor=""><b>Name</b></label>
            <p>zohaib Ali Jerov</p>
            

            <label className='label' htmlFor=""><b>Email</b></label>
            <p>zuhaib911alijerov@gmail.com</p>
        

            <label className='label' htmlFor=""><b>Role</b></label>
            <p>Mentor</p>

            <label className='label' htmlFor=""><b>Skills</b></label>
            <p>Web development</p>

            <label className='label' htmlFor=""><b>Language</b></label>
            <p>English</p>

        </div>

        <div className="editButton">
            <button className='button' onClick={openUpdatePopup}><strong>Edit Profile</strong></button>
            <button className='button'><strong>Switch Role</strong></button>


        </div>
        
        {updatePopup ?
        <UpdateUser openUpdatePopup={openUpdatePopup}/>:
        null
        }
        
    </div>
  )
}

export default Profile