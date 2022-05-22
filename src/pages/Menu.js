import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import "../components/CardMenu/CardMenu.css";
import BurgerLogo from "../images/burger-logo.jpg";
import FritesLogo from "../images/frites-logo.jpg";

function Menu() {
  return (
    <>
      <Header />
      <div className="contenu-card">
        <div className="card-menu">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flip-logo" src={BurgerLogo} alt="Burger logo" />
              </div>
              <div className="flip-card-back">
                <Link to="/menu/burgers">
                  <h2>Burgers</h2>
                </Link>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="flip-logo" src={FritesLogo} alt="Frites logo" />
              </div>
              <div className="flip-card-back">
                <Link to="/menu/frites">
                  <h2>Frites</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
