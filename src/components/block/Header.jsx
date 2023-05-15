import React from "react";
import "../../scss/header.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navi from "./Navi";
import { format } from "date-fns";

function Header() {
  const movieSelection =
    "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/her-2013/Her-2013-2.jpg";
    const currentDate = format(new Date(), "do 'of' MMMM EEEE");
  // To be get into contexted later
  const movie = {"director":"Spike Jonze","year":2014}
    return (
    <div className="header">
      
      <div className="header-suggestions">
        <div className="backward-button">
        <i><FontAwesomeIcon icon="fa-solid fa-chevrons-left" /></i>
        </div>
        {/* <img src={movieSelection} alt="movie-her" className="header-image" /> */}
        <div className="forward-button">
        <i><FontAwesomeIcon icon="fa-solid fa-chevrons-right" /></i>
        </div>
      </div>
      <div className="movie-suggestion">
        <h1>Suggestion of the day!</ h1>
        <h1>{"For " +currentDate}</h1>
        <h2 className="movie-title">Her</h2>
        <h4>{"Director: " + movie.director}</h4>
        
        <h4>{movie.year}</h4>
        <h4><a href="#cards">Movie Details</a></h4>
      </div>
    </div>
  );
}

export default Header;
