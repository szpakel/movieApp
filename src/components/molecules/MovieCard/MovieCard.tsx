import { StyledDesc, Wrapper, StyledButton, ContentWrapper } from './MovieCard.styles';
import { Movie } from '../../../types/MovieTypes';
import FavIcon from '../../../assets/FavIcon.png';
import { useState } from 'react';
import FavIconFullfilled from '../../../assets/FavIconFullFilled.png';

function MovieCard({ title, date, imgSrc }: Movie) {
  const [isFavorite, setFavoriteState] = useState(false);

  const handleFavoriteState = () => {
    setFavoriteState((prev) => !prev);
  }

  return (
    <Wrapper>
      <img src={imgSrc} alt="Poster" />
      <ContentWrapper>
        <StyledDesc>
          <h3>{title}</h3>
          <p>{date}</p>
        </StyledDesc>
        <StyledButton onClick={handleFavoriteState}>
          {!isFavorite ? <img src={FavIcon} alt="FavIcon" /> : <img src={FavIconFullfilled} alt="FavIconFullfilled" />}
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default MovieCard;
