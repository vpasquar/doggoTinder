// import React
import React, {Component} from 'react';
import API   from '../utils/API';
import "./Search.css";
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
       <div>
          <form>
              <label htmlFor="search"> Search: </label>
              <input
                onChange={this.handleInput}
                // value={this.state.activeSearchTerm}
                name="activeSearchTerm"
                type="text"
                className=""
                // options={this.state.searchTerms}
                placeholder="Search for dog Images"
                id="search"
                list="breeds"
              />
              <datalist id="breeds">
                {this.state.searchTerms.map(dog => (
                  <option
                    value={dog}
                  />
                ))}
              </datalist>
              <button onClick={this.handleSubmit}> search
              </button>
          </form>
          <div className="dog-content">
             {this.state.dogBreedImages.map(dog => (
                <img className="dog-imgs" alt="" src={dog}/>
             ))}
          </div>

       </div>
     )
  }
}



// render()
  // return dom elements
  // needs form input for searching
  // maps over dogBreedImages for printing out images to DOM


  export default Search
