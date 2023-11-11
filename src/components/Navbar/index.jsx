import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.container}>
      <h1>audiophile</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/headphone">HEADPHONE</Link>
        </li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <ShoppingCart />
    </nav>
  );
};

export default Navbar;
