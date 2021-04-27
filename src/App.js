import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import { LoaderProvider } from "./Components/services/Contexts/LoaderContext";
import Loader from "./Components/Loader/Loader";
import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Components/Routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <LoaderProvider>
          <Loader />
          <Navigation />
          <Routes />
        </LoaderProvider>
      </DataProvider>
    </BrowserRouter>
  );

  // return <> {trendingMovies && <Navigation />}</>;
}

export default App;
