import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav/MyNav.jsx"
import MyFooter from "./Components/MyFooter/MyFooter.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import AllTheBooks from './Components/AllTheBooks/AllTheBooks.jsx';
import fantasy from "./Data/fantasy.json";

function App() {

  const data = fantasy;

  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks 
        data = {data}
      />
      <MyFooter />
    </div>
  );
}

export default App;
