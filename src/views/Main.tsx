import CardContainer from "../components/organisms/HomeCardContainer/HomeCardContainer"
import styled from "styled-components";
import { MoviesProvider } from "../context/MovieContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;

function Main() {
  return (
    <Wrapper>
      <MoviesProvider>
        <CardContainer />
      </MoviesProvider>
    </Wrapper>
  )
}

export default Main