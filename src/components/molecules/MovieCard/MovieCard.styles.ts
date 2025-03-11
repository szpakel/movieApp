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

export const StyledButton = styled.button`
  width: 35px;
  height: 30px;
  background-color: #2A2A2A;
  border: none;
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
