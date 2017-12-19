import React from "react";
import "./DiscoverCard.css";
// import "./Button.css"
import Button from "./Button.js";
import Spinner from "../Other/Spinner";

const alignCenter = {
  textAlign:"center"
};
// const DiscoverCard = props => (
//   <div className="card">
//     <div className="img-container">
//        {props.loaded ?
//          <img alt={props.name} src={props.image} />
//        : <Spinner />
//      }
//     </div>
//     <div className="content">
//       <Button
//         value="True"
//         text="Like"
//         className="button-left"
//         handleVote={props.handleVote}
//       />
//       <Button
//         value="False"
//         text="Dislike"
//         className="button-right"
//         handleVote={props.handleVote}
//       />
//     </div>
//     <h3 style={alignCenter}> You have connected with {props.count} Dogs </h3>
//   </div>
// );

const DiscoverCard = props => (
  <div className="card">
      {props.loaded ? 
          <div className="img-container">
              <img alt={props.name} src={props.image} />
          </div>
       
      :   <div className="img-container">
              <Spinner />
          </div>   
      }
   
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
      <h3 style={alignCenter}> You have connected with {props.count} Dogs </h3>
  </div>
);


export default DiscoverCard;
