import axios from 'axios'
import cors from 'cors'

class PetFinder {

  static all(){
    let request = axios.get("https://crossorigin.me/http://api.petfinder.com/pet.getRandom?key=490c0c7715f00147d435e149e48ecc44&animal=dog&output=basic&format=json")
    return request
  }

}

export default PetFinder
