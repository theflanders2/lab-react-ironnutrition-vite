import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  /*-----REMOVE A FOOD AND UPDATE STATE-----*/ 
  const removeFoodItem = (id) => {
    // all foods, whose id does not match the id clicked on will remain in the list
    const foodListAfterDelete = foods.filter(foodItem => foodItem.id !== id);
    setFoods(foodListAfterDelete);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map(foodItem => {
          return (
            <FoodBox
            key={foodItem.id}
            food={foodItem}
            removeFoodItem={removeFoodItem} />
          )
      })}
    </div>
  );
}

export default App;
