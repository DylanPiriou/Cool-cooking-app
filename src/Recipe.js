import React from "react";
import { useLocation } from "react-router-dom";
import BackToHome from "./components/BackToHome";
import "./recipe.css";

export default function Recipe() {
  const location = useLocation();
  const { meal } = location.state;

  return (
    <>
      <BackToHome />
      <div className="recipe-container">
        <h2>{meal.strMeal}</h2>
        <div className="content-container">
          <img src={meal.strMealThumb} alt="img" />
          <div className="howto">
            <h3>How to do it ?</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  );
}
