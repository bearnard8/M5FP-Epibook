import React, {useState, useEffect} from 'react'
import CommentList from './CommentList';
import {Form, Button} from "react-bootstrap"

export default function CommentArea({asin}) {

  const [comment, setComment] = useState("")

  const [rate, setRate] = useState("")

  const [data, setData] = useState([]);

  const endpoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

  const ratingValues = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    fetchComments();
  }, [asin])

  async function fetchComments () {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const result = await response.json();

        setData(result);
        // notificare la mancanza di commenti
      } else {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        "body": JSON.stringify({comment, rate, elementId: asin}),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTljMjljNDM3MDAwMTkzYzM3MTciLCJpYXQiOjE3MTIwNjQyOTAsImV4cCI6MTcxMzI3Mzg5MH0.MxfzZZeIDJcPdAfzQl9KxMqfLHM_am5hKPMqHsXu_WY",
            "Content-type": "application/json"
        }
    }); 
      if (response.ok) {
        setComment("");
        setRate(); //il radio del rate rimane selezionato
        fetchComments()
        //notificare successo di invio
      } else {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.error(error)
      //notificare fallimento invio
    }
  }

  return (
    <>
      <CommentList 
        data = {data}
      />
      <Form onSubmit={handleSubmit} className = "m-2">
        <Form.Group>
          <Form.Control
          required
          type = "text"
          size = "sm"
          placeholder = "Leave a comment..."
          value = {comment}
          onChange = {(e) => setComment(e.target.value)}
        />

        {ratingValues.map((el) => (
          <Form.Check
            inline
            required
            key={el}
            type="radio"
            name="ratings"
            id={`rate-${el}`}
            label={`${el}`}
            value = {rate === el}
            onChange = {(e) => setRate(el)}
          />
        ))}

        </Form.Group>
        <Button 
        as="input"
        type="submit"
        value="Submit"
        size="sm"
        />
      </Form>
    </>
  )
}
