import { createGlobalStyle } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import { LoaderProvider } from "./Components/services/Contexts/LoaderContext";
import Loader from "./Components/Loader/Loader";
import Routes from "./Components/Routes/Routes";

const Global = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing:border-box;
font-family: consolas;
background-color: #fff;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <LoaderProvider>
          {/* <Loader /> */}
          {/* <Global /> */}
          <App />
          <Routes />
        </LoaderProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
