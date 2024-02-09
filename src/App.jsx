import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  /*-----REMOVE A FOOD AND UPDATE STATE-----*/ 
  const removeFoodItem = (id) => {
    // all foods, whose id does not match the id clicked on will remain in the list
    const foodListAfterDelete = foods.filter(foodItem => foodItem.id !== id);
    setFoods(foodListAfterDelete);
  };

  /*-----ADD NEW FOOD ITEM AND UPDATE STATE-----*/
  const addNewFood = (newFood) => {
    const updatedFoodsList = [...foods, newFood]; // Add the newFood argument at the end of the list of foods
    // const updatedMoviesData = [...moviesData, movie]; 

    setFoods(updatedFoodsList); // update the state variable "foods" with updatedFoodsList
    // setMoviesData(updatedMoviesData); 
};

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addNewFood} />
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
