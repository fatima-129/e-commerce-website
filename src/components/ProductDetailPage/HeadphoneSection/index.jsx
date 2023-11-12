import React from "react";
import s from "./headphoneSection.module.css";

const HeadphoneSection = () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={Image} alt="" />
      </div>
      <div className={s.details}>
        <h1>hello world </h1>
      </div>
    </div>
  );
};

export default HeadphoneSection;
