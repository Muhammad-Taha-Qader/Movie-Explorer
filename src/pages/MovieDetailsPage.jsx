// const MovieDetails = ({ match }) => {
//     return <h1>Movie Details Page for Movie ID: {match.params.id}</h1>;
// };

// export default MovieDetails;

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams(); // Use useParams to get the dynamic route parameter
    return <h1>Movie Details Page for Movie ID: {id}</h1>;
};

export default MovieDetails;

// To view the `MovieDetails` page for a specific movie, you can navigate in your browser to:
// // http://localhost:3000/movie/1   id will get val=1 in this component