import { StyledDesc, Wrapper } from './MovieCard.styles';
import { Movie } from '../../../types/MovieTypes';

function MovieCard({ title, date, imgSrc }: Movie) {
  return (
    <Wrapper>
      <img src={imgSrc} alt="Poster" />
      <StyledDesc>
        <h3>{title}</h3>
        <p>{date}</p>
      </StyledDesc>
    </Wrapper>
  );
}

export default MovieCard;
