import React from "react";


const Form = props => (
  <form>
    <label htmlFor="search"> Search: </label>
    <input
       onChange={props.handleInput}
       name="activeSearchTerm"
       type="text"
       className="form-control"
       placeholder="Type in a dog breed to continue"
       id="search"
       list="breeds"
     />
     <datalist id="breeds">
       {props.searchTerms.map((dog,i) => (
         <option
           value={dog}
           key={i}
         />
       ))}
     </datalist>
     <button
        type="submit"
        className="btn btn-success"
        onClick={props.handleSubmit}
     > Search...
     </button>
  </form>
);

export default Form
