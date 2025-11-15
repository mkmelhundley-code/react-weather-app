import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
