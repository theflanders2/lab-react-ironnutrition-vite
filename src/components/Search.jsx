import { useState } from "react";
 
function Search({ filterFoods }) {
    const [value, setValue] = useState("");

    const handleValue = e => {
        setValue(e.target.value)
        filterFoods(e.target.value)
    }

    return (
        <div>
            <p>Search</p>
            <label>
                <input
                    onChange={handleValue}
                    value={value}
                    type="search"
                    placeholder="Search...">
                </input>
            </label>
        </div>
    )
}
 
export default Search;