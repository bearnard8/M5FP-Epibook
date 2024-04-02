import React from 'react'
import SingleComment from './SingleComment'
import {ListGroup} from "react-bootstrap"

export default function CommentList(props) {

    const {data=[]} = props

    return (
        <ListGroup>
            {data.map((el) => (
                <SingleComment
                    key = {el.elementId}
                    comment = {el.comment}
                    rate = {el.rate}
                />
                ))
            }
        </ListGroup>
    )
}
