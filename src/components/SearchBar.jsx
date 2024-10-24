import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSearch} className="flex items-center justify-center py-6 space-x-2">
        <input
          type="text"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>
    );
  };

  export default SearchBar;