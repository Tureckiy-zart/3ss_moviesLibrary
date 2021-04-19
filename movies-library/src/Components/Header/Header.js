import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../pages/Genres/GenreButtons";
import { HeaderWrapper } from "../structure/stylredComponents/stiledComponents";
import Navigation from "../Navigation/Navigation";
import HeaderSearch from "./HeaderSearch";
import ScrollUpBtn from "../structure/Buttons/ScrollUpBtn";

function Header() {
  return (
    <>
      {/* <HeaderWrapper> */}
        <Navigation />
      {/* </HeaderWrapper> */}

      <HeaderSearch /> {/*// prigaet pri reload */}
      {/* <Carousel /> */}
      <CategoryeButtons />
      {/* <ScrollUpBtn /> */}
    </>
  );
}

export default Header;
