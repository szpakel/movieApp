import CardContainer from '../components/organisms/HomeCardContainer/HomeCardContainer';
import styled from 'styled-components';

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
      <CardContainer />
    </Wrapper>
  );
}

export default Main;
