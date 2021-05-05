// import React from "react";
import styled from "styled-components";

export const BasicTittle = styled.h2`
  margin-bottom: ${(props) => props.marginBottom || "0.5rem"};
  font-size: ${({fontSize}) => fontSize || "4rem"};
  color: ${({ color }) => color || "#000"};
  /* font-size: 4rem; */
  line-height: 1;
  font-weight: 700;
`;

// export const BanerMainTitle = styled(BasicTittle)`
//   font-size: 8rem;
// `;

export const MovieTittle = styled(BasicTittle)`
  font-size: 1.5rem;
`;

export const AdditionText = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: ${(props) => props.marginBottom || "0.2rem"};
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

const Wrapper = styled.div`
  color: ${({ color }) => color || "#fff"};
`;
export const Title = (props) => {
  return <Wrapper {...props} />;
};
export default Title;
