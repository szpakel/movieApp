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

function FavCardContainer() {
  const { favorites } = useMovies();

  return (
    <ContainerWrapper>
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ContainerWrapper>
  );
}

export default FavCardContainer;
