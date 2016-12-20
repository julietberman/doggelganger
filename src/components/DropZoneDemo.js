import React, { Component } from 'react'
var Dropzone = require('react-dropzone');

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
            <div id="test">
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div id="droptext">Drag and drop your image file here, or click to select the file to upload from your computer</div>
                </Dropzone>
                {this.state.files ?
                  this.state.files.map((file, i) => <img key={i} role="presentation" src={file.preview} id="preview"/>) : null}
            </div>

        );
    }
};


export default DropzoneDemo
