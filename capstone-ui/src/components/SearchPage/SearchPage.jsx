import React from "react";
import "./SearchPage.css";
import Multiselect from "multiselect-react-dropdown";
import MentorCard from "./MentorCard/MentorCard";
import Cookies from 'js-cookie'

import Menu from "./Menu/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [filterMentors, setFilterMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`https://api-staging.codingcoach.io/mentors`);
  //     setData(res.data);
  //     console.log(res.data)
  //   };
  //   if (query.length === 0 || query.length > 2) fetchData();
  // }, [query]);

  // const [{foundMentors, setFoundMentors}] = useState(mentors);

console.log(Cookies.get("accessToken"))
  
  console.log(searchTerm)

  const searching = (e) => {
    setSearchTerm(e.target.value)
  }
  const searching11 = (e) => {
    setSearchTerm(e.target.onSelect)
  }
  useEffect(() => {
    if(Cookies.get("accessToken")){
    fetch("https://api-staging.codingcoach.io/mentors")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMentors(result);
          // setData(res.data)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }else{
      navigate('/login')
    }

  //   const fetchData = async () => {
  //     const res = await axios.get(`https://api-staging.codingcoach.io/mentors`);
  //     setData(res.data);
  //     console.log(res.data);
    // };
  //   if (query.length === 0 || query.length > 2) fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main">
        <div className="search-bar">
          <h1>Find a Mentor</h1>
          <div className="search">
            {/* <input type="search" value="technologies" onChange={filter} className="input" placeholder="Search for a mentor" /> */}
            <input
              className="search"
              placeholder="Search for a mentor"
              value={searchTerm}
              onChange={searching}
              // onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />

            
          </div>
        </div>
        <div className="menu">
      AREA OF INTEREST, SKILLS, COUNTRY, LANGUAGE.
      <div className="dropdown">
        <Multiselect
          displayValue="key"
          groupBy="category"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          value=""
          onChange={searching11}
          options={[
            {
              category: "Area of Interest",
              key: "Engineering",
            },
            {
              category: "Area of Interest",
              key: "UX&Design",
            },
            {
              category: "Area of Interest",
              key: "Data Science",
            },
            {
              category: "Area of Interest",
              key: "Business&Management",
            },
            {
              category: "Area of Interest",
              key: "Product&Marketing",
            },
            {
              category: "Skills",
              key: "Option 6",
            },
            {
              category: "Area of Interest",
              key: "Option 7",
            },
          ]}
          showCheckbox
        />
      </div>
    </div>
        {/* <Menu/> */}
        
        <MentorCard mentors={mentors} searchTerm={searchTerm}/>
      </div>
    );
  }
}
