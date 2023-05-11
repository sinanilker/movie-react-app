import React from "react";
import '../../scss/card.scss'

export const Card = ({ movies }) => {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <button>X</button>
          <img src={movie.movieImage} alt="movie-photo" />
          <div className="card-body">
            <p>
              <b>{movie.title}</b>
            </p>
            <p>{"Director: " + movie.director}</p>
            <p>{"Year: " + movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
