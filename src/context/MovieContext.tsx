import React, { createContext, useContext, useState } from 'react'
import { MovieApi } from '../types/MovieTypes';
import { getPopularMovies } from '../services/api';
import { searchForMovies } from '../services/api';

interface MoviesContextType {
  movies: MovieApi[];
  isLoading: boolean;
  query: string;
  handleSearchMovies: (queryValue: string) => Promise<void>;
  loadPopularMovies: () => Promise<void>;
  handleQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: {children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Array<MovieApi>>([]);
  const [isLoading, setLoadingState] = useState(false);
  const [query, setQuery] = useState('');

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
        setLoadingState(false)
        setQuery('');
      }
    }
  }

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

  const handleQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <MoviesContext.Provider value={{movies, isLoading, handleSearchMovies, loadPopularMovies, handleQueryValue, query }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("Context is not assigned.");
  }
  return context;
}
