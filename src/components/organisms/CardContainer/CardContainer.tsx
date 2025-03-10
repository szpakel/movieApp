import MovieCard from '../../molecules/MovieCard/MovieCard';
import { getPopularMovies } from '../../../services/api';
import { useEffect, useState } from 'react';
import { MovieApi } from '../../../types/MovieTypes';
import { ContainerWrapper } from './CardContainer.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';

function CardContainer() {
  const [movies, setMovies] = useState<Array<MovieApi>>([]);
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
        {/* <button onClick={() => console.log(movies[0])}></button> */}
        {movies.map((_, i) => (
          <MovieCard
            title={movies[i].title}
            date={movies[i].release_date}
            imgSrc={`https://image.tmdb.org/t/p/w500${movies[i].poster_path}`}
            key={movies[i].id}
          />
        ))}
      </ContainerWrapper>
    </>
  );
}

export default CardContainer;
