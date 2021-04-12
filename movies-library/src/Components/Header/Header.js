  import Form from "../structure/Form/Form";
import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../pages/Categotyes/CategoryeButtons";
import { Container } from "../structure/stylredComponents/stiledComponents";

function Header() {
  return (
    <Container>
      <Form queryLocation={'Movie'}/>
      <Carousel />
      <CategoryeButtons />
    </Container>
  );
}

export default Header;
