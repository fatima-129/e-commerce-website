import React from "react";
import Customer from "../components/Customer";
import Info from "../components/HomePage/Info";
import ProductDisplay from "../components/HomePage/ProductDisplay";
import ProductContainer from "../components/ProductContainer";

const Home = () => {
  return (
    <div>
      <Info />
      <ProductContainer />
      <ProductDisplay />
      <Customer />
    </div>
  );
};

export default Home;
