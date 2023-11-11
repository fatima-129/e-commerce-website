import React from "react";
import { useNavigate } from "react-router-dom";
import BGImage from "../../../assets/home/desktop/image-hero.jpg";
import s from "./Info.module.css";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className={s.info_container}>
      <div
        className={s.container}
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={s.info}>
          <p className={s.title}>New product</p>
          <h1 className={s.subtitle}>XX99 Mark II Headphones</h1>
          <p className={s.discription}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className={s.btn} onClick={() => navigate("/product-detail")}>
            See product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
