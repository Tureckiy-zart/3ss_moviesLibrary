import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
import { LoaderProvider } from "./Components/services/Contexts/LoaderContext";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import { GlobalStyle } from "./Components/structure/stylredComponents/stiledComponents";
import Loader from "./Components/Loader/Loader";
import App from "./App";
// import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <LoaderProvider>
        <GlobalStyle />
        <Loader />
        <App />
      </LoaderProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
