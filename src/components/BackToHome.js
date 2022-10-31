import React from "react";
import { NavLink } from "react-router-dom";

export default function BackToHome() {
  return (
    <NavLink className="home-btn" to="/">
      /Back to home
    </NavLink>
  );
}
