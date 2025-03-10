import styled from "styled-components"
import SearchBar from "./components/molecules/SearchBar/SearchBar";
import Navigation from "./components/organisms/Navigation/Navigation";
import CardContainer from "./components/organisms/CardContainer/CardContainer";

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
      <Navigation />
      <CardContainer />
    </Wrapper>
  )
}

export default App
