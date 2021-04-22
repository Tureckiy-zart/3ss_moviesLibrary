import React from "react";
import styled from "styled-components";
import { StyledButton } from "../stylredComponents/Button.styled";

export const ScrollUpBtnStyled = styled(StyledButton)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const ScrollUpBtn = () => {
  // var bodyRect = document.body.getBoundingClientRect();
  // elemRect = element.getBoundingClientRect(),
  // offset = elemRect.top - bodyRect.top;

  //   var rect = element.getBoundingClientRect();
  //   console.log(rect.top, rect.right, rect.bottom, rect.left);
  const scrollUp = () => (document.scrollingElement.scrollTop = 0);

  return <ScrollUpBtnStyled onClick={scrollUp}>UP</ScrollUpBtnStyled>;
};

export default ScrollUpBtn;
