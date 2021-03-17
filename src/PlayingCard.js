import React from "react";
import backOfCard from "./back.png";
import {useToggler} from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, handleToggle] = useToggler();
  
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={handleToggle}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
