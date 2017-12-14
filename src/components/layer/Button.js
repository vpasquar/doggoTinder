import React from "react";
// import "./DiscoverCard.css";
import "./Button.css";

const divStyle = {
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
};

const Button = props => (
    <div className={props.className}>
      <button
        style={divStyle}
         value={props.value}
         onClick={() => props.handleVote(props.value)}
         type="button"
         className="btn btn-default"
      > {props.text}
      </button>
    </div>
);

export default Button;
