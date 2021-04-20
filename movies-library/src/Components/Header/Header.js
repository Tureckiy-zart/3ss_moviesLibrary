import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../pages/Genres/GenreButtons";
import { HeaderWrapper } from "../structure/stylredComponents/stiledComponents";
import Navigation from "../Navigation/Navigation";
import ScrollUpBtn from "../structure/Buttons/ScrollUpBtn";
import Banner from "../structure/Baner/Banner";
import styled from "styled-components";
const HeaderEmpty = styled.div`
  position: relative;
  /* background-color: #323232; */
  width: 100px;
  height: 760px;
`;

const Empty = () => {
  return <HeaderEmpty />;
};

// export default Header;/

function Header() {
  return (
    <>
      {/* <HeaderWrapper> */}
      <Navigation />
      {/* </HeaderWrapper> */}
      <Banner />
      {/* <Empty>sssssssssssssssssssssss</Empty> */}
      <Carousel />
      <CategoryeButtons />
      {/* <ScrollUpBtn /> */}
    </>
  );
}

export default Header;
