import React ,{useContext} from "react";
import {Container, Nav, Navbar, Form, Button} from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
/*import SearchContext from "../../Context/SearchContextProvider";*/
import { ThemeContext } from "../../Context/ThemeContextProvider";

export default function MyNav() {

    //const  [searchValue, setSearchValue]  = useContext(SearchContext);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();


    // }

    const {theme, setTheme} = useContext(ThemeContext);

    const handleTheme = (e) => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Navbar 
        expand="lg"
        bg={theme} 
        variant={theme}>
            <Container>
            <Navbar.Brand href="#home">Epibook <FaBookOpen /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Button 
                variant={theme === "dark" ? "light" : "dark"}
                onClick={handleTheme}
                className="d-flex p-2"
                >
                    <CiLight />
                </Button>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Browser</Nav.Link>
                </Nav>
                <Form 
                /*onSubmit={handleSubmit}*/
                className="d-flex p-1"
                >
                    <Form.Control
                        required
                        type="text"
                        placeholder="Search a book..."
                        className=" mr-sm-2"
                        //value = {searchValue}
                        //onChange = {(e) => setSearchValue(e.target.value)}
                    />
                    <Button 
                        as="input"
                        type="submit"
                        value="Submit"
                        size="sm"
                    />
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}