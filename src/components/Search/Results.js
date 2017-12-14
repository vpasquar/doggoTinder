import React from "react";


const Result = props => (
   <ul className="list-group search-results">
     {props.resImgs.map((dog,i) => (
       <li className="list-group-item">
         <img key ={i} className="img-responsive" alt="Dog" src={dog}/>
       </li>
     ))}
   </ul> 
);

export default Result;
