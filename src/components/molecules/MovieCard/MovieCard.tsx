import { StyledDesc, Wrapper, StyledButton, ContentWrapper } from './MovieCard.styles';
import { Movie } from '../../../types/MovieTypes';
import FavIcon from '../../../assets/FavIcon.png';
import FavIconFullfilled from '../../../assets/FavIconFullFilled.png';
import { useMovies } from '../../../context/MovieContext';

export default function MovieCard({ movie }: { movie: Movie}) {
  const { isFavorite, handleAddFavoriteMovies, handleRemoveFavoriteMovies } = useMovies();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (movie: Movie) => {
    if (favorite) handleRemoveFavoriteMovies(movie.id);
    else handleAddFavoriteMovies(movie);
  }

  return (
    <Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster" />
      <ContentWrapper>
        <StyledDesc>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </StyledDesc>
        <StyledButton onClick={() => onFavoriteClick(movie)}>
          {!favorite ? <img src={FavIcon} alt="FavIcon" /> : <img src={FavIconFullfilled} alt="FavIconFullfilled" />}
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
}
