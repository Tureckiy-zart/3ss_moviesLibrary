import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import FavoritesPage from "../pages/Favorites/FavoritesPage";
import ErrorPage from "../pages/ErrorPage";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetailsPage";
import ReviewsPage from "../pages/MovieDetails/ReviewsPage";
import StuffPage from "../pages/MovieDetails/StuffPage";
import SearchMovie from "../pages/SearchMovie";
import Collections from "../pages/Collection/Collections";
import CurrnetCollection from "../pages/Collection/CurrnetCollection";
import MoviesByGenre from "../pages/Genres/MoviesByGenre";
import routes from "./routesPath";
import PersonPage from "../pages/MovieDetails/PersonPage";
import TopRaited from "../pages/TopRaited/TopRaited";

function Routes() {
  return (
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.searchMovie} component={SearchMovie} />
      <Route path={routes.cast} component={StuffPage} />
      <Route path={routes.crew} component={StuffPage} />
      <Route path={routes.person} component={PersonPage} />
      <Route path={routes.reviews} component={ReviewsPage} />
      <Route path={routes.asset} component={MovieDetailsPage} />
      <Route path={routes.categoryes} component={MoviesByGenre} />
      <Route path={routes.currentCollection} component={CurrnetCollection} />
      <Route path={routes.searchCollection} component={Collections} />
      <Route path={routes.favorites} component={FavoritesPage} />
      <Route path={routes.topRated} component={TopRaited} />
      <Route path={routes.errorPage} component={ErrorPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
export default Routes;
