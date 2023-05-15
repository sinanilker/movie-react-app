import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

const MoviesContext = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [isMovieListLoading, setIsMovieListLoading] = useState(false);

  const deleteMovies = (movie) =>
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

export default MoviesContext;
