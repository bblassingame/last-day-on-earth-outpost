import React from 'react'

import LaunchHeader from './header/launch-header'
import LaunchNav from './nav/launch-nav'
import LaunchContent from './content/launch-content'
import LaunchFooter from './footer/launch-footer'

import './reset.css'
import './launch-page-style.css'

const LaunchPage = () => {
  return (
    <div>
      <LaunchHeader />
      <LaunchNav />
      <LaunchContent />
      <LaunchFooter />
    </div>
  )
}

export default LaunchPage