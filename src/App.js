import React from "react";
import "../src/sass/main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";

const App = () => {
  return (
    <div className="router">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
