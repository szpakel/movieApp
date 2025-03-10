import { NavWrapper, Links } from './Navigation.styles';
import { Title } from '../../atoms/Title';

function Navigation() {
  return (
    <NavWrapper>
      <Title>Movie App</Title>
      <Links>
        <a>Home</a>
        <a>Favourites</a>
      </Links>
    </NavWrapper>
  );
}

export default Navigation;
