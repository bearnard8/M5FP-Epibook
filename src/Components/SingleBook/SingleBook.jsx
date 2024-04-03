import React, { useContext } from 'react'
import {Card, Button, Col} from "react-bootstrap"
import { useState } from 'react';
import "./SingleBook.css"
import CommentArea from '../Comments/CommentArea';
import { ThemeContext } from "../../Context/ThemeContextProvider";

export default function SingleBook({asin, title, image, price, category}) {

    const [selected, setSelected] = useState(false);

    const {theme} = useContext(ThemeContext);

    function handleSelected() {
        setSelected(!selected)
    }

    return (
        <Col 
            xl="3" 
            lg="4" 
            md="6" 
            sm
        >
            <Card 
            className={selected && "selected-card"}
            bg={theme}
            text={theme === "dark" ? "light" : "dark"}
            >
                <Card.Img 
                    variant="top" 
                    src={image}
                    onClick={handleSelected} 
                />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button variant="primary">Add to cart</Button>
                    <p>{price}</p>
                </Card.Body>
                {selected && <CommentArea asin = {asin}/>}
            </Card>
        </Col>    
    )
}
