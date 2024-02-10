import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
    const [foodsData, setFoodsData] = useState(foodsJson);

    /*-----REMOVE A FOOD AND UPDATE STATE-----*/ 
    const removeFoodItem = (id) => {
        // all foods, whose id does not match the id clicked on will remain in the list
        const foodListAfterDelete = foods.filter(foodItem => foodItem.id !== id);
        setFoods(foodListAfterDelete);
        setFoodsData(foodListAfterDelete);
    };

    /*-----ADD NEW FOOD ITEM AND UPDATE STATE-----*/
    const addNewFood = (newFood) => {
        const updatedFoodsList = [...foods, newFood]; // Add the newFood argument at the end of the list of foods

        setFoods(updatedFoodsList); // update the state variable "foods" with updatedFoodsList
        setFoodsData(updatedFoodsList);
    };

    /*-----FILTER FOODS LIST FOR SEARCH PURPOSES-----*/
    const handleOnChange = (value) => {

        let filteredFoods
        if (value.length === 0) {
            filteredFoods = foodsData; // reset the list of food to the foods variable
        }
        else {
            filteredFoods = foodsData.filter((foodItem) => {
                return foodItem.name.toLowerCase().includes(value.toLowerCase());
            })
        }

        setFoods(filteredFoods); // update the state variable 'foods'
    };

    return (
        <div className="App">
        <Search filterFoods={handleOnChange}/>
        <AddFoodForm addFood={addNewFood} />
        {foods.length === 0 ? <h2>Oops! There is no more content to show.</h2> :
            foods.map(foodItem => {
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