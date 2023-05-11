import React from "react";
import "../../scss/header.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  const movieSelection =
    "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/her-2013/Her-2013-2.jpg";

  return (
    <div className="header">
      <div className="header-suggestions">
        <div className="backward-button">
        <i><FontAwesomeIcon icon="fa-solid fa-chevrons-left" /></i>
        </div>
        <img src={movieSelection} alt="movie-her" className="header-image" />
        <div className="forward-button">
        <i><FontAwesomeIcon icon="fa-solid fa-chevrons-right" /></i>
        </div>
      </div>
      <div className="movie-suggestion">
        <h1>Suggestion of the Day!</h1>
        <h2>Her</h2>
        <h4>Director</h4>
        <h4>Year</h4>
      </div>
    </div>
  );
}

export default Header;
