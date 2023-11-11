import { ChevronRight } from "lucide-react";
import React from "react";
import s from "./Product.module.css";

const Product = ({ image, title }) => {
  return (
    <div className={s.container}>
      <img src={image} alt="product" width={"160px"} className={s.image} />
      <p className={s.title}>{title}</p>
      <div className={s.button}>
        <p>SHOP</p>
        <ChevronRight size={16} color="#e4c0ab" />
      </div>
    </div>
  );
};

export default Product;
