
/*
Solution provided by @juliaqiuxy in react-router issue 4278
https://github.com/ReactTraining/react-router/issues/4278
*/
import React from 'react'
import GoogleAnalytics from 'react-ga'
import ReactGA from 'react-ga'

GoogleAnalytics.initialize('UA-106318026-2')

/*global process*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Dev Environment Detected:  Disabling Google Analytics')
  ReactGA.set('sendHitTask', null)
}

// we're going to wrap the component passed in with this higher order class/object
// that will have the google page view tracking set up.  We can add this to any page
// that we want to implement google analytics on for the page views.
const gaTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page })
    GoogleAnalytics.pageview(page)
  }

  // grabbing the path name that we'll pass to the pageview tracking
  const HOC = (props) => {
    const page = props.location.pathname
    trackPage(page)

    return (
      <WrappedComponent {...props} />
    )
  }

  return HOC
}

export default gaTracker