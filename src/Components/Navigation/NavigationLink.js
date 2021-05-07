import { ListItem } from "../structure/stylredComponents/List.styled";
import { StyledNavigationLink } from "../structure/stylredComponents/Navigation.styled";

export const NavigationLink = ({ route, page }) => {
  return (
    <ListItem>
      <StyledNavigationLink activeClassName="NavLinkActive" exact to={route}>
        {page}
      </StyledNavigationLink>
    </ListItem>
  );
};
