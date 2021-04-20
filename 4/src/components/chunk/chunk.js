import { lazy } from "react";

export const AsincHomePage = lazy(() =>
  import("../pages/HomePage" /*webpackChunkName: 'homePage'*/)
);
export const AsincMovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage" /*webpackChunkName: 'movieDetailsage'*/)
);
export const AsincMoviesPage = lazy(() =>
  import("../pages/MoviesPage" /*webpackChunkName: 'moviesPage'*/)
);
