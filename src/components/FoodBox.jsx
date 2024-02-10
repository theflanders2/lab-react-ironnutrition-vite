
function FoodBox({ food, removeFoodItem, message }) {
  return (
    <div>
        <p>{food.name}</p>

        <img src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>

        <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>

        <button onClick={() => removeFoodItem(food.id)}>Delete</button>
        <h2>{message && "Oops! There is no more content to show."}</h2>
    </div>
  );
}

export default FoodBox;