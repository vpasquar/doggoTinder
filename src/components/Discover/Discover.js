import React, { Component} from 'react';
import DiscoverCard from "./DiscoverCard.js"
import API from "../../utils/API";
// import API

class Discover extends Component {
  state = {
    friendCount: 0,
    activeDogImg: "",
    imageLoaded: false
  };

  componentDidMount() {
    this.newDogImg();
  }

  handleVote = arg => {
    if (arg === "True") {
       const val = Math.random()
       console.log(val);
       if (val > 0.8) {
          let countHold = this.state.friendCount
          countHold++
          alert("You found a match!")
          this.setState({friendCount:countHold})
       }
    }
    //load a new dog
    this.newDogImg();
  }

  newDogImg() {
    API.random()
       .then(res => {
           console.log(res);
           this.setState({ activeDogImg: res.data.message,
                           imageLoaded:true
           })
        })
        .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="discover-content">
         <DiscoverCard
           image={this.state.activeDogImg}
           name="Dog"
           handleVote={this.handleVote}
           count={this.state.friendCount}
           loaded={this.state.imageLoaded}
         />

      </div>
    )
  }
}




export default Discover;

// export default Discover

// create class (stateful) component
  // initial state for friendCount, activeDogImage

  // componentDidMount
    // run newDogImage
    // set state for activeDogImage

  // handleVote
    // takes in argument of true or false
    // if true
      // run Math.Random between 1-5
      // if it's 5, then it's a match
      // run newDogImage and get result
      // update state friendCount by one
      // update state activeDogImage by running random search API

    // if false
      // run newDogImage and get result
      // udpate state activeDogImage to that result

  // newDogImage
    // runs API random dog image search


  // render()
    // return dom elements
