import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
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
  
  export default FoodList;