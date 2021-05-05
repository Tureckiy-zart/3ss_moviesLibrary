import styled from "styled-components";

export const BntGroupe = styled.div`
  position: ${(props) => props.position || "initial"};
  top: ${(props) => props.top || "0"};
  /* bottom: ${(props) => props.bottom || "0"}; */
  right: ${(props) => props.right || "0"};
  /* left: ${(props) => props.left || "0"}; */
  display: flex;
  margin-bottom: 1rem;
`;
export const BasicButton = styled.button`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || "4px 20px"};
  height: ${({ height }) => height || "46px;"};
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: rgba(3, 37, 65, 1);
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
export const ButtonShrink = styled(BasicButton)`
  margin-right: 0.5rem;
  height: 1.2rem;
  padding: 2px 6px;
`;
export const ScrollUpBtnStyled = styled(BasicButton)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
