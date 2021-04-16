import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../pages/Genres/GenreButtons";
import { HeaderWrapper } from "../structure/stylredComponents/stiledComponents";
import Navigation from "../Navigation/Navigation";
import HeaderSearch from "./HeaderSearch";

function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
       <HeaderSearch/>  {/*// prigaet pri reload */}
      {/* <Carousel /> */}
      <CategoryeButtons />
    </HeaderWrapper>
  );
}
{/* <Container> */}
{/* </Container> */}

export default Header;
