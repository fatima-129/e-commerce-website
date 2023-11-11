import React from "react";
import Image3 from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import Image2 from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import Image1 from "../../../assets/home/desktop/image-speaker-zx9.png";
import s from "./ProductDisplay.module.css";

const ProductDisplay = () => {
  return (
    <div className={s.productDisplay_container}>
      <Product1 />
      <Product2 />
      <Product3 />
    </div>
  );
};

export default ProductDisplay;

const Product1 = () => {
  return (
    <div className={s.product1}>
      <div className={s.image_container}>
        <img src={Image1} alt="product" className={s.image1} />
      </div>
      <div className={s.details}>
        <p className={s.title}>ZX9 speaker</p>
        <p className={s.desc}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>SEE PRODUCT</button>
      </div>
    </div>
  );
};

const Product2 = () => {
  return (
    <div
      className={s.product2}
      style={{
        backgroundImage: `url(${Image2})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className={s.common_title}>ZX7 SPEAKER</p>
      <button className={s.common_btn}>SEE PRODUCT</button>
    </div>
  );
};

const Product3 = () => {
  return (
    <div className={s.product3}>
      <div className={s.image}>
        <img src={Image3} alt="earphone" />
      </div>
      <div className={s.detail}>
        <p className={s.common_title}>YX11 EARPHONES</p>
        <button className={s.common_btn}>SEE PRODUCT</button>
      </div>
    </div>
  );
};
