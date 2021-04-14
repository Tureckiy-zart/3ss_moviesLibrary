import styled from "styled-components";

export const StyledButton = styled.button`
  margin: ${(props) => props.margin};
  height: 46px;
  line-height: 46px;
  padding: 4px 20px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  /* top: 0; */
  color: #fff;
  cursor: pointer;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:focus{
    outline: none;
  }
  &:hover {
    color: rgba(3, 37, 65, 1);
    transform: scale(1.1);
  }
`;

export const Button = (props) => <StyledButton {...props} />;

