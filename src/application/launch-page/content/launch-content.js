import React from 'react'

import { formatLaunchPageContent } from '../../utility/format-content'

const LaunchContent = () => {
  return (
    <div>
      <div className='content-header-1-container'>
        <h1 className='content-header-1'>Welcome!</h1>
      </div>
      {formatLaunchPageContent(LaunchPageData[0].contentItems)}
    </div>
  )
}

export default LaunchContent

const LaunchPageData = [
  {
    id: 0,
    title: 'Welcome!',
    contentItems: 
    [
      {
        type: 'paragraph',
        text: 'Welcome to <L>The Outpost</L>.  This is our first post of what we hope to be many.  This is our site dedicated to playing <OL>Last Day On Earth: Survival\u2122</OL>, and playing it at the highest level possible.  We\'re excited about the features we plan to bring you.  Here\'s a quick run down of what we\'re planning:',
        links: 
        [
          {
            event: '',
            to: '/',
          },
          {
            event: 'toLDOEFacebook',
            to: 'https://www.facebook.com/lastdayonearthgame/',
          }
        ]
      },
      {
        type: 'subheading',
        text: 'Strategy',
        link: true,
        linkTo: 'strategy',
      },
      {
        type: 'paragraph',
        text: 'We plan to create and maintain comprehensive strategy information for new and experienced players.  Whether you\'re new to LDOE or waiting on the next update, we want to deliver information ideas that will help you be the best player you can be.'
      },
      {
        type: 'subheading',
        text: 'Database',
        link: true,
        linkTo: 'database',
      },
      {
        type: 'paragraph',
        text: 'Our research team has been hard at work compiling detailed information on each item in the game, zones, drop rates, and other details that will help you know what you need, where to get it, and who/what to get it from.'
      },
      {
        type: 'subheading',
        text: 'Forum',
        link: true,
        linkTo: 'forum',
      },
      {
        type: 'paragraph',
        text: 'We all need a place to discuss what\'s happening with the game, to ask questions, speculate on when multiplayer will be released, and vent about that dude that just killed us for the 5th time in the red zone.'
      },
      {
        type: 'subheading',
        text: 'Multiplayer',
        link: true,
        linkTo: 'multiplayer'
      },
      {
        type: 'paragraph',
        text: 'We plan to bring this in later as multiplayer is released and we have a better idea of what the impact on the game is.  Our first though is to maintain a list of the clans that are forming in LDOE, and we\'ll look for other ways to improve the competitive LDOE community in this section'
      },
    ]
  },
]