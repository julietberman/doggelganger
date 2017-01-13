import React, { Component } from 'react'
import {Link} from 'react-router'

class ResultsDisplay extends Component{

  render(){
    return(
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
  )
}
}


export default ResultsDisplay
