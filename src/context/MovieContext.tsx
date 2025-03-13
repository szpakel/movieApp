import React, { createContext, useContext, useState, useEffect } from 'react';
import { MovieApi } from '../types/MovieTypes';
import { getPopularMovies } from '../services/api';
import { searchForMovies } from '../services/api';

interface MoviesContextType {
  movies: MovieApi[];
  isLoading: boolean;
  query: string;
  favorites: MovieApi[];
  handleSearchMovies: (queryValue: string) => Promise<void>;
  loadPopularMovies: () => Promise<void>;
  handleQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddFavoriteMovies: (movie: MovieApi) => void;
  handleRemoveFavoriteMovies: (movieId: string | number) => void;
  isFavorite: (movieId: string | number) => boolean;
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Array<MovieApi>>([]);
  const [isLoading, setLoadingState] = useState(false);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<Array<MovieApi>>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem('favorites');
    if (localFavs) setFavorites([JSON.parse(localFavs)]);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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

  const loadPopularMovies = async () => {
    setLoadingState(true);
    try {
      const popularMovies = await getPopularMovies();
      setLoadingState(false);
      setMovies(popularMovies);
    } catch (err) {
      setLoadingState(false);
      console.log(err);
    } finally {
      setLoadingState(false);
    }
  };

  const handleAddFavoriteMovies = (movie: MovieApi) => {
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
    loadPopularMovies,
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
