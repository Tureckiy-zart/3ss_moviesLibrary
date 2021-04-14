import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
margin: 0;
padding: 0;
background-color: rgba(3, 37, 65, 0.9);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color:${(props) => props.color || "black"};
`;



const activeClassName = "NavLinkActive";
export const StyledNavigationLink = styled(StyledNavLink).attrs({ activeClassName })`
font-size: 1.5rem;
font-weight: 600;
text-decoration: none;
padding: 3px;
color: white;
&:hover {
  background-color: palevioletred;
  color: white;
}
&.${activeClassName} {
  background: red;
}
`;

export const Nav = styled.nav`
  margin: 0 auto;
`;