import MovieCard from '../../molecules/MovieCard/MovieCard';
import { getPopularMovies } from '../../../services/api';
import { useEffect, useState } from 'react';
import { MovieApiType } from '../../../types/MovieTypes';
import { ContainerWrapper } from './HomeCardContainer.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';

function CardContainer() {
  const [movies, setMovies] = useState<Array<MovieApiType>>([]);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setLoadingState(false);
        setMovies(popularMovies);
      } catch (err) {
        setLoadingState(false);
        console.log(err);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <>
      <SearchBar setMovies={setMovies} setLoadingState={setLoadingState} />
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
