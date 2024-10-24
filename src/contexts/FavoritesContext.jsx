import { createContext, useState, useEffect } from "react";

// Create the context
export const FavoritesContext = createContext();

// Context provider component
export const FavoritesProvider = ({ children }) => {
  // Load favorites from local storage or initialize as an empty array
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Effect to save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((favMovie) => favMovie.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  // Remove a movie from favorites
  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
