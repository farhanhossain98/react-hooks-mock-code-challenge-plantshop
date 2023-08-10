import React from "react";

function Search({ changeSearchPlants }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => changeSearchPlants(event.target.value)}
      />
    </div>
  );
}

export default Search;
