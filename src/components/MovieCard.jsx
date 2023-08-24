import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from 'react-bootstrap/Card';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rating: {movie.rating}</Card.Text>
          
        </Card.Body>
      </Card>
     
    </div>
  );
}

export default MovieCard;



