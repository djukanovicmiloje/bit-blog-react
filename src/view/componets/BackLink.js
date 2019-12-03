import React from "react";
import { Link } from "react-router-dom";
import "./BackLink.css";

const BackLink = () => (
  <div className="backLink">
    <Link to="/home">{"< Back"}</Link>
  </div>
);
export default BackLink;
