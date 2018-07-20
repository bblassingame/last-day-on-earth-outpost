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
    contentItems: 
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'LDOE: Multiplayer',
      },
      {
        type: 'paragraph',
        text: 'This page will be used for recording all the clans of Last Day on Earth. It will also hold information like clan ranking, which clan is in possession of which Pump Jack and when clan wars are scheduled.',
      },
      {
        type: 'paragraph',
        text: 'Just recently Last Day on Earth introduced their first version of multiplayer (Sector 7) which does not have clans or even PvP. If you would like to learn how to access the multiplayer section of Last Day on Earth, please watch the first 5 minutes of this video.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/M3tQ4FgRnA8?start=372'
      },
      {
        type: 'paragraph',
        text: 'And recently they added co-op tasks...',
      },
      {
        type: 'paragraph',
        text: 'Because multiplayer is unfinished, the Radio Tower (which is the key to unlocking multiplayer) cannot actually be built because some of the items required to craft it are also not in the game yet <L to="/multiplayer#learn-more">(Learn about other things that don’t exist yet)</L>. The players that attack you while you are farming in the green, yellow and red zones are AI players… they are just bots serving as placeholders until the real game is released. The player bases around your base are also placeholders and are the same for every person playing Last Day on Earth.',
      },
      {
        type: 'paragraph',
        text: 'However, this has not stopped the players of Last Day on Earth from forming their own clans in preparation for when the game is released. Currently, over 30 publicly announced Clans have been formed in preparation for the multiplayer update. Here is a list of all of the clans and a link (if available) to request to join that clan:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'JcF\'s Alliance of Clans (facebook)',
            link: true,
            linkTo: 'https://www.facebook.com/groups/279700595879410/',
            event: 'Clan Click - JcF Facebook',
          },
          {
            type: 'text',
            text: 'JcF\'s Alliance of Clans (Discord)',
            link: true,
            linkTo: ' https://discord.gg/9uwy7VU',
            event: 'Clan Click - JcF Discord',
          },
          {
            type: 'text',
            text: 'LAST DAY ON EARTH! RAID CLANS WORLD JR',
            link: true,
            linkTo: 'https://www.facebook.com/groups/LastDayonEarthDefenderClan/',
            event: 'Clan Click - RAID CLANS WORLD JR',
          },
          {
            type: 'text',
            text: 'R.I.C.H.',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365842786420916224',
            event: 'Clan Click - R.I.C.H.',
          },
          {
            type: 'text',
            text: 'InTheLight',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365843105464713216',
            event: 'Clan Click - InTheLight',
          },
          {
            type: 'text',
            text: 'THE NEW ORDER',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846435582836736',
            event: 'Clan Click - The New Order',
          },
          {
            type: 'text',
            text: 'Shielded Union',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846495808847872',
            event: 'Clan Click - Shielded Union',
          },
          {
            type: 'text',
            text: 'D.O.A',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846841788596224',
            event: 'Clan Click - D.O.A.',
          },
          {
            type: 'text',
            text: 'Ruthless™',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365846991734833152',
            event: 'Clan Click - Ruthless',
          },
          {
            type: 'text',
            text: 'S.P.E.C.I.A.L',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365847472691609600',
            event: 'Clan Click - S.P.E.C.I.A.L',
          },
          {
            type: 'text',
            text: 'Kingz of Honor',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365847708705226757',
            event: 'Clan Click - Kingz of Honor',
          },
          {
            type: 'text',
            text: 'LastClanOnEarth',
            link: true,
            linkTo: 'https://twitter.com/Lastclanonearth',
            event: 'Clan Click - LastClanOnEarth',
          },
          {
            type: 'text',
            text: 'Imperials',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365848192673382411',
            event: 'Clan Click - Imperials',
          },
          {
            type: 'text',
            text: '--The Last Potatoes--',
            link: true,
            linkTo: 'https://discordapp.com/channels/@me/365849073825087488',
            event: 'Clan Click - --The Last Potatoes--',
          },
          {
            type: 'text',
            text: 'Last Day on Earth: Survival Community',
            link: true,
            linkTo: 'https://discord.gg/tMSCSt',
            event: 'Clan Click - Survival Community',
          },
          {
            type: 'text',
            text: 'The Saviors Clan',
            link: true,
            linkTo: 'https://www.facebook.com/groups/270128653455361/?ref=bookmarks',
            event: 'Clan Click - The Saviors Clan',
          },
          {
            type: 'text',
            text: 'Rising_ Forces',
            link: true,
            linkTo: 'https://www.facebook.com/groups/283896525443382/',
            event: 'Clan Click - Rising Forces',
          },
          {
            type: 'text',
            text: 'PK (by Doomeris)',
            link: true,
            linkTo: 'https://discord.gg/AESSkjh',
            event: 'Clan Click - PK',
          },
          {
            type: 'text',
            text: 'Elites Legion',
            link: true,
            linkTo: 'https://chat.whatsapp.com/Gz3z3vkRBM7K1lpqagi8YP',
            event: 'Clan Click - Elites Legion',
          },
          {
            type: 'text',
            text: 'ROTV',
            link: true,
            linkTo: 'https://discord.gg/W9qeEnn',
            event: 'Clan Click - ROTV',
          },
          {
            type: 'text',
            text: 'G.O.D.S',
            link: true,
            linkTo: 'https://discord.gg/A4yUnG',
            event: 'Clan Click - G.O.D.S',
          },
          {
            type: 'text',
            text: 'New Exodus',
            link: true,
            linkTo: 'https://discord.gg/K89FZN',
            event: 'Clan Click - New Exodus',
          },
          {
            type: 'text',
            text: 'Voids of the Tormented',
            link: true,
            linkTo: 'https://www.facebook.com/groups/144105322890284/',
            event: 'Clan Click - Voids of the Tormented',
          },
          {
            type: 'text',
            text: 'LDOEclan Alfa',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'In exile clan ldoe',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'Last day on earth survival clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'Last day on earth survival (server2) clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'Last day on earth clan hispano',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'Last day on earth survivor clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
          {
            type: 'text',
            text: 'Last day on earth raiders clan',
            link: false,
            linkTo: 'N/A',
            event: 'Clan Click - ',
          },
        ]
      },
      {
        type: 'paragraph',
        text: 'If you did not know that Multiplayer was not implemented in the game, you might be interested to know that there are dozens of other things in Last Day on Earth that do not exist in the game even though it seems like they do. This video list everything that does not exist in the game. ',
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