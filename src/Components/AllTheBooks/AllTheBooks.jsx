import React ,{/*useContext,*/ useState} from "react";
import SingleBook from "../SingleBook/SingleBook";
import {Container, Row} from "react-bootstrap"
//import { SearchContext } from "../../Context/SearchContextProvider";
//import { ThemeContext } from "../../Context/ThemeContextProvider";

export default function AllTheBooks(props) {

    const {data} = props;

    //const {theme} = useContext(ThemeContext);

    const [selected, setSelected] = useState(false);

    //const [searchValue] = useContext(SearchContext);

    //data.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))

    function handleSelected() {
        setSelected(!selected)
    }

    return (
        <Container 
        className="book-container"
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
                            handleSelected={handleSelected}
                            isSelected={selected === el.asin}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}