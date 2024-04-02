import React from "react";
import SingleBook from "../SingleBook/SingleBook";
import {Container, Row, Col} from "react-bootstrap"

export default function AllTheBooks(props) {

    const {data} = props;

    return (
        <Container className="book-container">
            <Row>

                {data.length > 0 &&
                    data.map((el) => (
                        <SingleBook 
                            key={el.asin}
                            asin={el.asin}
                            title={el.title}
                            image={el.img}
                            price={el.price}
                            category={el.category}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}