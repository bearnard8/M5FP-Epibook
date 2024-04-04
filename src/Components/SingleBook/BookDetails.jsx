import React from 'react'
import { Card } from "react-bootstrap"
import { useParams } from 'react-router-dom'

export default function BookDetails({title, image, price}) {

  const {asin} = useParams();

  return (
    <Card>
        <Card.Img 
        className='img-fluid mh-100'
            variant="top"
        />
        <Card.Body>
            <Card.Title>
                {title}
            </Card.Title>
            <p>{price}</p>
        </Card.Body>
    </Card>
  )
}
