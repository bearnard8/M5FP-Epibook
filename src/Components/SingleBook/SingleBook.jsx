import React from 'react'
import {Card, Button, Col} from "react-bootstrap"
import { useState } from 'react';
import "./SingleBook.css"

export default function SingleBook(props) {

    const {asin, title, image, price, category} = props;

    const [selected, setSelected] = useState(false);

    function handleSelected() {
        setSelected(!selected)
    }

    return (
        <Col 
            xl="3" 
            lg="4" 
            md="6" 
            s
        >
            <Card className={selected && "selected-card"} onClick={handleSelected}>
                <Card.Img 
                    variant="top" 
                    src={image} 
                />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button variant="primary">Add to cart</Button>
                    <p>{price}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}
