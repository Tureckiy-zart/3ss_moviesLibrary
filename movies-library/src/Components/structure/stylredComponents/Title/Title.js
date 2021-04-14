import React from "react";
import styled from "styled-components";
const StyledTitlle = styled.h1`
  color: ${(props) => props.color || "white"};
`;
export const Title = (props) => {
  return <StyledTitlle {...props} />;
};
export default Title;
