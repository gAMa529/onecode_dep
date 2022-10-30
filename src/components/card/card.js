import React from "react";
import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back"></div>
      <div className="card-front"></div>
    </div>
  );
}

export default Card;