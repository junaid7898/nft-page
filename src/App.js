import React, { useEffect } from "react";
import "../src/sass/main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="router">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
