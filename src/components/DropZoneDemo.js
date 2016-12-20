import React, { Component } from 'react'
var Dropzone = require('react-dropzone');
import {Link} from 'react-router'

class DropzoneDemo extends Component{
  constructor(){
    super()
    this.state = {
      files: []
    }
  }

  onDrop(acceptedFiles) {

    this.setState({
      files: acceptedFiles
    })

    
  }

    render() {

        return (
          <div id="dropzone">
            <div id="test">
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div id="droptext">Drag and drop your image file here, or click to select the file to upload from your computer</div>
                </Dropzone>
                {this.state.files ?
                  <div id="previewbox">{this.state.files.map((file, i) => <img key={i} role="presentation" src={file.preview}/>)}</div> : null}
              </div>
              <div>
                  {this.state.files.length>0 ? <button><Link to={'/results'}>Let's Go! 🐾 </Link></button> : null}
              </div>
          </div>

        );
    }
};


export default DropzoneDemo
