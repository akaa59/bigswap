import React from "react";
import Slider1 from "../../images/burger-carousel.jpg";
import Slider2 from "../../images/burger-carousel-2.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "./Slide.css";

function Slide() {
  return (
    <>
      <Carousel showThumbs={false} showStatus={false} className="slider">
        <div>
          <img className="photoslide" src={Slider1} alt="burgers-slide1" />
          <Link className="legend" to="/about">
            Venez tenter de concevoir votre burger ultime !
          </Link>
        </div>
        <div>
          <img className="photoslide" src={Slider2} alt="burgers-slide2" />
          <Link className="legend" to="/menu">
            Venez découvrir nos recettes originales !
          </Link>
        </div>
      </Carousel>
    </>
  );
}

export default Slide;
