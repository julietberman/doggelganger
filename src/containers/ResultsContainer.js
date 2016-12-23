import React, { Component } from 'react'
import PetFinder from '../models/PetFinder'

class ResultsContainer extends Component{
  constructor(){
    super()
    this.state = {
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
    console.log(res.data.petfinder.pet)
    let name = res.data.petfinder.pet.name.$t
    let photo = res.data.petfinder.pet.media.photos.photo[2].$t
    let age = res.data.petfinder.pet.age.$t
    let id = res.data.petfinder.pet.id.$t
    let sex = res.data.petfinder.pet.sex.$t
    let gender = ""

    if (sex === "M"){
       gender = "Male"
    }
    else{
       gender = "Female"
    }

     if((res.data.petfinder.pet.breeds.breed[0]) === undefined){
        let breed = res.data.petfinder.pet.breeds.breed.$t
          this.setState({
              photo,
              name,
              breed,
              age,
              id,
              gender
            })
     }
     else{
       let breed = res.data.petfinder.pet.breeds.breed[0].$t
       this.setState({
           photo,
           name,
           breed,
           age,
           id,
           gender
         })
     }
  })
  }

  render(){
    return(
      <div>
      <main>
        <h1 className="resultHeader">You've been matched!</h1>
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
