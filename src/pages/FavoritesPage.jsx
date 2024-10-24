import { useContext } from "react";
  import { FavoritesContext } from "../contexts/FavoritesContext";
  import MovieItem from "../components/MovieItem";
  
  const FavoritesMovie = () => {
    const { favorites } = useContext(FavoritesContext);
  
    return (
      <div className="py-28 space-y-5 px-9">
        <h1 className="font-bold">Your Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p className="text-lg text-gray-500">You have no favorite movies. Add some!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default FavoritesMovie;
  