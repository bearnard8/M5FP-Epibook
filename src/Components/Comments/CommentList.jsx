import React from 'react'
import SingleComment from './SingleComment'
import {ListGroup} from "react-bootstrap"

export default function CommentList(props) {

    const {data=[]} = props

    return (
        <ListGroup>
            {data.map((el, index) => (
                <SingleComment
                    key = {index}
                    asin = {el.elementId}
                    comment = {el.comment}
                    rate = {el.rate}
                />
                ))
            }
        </ListGroup>
    )
}
