import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FavoriteMovie from './pages/FavoritesPage';
import MovieDetails from './pages/MovieDetailsPage';
import TopNav from './components/TopNav/TopNav';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <TopNav/>
            <div className="main-content">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/favorite-movie" element={<FavoriteMovie/>} />
                  <Route path="/movie/:id" element={<MovieDetails/>} />
              </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;

