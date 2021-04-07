import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";

function App() {
  return (
    <DataProvider>
      <Loader />
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
