import { useState } from "react";
 
function Search({ filterFoods }) {
  const [firstLetter, setFirstLetter] = useState("All");
 
  const handleSelect = e => {
    setFirstLetter(e.target.value);
 
    console.log("selected", e.target.value);
    filterFoods(e.target.value)
  };
 
  return (
    <div className="FilterFoods">
      <label>Show foods by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );

// const [searchInput, setSearchInput] = useState("");

// const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//  };
}
 
export default Search;