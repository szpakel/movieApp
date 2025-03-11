import { createContext, useState } from 'react'
import { MovieApiType } from '../../../types/MovieTypes';
import { getPopularMovies } from '../../../services/api';

type MoviesContextType = {

}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: {children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Array<MovieApiType>>([]);
  const [isLoading, setLoadingState] = useState(false);
  
  const handleSearchMovies = async (queryValue: string) => {
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

  return (
    <MoviesContext.Provider>
      {children}
    </MoviesContext.Provider>
  )
}
