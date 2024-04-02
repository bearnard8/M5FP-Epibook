import React from 'react'
import {Card, Button, Col} from "react-bootstrap"
import { useState } from 'react';
import "./SingleBook.css"
import CommentArea from '../Comments/CommentArea';

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
            sm
        >
            <Card className={selected && "selected-card"}>
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
