// import { CiBellOn } from "react-icons/ci";

// const Home = () => {
//   return (
//     <div className="flex flex-col">
//         <div className="py-28 space-y-5 px-9">
//             <h1 className="font-bold">Movie Home</h1>
//             <div className="space-y-2">
//                 <p>Trusted by 780,000+ </p>
//                     <button type="button" className="flex">Subscribe <CiBellOn className="mt-1 ml-2"/> </button>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Home;

import { CiBellOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    // Fetch movies from the JSON file
    useEffect(() => {
      fetch("/movies.json")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setSearchResults(data); // Set initial search results to all movies
        })
        .catch((error) => console.error("Error fetching movies:", error));
    }, []);
  
    // Handle search functionality
    const handleSearch = (query) => {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredMovies);
    };
  
    return (
      <div className="flex flex-col">
        <div className="py-28 space-y-5 px-9">
          <h1 className="font-bold">Movie Home</h1>
          <div className="space-y-2">
            <p>Trusted by 780,000+ </p>
            <button type="button" className="flex">
              Subscribe <CiBellOn className="mt-1 ml-2" />
            </button>
          </div>
          {/* SearchBar component */}
          <SearchBar onSearch={handleSearch} />
          {/* MovieList component */}
          <MovieList movies={searchResults} />
        </div>
      </div>
    );
  };
  
  export default Home;
  