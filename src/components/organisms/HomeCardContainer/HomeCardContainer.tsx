import MovieCard from '../../molecules/MovieCard/MovieCard';
import { useEffect } from 'react';
import { ContainerWrapper } from './HomeCardContainer.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useMovies } from '../../../context/MovieContext';

function CardContainer() {
  const { movies, loadPopularMovies, isLoading} = useMovies();

  useEffect(() => {
    loadPopularMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SearchBar />
      {isLoading ? <p>Loading movies...</p> : null}
      <ContainerWrapper>
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            date={movie.release_date}
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            key={movie.id}
          />
        ))}
      </ContainerWrapper>
    </>
  );
}

export default CardContainer;
