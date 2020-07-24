import React from "react";
import "./card.styles.css";

import { withRouter } from "react-router-dom";

const Card = ({ id, title, popularity, poster, history }) => (
  <div
    className="card-container"
    onClick={() => {
      history.push({
        pathname: "/movie",
        search: "?id=" + id,
      });
    }}
  >
    <img alt="monster" src={`https://image.tmdb.org/t/p/w200/${poster}`} />

    <div className="col1">
      <h3>{title}</h3>
      <h5>Rating Score : {popularity}</h5>
    </div>
  </div>
);

export default withRouter(Card);
