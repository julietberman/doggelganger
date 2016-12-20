import React, { Component } from 'react';
import {Link} from 'react-router'


class Header extends Component{
  render(){
    return(
      <div>
        <button><Link to={'/upload'}>Find Your Match</Link></button>
      </div>
    )
  }
}

export default Header
