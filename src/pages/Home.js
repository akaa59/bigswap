import React from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import Slide from "../components/Slide/Slide";
import "../components/Slide/Slide.css";
import Plus from "../components/Plus/Plus";
import "../components/Plus/Plus.css";
import Point from "../components/Point/Point";
import "../components/Point/Point.css";
import Footer from "../components/Footer/Footer";
import "../components/Footer/Footer.css";

function Home() {
  return (
    <>
      <Header />
      <Slide/>
      <Plus/>
      <Point/>
      <Footer/>
    </>
  );
}

export default Home;
