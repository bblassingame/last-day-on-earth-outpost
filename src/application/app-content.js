import React from 'react'
import { Route, Switch } from 'react-router-dom'

import gaTracker from './utility/ga-tracker'

import LoadingPage from './utility/loading-page'
import ComingSoon from './utility/coming-soon'
import LaunchPage from './launch-page/launch-page'
import Forum from './forum/forum-application'
import Strategy from './strategy/strategy-application'
import MultiPlayer from './multi-player/multi-player-application'
import Database from './database/database-application'
import About from './administrative/about'
import NotFound from './utility/not-found'

class AppContent extends React.Component {
  constructor() {
    super()
    this.state = { 
      previewEnabled: false,
      loading: true
    }
  }

  componentWillMount() {
    // using => function notation allows use of this.handleFetchResult().  Otherwise, 'this' doesn't
    // get bound and is null further down in the handleFetchResult and handleJsonResult functions.
    // I could also use fetch().then(result => result.json).then(items => this.setState()), but it
    // seems like we're just trying to put too much crap onto one line.
    fetch('http://localhost/api/v1/feature').then(result => this.handleFetchResult(result))
  }

  handleFetchResult(result) {
    result.json().then((items) => this.handleJsonResult(items))
  }

  handleJsonResult(items) {
    // console.log(items)
    this.setState({
      previewEnabled: items.enabled,
      loading: false
    })
    // console.log(this.state)
  }

  getPage() {
    // {/*global process*/}
    // return process.env.NODE_ENV !== 'production' ? LaunchPage : ComingSoon
    if(this.state.loading == true)
      return LoadingPage
    // console.log('getPage()')
    // console.log(this.state.previewEnabled)
    // if(this.state.previewEnabled == 1)
    //   console.log('preview enabled, should show the LaunchPage')
    // else if(this.state.previewEnabled == 0)
    //   console.log('preview disabled, we should show ComingSoon')

    return this.state.previewEnabled == 1 ? LaunchPage : ComingSoon
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={gaTracker(this.getPage())} />
          <Route path='/forum' component={gaTracker(Forum)} />
          <Route path='/strategy' component={gaTracker(Strategy)} />
          <Route path='/multiplayer' component={gaTracker(MultiPlayer)} />
          <Route path='/database' component={gaTracker(Database)} />
          <Route path='/about' component={gaTracker(About)} />
          {<Route component={NotFound} />}
        </Switch>
      </div>
    )
  }
}

export default AppContent