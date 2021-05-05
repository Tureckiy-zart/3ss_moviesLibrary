import React from 'react'
import routes from '../Routes/routesPath';
import { Nav } from '../structure/stylredComponents/Navigation.styled';
import { NavigationLink } from './NavigationLink';

export const NavigationMenue = () => (
    <Nav>
      <NavigationLink route={routes.home} page={"Home"} />
      <NavigationLink route={routes.searchCollection} page={"Collections"} />
      <NavigationLink route={routes.favorites} page={"Favorites"} />
    </Nav>
  );
  