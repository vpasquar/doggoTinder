import React from "react";
import "./DiscoverCard.css";
// import "./Button.css"
import Button from "./Button.js"

const DiscoverCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <Button
        value="True"
        text="Like"
        className="button-left"
        handleVote={props.handleVote}
      />
      <Button
        value="False"
        text="Dislike"
        className="button-right"
        handleVote={props.handleVote}
      />
    </div>
    <h3> You have connected with {props.count} Dogs </h3>
  </div>
);

export default DiscoverCard;
