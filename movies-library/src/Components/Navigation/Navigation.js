import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' exact to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' to="/serach">Serach</NavLink>
        </li> */}
        <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' to="/categoryes">Categoryes</NavLink>
        </li>
        <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' to="/collections">Collections</NavLink>
        </li>
        {/* <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' to="/cartoons">Сartoons</NavLink>
        </li> */}
        <li>
          <NavLink className='NavLink' activeClassName='NavLinkActive' to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
