import React, { useContext } from 'react'
import {Card, Button, Col} from "react-bootstrap"
import "./SingleBook.css"
import { ThemeContext } from "../../Context/ThemeContextProvider";
import {useNavigate} from "react-router-dom"
import BookDetails from './BookDetails';

export default function SingleBook({asin, title, image, price, handleSelection, isSelected}) {

    const {theme} = useContext(ThemeContext);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/details/" + asin);
    }
    // <BookDetails
    // title = {title}
    // image = {image}
    // price = {price}
    // />

    return (
        <Col 
            xl="2" 
            lg="3" 
            md="6" 
            sm
        >
            <Card 
            className={`my-1 h-100  ${isSelected && "selected-card"}`}
            bg={theme}
            text={theme === "dark" ? "light" : "dark"}
            >
                <Card.Img 
                className='img-fluid mh-100'
                    variant="top" 
                    src={image}
                    onClick={() => handleSelection(asin)} 
                />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button 
                    variant="primary"
                    onClick={handleNavigate}
                    >
                        Dettagli
                    </Button>
                    <p>{price}€</p>
                </Card.Body>
            </Card>
        </Col>    
    )
}
