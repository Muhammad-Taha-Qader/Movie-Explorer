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
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([
    { id: 1, title: "Movie One", releaseDate: "2022-01-01", rating: "8.5" },
    { id: 2, title: "Movie Two", releaseDate: "2021-05-12", rating: "7.9" },
    { id: 3, title: "Movie Three", releaseDate: "2021-07-12", rating: "7.9" },
    { id: 4, title: "Movie 4", releaseDate: "2021-05-12", rating: "7.9" },
  ]);
  const [searchResults, setSearchResults] = useState(movies);

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
