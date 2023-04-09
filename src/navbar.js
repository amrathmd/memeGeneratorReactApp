import React from "react";
import logo from "./drama.webp";
import "./styles.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} id="logo"></img>
      <h1>MemeGenerator</h1>
    </div>
  );
}
