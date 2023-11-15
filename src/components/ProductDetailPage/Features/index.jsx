import React from "react";
import Image2 from "..//..//../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import Image3 from "..//..//../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import Image1 from "..//..//../assets/shared/desktop/image-best-gear.jpg";

import s from "./Featues.module.css";

const Featues = () => {
  return (
    <div className={s.top_container}>
      <FeatureDescription />
      <FeatureImages />
    </div>
  );
};

const FeatureImages = () => {
  return (
    <div className={s.images_container}>
      <div className={s.images_container_left}>
        <img src={Image1} alt="customer" />
        <img src={Image2} alt="table" />
      </div>
      <div className={s.images_container_right}>
        <img src={Image3} alt="headphone" />
      </div>
    </div>
  );
};

const FeatureDescription = () => {
  return (
    <div className={s.container}>
      <div className={s.features_container}>
        <div className={s.feature_description}>
          <h1>FEATURES</h1>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you're taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you'll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className={s.product_detail}>
          <h1>IN THE BOX</h1>
          <div className={s.detail}>
            <p className={s.product_size}>1x</p>
            <p> Headphone set</p>
          </div>
          <div className={s.detail}>
            <p className={s.product_size}>2x</p>
            <p>Replacement Earcups</p>
          </div>
          <div className={s.detail}>
            <p className={s.product_size}>1x</p>
            <p>User Manual</p>
          </div>
          <div className={s.detail}>
            <p className={s.product_size}>1x</p>
            <p>3.5mm 5m Audio Cable</p>
          </div>
          <div className={s.detail}>
            <p className={s.product_size}>1x</p>
            <p> Travel Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featues;
