import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100px;
  background-color: rgba(3, 37, 65, 1);
  width: 100%;
  position: fixed;
  z-index: 12;
`;
export const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.color || "black"};
`;
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.color || "black"};
  margin-right: 1rem;
  height: 46px;
  line-height: 46px;
  padding: 4px 20px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: rgba(3, 37, 65, 1);
    transition: 0;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

const activeClassName = "NavLinkActive";
export const StyledNavigationLink = styled(NavigationLink).attrs({
  activeClassName,
})`
  font-weight: 600;

  &.${activeClassName} {
    background: white;
    color: black;
  }
`;
