import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovesPage from "../pages/MovesSearched";
import FavoritesPage from "../pages/FavoritesPage";
import ErrorPage from "../pages/ErrorPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import ReviewsPage from "../pages/ReviewsPage";
import CastPage from "../pages/CastPage";
import Categoryes from "../pages/Categoryes";
import SearchMovie from "../pages/SearchMovie";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/asset/:id/cast" component={CastPage} />
      <Route path="/asset/:id/reviews" component={ReviewsPage} />
      <Route path="/asset/:id/" component={MovieDetailsPage} />
      <Route path="/searchMovie/:query/" component={Categoryes} />
      <Route path="/searchMovie" component={MovesPage} />
      {/* <Route path="/search" component={SearchMovie} /> */}
      {/* <Route path="/categoryes/:categorye" component={Categoryes} /> */}
      <Route path="/categoryes" component={Categoryes} />
      {/* <Route path="/collections" component={Collections} />/ */}
      {/* <Route path="/cartoons" component={СartoonsPage} /> */}
      <Route path="/favorites" component={FavoritesPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
export default Routes;
