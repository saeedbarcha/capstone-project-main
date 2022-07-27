import React from "react";
import "./Home.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../../../src/components/Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import SuccesStories from "../SuccessStories/SuccessStories";

function Home({ isLoggedIn, handleLogout }) {
  return (
    <div className="home">
      <Header />
      <About />
      <SuccesStories />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
