import { NavWrapper, StyledLink, LinkWrapper } from './Navigation.styles';
import { Title } from '../../atoms/Title';

export default function Navigation() {
  return (
    <NavWrapper>
      <Title>Movie App</Title>
      <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </LinkWrapper>
    </NavWrapper>
  );
}
