import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { LoaderProvider } from "../src/Components/services/Contexts/LoaderContext";
import { DataProvider } from "../src/Components/services/Contexts/DataContext";
import { GlobalStyle } from "./Components/structure/stylredComponents/stiledComponents";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <LoaderProvider>
        <GlobalStyle />
        <App />
      </LoaderProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
