import React from "react";
import "./card.styles.css";

import { withRouter } from "react-router-dom";

const Card = ({id, title, popularity, poster, history}) => (
  <div className="card-container"  onClick={() => {
   history.push('/movie');
  }}  >
    <img
      alt="monster"
      src={`https://image.tmdb.org/t/p/w200/${poster}`}
    />
    <h1>{title}</h1>
    <p>Popularity : {popularity}</p>
  </div>
);

export default withRouter(Card);
