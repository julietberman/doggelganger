import React, { Component } from 'react'
import PetFinder from '../models/PetFinder'
import {Link} from 'react-router'
// import DogLoadingPage from '../components/DogLoadingPage'

class ResultsContainer extends Component{
  constructor(){
    super()
    this.state = {
      percentMatch: [],
      photo: [],
      name: [],
      breed: [],
      age: [],
      id: [],
      gender: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    PetFinder.all().then((res) => {
    let percentMatch = (Math.random() * (95 - 30) + 30).toFixed(2)
    let name = res.data.petfinder.pet.name.$t
    let photo = res.data.petfinder.pet.media.photos.photo[2].$t
    let age = res.data.petfinder.pet.age.$t
    let id = res.data.petfinder.pet.id.$t
    let sex = res.data.petfinder.pet.sex.$t
    let breed = ""
    let gender = ""

    if (sex === "M"){
       gender = "Male"
    }
    else{
       gender = "Female"
    }

     if((res.data.petfinder.pet.breeds.breed[0]) === undefined){
         breed = res.data.petfinder.pet.breeds.breed.$t

     }
     else{
        breed = res.data.petfinder.pet.breeds.breed[0].$t

     }

     this.setState({
        percentMatch,
        photo,
        name,
        breed,
        age,
        id,
        gender
       })
  })
  }

  render(){
    return(
      <div>
       {/* <DogLoadingPage /> */}
      <main>
        <div>
        <img src="pawprint.png" role="presentation" className="logo" />
          <h3><Link to={'/homepage'}>DOGGELGÄNGER 2.0</Link></h3><img src="pawprint.png" role="presentation" className="logo" />
        </div>

          <h1 className="resultHeader">You and {this.state.name} have a {this.state.percentMatch}% match!</h1>
          <section>
          <div className="resultImg">
          {this.props.image.map((image, i) => <img key={i} role="presentation" src={image.preview}/>)}
          </div>

          <div className="resultImg"><img role="presentation" src={this.state.photo}/></div>

          <div className="resultData">
          <h2><span>Name:</span> {this.state.name}</h2>
          <h2><span>Breed:</span> {this.state.breed}</h2>
          <h2><span>Gender:</span> {this.state.gender}</h2>
          <h2><span>Age:</span> {this.state.age}</h2>

          <a href={"https://www.petfinder.com/petdetail/" + this.state.id} target="_blank"><button>Adopt Me! 🐾</button></a>

          <button onClick={this.fetchData.bind(this)}>Find Another Match</button>
          </div>
          </section>
        </main>
      </div>
    )
  }
}

export default ResultsContainer
