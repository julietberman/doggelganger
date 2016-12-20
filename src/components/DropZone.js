import React, { Component } from 'react'
var Dropzone = require('react-dropzone');

var DropzoneDemo = React.createClass({
    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div id="test">Drop your image file here, or click to select file to upload.</div>
            </Dropzone>
          </div>
      );
    }
});


export default DropzoneDemo
