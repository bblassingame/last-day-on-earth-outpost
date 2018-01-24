import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const MultiplayerContent = () => {
  let formatMgr = new FormatMgr()
  let pageModel = formatMgr.formatContent(multiplayerData[0].contentItems)
  return <HtmlDocument pageModel={pageModel}/>
}

export default MultiplayerContent

const multiplayerData = [
  {
    id: 0,
    title: 'Multiplayer',
    contentItems: 
    [
      {
        type: 'paragraph',
        text: 'This page will be used for recording all the clans of Last Day on Earth. It will also hold information like clan ranking, which clan is in possession of which Pump Jack and when clan wars are scheduled.',
      },
      {
        type: 'paragraph',
        text: 'Unfortunately, since Last Day on Earth is still in Beta, multiplayer does not yet exist in the game. The Radio Tower (which is the key to unlocking multiplayer) cannot actually be built because some of the items required to craft it are also not in the game yet <L>(Learn about other things that don’t exist yet)</L>. The players that attack you while you are farming in the green, yellow and red zones are AI players… they are just bots serving as placeholders until the real game is released. The player bases around your base are also placeholders and are the same for every person playing Last Day on Earth.',
        links:
        [
          {
            event: '',
            to: '/multiplayer#learn-more',
          }
        ]
      },
      {
        type: 'paragraph',
        text: 'However, this has not stopped the players of Last Day on Earth from forming their own clans in preparation for when the game is released. Currently, over 30 publicly announced Clans have been formed in preparation for the multiplayer update. Here is a list of all of the clans and a link (if available) to request to join that clan:',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'JcF\'s Alliance of Clans (facebook):',
            link: true,
            linkTo: 'https://www.facebook.com/groups/279700595879410/',
            event: 'Clan Click - JcF Facebook',
          },
          {
            text: 'JcF\'s Alliance of Clans (Discord)',
            link: true,
            linkTo: ' https://discord.gg/9uwy7VU',
            event: 'Clan Click - JcF Discord',
          },
          {
            text: 'LAST DAY ON EARTH! RAID CLANS WORLD JR',
            link: true,
            linkTo: 'https://www.facebook.com/groups/LastDayonEarthDefenderClan/',
            event: 'Clan Click - RAID CLANS WORLD JR',
          },
          {
            text: 'R.I.C.H.',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365842786420916224',
            event: 'Clan Click - R.I.C.H.',
          },
          {
            text: 'InTheLight',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365843105464713216',
            event: 'Clan Click - InTheLight',
          },
          {
            text: 'THE NEW ORDER',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846435582836736',
            event: 'Clan Click - The New Order',
          },
          {
            text: 'Shielded Union',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846495808847872',
            event: 'Clan Click - Shielded Union',
          },
          {
            text: 'D.O.A',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846841788596224',
            event: 'Clan Click - D.O.A.',
          },
          {
            text: 'Ruthless™',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846991734833152',
            event: 'Clan Click - Ruthless',
          },
          {
            text: 'S.P.E.C.I.A.L',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365847472691609600',
            event: 'Clan Click - S.P.E.C.I.A.L',
          },
          {
            text: 'Kingz of Honor',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365847708705226757',
            event: 'Clan Click - Kingz of Honor',
          },
          {
            text: 'LastClanOnEarth',
            link: true,
            linkTo: 'https://twitter.com/Lastclanonearth',
            event: 'Clan Click - LastClanOnEarth',
          },
          {
            text: 'Imperials',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365848192673382411',
            event: 'Clan Click - Imperials',
          },
          {
            text: '--The Last Potatoes--',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365849073825087488',
            event: 'Clan Click - --The Last Potatoes--',
          },
          {
            text: 'Last Day on Earth: Survival Community',
            link: true,
            linkTo: 'https://discord.gg/tMSCSt',
            event: 'Clan Click - Survival Community',
          },
          {
            text: 'The Saviors Clan',
            link: true,
            linkTo: 'https://www.facebook.com/groups/270128653455361/?ref=bookmarks',
            event: 'Clan Click - The Saviors Clan',
          },
          {
            text: 'Rising_ Forces',
            link: true,
            linkTo: 'https://www.facebook.com/groups/283896525443382/',
            event: 'Clan Click - Rising Forces',
          },
          {
            text: 'PK (by Doomeris)',
            link: true,
            linkTo: 'https://discord.gg/AESSkjh',
            event: 'Clan Click - PK',
          },
          {
            text: 'Elites Legion',
            link: true,
            linkTo: 'https://chat.whatsapp.com/Gz3z3vkRBM7K1lpqagi8YP',
            event: 'Clan Click - Elites Legion',
          },
          {
            text: 'ROTV',
            link: true,
            linkTo: 'https://discord.gg/W9qeEnn',
            event: 'Clan Click - ROTV',
          },
          {
            text: 'G.O.D.S',
            link: true,
            linkTo: 'https://discord.gg/A4yUnG',
            event: 'Clan Click - G.O.D.S',
          },
          {
            text: 'New Exodus',
            link: true,
            linkTo: 'https://discord.gg/K89FZN',
            event: 'Clan Click - New Exodus',
          },
          {
            text: 'Voids of the Tormented',
            link: true,
            linkTo: 'https://www.facebook.com/groups/144105322890284/',
            event: 'Clan Click - Voids of the Tormented',
          },
          {
            text: 'LDOEclan Alfa',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'In exile clan ldoe',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'Last day on earth survival clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'Last day on earth survival (server2) clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'Last day on earth clan hispano',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'Last day on earth survivor clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            text: 'Last day on earth raiders clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
        ]
      },
      {
        type: 'paragraph',
        text: 'If you did not know that Multiplayer did not exist in the game, you might be interested to know that there are dozens of other things in Last Day on Earth that do not exist in the game even though it seems like they do. This video list everything that does not exist in the game. ',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/Ant_vBUfdws?start=5'
      },
      {
        type: 'paragraph',
        text: 'If you would like to know more about what it means to have a good clan, this video lays out the three things that I would argue are the most important when choosing a good Clan. ',
        id: true,
        idName: 'learn-more',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/0lLkXYp37eo?start=30'
      },
    ]
  }
]