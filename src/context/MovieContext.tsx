import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movie, MoviesContextType } from '../types/MovieTypes';
import { getPopularMovies } from '../services/api';
import { searchForMovies } from '../services/api';

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [isLoading, setLoadingState] = useState(false);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<Array<Movie>>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem('favorites');
    if (localFavs) {
      try {
        setFavorites(JSON.parse(localFavs));
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoadingState(true);
      try {
        const popularMovies = await getPopularMovies();
        setLoadingState(false);
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingState(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearchMovies = async (queryValue: string) => {
    setLoadingState(true);
    if (query) {
      setLoadingState(true);
      try {
        const searchedMovies = await searchForMovies(queryValue);
        setMovies(searchedMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingState(false);
        setQuery('');
      }
    }
  };


  const handleAddFavoriteMovies = (movie: Movie) => {
    setFavorites((prev) =>
      !favorites.includes(movie) ? [...prev, movie] : [...prev]
    );
  };

  const handleRemoveFavoriteMovies = (movieId: string | number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  const handleQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const isFavorite = (movieId: string | number) => {
    return favorites.some((movie) => movie.id === movieId);
  }

  const value = {
    movies,
    isLoading,
    favorites,
    handleSearchMovies,
    handleQueryValue,
    query,
    handleAddFavoriteMovies,
    handleRemoveFavoriteMovies,
    isFavorite,
  };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('Context is not valid.');
  }
  return context;
};
