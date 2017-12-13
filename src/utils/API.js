// import axios
import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed";


// set up base url for querying (refer to activities from today)
export default {
  random: function() {
    return axios.get(BASEURL + "s/image/random")
  },
  findBreed: function(query) {
    return axios.get(BASEURL + "/" + query + "/images")
  },
  listofBreeds: function() {
    return axios.get(BASEURL + "s/list")
  }
}
// export default object
  // random (used for discovery): https://dog.ceo/api/breeds/image/random

  // findBreed (used for search): https://dog.ceo/api/breed/hound/images

  // listOfBreeds (used for search): https://dog.ceo/api/breeds/list
