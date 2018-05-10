import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const LaunchContent = () => {
  let contentElements = []

  // create the format manager and iterate over each element in reverse order to create the page elements
  // TODO:  Put some kind of limit on the number of elements created
  for(let i = 0 ; i < LaunchPageData.length ; i++) {
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
        text: 'Welcome to The Outpost. This is our first version of our site dedicated to playing Last Day On Earth: Survival™, and playing it at the highest level possible. We\'re excited about the features we plan to bring you. Here\'s a quick rundown of what we\'re planning:',
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
        text: 'We plan to create and maintain comprehensive strategy information for new and experienced players. Whether you\'re new to LDOE or waiting on the next update, we want to deliver information and ideas that will help you be the best player you can be.'
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
        text: 'Our research team has been hard at work compiling detailed information on each item in the game, zones, drop rates, and other details that will help you know what you need, where to get it, and who/what to get it from.',
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
        text: 'We all need a place to discuss what\'s happening with the game, to ask questions, speculate on when multiplayer will be released, and vent about that dude that just killed us for the 5th time in the red zone. There are a lot of great forums for Last Day on Earth. We hope to make this one stand out by integrating it with every other aspect of the website.',
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
        text: 'When multiplayer is fully released, we want to cover information on every clan on every server. We will have info on everything from which ones have control of the pump jacks to which ones are looking for new teammates. We will have info on all of the leaderboards of the game and hope to create some of our own leaderboards to keep the competition hot in this game.'
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
        text: 'DEV BLOG',
      },
      {
        type: 'paragraph',
        text: 'Kefir (creators of Last Day on Earth) have an incredible presence in almost every form of social media. If you want news the fastest, there is no better source than the creators themselves.',
      },
      {
        type: 'paragraph',
        text: '<L to="https://www.facebook.com/lastdayonearthgame/">Facebook Page</L>',
      },
      {
        type: 'paragraph',
        text: '<L to="https://discord.gg/8KSTu5Q">Official Discord</L>',
      },
      {
        type: 'paragraph',
        text: '<L to="https://twitter.com/lastdaysurvival">Twitter</L>',
      },
      {
        type: 'paragraph',
        text: '<L to="https://www.reddit.com/r/LastDayonEarthGame">Reddit</L>',
      },
      {
        type: 'paragraph',
        text: '<L to="https://www.instagram.com/lastdayonearthgame/">Instagram</L>',
      },
      {
        type: 'paragraph',
        text: '<L to="https://t.me/lastdayonearthsurvival">Telegram</L>',
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
        text: 'LDOE Communities'
      },
      {
        type: 'paragraph',
        text: 'Hundreds of communities have formed around Last Day on Earth on all of the different platforms. Some of these groups are better than others. Here are my recommendations for the best group on each platform.',
      },
      {
        type: 'paragraph',
        text: '<L to="https://www.facebook.com/groups/LastDayOnEarthGC/">Facebook Group (global community)</L>',
      },      
      {
        type: 'paragraph',
        text: '<L to="https://www.reddit.com/r/LDESurvival/">Reddit Forum (LDESurvival)</L>',
      },      
      {
        type: 'paragraph',
        text: '<L to="https://discord.gg/CXAa5gZ">Discord (JCF’s Alliance of Clans)</L>',
      },      
    ]
  },
  {
    id: 3,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'LDOE Videos'
      },
      {
        type: 'paragraph',
        text: 'There are a lot of great Youtubers for Last Day on Earth, but in my opinion the most informative Youtuber is JCF. Because his videos are consistently high quality, I have asked JCF to co-own and co-create this website with me using his influence to promote the website and his videos throughout the website to illustrate the concepts and information. In addition to this, I have customized each video so that they start exactly where it is relevant (ie. some videos start 2-3 minutes into the video) thus making his videos even more to the point than they are normally. I still recommend subscribing to JCF on YouTube to learn the newest tips as they are released.',
      },
    ]
  },
  {
    id: 4,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Current Update & Hidden Changes!'
      },
      {
        type: 'paragraph',
        text: 'Update 1.8.3 was a “Multiplayer Update” adding the ability to cooperatively shoot things in Sector 7. It wasn’t the biggest update, but Last Day on Earth has been coming out with a lot of updates lately which is good.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/fKnoTDP1a80?start=6',
      },
    ]
  },
  {
    id: 5,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Current Update & Hidden Changes!'
      },
      {
        type: 'paragraph',
        text: 'Update 1.8.3 was a “Multiplayer Update” adding the ability to cooperatively shoot things in Sector 7. It wasn’t the biggest update, but Last Day on Earth has been coming out with a lot of updates lately which is good.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/fKnoTDP1a80?start=6',
      },
    ]
  },
  {
    id: 6,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'One Company...',
      },
      {
        type: 'paragraph',
        text: '...To rule them all',
      },
      {
        type: 'paragraph',
        text: 'JCF blows the lid off the secret - Last Day On Earth: Survival, Jurassic Survival, and Grim Soul: Dark Fantasy Survival are all made by the same parent company!  JCF put out a two part explanation of how he discovered this, all of his evidence, and why this is a good thing in the end.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/hHlW3q4L7mg',
      },
      {
        type: 'paragraph',
        text: 'Here is the sequel:',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/1iJB1EH04dg',
      },
    ]
  },
  {
    id: 7,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'JCF Letters',
      },
      {
        type: 'paragraph',
        text: 'On February 15th, JCF addressed Kefir directly to discuss his thoughts on the state of Last Day On Earth: Survival. This then started a chain of letter writing that is still going on. Here is the original letter:',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/lUTP_zLA2Eg?start=6',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Kefir then responded and JCF goes through that response point-by-point. Kefir lays out what looks like a great plan for the future and we can only wait to see when their changes take place and whether they follow through on their declarations.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/9J3lyF_mOJE?start=29',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'After Kefir made more pay to play changes in update 1.7.12, JCF sent another letter questioning whether or not they understood his 3rd point in his first letter.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/S7dQBl24JjU?start=6',
      },
    ]
  },
  {
    id: 8,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Pay To Play!',
      },
      {
        type: 'paragraph',
        text: 'Is Kefir! doubling down on their pay to play strategy?  Does this hurt their chances of growing the game and contuing with the success and growth they\'ve experienced?  JCF takes a look at the latest changes along with Kefir!\'s apparent strategic decision to continue with their pay to play business plan.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/gZf7pIG2SNs?start=32',
      },
    ]
  },
  {
    id: 9,
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Website Update',
      },
      {
        type: 'paragraph',
        text: 'Sort of like the game, we\'re still getting this website up and running. Today we\'re releasing a couple of small updates to the website.',
      },
      {
        type: 'paragraph',
        text: 'Here are some of the things we are currently working on to improve this website:',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Using Kefir’s Massive Giveaway to get content for the resource section under strategy',
          },
          {
            text: 'Adding the Forum and integrating it with the rest of the website',
          },
          {
            text: 'Adding Locations and Skills to the Database',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Email us at database@ldoeoutpost.com if you find any errors within the database. We want to catch those and get those updated ASAP!',
      },
    ]
  },
]