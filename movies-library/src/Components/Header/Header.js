import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../pages/Categotyes/CategoryeButtons";
// import { Container } from "../structure/stylredComponents/stiledComponents";
import Navigation from "../Navigation/Navigation";
import HeaderSearch from "./HeaderSearch";

function Header() {
  return (
    <>
      <Navigation />
      <HeaderSearch/>
      {/* <Carousel /> */}
      <CategoryeButtons />
    </>
  );
}
{/* <Container> */}
{/* </Container> */}

export default Header;
