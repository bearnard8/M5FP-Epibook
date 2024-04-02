import React from 'react'


export default function CommentArea(props) {

  const {asin} = props

  const endpoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

  return (
    <div>{asin}</div>
  )
}
