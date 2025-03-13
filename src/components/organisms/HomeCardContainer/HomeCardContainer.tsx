import MovieCard from '../../molecules/MovieCard/MovieCard';
import { useEffect } from 'react';
import { ContainerWrapper } from './HomeCardContainer.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useMovies } from '../../../context/MovieContext';

function CardContainer() {
  const { movies, loadPopularMovies, isLoading } = useMovies();

  useEffect(() => {
    loadPopularMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SearchBar />
      {isLoading ? <p>Loading movies...</p> : null}
      <ContainerWrapper>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ContainerWrapper>
    </>
  );
}

export default CardContainer;
