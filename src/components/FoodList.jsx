import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

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

        setFoods(updatedFoodsList); // update the state variable "foods" with updatedFoodsList
    };

    /*-----FILTER FOODS LIST FOR SEARCH PURPOSES-----*/
    const filterFoodsList = (str) => {
        let filteredFoods;
        if (str === "All") { // resetting the list of food to all the foods
        filteredFoods = foods;
        }
        else { // filter out the foods that don't match the selected option
        filteredFoods = foods.filter((foodItem) => {
            return foodItem.name[0].toLowerCase() === str.toLowerCase();
          });
        }

        setFoods(filteredFoods); // update the state variable 'foods'
    };

    return (
        <div className="App">
        <Search filterFoods={filterFoodsList}/>
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