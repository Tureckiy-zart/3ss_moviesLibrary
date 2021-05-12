import React from "react";
import pageLabels from "../Routes/pageLabels";
import routes from "../Routes/routesPath";
import { Nav } from "../structure/stylredComponents/Navigation.styled";
import { NavigationLink } from "./NavigationLink";

export const NavigationMenue = () => (
  <Nav>
    <NavigationLink route={routes.home} page={pageLabels.home} />
    <NavigationLink route={routes.searchCollection} page={pageLabels.searchCollection} />
    <NavigationLink route={routes.topRated} page={pageLabels.topRated} />
    <NavigationLink route={routes.favorites} page={pageLabels.favorites} />
  </Nav>
);
