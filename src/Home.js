import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  const [mealsData, setMealsData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`)
      .then((res) => setMealsData(res.data.meals));
  }, [searchData]);

  return (
    <>
      <div className="home-container">
        <div className="title-container">
          <h1>Le Raffiné.</h1>
          <h3>Meal application for an easier cooking experience !</h3>
          <input
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            placeholder="Search for a meal"
          ></input>
        </div>
        <div className="grid-container">
          {mealsData ? (
            mealsData.map((meal) => {
              return <Cards meal={meal} />;
            })
          ) : (
            <h3 style={{ fontSize: 80 }}>No data.</h3>
          )}
        </div>
        <Footer meal={mealsData} />
      </div>
    </>
  );
}
