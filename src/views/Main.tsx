import CardContainer from '../components/organisms/HomeCardContainer/HomeCardContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;

export default function Main() {
  return (
    <Wrapper>
      <CardContainer />
    </Wrapper>
  );
}
