import React from 'react'
import AllTheBooks from '../AllTheBooks/AllTheBooks'
import fantasy from "../../Data/fantasy.json"

export default function LeftCol() {

    const data = fantasy;

    return (
            <AllTheBooks 
                data = {data}
            />
    )
}
