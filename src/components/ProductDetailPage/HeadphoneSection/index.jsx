import React from "react";
import Image from "..//..//..//assets/category-headphones/desktop/image-xx99-mark-two.jpg";
import s from "./headphoneSection.module.css";

const HeadphoneSection = () => {
  return (
    <div className={s.container}>
      <div className={s.small_heading}>
        <h5>Go Back</h5>
      </div>

      <div className={s.headphone_detail}>
        <div className={s.image}>
          <img src={Image} alt="headphone" />
        </div>
        <div className={s.details}>
          <p className={s.new_product}>NEW PRODUCT</p>
          <h1 className={s.heading}>
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className={s.paragraph}>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className={s.price}>$2,999</p>

          <div className={s.button_container}>
            <div className={s.counter_button}>
              <p>+</p>
              <p className={s.counter}>1</p>
              <p>-</p>
            </div>

            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneSection;
