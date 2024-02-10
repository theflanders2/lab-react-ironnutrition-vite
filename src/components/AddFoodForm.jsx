import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function AddFoodForm({ addFood }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value);
 
    const handleImageInput = e => setImage(e.target.value);
    
    const handleCaloriesInput = e => setCalories(e.target.value);
    
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
    
        e.preventDefault(); // prevents the form from reloading the page
        // Add the logic to add a new food and add it to the state variable foods
        const id = uuidv4();
        const newFood = {
            id,
            name, 
            image, // equivalent to image: image, since same name is use, only need one instance
            calories,
            servings
        }
        console.log('newFood', newFood)
        addFood(newFood) // updates the foods state variable
        // this resets the form to its initial state
        setName("")
        setImage("")
        setCalories("")
        setServings("")
      }

    return (
        <div className="AddFood">
        <h2>Add Food Entry</h2>
        <form onSubmit={handleSubmit}> 
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput} 
          />
          <br />
   
          <label>Image:</label>
          <input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput} 
          />
          <br />
   
          <label>Calories:</label>
          <input 
            type="number" 
            name="calories" 
            value={calories} 
            onChange={handleCaloriesInput} 
          />
          <br />
   
          <label>Servings:</label>
          <input 
            type="number" 
            name="servings" 
            value={servings} 
            onChange={handleServingsInput} 
          />
          <br />
   
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  
  export default AddFoodForm;