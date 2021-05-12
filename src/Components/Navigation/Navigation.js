import { NavWrapper } from "../structure/stylredComponents/Navigation.styled";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { LogoLink } from "./Logo";
import { NavigationMenue } from "./NavigationMenue";

function Navigation() {
  return (
    <NavWrapper as="header">
      <Container display="flex">
        <LogoLink />
        <NavigationMenue />
      </Container>
    </NavWrapper>
  );
}
export default Navigation;
