import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { LoaderProvider } from "../src/Components/services/Contexts/LoaderContext";
import { DataProvider } from "../src/Components/services/Contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
