import React from "react";
import Image2 from "..//..//../assets/category-headphones/desktop/image-xx59.jpg";
import Image1 from "..//..//../assets/category-headphones/desktop/image-xx99-mark-one.jpg";
import Image3 from "..//..//../assets/category-speakers/desktop/image-zx9.jpg";
import CustomerLikes from "../CustomerLikes";
import s from "./CustomerLikesContainer.module.css";

const CustomerLikesContainer = () => {
  return (
    <div className={s.container}>
      <CustomerLikes
        url={Image1}
        title={"XX99 MARK I"}
        button={"SEE PRODUCT"}
      />
      <CustomerLikes url={Image2} title={"XX59"} button={"SEE PRODUCT"} />
      <CustomerLikes
        url={Image3}
        title={"ZX9 SPEAKER"}
        button={"SEE PRODUCT"}
      />
    </div>
  );
};

export default CustomerLikesContainer;
