import styled from 'styled-components';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import { useMovies } from '../../../context/MovieContext';

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  width: 95%;
  height: auto;
  gap: 20px;
  margin-top: 40px;
`;

export default function FavCardContainer() {
  const { favorites } = useMovies();

  return (
    <ContainerWrapper>
      {favorites.map((movie) => {
        if (movie.id) {
          return <MovieCard movie={movie} key={movie.id} />
        }
      })}
    </ContainerWrapper>
  );
}
