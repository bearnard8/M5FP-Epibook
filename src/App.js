import './App.css';
// Componenti
import Home from './Components/Home.jsx';
import NotFound from './Components/NotFound.jsx';
//Varie
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import BookDetails from './Components/SingleBook/BookDetails.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/details/:asin' element={<BookDetails/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
