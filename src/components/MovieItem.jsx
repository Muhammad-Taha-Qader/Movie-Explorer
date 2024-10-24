const MovieItem = ({ movie }) => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <h2 className="font-bold text-lg">{movie.title}</h2>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    );
  };

  export default MovieItem;