import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/services/Contexts/DataContext";
import { LoaderProvider } from "./Components/services/Contexts/LoaderContext";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import Routes from "./Components/Routes/Routes";
import Navigation from "./Components/Navigation/Navigation";


// const DataContext = React.createContext();
// export const useData = () => useContext(DataContext);
// const initialState = {
//   currentSection: "home",
//   isLoading: false,
//   trendingMovies: [],
//   moviesByCategorye: [],
//   searchedMovies: [],
//   canShowTrending: true,
//   currentHomePage: 1,
//   currentCategoryePage: 1,
//   error: null,
// };

// const DataProvider = ({ children }) => {
//   const [state, setState] = useState(initialState);

//   return (
//     <DataContext.Provider value={[state, setState]}>
//       {children}
//     </DataContext.Provider>
//   );
// };

function App() {
  // kak pri zagruzke App.js polu4ti dastup k DataProvider
  // na kazhdoy stranice svoy currentPage kotoriy pishu v glavniyState kak ispravit`
  // try/cath lu4she delst v funcion api ili v komponente gge zapros delayu 
  // rendery componentov
  ////////////////////
  return (
    <BrowserRouter>
      <DataProvider>
        <LoaderProvider>
          <Loader />
          <Navigation />
          <Header />
          <Routes />
        </LoaderProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
