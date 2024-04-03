import React ,{useContext} from "react";
import SingleBook from "../SingleBook/SingleBook";
import {Container, Row} from "react-bootstrap"
/*import { SearchContext } from "../../Context/SearchContextProvider";*/
import { ThemeContext } from "../../Context/ThemeContextProvider";

export default function AllTheBooks(props) {

    const {data} = props;

    const {theme} = useContext(ThemeContext);

    //const [searchValue] = useContext(SearchContext);

    //data.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <Container 
        className="book-container"
        bg={theme}
        >
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