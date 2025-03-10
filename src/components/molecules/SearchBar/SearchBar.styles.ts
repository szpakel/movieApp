import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  width: 500px;
  height: 50px;

  input {
    width: 80%;
    border: none;
    margin-right: 15px;
    border-radius: 3px;
    height: 100%;
    background-color: #474747;
    padding-left: 10px;
    color: white;
  }

  input:focus {
    outline: none;
  }

  button {
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 13px;
    padding: 0.6em 1.2em;
    cursor: pointer;
    background-color: #eb1723;
  }
`;