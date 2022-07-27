import React from "react";
import "./MentorCard.css";

export default function ({ mentors, searchTerm}) {
  
  return (
    <div className="mentor-grid">
      
      {mentors.data.filter((value) =>{
      return value.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).map((mentor) => (
        <div className="results">
          <button className="country-location">{mentor.country}</button>
          <a className="avatar" href={mentor.avatar}></a>
          <button className="like-button">Add to Favorite</button>
          <h2 className="name">{mentor.name}</h2>
          <h4 className="role">{mentor.title}</h4>
          {/* <p className="bio">{mentor.description}</p> */}
          {/* <button className="tags">{mentor.tags}</button> */}
          <button>Get Connected</button>
        </div>
      ))
      }
      
      


      
    </div>
  );
}
