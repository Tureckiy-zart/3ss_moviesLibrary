import React from "react";
import { ScrollUpBtnStyled } from "../stylredComponents/Button.styled";

const ScrollUpBtn = () => {
  const scrollUp = () => (document.scrollingElement.scrollTop = 0);
  return <ScrollUpBtnStyled onClick={scrollUp}>UP</ScrollUpBtnStyled>;
};

export default ScrollUpBtn;
