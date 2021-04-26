import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/Favorites/FavoritesPage";
import ErrorPage from "../pages/ErrorPage";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetailsPage";
import ReviewsPage from "../pages/MovieDetails/ReviewsPage";
import CastPage from "../pages/MovieDetails/CastPage";
import SearchMovie from "../pages/SearchMovie";
import Collections from "../pages/Collection/Collections";
import CurrnetCollection from "../pages/Collection/CurrnetCollection";
import MoviesByGenre from "../pages/Genres/MoviesByGenre";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/searchMovie" component={SearchMovie} />
      <Route path="/asset/:id/cast" component={CastPage} />
      <Route path="/asset/:id/reviews" component={ReviewsPage} />
      <Route path="/asset/:id/" component={MovieDetailsPage} />
      <Route path="/categoryes" component={MoviesByGenre} />
      <Route path="/searchCollection/:id" component={CurrnetCollection} />
      <Route path="/searchCollection" component={Collections} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/errorPage" component={ErrorPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
export default Routes;
