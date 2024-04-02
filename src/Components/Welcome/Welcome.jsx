import React from "react";
import {Alert} from "react-bootstrap";

export default function Welcome() {
    return(
        <Alert variant="success" className="w-75 m-auto my-3">
            <Alert.Heading>Benvenuto nel nostro negozio, EpicBook</Alert.Heading>
            <p>
                Qui potrai trovare una vastissima selezione di libri, per grandi e piccini, pronti per essere letti.
            </p>
            <hr />
            <p className="mb-0">
                Attenzione, fino al 30 aprile 2024 c'è la spedizione gratuita su tutti i prodotti!
            </p>
        </Alert>  
    )
}