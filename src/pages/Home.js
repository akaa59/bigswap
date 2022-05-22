import React from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import Slide from "../components/Slide/Slide";
import "../components/Slide/Slide.css";
import Footer from "../components/Footer/Footer";
import "../components/Footer/Footer.css";

function Home() {
  return (
    <>
      <Header />
      <Slide/>
      <Footer/>
    </>
  );
}

export default Home;
