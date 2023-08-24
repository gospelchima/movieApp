import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import './MovieList.css'


function MovieList({ movies }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
    );
    setFilteredMovies(filtered);
  }, [titleFilter, ratingFilter, movies]);

  return (
    <div className="movie-list">
      <h5 style={{ marginBottom: "20px" }}>Search Filter</h5>
      <div className="filters" style={{ marginBottom: "20px" }}>
        <input
          className="filterInfo"
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <input
          className="filterInfo"
          type="number"
          placeholder="Filter by rating"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </div>
      <div
        className="movies"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
