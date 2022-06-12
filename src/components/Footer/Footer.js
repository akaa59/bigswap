import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-container-1">
            <h3>Information</h3>
            <Link className="footer-container-1-a" to="/"> Accueil</Link>
            <Link className="footer-container-1-a" to="/menu"> Menu</Link>
            <Link className="footer-container-1-a" to="/about"> A Propos</Link>
          </div>
          <div className="footer-container-2">
            <h3>Contact</h3>
          <p className="footer-container-2-p"><MdAccessTimeFilled/> Lundi - Dimanche: 11:00 - 23:00</p>
          <p className="footer-container-2-p"><MdLocationPin/> 5 Rue Tavelle, 59400 Cambrai</p>
          <p className="footer-container-2-p"><AiFillPhone/> 09 63 64 32 94</p>
          <p className="footer-container-2-p"><MdMail/>
            <Link
              className="footer-container-2-a"
              to="#"
              onClick={() =>
                (window.location = "mailto:contact-bigswap@bigswap.fr")
              }
            >
             contact-bigswap@bigswap.fr
            </Link>
          </p>
          </div>
        </div>
        <div className="logo-container">
          <a      
            href="https://www.facebook.com/Big-Swap-100847912478702/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer">
              <TiSocialFacebook/>
          </a>
          <a      
            href="https://www.instagram.com/bigswap_/?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer">
              <AiOutlineInstagram/>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
