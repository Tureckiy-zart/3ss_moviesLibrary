import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "../styles.css";
import MainNavigation from "./Navigation/MainNavigation";
import { AsincHomePage,AsincMovieDetailsPage, AsincMoviesPage} from "./chunk/chunk";
// import NotFound from "./pages/NotFound";
// import SearchForm from "./SearchForm/SearchForm";

export const App = (props) => {
  return (
    <>
      <MainNavigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={AsincHomePage} />
          <Route path="/movies/:movieId/" component={AsincMovieDetailsPage} />
          <Route path="/movies/" component={AsincMoviesPage} />
          <Redirect to="/" />
          {/* <Route path="/movies/" component={SearchForm} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </>
  );
};

{
  /* <Route
            path="/movieslist"
            render={(props) => (
              <MoviesList {...props} moviesTrending={movies} />
              )}
            /> */
}
