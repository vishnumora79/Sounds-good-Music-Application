import React, { useState } from "react";

function SearchBar({ onSearch }) {
   const [query, setQuery] = useState("");
   function handleSearch() {
    onSearch(query);
   }

   return (
    <div className="search-bar">
     <input 
       type="text"
       placeholder="Sounds good search"
       value={query}
       onChange={(e) => setQuery(e.target.value)}
     />

     <button onClick={handleSearch}>Find your sound</button>
    </div>
   );
}

export default SearchBar;