import React from "react";
import { Link } from "react-router-dom";
import "./Plus.css";
import { BsPlusSquareFill } from "react-icons/bs";

function Plus() {
  return (
    <>
      <div className="titre-plus">
        <h4>nos recettes du moment</h4>
      </div>
      <div className="contenu-plus">
        <div className="compo-card-plus">
          <Link to="/menu/burgers">
            <img
              src="https://tb-static.uber.com/prod/image-proc/processed_images/fd63747d5b6736099a3a1cf3a8d3b5df/859baff1d76042a45e319d1de80aec7a.jpeg"
              alt="Classic Beef"
            />
            <div className="compo-plus">
              <p>Classic Beef</p>
            </div>
          </Link>
        </div>
        <div className="compo-card-plus" id="hidden2">
          <Link to="/menu/burgers">
            <img
              src="https://tb-static.uber.com/prod/image-proc/processed_images/f01a223992f15ac07574feb1f040e49a/859baff1d76042a45e319d1de80aec7a.jpeg"
              alt="Poivre et Blanc"
            />
            <div className="compo-plus">
              <p>Poivre & Blanc</p>
            </div>
          </Link>
        </div>
        <div className="compo-card-plus" id="hidden">
          <Link to="/menu/burgers">
            <img
              src="https://tb-static.uber.com/prod/image-proc/processed_images/8e3db2782cc342a9bd903dc082cd2459/859baff1d76042a45e319d1de80aec7a.jpeg"
              alt="Chevre Miel"
            />
            <div className="compo-plus" >
              <p>Chevre Miel</p>
            </div>
          </Link>
        </div>

        <div className="compo-card-plus-icon">
          <Link to="/menu">
            <BsPlusSquareFill 
            color="#1d1d1b"/>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Plus;
