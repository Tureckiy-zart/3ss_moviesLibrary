import styled from "styled-components";

export const Button = styled.button`
  /* width: 100px; */
  border-radius:3px;
  background-color: ${(props) => props.bgc};
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: coral;
  }
  &:active{
    background-color: brown;

  }
`;
