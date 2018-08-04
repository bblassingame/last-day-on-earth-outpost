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
    title: 'Current Update & Hidden Changes!',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'bloody',
        text: 'Update 1.9.3'
      },
      {
        type: 'paragraph',
        text: 'These are the items needed to create the Crossing at Crooked Creek Farm:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '40x <L to="/database/Iron_Bar">Iron Bar</L>',
          },
          {
            type: 'text',
            text: '100x <L to="/database/Pine_Plank">Pine Plank</L>',
          },
          {
            type: 'text',
            text: '60x <L to="/database/Stone_Brick">Stone Brick</L>',
          },
          {
            type: 'text',
            text: '60x <L to="/database/Rope">Rope</L>',
          },
          {
            type: 'text',
            text: '100x <L to="/database/Scrap_Metal">Scrap Metal</L>',
          },
          {
            type: 'text',
            text: '1x <L to="/database/Hammer">Hammer</L>',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'When you first arrive, the following items will be in the abandoned car next to the Crossing:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '1x <L to="/database/Energy_Drink">Energy Drink</L>',
          },
          {
            type: 'text',
            text: 'A <L to="/database/Hammer">Hammer</L>',
          },
          {
            type: 'text',
            text: '5x <L to="/database/Scrap_Metal">Scrap Metal</L>',
          },
          {
            type: 'text',
            text: 'An <L to="/database/M16">M16</L> at 60%',
          },
          {
            type: 'text',
            text: '1x <L to="/database/First_Aid_Kit">First Aid Kit</L>',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Enjoy the update and the new zone!',
      },
    ]
  },
  {
    id: 1,
    title: 'Welcome!',
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
    id: 2,
    title: 'DEV BLOG',
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
        text: '<OL to="https://www.facebook.com/lastdayonearthgame/" eventLabel="LDOE Facebook">Facebook Page</OL>',
      },
      {
        type: 'paragraph',
        text: '<OL to="https://discord.gg/8KSTu5Q" eventLabel="LDOE Discord">Official Discord</OL>',
      },
      {
        type: 'paragraph',
        text: '<OL to="https://twitter.com/lastdaysurvival" eventLabel="LDOE Twitter">Twitter</OL>',
      },
      {
        type: 'paragraph',
        text: '<OL to="https://www.reddit.com/r/LastDayonEarthGame" eventLabel="LDOE Reddit">Reddit</OL>',
      },
      {
        type: 'paragraph',
        text: '<OL to="https://www.instagram.com/lastdayonearthgame/" eventLabel="LDOE Instagram">Instagram</OL>',
      },
      {
        type: 'paragraph',
        text: '<OL to="https://t.me/lastdayonearthsurvival" eventLabel="LDOE Telegram">Telegram</OL>',
      },      
    ]
  },
  {
    id: 3,
    title: 'LDOE Communities',
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
        text: '<OL to="https://www.facebook.com/groups/LastDayOnEarthGC/" eventLabel="LDOE Facebook">Facebook Group (global community)</OL>',
      },      
      {
        type: 'paragraph',
        text: 'This group has the most active community of any of the facebook groups. There are other groups that compete for most posts per day, but Global Community stands out with how responsive people are to each post. The Global Community has also had the most consistently good team of moderators. They are strict with modders and hackers, but they are otherwise pretty flexible and most of their moderators are on the same page.',
      },      
      {
        type: 'paragraph',
        text: '<OL to="https://www.reddit.com/r/LDESurvival/" eventLabel="LDOE Reddit">Reddit Forum (LDESurvival)</OL>',
      },      
      {
        type: 'paragraph',
        text: 'LDESurvival is full of critical thinkers and great conversations about LDOE. If they don’t like your theory, they will shoot it down with logical reasons which allows for you to then respond in kind. These lively, but intellectual debates are what makes Reddit unique from the other social mediums.',
      },      
      {
        type: 'paragraph',
        text: '<OL to="https://discord.gg/CXAa5gZ" eventLabel="JCF Discord">Discord (JCF’s Alliance of Clans)</OL>',
      },      
      {
        type: 'paragraph',
        text: 'JCF has a vision for creating an alliance of clans and a lot of the best players have joined him to make this happen. Clans aren’t out yet, but when they are, I want to be in that alliance.',
      },      
    ]
  },
  {
    id: 4,
    title: 'LDOE Videos',
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
    id: 5,
    title: 'One Company...',
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
    id: 6,
    title: 'JCF Letters',
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
        text: ' ',
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
        text: ' ',
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
    id: 7,
    title: 'Pay To Play!',
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
    id: 8,
    title: 'Website Update',
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
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Using Kefir’s Massive Giveaway to get content for the resource section under strategy',
          },
          {
            type: 'text',
            text: 'Adding the Forum and integrating it with the rest of the website',
          },
          {
            type: 'text',
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