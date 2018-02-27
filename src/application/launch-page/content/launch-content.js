import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const LaunchContent = () => {
  let contentElements = []

  // create the format manager and iterate over each element in reverse order to create the page elements
  // TODO:  Put some kind of limit on the number of elements created
  for(let i = LaunchPageData.length - 1 ; i >= 0  ; i--) {
    // TODO:  Update the Format Manager so that whenever you format an item it doesn't add to an already existing HTML document
    const formatMgr = new FormatMgr()
    const pageModel = formatMgr.formatContent(LaunchPageData[i].contentItems)
    contentElements.push(<HtmlDocument key={i} pageModel={pageModel}/>)
  }

  return contentElements
}

export default LaunchContent

const LaunchPageData = [
  {
    id: 0,
    contentItems: 
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Welcome!',
      },
      {
        type: 'paragraph',
        text: 'Welcome to <L to="/">The Outpost</L>.  This is our first post of what we hope to be many.  This is our site dedicated to playing <OL to="https://www.facebook.com/lastdayonearthgame/" eventLabel="toLDOEFacebook">Last Day On Earth: Survival\u2122</OL>, and playing it at the highest level possible.  We\'re excited about the features we plan to bring you.  Here\'s a quick run down of what we\'re planning:',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Strategy',
        link: true,
        linkTo: 'strategy',
      },
      {
        type: 'paragraph',
        text: 'We plan to create and maintain comprehensive strategy information for new and experienced players.  Whether you\'re new to LDOE or waiting on the next update, we want to deliver information ideas that will help you be the best player you can be.'
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Database',
        link: true,
        linkTo: 'database',
      },
      {
        type: 'paragraph',
        text: 'Our research team has been hard at work compiling detailed information on each item in the game, zones, drop rates, and other details that will help you know what you need, where to get it, and who/what to get it from.'
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Forum',
        link: true,
        linkTo: 'forum',
      },
      {
        type: 'paragraph',
        text: 'We all need a place to discuss what\'s happening with the game, to ask questions, speculate on when multiplayer will be released, and vent about that dude that just killed us for the 5th time in the red zone.'
      },
      {
        type: 'heading',
        headingType: 'subheading',
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
  {
    id: 1,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: '(2/26) Website Update'
      },
      {
        type: 'paragraph',
        text: 'Sort of like the game, we\'re still getting this website up and running.  Today we\'re releasing a couple of small updates to the website.',
      },
      {
        type: 'paragraph',
        text: 'First, we\'re adding crafting information for all items.  Crafting is a huge part of Last Day On Earth: Survival and we wanted that information to be available as quickly as we could.',
      },
      {
        type: 'paragraph',
        text: 'Among many things we still need to add, weapon information is critical to mastering the game and figuring out your best strategies and tactics.  Although we don\'t have weapon data in our database yet, we\'re working to update that as soon as possible.  But we don\'t want to wait to get weapon pages set up for this data, so we\'ve introduced weapon pages with placeholder data until we get ours added.',
      },
      {
        type: 'paragraph',
        text: 'We look forward to getting out our next updates as soon as possible, which should include weapon data and armor data.',
      },
      {
        type: 'paragraph',
        text: 'Email us at database@ldoeoutpost.com if you find any errors within the database.  We want to catch those and get those updated ASAP!',
      },
    ]
  },
  {
    id: 2,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: '(2/26) Update!',
      },
      {
        type: 'paragraph',
        text: 'We hope to continue to bring you the most up-to-date content and news about Last Day On Earth: Survival.  Jugando con Fuerza on Youtube is a partner in with us who consistently publishes top notch content regularly on Last Day On Earth: Survival.  As videos are posted to his channel that are newsworthy or helpful, we\'ll post those here.',
      },
      {
        type: 'paragraph',
        text: 'JCF\'s latest video covers some of the new updates that are out and what it means to be an Alpha tester with Last Day On Earth: Survival...',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/QG_2FM1pjaU',
      },
    ]
  },
]