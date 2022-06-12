import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";


function Contact() {
  return (
    <>
      <div className="contenu-contact">
        <h2>Où-nous-trouver </h2>
        <div className="contenu-contact-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.246291939827!2d3.2299516518487037!3d50.17523121493657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2bbfc8358ef95%3A0xc9a7669a18044a74!2sBig%20Swap!5e0!3m2!1sfr!2sfr!4v1654604125365!5m2!1sfr!2sfr"
            width="50%"
            height="350"
            title="big swap google map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contenu-contact-flex-text">
          <p className="contenu-contact-flex-text-p"><MdAccessTimeFilled/> Lundi - Dimanche: 11:00 - 23:00</p>
          <p className="contenu-contact-flex-text-p"><MdLocationPin/> 5 Rue Tavelle, 59400 Cambrai</p>
          <p className="contenu-contact-flex-text-p"><AiFillPhone/> 09 63 64 32 94</p>
          <p className="contenu-contact-flex-text-p"><MdMail/>
            <Link
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
      </div>
    </>
  );
}

export default Contact;
