import React from "react";
import styled from "styled-components";

// const StyledMovieTitlle = styled.h2`

// `
export const MovieTittle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  /* line-height: 1; */
`;
export const AdditionText = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  line-height:2rem;
  margin-bottom: ${(props) => props.marginBottom || "0.5rem"};
`;
export const SenondaryText = styled(AdditionText)`
  font-size: 1rem;
`;

const StyledTitlle = styled.div`
  color: ${(props) => props.color || "white"};
`;

export const Title = (props) => {
  return <StyledTitlle {...props} />;
};
export default Title;
