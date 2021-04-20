import React from "react";
import styled from "styled-components";

const TitileWrapper = styled.div`
  display: grid;
  /* grid-template-rows: 1fr, 1fr; */
  grid-row-gap: 3rem;
  padding: 2rem 4rem;
  margin-bottom:5rem;
`;
const MainTitle = styled.h1`
  color: #fff;
  font-size: 8em;
  line-height: 1;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  color: #fff;
  font-size: 4em;
  font-weight: 600;
`;

const BanerTitle = () => (
  <TitileWrapper>
    <MainTitle>Welcome.</MainTitle>
    <SubTitle>Millions of movies. Explore now.</SubTitle>
  </TitileWrapper>
);

export default BanerTitle;
{/* <Container>
  <FormWrapper bottom="9rem">
    <SerchForm queryLocation={"Movie"} />
  </FormWrapper>
</Container>; */}
