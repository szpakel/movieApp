import styled from 'styled-components';
import Navigation from './components/organisms/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './views/Main';
import Favorites from './views/Favorites';
import { MoviesProvider } from './context/MovieContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default function App() {
  return (
    <Wrapper>
      <MoviesProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </Wrapper>
  );
}
