import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MovesPage from "../pages/MovesPage/MovesPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPag";
import ReviewsPage from "../pages/ReviewsPage/ReviewsPage";
import CastPage from "../pages/CastPage/CastPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/asset/:id/cast" component={CastPage} />
      <Route path="/asset/:id/reviews" component={ReviewsPage} />
      <Route path="/asset/:id/" component={MovieDetailsPage} />
      <Route path="/asset" component={MovesPage} />
      {/* <Route path="/serials" component={SerialsPage} /> */}
      {/* <Route path="/cartoons" component={СartoonsPage} /> */}
      <Route path="/favorites" component={FavoritesPage} />
      <Route component={ErrorPage} />
      {/* <Redirect to="/" /> */}
    </Switch>
  );
}
export default Routes;
