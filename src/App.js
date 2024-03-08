import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import StoreNavbar from "./Components/Navbar/StoreNavbar.jsx"
import StoreFooter from "./Components/Footer/StoreFooter.jsx";
import WelcomeAlert from "./Components/Alert/welcomeAlert.jsx";
import BookCards from './Components/BookCards/BookCards.jsx';
import fantasy from "./Data/fantasy.json";

function App() {
  console.log(fantasy);
  return (
    <div>
      <StoreNavbar />
      <WelcomeAlert />
      <StoreFooter />
    </div>
  );
}

export default App;
