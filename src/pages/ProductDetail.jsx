import React from "react";

import CustomerLikesContainer from "../components/ProductDetailPage/CustomerLikesContainer";
import Features from "../components/ProductDetailPage/Features";
import HeadphoneSection from "../components/ProductDetailPage/HeadphoneSection";
const ProductDetail = () => {
  return (
    <div>
      <HeadphoneSection />
      <Features />
      <CustomerLikesContainer />
    </div>
  );
};

export default ProductDetail;
