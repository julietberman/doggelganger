import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      image_upload: []
    }
  }

  userImage(file){
    this.setState({image_upload: file});
  }

  render() {
    var children = React.cloneElement(this.props.children, {
      upload: this.userImage.bind(this),
      image: this.state.image_upload
    })

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
