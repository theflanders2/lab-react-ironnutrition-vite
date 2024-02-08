import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={foods[0]} />
    </div>
  );
}

export default App;
