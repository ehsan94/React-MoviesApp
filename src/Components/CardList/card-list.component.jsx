import React from "react";
import "./card-list.styles.css";
import "../Card/card.component";
import Card from "../Card/card.component";


const CardList = ({id, movies}) => (
  <div className="card-list">
    {movies.map((movie) => (
      <Card key={movie.id} title={movie.original_title} popularity={movie.popularity} poster={movie.poster_path} 
      
      />
    ))}
  </div>
);

export default CardList;
