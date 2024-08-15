import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import TopBottom from "./TopBottom";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      🎉 Zitch has come to serve you better.{" "}
      <Link to="/#" href="#">
        Learn More
      </Link>
    </div>
  );
};

export default Topbar;
