import React, { Component } from 'react'
import DropZoneDemo from '../components/DropZoneDemo'


class UploadContainer extends Component{

  render(){
    return(
      <div>
        <h4>Upload a photo below:</h4>
        <DropZoneDemo upload={this.props.upload}/>
      </div>
    )
  }
}

export default UploadContainer
