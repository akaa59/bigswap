import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import FritesData from "./Data/FritesData";
import "../components/Card/Card.css";

function Frites() {
  return (
    <>
      <Header />
      <div className="contenu-item">
        <div className="item-card">
          {FritesData.map((item) => (
            <div id="item" key={item.id}>
              <div className="item-photo">
                <img src={item.img}/>
              </div>
              <div className="item-nom">
                <p>{item.nom}</p>
              </div>
              <div className="item-prix">
                <p>{item.prix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Frites;
