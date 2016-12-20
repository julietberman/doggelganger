import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import UploadContainer from '../containers/UploadContainer'

module.exports=(
  <Route path='/' component={App}>
    <Route path='/upload' component={UploadContainer} />
  </Route>
)
