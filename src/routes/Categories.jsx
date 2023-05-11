import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  const [catMovies, setCatMovies] = useState([]);
  console.log(id);

  const getMovies = async () => {
    let url = "http://localhost:3100/movies";
    const response = await axios(url);

    console.log(response);
  };
//   Check the each category and get them with their ID with Context!!!!

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Categories;
