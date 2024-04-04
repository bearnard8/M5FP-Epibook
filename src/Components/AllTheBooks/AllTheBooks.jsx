import React ,{useContext, useEffect} from "react";
import SingleBook from "../SingleBook/SingleBook";
import {Container, Row} from "react-bootstrap"
import { SearchContext } from "../../Context/SearchContextProvider";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import "./AllTheBooks.css"
import Welcome from "../Welcome/Welcome";

export default function AllTheBooks(props) {

    const {data} = props;

    const {theme} = useContext(ThemeContext);

    const {selected, setSelected} = useContext(SelectionContext);

    const {searchValue} = useContext(SearchContext);

    const filteredData = searchValue ? data.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase())) : data;

    useEffect(() => {
        setSelected(filteredData[0].asin)
    }, [searchValue])

    const handleSelection = (asin) => {
        setSelected(asin)
    }

    return (
        <>
            <Container fluid
            className={ `card-container p-2 mb-5 ${theme === "dark" ? "card-container-dark" : "card-container-light" }` }
            >
                <Welcome />
                <Row>
                    {filteredData.length > 0 &&
                        filteredData.map((el) => (
                            <SingleBook 
                                key={el.asin}
                                asin={el.asin}
                                title={el.title}
                                image={el.img}
                                price={el.price}
                                category={el.category}
                                handleSelection={handleSelection}
                                isSelected={selected === el.asin}
                            />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}