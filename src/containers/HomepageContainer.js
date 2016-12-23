import React, { Component } from 'react'
import UploadContainer from '../containers/UploadContainer'



class HomepageContainer extends Component{
  constructor(){
    super()
    this.state = {
      flag: false
    }
  }


  showUploadFeature(e){
    this.setState({
      flag: true
    })
  }

  render(){
    return(
      <div>
        <div id="homepage">
          <h1>Doggelgänger 2.0</h1>
          <p>There are over 3.9 million dogs in the U.S. every year waiting for their forever home. Adopt a dog and not only save a life, but find the perfect companion.</p>
          <p>Upload your photo to be matched with a dog in need. Doggelgänger human to canine pairing software is designed to connect adoptable dogs to their human doubles.</p>
          <p>What dog will be your doppelgänger?</p>

          <button onClick={e => this.showUploadFeature(e)}>Find Your Match</button>

          {this.state.flag === true ? <UploadContainer upload={this.props.upload}/> : null}

        </div>

      </div>
    )
  }
}

export default HomepageContainer
