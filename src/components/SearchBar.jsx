import React, { useState } from "react";

function SearchBar({getData}){
    const [term, setTerm] = useState("");
    const onChange = (e) =>{
        setTerm(e.target.value)
    }
    const onSearch = () =>{
        getData(term)
    }
    return(
        <div className="searchbar">
        <input 
            placeholder="Enter the name..."
            type="text" 
            value={term}
            onChange={(event) => {onChange(event)}}
            onKeyUp={(event) => {onChange(event)}}
            onPaste={(event) => {onChange(event)}}
        />
        <button type="button" className="searchButton" onClick={onSearch}>Search</button>
        </div>
    );
}

export default SearchBar;