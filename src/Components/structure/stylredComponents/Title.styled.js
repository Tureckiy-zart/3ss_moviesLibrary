import React from "react";
import styled from "styled-components";

export const MovieTittle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  /* margin: ${(props) => props.marginBottom || "0.5rem"}; */
  margin-bottom: ${(props) => props.marginBottom || "0.5rem"};
  /* line-height: 1; */
`;
export const AdditionText = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: ${(props) => props.marginBottom || "0.5rem"};
`;
export const SenondaryText = styled(AdditionText)`
  font-size: 1rem;
`;

export const TitileWrapper = styled.div`
  display: grid;
  grid-row-gap: 2.5rem;
  padding: 2rem 4rem;
  margin-bottom: 4rem;
`;
export const MainTitle = styled.h1`
  color: #fff;
  font-size: 8em;
  line-height: 1;
  font-weight: 700;
`;
export const SubTitle = styled.h2`
  color: #fff;
  font-size: 4em;
  font-weight: 600;
`;

const StyledTitlle = styled.div`
  color: ${(props) => props.color || "white"};
`;
export const Title = (props) => {
  return <StyledTitlle {...props} />;
};
export default Title;
