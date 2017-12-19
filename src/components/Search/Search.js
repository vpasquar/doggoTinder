// import React
import React, {Component} from 'react';
import API   from '../../utils/API';
import "./Search.css";
import Result from "./Results.js"
import Form from './Form.js'
// import API

class Search extends Component {
  state = {
    searchTerms:[],
    dogBreedImages:[],
    activeSearchTerm:""
  }

  componentDidMount() { //when page loads
    this.listOfBreeds();
  }

  handleInput = event => {  //when search term is being entered

    console.log(event.target)
    const {name, value} = event.target
    this.setState({
       [name]: value
    });
    // takes in input value and checks it against searchTerms and narrows down searchTerms based on that input
    // stores in activeSearchTerm

  }

  handleSubmit = event => { //when form is submitted
    event.preventDefault();
    this.findBreed(this.state.activeSearchTerm);
  }

  findBreed = arg => {
    API.findBreed(arg)  //contacts API for pictures of dog the user entered
        .then(res => {
          console.log(res.data.message);
          this.setState({
            dogBreedImages:res.data.message,
            activeSearchTerm:""
          })
        })
        .catch(err => console.log(err));
  }

  // when page loads, a list of dog breeds is aquired and placed in state
  listOfBreeds() {
    API.listofBreeds()
       .then(res => {
          this.setState({searchTerms: res.data.message})
          console.log(this.state.searchTerms);
       })
       .catch(err => console.log(err));
  }

  render() {
     return(
       <div className="container">
          <h1 className="text-center"> Search by Breed! </h1>
          <Form
            handleInput={this.handleInput}
            searchTerms={this.state.searchTerms}
            handleSubmit={this.handleSubmit}
          />
          <Result
            resImgs={this.state.dogBreedImages}
          />
       </div>
     )
  }
}

export default Search;
