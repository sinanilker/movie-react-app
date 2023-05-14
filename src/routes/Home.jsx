import Form from "../components/block/Form";
import Card from "../components/block/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/block/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SectionFirst from "../components/block/SectionFirst";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  //0 category is "All Movies" from Form
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getMovies = async () => {
    let url = "http://localhost:3100/movies";
    if (selectedCategory !== 0) {
      url += "?categoryId=" + selectedCategory;
    }
    const response = await axios(url);
    setMovies(response.data);
    console.log(response);
  };

  const newMovie = (movie) => {
    const response = axios.post("http://localhost:3100/movies", movie);
    console.log(response);
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  //When the page is loaded these functions will work depending on the update depArray
  useEffect(
    () => {
      getMovies();
      console.log(selectedCategory);
    },
    // It updates when movies category is selected
    [selectedCategory]
  );

  return (
    // React Fragment
    <>
      
      <SectionFirst />
      <Form newMovie={newMovie} />
      <Card movies={movies} />
    </>
  );
};

export default Home;
