import React from "react";
import s from "./CustomerLikes.module.css";

const CustomerLikes = ({ url, title, button }) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={url} alt="product" />
      </div>
      <div className={s.detail}>
        <p className={s.title}>{title}</p>
        <button className={s.button}>{button}</button>
      </div>
    </div>
  );
};

export default CustomerLikes;
