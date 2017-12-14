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

  componentDidMount() {
    this.listOfBreeds();
  }

  handleInput = event => {

    console.log(event.target)
    const {name, value} = event.target
    this.setState({
       [name]: value
    });
    // takes in input value and checks it against searchTerms and narrows down searchTerms based on that input
    // stores in activeSearchTerm

  }

  handleSubmit = event => {
    event.preventDefault();
    this.findBreed(this.state.activeSearchTerm);
  }

  findBreed = arg => {
    API.findBreed(arg)
        .then(res => {
          console.log(res.data.message);
          this.setState({dogBreedImages:res.data.message})
        })
        .catch(err => console.log(err));
  }
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



// render()
  // return dom elements
  // needs form input for searching
  // maps over dogBreedImages for printing out images to DOM


  export default Search
