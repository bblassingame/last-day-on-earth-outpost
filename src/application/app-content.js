// react and redux items
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// utility functions and objects
import gaTracker from './utility/ga-tracker'

// child components
import LoadingPage from './utility/loading-page'
import ComingSoon from './utility/coming-soon'
import LaunchPage from './launch-page/launch-page'
import Forum from './forum/forum-application'
import Strategy from './strategy/strategy-application'
import MultiPlayer from './multi-player/multi-player-application'
import Database from './database/database-app-container'
import About from './administrative/about'
import NotFound from './utility/not-found'
import Preview from './utility/preview'

class AppContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.onComponentWillMount()
  }

  componentDidMount() {
    this.props.onComponentDidMount()
  }

  componentDidUpdate() {
    this.props.onComponentUpdate()
  }

  getPage() {
    if(this.props.appInitialized == false)
      return LoadingPage

    const previewEnabled = this.props.features['preview'].enabled
    return previewEnabled == 1 ? LaunchPage : ComingSoon
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={gaTracker(this.getPage())} />
          <Route path='/forum' component={gaTracker(Forum)} />
          <Route path='/strategy' component={gaTracker(Strategy)} />
          <Route path='/multiplayer' component={gaTracker(MultiPlayer)} />
          <Route path='/database' render={gaTracker(Database)} />
          <Route path='/about' component={gaTracker(About)} />
          <Route path='/preview' component={gaTracker(Preview)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default AppContent