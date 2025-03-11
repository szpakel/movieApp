import styled from 'styled-components';
import { Link } from 'react-router';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 70px;
  margin-bottom: 60px;
  justify-content: space-between;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7572d1;
  width: 150px;
  margin-right: 30px;
`;

export const StyledLink = styled(Link)`

`
