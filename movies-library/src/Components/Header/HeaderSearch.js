import React from "react";
import SerchForm, { FormWrapper } from "../structure/Form/Form";
import styled from "styled-components";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { nanoid } from "nanoid";
import Title from "../structure/stylredComponents/Title.styled";
import Banner from "../structure/Banner";

const BannerWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

const TitileWrapper = styled.div`
  position: absolute;
  top: 210px;
`;
const MainTitle = styled.h1`
  font-size: 8em;
  font-weight: 700;
  line-height: 1;
`;
const SubTitle = styled.h2`
  font-size: 4em;
  font-weight: 600;
`;

const HeaderSearch = () => {
  return (
    <>
      <BannerWrapper>
        <Banner />
        {/* <MainTitle>Welcome.</MainTitle>
        <SubTitle>Millions of movies. Explore now.</SubTitle> */}
      </BannerWrapper>
    </>
  );
};
// const HeaderSearch = () => {
//   return (
//     <ComponentWrapper>
//       <ImageVrapper>
//         <img alt={nanoid(5)} src={headerImages[randomImageIndex]} />
//       </ImageVrapper>
//       <Container>
//         <FormWrapper bottom="9rem">
//           <SerchForm queryLocation={"Movie"} />
//         </FormWrapper>
//         <TitileWrapper>
//           <Title>
//             <MainTitle>Welcome.</MainTitle>
//             <SubTitle>Millions of movies. Explore now.</SubTitle>
//           </Title>
//         </TitileWrapper>
//       </Container>
//     </ComponentWrapper>
//   );
// };

export default HeaderSearch;
