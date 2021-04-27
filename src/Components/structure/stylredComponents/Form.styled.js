import styled from "styled-components";

export const Form = styled.form`
  /* width: ${(props) => props.width || "60%"}; */
  bottom: ${(props) => props.bottom};
  border: none;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.96) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 30px;

`;
export const Input = styled.input`
  width: 32rem;
  line-height: 46px;
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  text-align: center;
  box-sizing: initial;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
export const FormButton = styled.input`
  position: absolute;
  line-height: 46px;
  padding: 10px 26px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 30px;
  right: 0px;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;

  &:active,
  &:hover,
  &:focus {
    color: rgba(3, 37, 65, 1);
    outline: 0;
    outline-offset: 0;
  }
`;
