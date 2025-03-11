import styled from "styled-components"
import Navigation from "./components/organisms/Navigation/Navigation";
import Footer from "./components/organisms/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from "./views/Main";
import Favourites from "./views/Favourites";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function App() {

  return (
    <Wrapper>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
