import "./movie.css";
import React, { useState } from "react";

function Filter({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
  };

  return (
    <div className="filter">
      <h2>Add Movie</h2>
      <input
        className="info"
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        className="info"
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <input
        className="info"
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />
      <input
        className="info"
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
        }
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default Filter;
