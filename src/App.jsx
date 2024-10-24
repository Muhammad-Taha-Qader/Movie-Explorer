import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FavoriteMovie from './pages/FavoritesPage';
import MovieDetails from './pages/MovieDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/favorite-movie" element={<FavoriteMovie/>} />
                <Route path="/movie/:id" element={<MovieDetails/>} />
            </Routes>
        </Router>
    );
};

export default App;

