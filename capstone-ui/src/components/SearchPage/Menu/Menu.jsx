import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "./Menu.css";

export default function Menu({menuItems}) {
  // Dropdown might be limiting, so rethinking if it is neccessary to have one.
  // will remove this comment later
  menuItems = [
    {
      title: "Skills",
      submenu: [
        {
          title: "NodeJS",
        },
        {
          title: "PHP",
        },
        {
          title: "JavaScript",
        },
        {
          title: "React",
        },
        {
          title: "HTML",
        },
        {
          title: "CSS",
        },
        {
          title: "Machine Learning",
        },
        {
          title: "UX&UI Design",
        },
        {
          title: "Product Management",
        },
        {
          title: "Software Engineering",
        },
        {
          title: "DevOps",
        },
        {
          title: "Data Structures",
        },
        {
          title: "Git",
        },
        {
          title: "Angular Js",
        },
        {
          title: " Python",
        },
        {
          title: " Swift",
        },
        {
          title: " Full Stack",
        },
      ],
    },
  ];
  return (
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
  );
}
