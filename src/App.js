import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav/MyNav.jsx"
import MyFooter from "./Components/MyFooter/MyFooter.jsx";
import LeftCol from './Components/Columns/LeftCol.jsx';
import RightCol from './Components/Columns/RightCol.jsx';
import SearchContextProvider from './Context/SearchContextProvider.jsx';
import fantasy from "./Data/fantasy.json";
import ThemeContextProvider from './Context/ThemeContextProvider.jsx';
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const data = fantasy;

  return (
    <div>
      <ThemeContextProvider>
        <SearchContextProvider>
          <MyNav />
          <Container 
          fluid
          className='d-flex'
          >
            <Col
            xl="9" 
            lg="9" 
            md="9" 
            sm
            >
              <LeftCol />
            </Col>
            <Col>
              <RightCol />
            </Col>
          </Container>
        </SearchContextProvider>
        <MyFooter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
