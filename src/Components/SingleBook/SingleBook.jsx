import React, { useContext } from 'react'
import {Card, Button, Col} from "react-bootstrap"
//import { useState } from 'react';
import "./SingleBook.css"
import CommentArea from '../Comments/CommentArea';
import { ThemeContext } from "../../Context/ThemeContextProvider";

export default function SingleBook({asin, title, image, price, handleSelected, isSelected}) {

    //const [selected, setSelected] = useState(false);

    const {theme} = useContext(ThemeContext);

    return (
        <Col 
            xl="3" 
            lg="4" 
            md="6" 
            sm
        >
            <Card 
            className={isSelected && "selected-card"}
            bg={theme}
            text={theme === "dark" ? "light" : "dark"}
            >
                <Card.Img 
                    variant="top" 
                    src={image}
                    onClick={() => handleSelected(asin)} 
                />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button variant="primary">Add to cart</Button>
                    <p>{price}</p>
                </Card.Body>
                {isSelected && <CommentArea asin = {asin}/>}
            </Card>
        </Col>    
    )
}
