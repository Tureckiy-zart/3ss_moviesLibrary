import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import { DataProvider } from "./Components/services/Contexts/DataContext";
// import LazyLoad from 'react-lazyload';

function App() {
  return (
    <DataProvider>
      <Loader />
      <BrowserRouter>
        {/* <LazyLoad height={200} offset={100}> */}
          <Header />
        {/* </LazyLoad> */}
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
