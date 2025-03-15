import MovieCard from '../../molecules/MovieCard/MovieCard';
import { ContainerWrapper } from './HomeCardContainer.styles';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useMovies } from '../../../context/MovieContext';

export default function CardContainer() {
  const { movies, isLoading } = useMovies();

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
