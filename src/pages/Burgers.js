import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";
import BurgersData from "./Data/BurgersData";
import "../components/Card/Card.css";

function Burgers() {
  return (
    <>
      <Header />
      <div className="contenu-item">
        <div class="compo-card">
          <img src="https://tb-static.uber.com/prod/image-proc/processed_images/590245b78e50d1745a46b9382a7f8a33/859baff1d76042a45e319d1de80aec7a.jpeg" alt="A composer burger" />
          <div class="compo">
            <p>
              A composer !
            </p>
            <p>
              9.10EUR
            </p>
          </div>
        </div>

        <div className="item-card">
          {BurgersData.map((item) => (
            <div id="item" key={item.id}>
              <div className="item-photo">
                <img src={item.img} />
              </div>
              <div className="item-nom">
                <p>{item.nom}</p>
              </div>
              <div className="item-prix">
                <p>{item.prix}</p>
              </div>
              <div className="item-desc">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Burgers;
