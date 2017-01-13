import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import HomepageContainer from '../containers/HomepageContainer'
import ResultsContainer from '../containers/ResultsContainer'
import DogLoadingPage from '../components/DogLoadingPage'

module.exports=(
  <Route path='/' component={App}>
    <Route path='/homepage'  component={HomepageContainer} />
    <Route path='/results' component={ResultsContainer} />
    <Route path='/loading' component={DogLoadingPage} />
  </Route>
)
