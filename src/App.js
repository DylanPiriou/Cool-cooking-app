import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Recipe from "./Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
