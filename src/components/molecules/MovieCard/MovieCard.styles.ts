import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 450px;
  width: 270px;
  background-color: #2a2a2a;
  border-radius: 6px;
  flex-direction: column;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const StyledDesc = styled.div`
  margin-left: 10px;
  color: white;
  font-size: 12px;

  h3 {
    margin-bottom: 0;
  }
  p {
    color: grey;
  }
`;
