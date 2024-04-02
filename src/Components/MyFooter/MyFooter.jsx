import React from "react";
import {Container, Nav, Navbar, ListGroup} from "react-bootstrap";

export default function MyFooter() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-bottom">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="p-0">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="p-0">
                            <Nav.Link href="#home">Link</Nav.Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Nav>
            </Container>
        </Navbar>
    )
}