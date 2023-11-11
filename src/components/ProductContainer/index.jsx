import React from "react";
import Product from "../Product";
import s from "./ProductContainer.module.css";

import Image3 from "../../assets/shared/desktop/image-earphones.png";
import Image1 from "../../assets/shared/desktop/image-headphones.png";
import Image2 from "../../assets/shared/desktop/image-speakers.png";

const ProductContainer = () => {
  return (
    <div className={s.container}>
      <Product image={Image1} title={"HEADPHONES"} />
      <Product image={Image2} title={"SPEAKERS"} />
      <Product image={Image3} title={"EARPHONES"} />
    </div>
  );
};

export default ProductContainer;
