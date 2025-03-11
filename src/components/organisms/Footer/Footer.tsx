import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: black;
  margin-top: 60px;
  color: white;
  padding: 20px;
`;

function Footer() {
  return (
    <Wrapper>
      <p>Get info</p>
    </Wrapper>
  );
}

export default Footer;
