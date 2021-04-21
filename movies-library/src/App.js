import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";

import "./App.css";

import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import { getTrendingData } from "./Components/services/API/getData";
import { useData } from "./Components/services/Contexts/DataContext";
import { useLoader } from "./Components/services/Contexts/LoaderContext";

function App() {
  const [{ trendingMovies }, setState] = useData(null);
  
  const [, setIsLoading] = useLoader();
  const { path } = useRouteMatch();
  useEffect (() => getTrendingData(trendingMovies, setState, setIsLoading, path), []);

  // kak pri zagruzke App.js polu4ti dastup k DataProvider
  // na kazhdoy stranice svoy currentPage kotoriy pishu v glavniyState kak ispravit`
  // try/cath lu4she delst v funcion api ili v komponente gge zapros delayu
  // rendery componentov
  ////////////////////
  
  return <Navigation />;
}

export default App;