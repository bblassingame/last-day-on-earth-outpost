import React from 'react'
import { Route, Switch } from 'react-router-dom'

import gaTracker from '../ga-tracker'

import ComingSoon from './coming-soon/coming-soon'
import LaunchPage from './launch-page/launch-page'
import Forum from './forum/forum-application'
import Strategy from './strategy/strategy-application'
import MultiPlayer from './multi-player/multi-player-application'
import Database from './database/database-application'
import About from './administrative/about'
import NotFound from './utility/not-found'

const AppContent = () => {
  const getPage = () => {
    {/*global process*/}
    return process.env.NODE_ENV !== 'production' ? LaunchPage : ComingSoon
  }

  return (
    <div className='app-content'>
      <Switch>
        <Route exact path='/' component={gaTracker(getPage())} />
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

export default AppContent