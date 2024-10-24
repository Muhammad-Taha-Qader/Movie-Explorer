// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//     const { id } = useParams(); // Use useParams to get the dynamic route parameter
//     return (
//         <div>
//             <h1>Movie Details Page for Movie ID: {id}</h1>
//         </div>
//     );
// };

// export default MovieDetails;




import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const { id } = useParams(); 
    // eslint-disable-next-line no-unused-vars
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null); 

    // Fetch movies from the JSON file
    useEffect(() => {
        fetch("/movies.json")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                // Find the movie that matches the ID
                const movie = data.find(movie => movie.id == id); 
                if (movie) {
                    setMovieDetails(movie); 
                } else {
                    console.log("No movie found for this ID:", id);
                }
            })
            .catch((error) => console.error("Error fetching movies:", error));
    }, [id]); 

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="max-w-4xl w-full bg-zinc-900 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Movie Details</h1>
                {movieDetails ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">{movieDetails.title}</h2>
                        <p className="text-gray-600 mb-2">Release Date: {movieDetails.releaseDate}</p>
                        <p className="text-gray-600 mb-2">Rating: {movieDetails.rating}/10</p>
                        <p className="text-gray-700">{movieDetails.description}</p>
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">Loading movie details...</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;


// To view the `MovieDetails` page for a specific movie, you can navigate in your browser to:
// // http://localhost:3000/movie/1   id will get val=1 in this component