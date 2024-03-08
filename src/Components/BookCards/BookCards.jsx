import React from "react";
import {Card, Button, Badge, Container, Row, Col} from "react-bootstrap";
import fantasy from "../../Data/fantasy.json";

export default function BookCards(props) {

    const {title, category, image, price} = props;
    console.log(fantasy);

}