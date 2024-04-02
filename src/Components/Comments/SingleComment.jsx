import React from 'react'
import {ListGroup} from "react-bootstrap"

export default function SingleComment(props) {

    const {comment, rate, elementId} = props

  return (
    <ListGroup.Item>
        <div>{comment}</div>
        <div>{rate}</div>
    </ListGroup.Item>
  )
}
