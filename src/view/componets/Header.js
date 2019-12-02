import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => (
  <header>
    <h1>BIT BLOG</h1>
    <div>
      <Link to="/home">Home</Link>
      <Link to="/authors">Authors</Link>
      <Link to="/about">About</Link>
    </div>
  </header>
);
export default Header;
