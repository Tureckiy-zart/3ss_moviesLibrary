import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Components/Routes/Routes";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import { LoaderProvider } from "./Components/services/Contexts/LoaderContext";
import Loader from "./Components/Loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <LoaderProvider>
          <Loader />
          <App />
          <Routes />
        </LoaderProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
