import React from "react";
import AboutPage from "./components/AboutPage";
import HomePageIntro from "./components/HomePageIntro";
import UtilitiesSection from "./components/UtilitiesSection";

const HomePage = () => {
  return (
    <div className="home-page--container">
      <div className="home-page">
        <HomePageIntro />
        <AboutPage />
        <UtilitiesSection />
      </div>
    </div>
  );
};

export default HomePage;
