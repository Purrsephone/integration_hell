import React from "react";
import './Search.css';

const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="hide-text">Search Keyword</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Keyword"
            name="s" 
            style={{
                width: 350,
                height: 40,
                borderColor: "gray",
                padding: 2,
                margin: 10,
                backgroundColor: "white",
                borderRadius: 2
              }}
        />                      
        <button
            className="btn"
            type="submit"
            style={{
              width: 75,
              height: 40,
              borderColor: "black",
              padding: 2,
              backgroundColor: "#DEDEDE",
              borderRadius: 2
            }}
          >Search</button>
    </form>
);

export default Search;

