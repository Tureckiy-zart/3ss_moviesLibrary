import React, { useEffect, FC } from "react";
// import { BrowserRouter, useHistory } from "react-router-dom";
import { useData } from "./Components/services/Contexts/DataContext";
import { useLoader } from "./Components/services/Contexts/LoaderContext";
import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Components/Routes/Routes";
import { ErrorHandler } from "./Components/services/API/getData";
import { doFetch } from "./Components/services/API/api";
import { BrowserRouter, useHistory } from "react-router-dom";

// type Props = {
//   BrowserRouter: any, Navigation: any, Routes: any
// }

// const App = (): FC<Props> => {

  function App() {
  const history = useHistory();
  const [, setIsLoading] = useLoader();
  const [{ trendingMovies }, setState] = useData();

  useEffect(() => {
    if (trendingMovies.length > 0) return;
    setIsLoading(true); //spiner on
    doFetch("getTrending")
      .then(({ results }) => {
        setState((prev: any) => ({
          ...prev,
          trendingMovies: results,
        }));
        // setIsLoading(false);
      })
      .catch((error) => {
        ErrorHandler(error, history);
      })
      .finally(setIsLoading(false));
  }, [setIsLoading, setState, trendingMovies.length, history]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );

  // return <> {trendingMovies && <Navigation />}</>;
}

export default App;
