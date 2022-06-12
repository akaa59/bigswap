import React from "react";
import { Link } from "react-router-dom";
import burgererror from "../images/404-burger.jpg";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import Footer from "../components/Footer/Footer";
import "../components/Footer/Footer.css";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Header />
      <div className="background-404-container">
        <img
          className="background-404-img"
          src={burgererror}
          alt="error burger"
        />
      </div>
      <div className="element-404">
      <p >La page que vous demandez n'existe pas </p>
      <Link to="/">
        Retourner vers la page d'accueil
      </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
