import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav/MyNav.jsx"
import MyFooter from "./Components/MyFooter/MyFooter.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import AllTheBooks from './Components/AllTheBooks/AllTheBooks.jsx';
import SearchContextProvider from './Context/SearchContextProvider.jsx';
import fantasy from "./Data/fantasy.json";
import ThemeContextProvider from './Context/ThemeContextProvider.jsx';

function App() {

  const data = fantasy;

  return (
    <div>
      <ThemeContextProvider>
        <SearchContextProvider>
          <MyNav />
          <Welcome />
          <AllTheBooks 
            data = {data}
          />
        </SearchContextProvider>
        <MyFooter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
