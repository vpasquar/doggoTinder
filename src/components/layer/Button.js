import React from "react";
// import "./DiscoverCard.css";
import "./Button.css";

const Button = props => (
    <div className={props.className}>
      <button value={props.value} onClick={() => props.handleVote(props.value)}> {props.text} </button>
    </div>
);

export default Button;
