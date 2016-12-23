import axios from 'axios'
import cors from 'cors'

var config = {
     headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Headers':'*',
           'Access-Control-Allow-Origin' : '*',
           'X-Requested-With': 'XMLHttpRequest'
     }
}

class PetFinder {



  static all(){
    let request = axios.get("https://api.petfinder.com/pet.getRandom?key=490c0c7715f00147d435e149e48ecc44&animal=dog&output=basic&format=json", cors, config)
    return request
  }

}

export default PetFinder
