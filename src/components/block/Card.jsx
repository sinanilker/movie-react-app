import React, { useContext } from "react";
import '../../scss/card.scss'
import MoviesContext from "../../contexts/movie-contexts/MoviesContext";

export const Card = ({ movies }) => {
  // const {deleteMovies} = useContext(MoviesContext);
  return (
    <div className="card-container" id="cards">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <button 
          // className="btn-delete" onClick={() => deleteMovies(movies.id)}
          >X</button>
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
