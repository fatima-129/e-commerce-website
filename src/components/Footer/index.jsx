// import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import s from "./Footer.module.css";

const index = () => {
  return (
    <div className={s.footer_container}>
      <div className={s.footer_left}>
        <h1>audiophile</h1>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p> Copyright 2021. All Rights Reserved</p>
      </div>
      <div className={s.footer_right}>
        <ul>
          <li>HOME</li>
          <li>HEADPHONE</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
        <div className={s.icon_container}>
          <img src={Facebook} alt="icon" width="22px" />
          <img src={Twitter} alt="icon" width="22px" />
          <img src={Instagram} alt="icon" width="22px" />
        </div>
      </div>
    </div>
  );
};

export default index;
