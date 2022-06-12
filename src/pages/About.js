import React from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import bigswap from "../images/bigswap.jpg";
import Point from "../components/Point/Point";
import "../components/Point/Point.css";
import Contact from "../components/Contact/Contact";
import "../components/Contact/Contact.css";
import "./About.css";
import Footer from "../components/Footer/Footer";
import "../components/Footer/Footer.css";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="contenu-about">
          <h2>Chez Big Swap </h2>
          <div className="contenu-about-flex ">
            <img src={bigswap} alt="big swap" />
            <div className="contenu-about-flex-text">
              <h3>
                Big Swap vous propose des hamburgers conçus avec des produits
                locaux frais.
              </h3>
              <p>
                Personnalisez vous-même votre burger avec des ingrédients
                choisis avant la cuisson (lardons,fromage, oignons, ...). Ou,
                choisissez nos recettes orginales ? Le burger chèvre miel, le
                burger végan ou le fitness burger conçu pour les sportifs. Les
                frites aromatisées au paprika, au curry, à la sauce
                montagnarde ou encore avec une sauce bolognaise.
              </p>
            </div>
          </div>
        </div>
        <Point />
        <Contact/>
      </div>
      <Footer />
    </>
  );
}

export default About;
