import React from "react";
import AboutPage from "./components/AboutPage";
import HomePageIntro from "./components/HomePageIntro";

const HomePage = () => {
  return (
    <div className="home-page--container">
      <div className="home-page">
        <HomePageIntro />
        <AboutPage />
      </div>
    </div>
  );
};

export default HomePage;
