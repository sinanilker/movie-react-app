import React, { useState } from "react";
import '../../scss/form.scss'
import Button from "../base/Button";

function Form({newMovie}) {
  const [categoryName, setCategoryName] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieImage, setMovieImage] = useState("");

  const handleSubmit = (e) => {
    // Not to make this button refresh the page
    e.preventDefault();
    newMovie(
      {
        // "id":Math.floor(Math.random()*100),
        "categoryId":categoryName,
        "title":movieTitle,
        "year":movieYear,
        "director":movieDirector,
        "movieImage":movieImage
        
      }
    )

  }

  return (
    <div className="form-box">
    <form action="" onSubmit={handleSubmit}>
      <h3>Add a Movie</h3>
      <select value={categoryName} id="categories" onChange={(e)=> {setCategoryName(e.target.value)}}>
        <option value="">Select a Category</option>
        <option value="1">Action</option>
        <option value="2">Comedy</option>
        <option value="3">Drama</option>
      </select>
      <input type="text" value={movieTitle} placeholder="Movie Title" onChange={(e)=>setMovieTitle(e.target.value)} />
      <input type="text" value={movieDirector} placeholder="Movie Director" onChange={(e)=>setMovieDirector(e.target.value)} />
      <input type="text" value={movieYear} placeholder="Movie Year" onChange={(e)=>setMovieYear(e.target.value)} />
      <input type="text" value={movieImage} placeholder="Movie Poster (Link)" onChange={(e)=>setMovieImage(e.target.value)} />
      
      {/* <input type="submit" value="Add Movie" /> */}
      <Button type="submit" variant="primary">Add Movie</Button>
    </form>
      <aside>
        <h3>Make it Yours!</h3>
      </aside>
    </div>
    )
}

export default Form;
