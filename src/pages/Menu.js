import React from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import CardMenu from "../components/CardMenu/CardMenu";
import "../components/CardMenu/CardMenu.css";
import Footer from "../components/Footer/Footer";
import "../components/Footer/Footer.css";

function Menu() {
  return (
    <>
      <Header />
      <CardMenu />
      <Footer />
    </>
  );
}

export default Menu;
