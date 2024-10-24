import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FavoritesContext } from "../contexts/FavoritesContext";
import { BiCameraMovie } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { MdOutlineCategory } from "react-icons/md";
const MovieItem = ({ movie }) => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.find((favMovie) => favMovie.id === movie.id);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="font-bold text-xl py-3">{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <div className="flex flex-row py-3">
        <button type="button" 
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-transparent border-none hover:text-violet-500 -ml-4">
            <BiCameraMovie size={20} />
        </button>
        <button type="button" 
            className="bg-transparent border-none hover:text-violet-500 -ml-4">
            <MdOutlineCategory size={20}/>
        </button>
        <button type="button" 
            className="bg-transparent border-none hover:text-violet-500 -ml-4">
            <FcLike size={20} />
        </button>

        
      </div>
      <button
        onClick={() => (isFavorite ? removeFavorite(movie.id) : addFavorite(movie))}
        className={`mt-2 px-4 py-2 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      {/* Details Button */}
      <button
        onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to details page
        className="mt-2 ml-2 px-4 py-2 rounded bg-green-500 text-white"
      >
        Details
      </button>
    </div>
  );
};

export default MovieItem;
