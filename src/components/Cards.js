import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

export default function Cards({ meal }) {
  return (
    <Link
      // to={{
      //   pathname: `/recipe/${meal.idMeal}`,
      //   state: {
      //     meal,
      //   },
      // }}
      to={"/recipe/" + meal.idMeal}
      state={{ meal }}
    >
      <div className="card">
        <img src={meal.strMealThumb} alt="meal" />
        <div className="infos-meal">
          <h2>{meal.strMeal}</h2>
          <p>{meal.strArea}</p>
          {/* <button>
              <NavLink to="/recipe">See more</NavLink>
            </button> */}
        </div>
      </div>
    </Link>
  );
}
