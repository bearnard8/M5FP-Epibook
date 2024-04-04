import React from 'react'
// Componenti
import MyNav from './MyNav/MyNav.jsx';
import MyFooter from './MyFooter/MyFooter.jsx';
import LeftCol from './Columns/LeftCol.jsx';
import RightCol from './Columns/RightCol.jsx';
//Context
import SearchContextProvider from '../Context/SearchContextProvider.jsx';
import ThemeContextProvider from '../Context/ThemeContextProvider.jsx';
import SelectionContextProvider from '../Context/SelectionContextProvider.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
        <ThemeContextProvider>
        <SelectionContextProvider>
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
        </SelectionContextProvider>
        <MyFooter />
      </ThemeContextProvider>
    </>
  )
}
