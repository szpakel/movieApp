import { NavWrapper, StyledLink, LinkWrapper } from './Navigation.styles';
import { Title } from '../../atoms/Title';

function Navigation() {
  return (
    <NavWrapper>
      <Title>Movie App</Title>
      <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favourites">Favourites</StyledLink>
      </LinkWrapper>
    </NavWrapper>
  );
}

export default Navigation;
