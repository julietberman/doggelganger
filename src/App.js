import React, { Component } from 'react';
import {Link} from 'react-router'


class App extends Component {
  constructor(){
    super()
    this.state = {
      image_upload: [],
      test: "hello state of parent"
    }
  }

  userImage(file){
    this.setState({image_upload: file}, () => {console.log(this.state.image_upload)});

  }

  fetchData(){
      // insert code here to grab pet API info via a model
    }


  render() {
    var children = React.cloneElement(this.props.children, {
      upload: this.userImage.bind(this)
    })

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
