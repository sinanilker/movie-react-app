import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// to create a context to use in other JSX's
export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [isMovieListLoading, setIsMovieListLoading] = useState(false);

  // Making possible to use the deleteMovies function everywhere in other JSX's
  const deleteMovies = (id) =>
    setMovieList((prevMovieList) =>
      prevMovieList.filter((movie) => movie.id !== id)
    );

  const createMovies = (movie) =>
    setMovieList((prevMovieList) => [
      ...prevMovieList,
      { id: crypto.randomUUID(), ...movie },
    ]);

    // useEffect to catch errors and put loading screen!
  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsMovieListLoading(true);
        const response = await axios("http://localhost:3100/movies/");
        setMovieList(response.data);
        console.log(response);
        setIsMovieListLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // to trigger useEffect
    getMovies();
  });

  return (

    // React Fragment of Movies Context Provider
    <MoviesContext.Provider
      value={{ movieList, isMovieListLoading, deleteMovies, createMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
