import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/movielist/MovieList";
import Filter from "./components/filter/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Game of Thrones",
      description: "Valhar mohgulis",
      posterURL: "https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg",
      rating: 4.5,
    },
    {
      title: "The Avengers",
      description: "Earth's Mightiest Heroes",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 5,
    },
  ]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: "50PX" }}>Movix</h1>
      <p>Upload your very own Movie here!!</p>
      <Filter onAddMovie={handleAddMovie} style={{ marginBottom: "50PX" }} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
