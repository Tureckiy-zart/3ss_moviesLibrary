import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import { CategoryesContextProvider } from "./Components/services/Contexts/CategoryesContext";

function App() {
  return (
    <DataProvider>
      <CategoryesContextProvider>
        <Loader />
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CategoryesContextProvider>
    </DataProvider>
  );
}

export default App;
