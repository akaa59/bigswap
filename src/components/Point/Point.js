import React from "react";
import "./Point.css";
import { BsCheck2 } from "react-icons/bs";
import { GiHamburger } from "react-icons/gi";
import { WiTime1 } from "react-icons/wi";

function Point() {
  return (
    <>
      <div className="contenu-point">
        <div className="contenu-point-1">
          <div className="contenu-point-icon">
          <BsCheck2/>
          </div>
          <div className="contenu-point-text">
              <h4>La meilleure qualité</h4>
              <p>Nous utilisons que des ingrédients frais soigneusement sélectionnés.</p>
          </div>
        </div>
        <div className="contenu-point-2">
          <div className="contenu-point-icon">
              <WiTime1/>
          </div>
          <div className="contenu-point-text">
              <h4>À temps</h4>
              <p>Lorsque nous préparons vos plats, nous faisons tout notre possible pour être à l'heure.</p>
          </div>
        </div>
        <div className="contenu-point-3">
          <div className="contenu-point-icon">
              <GiHamburger/>
          </div>
          <div className="contenu-point-text">
              <h4>Goûtez vos burgers </h4>
              <p>Nous sommes très fiers de la qualité et du goût de nos burgers. Créez votre burger sur-mesure.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Point;
