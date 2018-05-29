import React from 'react'
import { Route, Link } from 'react-router-dom'

import StrategyArticle from './strategy-article'

const StrategyContent = (props) => {
  return (
    <div className='strategy-content-container'>
      <h1 className='strategy-heading-title'>LDOE: Strategy</h1>
      <Route key={8} exact path='/strategy' render={() => renderArticleLinks(props.onArticleClick)} />
      <Route key={0} path='/strategy/BaseDesign' render={(routeProps) => <StrategyArticle articleData={strategyData[0]} {...routeProps} />} />
      <Route key={1} path='/strategy/Bunkers' render={(routeProps) => <StrategyArticle articleData={strategyData[1]} {...routeProps} />} />
      <Route key={2} path='/strategy/Mulitplayer' render={(routeProps) => <StrategyArticle articleData={strategyData[2]} {...routeProps} />} />
      <Route key={3} path='/strategy/Updates' render={(routeProps) => <StrategyArticle articleData={strategyData[3]} {...routeProps} />} />
      <Route key={4} path='/strategy/Events' render={(routeProps) => <StrategyArticle articleData={strategyData[4]} {...routeProps} />} />
      <Route key={5} path='/strategy/AIBases' render={(routeProps) => <StrategyArticle articleData={strategyData[5]} {...routeProps} />} />
      <Route key={6} path='/strategy/TipsAndTricks' render={(routeProps) => <StrategyArticle articleData={strategyData[6]} {...routeProps} />} />
      <Route key={7} path='/strategy/Resources' render={(routeProps) => <StrategyArticle articleData={strategyData[7]} {...routeProps} />} />
      <Route key={9} path='/strategy/Pets' render={(routeProps) => <StrategyArticle articleData={strategyData[8]} {...routeProps} />} />
    </div>
  )
}

const renderArticleLinks = (onArticleClick) => {
  return (
    <div className='strategy-nav-button-container'>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/BaseDesign' onClick={() => onArticleClick('BaseDesign')}>
            <div className='strategy-nav-button strategy-nav-button-basedesign'>
              <p className='strategy-nav-button-text'>Base Design</p>
            </div>
          </Link>
          <Link to='/strategy/Bunkers' onClick={() => onArticleClick('Bunkers')}>
            <div className='strategy-nav-button strategy-nav-button-bunkers'>
              <p className='strategy-nav-button-text'>Bunkers</p>
            </div>
          </Link>
        </div>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Mulitplayer' onClick={() => onArticleClick('Mulitplayer')}>
            <div className='strategy-nav-button strategy-nav-button-multiplayer'>
              <p className='strategy-nav-button-text'>Multiplayer</p>
            </div>
          </Link>
          <Link to='/strategy/Updates' onClick={() => onArticleClick('Updates')}>
            <div className='strategy-nav-button strategy-nav-button-updates'>
              <p className='strategy-nav-button-text'>Updates</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Events' onClick={() => onArticleClick('Events')}>
            <div className='strategy-nav-button strategy-nav-button-events'>
              <p className='strategy-nav-button-text'>Events</p>
            </div>
          </Link>
          <Link to='/strategy/AIBases' onClick={() => onArticleClick('AIBases')}>
            <div className='strategy-nav-button strategy-nav-button-aibases'>
              <p className='strategy-nav-button-text'>AI Bases</p>
            </div>
          </Link>
        </div>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/TipsAndTricks' onClick={() => onArticleClick('TipsAndTricks')}>
            <div className='strategy-nav-button strategy-nav-button-tipsandtricks'>
              <p className='strategy-nav-button-text'>Tips &amp; Tricks</p>
            </div>
          </Link>
          <Link to='/strategy/Resources' onClick={() => onArticleClick('Resources')}>
            <div className='strategy-nav-button strategy-nav-button-resources'>
              <p className='strategy-nav-button-text'>Resources</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Pets' onClick={() => onArticleClick('Pets')}>
            <div className='strategy-nav-button strategy-nav-button-pets'>
              <p className='strategy-nav-button-text'>Pets</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StrategyContent

const strategyData = [
  {
    id: 0,
    title: 'Base Design',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Base Design',
      },
      {
        type: 'paragraph',
        text: 'No other aspect of the game requires strategy more so than base design. There are three things you need to keep in mind when designing your base: '
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Horde'
      },
      {
        type: 'paragraph',
        text: 'According to the Last Day on Earth loading screen, the Horde is a phenomenon in which zombies form into a large group and travel in one direction. In game, the horde is a group of 30 crowd zombies that visit your base 24 hours after their last visit. This 24 hour timer starts the first time you log in. Over the last several months, Kefir (the creators of Last Day on Earth) have made several changes to the horde. Each of these changes have affected the base design strategy for dealing with the horde. If you would like to know more about those changes, check out the changes in 1.5.6, 1.6, and 1.6.6.'
      },
      {
        type: 'paragraph',
        text: 'Currently, the best way to deal with the horde is to find the normal path they take when you are offline and build lvl 2 walls (level 3 would be more ideal, but difficult because they require 10 oak to build) staggered so that no more than 10 zombies hit each wall. This will kill all the zombies without losing any walls. Hopefully JCF can make a video explaining this strategy soon.'
      },
      {
        type: 'paragraph',
        text: 'Now, some people deal with this problem by not building any walls at all. This isn\'t a bad tactic because until multiplayer is released, there are no consequences to not having walls. On the other hand, if Last Day on Earth is speaking the truth when they say that they will try to not have to reset everything, then those people without walls will have a lot of catching up to do.'
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Workflow'
      },
      {
        type: 'paragraph',
        text: 'The second thing you need to consider in base construction is your workflow. The most important aspect of making your base have a good workflow is that you remember where everything is and that you develop a system for putting everything away quickly. If you don\'t create a system or you don\'t remember where you put things, then you will find yourself wasting a lot time running back and forth putting things away after each run. This becomes even more true the more you need to transfer items from one station to another.'
      },
      {
        type: 'paragraph',
        text: 'To make things easier, here’s a bullet point list of things I keep in mind when considering the workflow of my base, some of these may seem obvious, but as you may have gathered at this point, I enjoy being thorough, so here you go:'
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'The doormat item allows you to choose your spawn point in your base, so make sure to place the doormat at the start of you workflow, by that I mean, where you enter your base to drop your farmed supplies.',
          },
          {
            type: 'text',
            text: 'I think the beginning of your workflow should start with your woodworking room because it\'s the most common resource you will need to get. Followed by stone, then furnaces, and then your sewing machines.',
          },
          {
            type: 'text',
            text: 'I suggest building the maximum amount of chests. The more chests you have the more you can separate things by type which is helpful for remembering where things are.',
          },
          {
            type: 'text',
            text: 'Put your furnaces near your workbench because they work well together.',
          },
          {
            type: 'text',
            text: 'Put your shower and water catcher together. I put four bottles in my rain catcher and everytime I visit , I drink two of them and then shower and then put the four empty bottles back in the rain catcher.',
          },
          {
            type: 'text',
            text: 'Put your tanning rack and meat drying rack together because when you have one of these resources, then you will probably have the other one as well.',
          },
          {
            type: 'text',
            text: 'Lastly, I would suggest putting your gardens next to your fire pits for the creation of carrot stew.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Protect Your Supplies'
      },
      {
        type: 'paragraph',
        text: 'The last thing that you need to keep in mind when you are building your base is the least important right now, but will eventually be the most important: protecting yourself from players trying to get your stuff. It doesn\'t matter how awesome you are at playing this game or how well you collect resources, if it is easy to steal from you, then you are going to always be poor.',
      },
      {
        type: 'paragraph',
        text: 'As soon as they release multiplayer, people are going to start going after bases in a way fitting of LDOE’s post-apocolyptic setting. You want to have your base locked and loaded when this happens. Do not wait for the release of multiplayer to make your base ready for multiplayer, by then it will be too late.',
      },
      {
        type: 'paragraph',
        text: 'Granted, I am betting LDOE’s statement that they are going to try and not reset everything when they release the official version of the game is true. If they do reset I will have spent a lot of time on my base for no good reason. If I am right and they don’t, I will be laughing mercilessly from behind my level 3 walls.',
      },
      {
        type: 'paragraph',
        text: 'I have four suggestions on designing your base to protect yourself against other players. It is easier to explain these tips in video form so I recommend watching this video (and then skip down to the last paragraph), but if you prefer to read it, I also explain each tip below this video.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/s1ujVuf7JiE?start=238',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Video Script',
      },
      {
        type: 'paragraph',
        text: '<I>Tip number one, hide everything. Information is power. The more they know about your base, the easier it will be for them to figure out what your strategy is. this this is why I use what I\'m calling the Great Wall of China strategy. This wall around my base is helpful against the zombie horde because it lets me regulate which walls I will have to repair, but that is only the third and least important reason I use this strategy. The first reason I built it is because when someone approaches my base, it is going to look like this. And then when they go to the effort of the destroying one of my walls, my base is going to look like this. I\'m forcing them to use C4 even just to get a peek inside.</I>',
      },
      {
        type: 'paragraph',
        text: '<I>This brings us to Tip Number Two: make them spend more than you do. When you look at the traps that they\'re going to have for us to make, they are expensive. Having a minefield on the outside of your base will allow any Punk just wondering around to set off your traps. This will cost you a lot of resources replenishing your traps and that guy can come back and just get all the stuff, if he even had stuff. If you are mapping out your future bass, make sure your traps are reserved for only serious Invaders by making them have to spend resources like C4 to even get to your traps. If you do this, then you might be able to make your base gain resources for you. For example, I am hoping to have a line of landmines here with turrets dispersed among them. When a committed invader uses C4 to break through my inner wall, and tries to take out my turrets which I imagine he\'d be prepared for, if I can set it up to where he\'ll hit a land mine at the same time he getting shot by a turret, he will probably not be able to heal fast enough to avoid dying. This would leave his body in my base with turrets guarding it which means I have a greater chance of logging in in time to gather his equipment.</I>',
      },
      {
        type: 'paragraph',
        text: '<I>Tip three: put yourself in their shoes. If you were your enemy, how would you outsmart yourself. This may seem basic, but a lot of people don\'t actually sit back and try to Think Through The Eyes of their enemy. I used this approach when I used to play Clash of Clans several years ago and it allowed me to get to the top even though I refuse to spend money like most of the other top players. I had level 7 walls when my competition had level 12 walls and often, I would still beat them, because of this mentality. I would sit back and look at my base and I would think “how would I attack this”. And then I make adjustments and then I would do it again and then I make more adjustments. I would also watch replays. I don\'t know if last day on Earth will offer replays, but you will be able to see where they busted through your walls. When you see a pattern, compensate for it.</I>',
      },
      {
        type: 'paragraph',
        text: '<I>Lastly, put your most valuable stuff in the most inner rooms. I\'ve got my medical table, my woodworking, my stone and eventually my radio tower all in outer rooms because they use and produce the least valuable items. Meanwhile, I keep my food and armor and weapons in a place that they would have to break through four walls to get to them.</I>',
      },
      {
        type: 'paragraph',
        text: '<B>There are two other things I don’t mention in my video that are important to keep in mind:</B>',
      },
      {
        type: 'paragraph',
        text: 'First, lots of players like to use spiked traps or beds and other items that cannot be broken like walls to protect their bases. These are clever tricks, but Last Day on Earth will probably fix these tricks before multiplayer even comes out. The Last Day on Earth loading screen says that spike traps are not good for keeping out survivors so when the time comes to defend against survivors, they will probably honor this original intent.',
      },
      {
        type: 'paragraph',
        text: 'Second, windows allow you to see and shoot out of them. Make sure to place your windows in a direction where you want to see and shoot enemies, and don’t place windows where enemies might be able to use them against you after they have partially broken in to your base.'
      },
    ]
  },
  {
    id: 1,
    title: 'Bunkers',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Bunker Alpha',
      },
      {
        type: 'paragraph',
        text: 'Bunker Alfa is the key to getting the best items in Last Day on Earth, but completing the bunker can be very costly if you don’t approach it strategically. If you want to play Bunker Alfa at a pro level with maximum efficiency, then I would recommend watching my <L to="https://www.youtube.com/watch?v=UzEFC7utXd4&list=PLscnQrGLZMiI7fC5HNgMazNzGbb85_4Z6">Youtube playlist on The History of Bunker ALFA.</L>',
      },
      {
        type: 'paragraph',
        text: 'Many players won’t watch this whole playlist because many of the videos are out of date, but understanding how Bunker ALFA has evolved over the updates and watching how the best players have adapted their strategies to compensate for the new changes is key to conditioning your mind so that you can think the way that the pros think.',
      },
      {
        type: 'paragraph',
        text: 'If that is too intense for you and you just want some strategic tips on completing bunker Alfa, then here are my best tips for the current update.',
      },
      {
        type: 'paragraph',
        text: 'The three main questions I ask myself when I do any part of bunker Alfa are,',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Can I use only easily craftable weapons here and what is the cheapest one I can use in this situation?',
          },
          {
            type: 'text',
            text: 'Which enemies can I sneak up on and can I sneak up on them multiple times?',
          },
          {
            type: 'text',
            text: 'Even using the cheapest way possible, is it worth is to kill this enemy for the reward that I will get from him?',
          },
        ]
      },
      {
        type: 'paragraph',
        text: 'Ok, so maybe that was 5 questions, but you get the idea.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Hard Mode',
      },
      {
        type: 'paragraph',
        text: 'Hard mode is hard. I do not currently recommend doing hard mode because it requires a lot of resources, but doing hard mode is the only way to get the best items in the game. If you are ok with getting those items very slowly, then I recommend only killing the Blind One every time the bunker resets because you can actually gain resources killing the Blind One even if you use guns because the reward is so good. However, if you do not want to wait that long, then here are some tips for Hard Mode.',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Sub Categories',
      },
      {
        type: 'paragraph',
        text: 'Lobby',
      },
      {
        type: 'paragraph',
        text: '2nd Floor',
      },
      {
        type: 'paragraph',
        text: '3rd Floor',
      },
      {
        type: 'paragraph',
        text: '4th Floor',
      },
      {
        type: 'paragraph',
        text: '5th Floor (does not exist yet)',
      },
      {
        type: 'paragraph',
        text: '6th Floor (does not exist yet)',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Lobby',
      },
      {
        type: 'paragraph',
        text: 'The Lobby has five fast biters and one Floater Bloater. None of these enemies can be snuck up on so I recommend using a machete or katana since they have the highest dps and lifetime damage of any easily craftable weapon in the game. The floater bloater does not need to be attacked unless you need to shower while you are at the bunker. There are three chests in the lobby. The first one is a vending machine which usually give water, beer and/or beans. One is a trash can type so it will most likely give a green ticket and some trash, but has a chance of giving a better color ticket. And the last one is a utility chest which usually has fabric, nails, tickets, iron and has low chance of giving a wrench. The overseer card is not an actual item in the game, but the room is unlocked after completing the second floor on easy mode and saving the Army Specialist. After you save him once, the room will be unlocked forever. The jammed door can not be unjammed. The three conveyor belts stations are where you spend your green, yellow, and red tickets to get ration Ration, Survival Kit, and Combat Gear Crates.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Second Floor (Easy Mode)',
      },
      {
        type: 'paragraph',
        text: 'The second floor has 8 roamers, 13 fast biters, 5 toxic spitters, 8 floater bloaters, 5 toxic abominations, 7 frenzy giants and 1 turret. Here is a map of the layout.',
      },
      {
        type: 'paragraph',
        text: 'Most of those enemies can be snuck up on for triple damage and many of them can be snuck up on several times if you use the elevator trick (link to trick). My favorite weapons to use are the saw mace for sneaking up on enemies and the machete for all other combat. The only two exceptions to this is when killing frenzy giants and turrets. If you are not able to sneak up on a frenzy giant multiply times, I recommend using a bow or zip gun to finish them off. I use a bow to kill turrets. The bow outranges turrets as long as you don’t let it hit you first. If you do on accident, use the elevator trick to reset the turret. Even though this video was made before Last Day on Earth released the bow into gameplay, it is still a great video to help you know which enemies you can and can’t sneak up on.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/PBWX2y8iL34?start=45',
      },
      {
        type: 'paragraph',
        text: 'You can also kill the last Frenzy Giant with a road sign by hitting him through the fence. You can see me do this in my video for the Second Floor (Hard Mode).',
      },
      {
        type: 'paragraph',
        text: 'After clearing all the enemies which will give you around 10-15 green, 8-12 yellow, & 6-8 red tickets, there are 18 chests you can loot which will likely give you another 4-7 tickets of varying colors.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Second Floor (Hard Mode)',
      },
      {
        type: 'paragraph',
        text: 'The second floor has 8 roamers, 13 fast biters, 5 toxic spitters, 8 floater bloaters, 2 toxic abominations, 3 exploders which means an additional 9 parasites, 7 frenzy giants and 1 turret. These enemies are much stronger than their easy mode counterparts. Here is a map of the layout.',
      },
      {
        type: 'paragraph',
        text: 'Most of these enemies can be snuck up on for triple damage, but none of them can be reset after doing damage to them by using the elevator trick because Hard mode does not allow that. My favorite weapons to use for sneaking up on enemies is still the saw mace and I still use the machete for much of the combat, but fighting in hard mode is not as straightforward as it is in easy mode. For example,when you fight multiple enemies, you want to find ways to split them up so you don’t take unnecessary damage. I use a lot of bows for parasites and frenzy giants and some glocks when I do hardmode for frenzy giants after their speed increases when it goes below 150 hp. It would be very hard to explain how to do these tactic in writing, but I did make a short and concise video with all of my hardmode tactics for the second floor here.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/fqn8qYiowSc?start=47',
      },
      {
        type: 'paragraph',
        text: 'After clearing this floor and looting all 18 chests, you should get anywhere from 40-60 reputation points towards leveling up the Army Specialist.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Third Floor (Easy Mode)',
      },
      {
        type: 'paragraph',
        text: 'The third floor has 3 fast biters, 25 toxic spitters, 2 floater bloaters, 16 toxic abominations, 10 frenzy giants and 1 turret. Here is a map of the layout.',
      },
      {
        type: 'paragraph',
        text: 'Less of these enemies can be snuck up on for triple damage than the ones on the second floor, but it is important to know how to do the door sneak trick in order to sneak up on many of of the enemies of this level. Many of the ones that can be snuck up on, can be snuck up on several times if you use the elevator trick to reset them, but you have to know how to approach them. My favorite weapons are the same as the second floor. This video teaches you the door sneak trick, which enemies you can sneak up on and how to approach enemies you want to sneak up on more than once (it was also done before the bow was in the game).',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/5yT1lPBK6Z8?start=46',
      },
      {
        type: 'paragraph',
        text: 'I did make one mistake on this video. You can sneak up on the middle giant of the three in the back room. Also, since the video came out, I developed two other tricks that help with this floor in this video.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cyGlwckD5Ns?start=21',
      },
      {
        type: 'paragraph',
        text: 'After clearing all the enemies which will give you around 12-17 green, 13-18 yellow, & 9-12 red tickets, there are 22 chests you can loot which will likely give you another 7-10 tickets of varying colors.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Third Floor (Hard Mode)',
      },
      {
        type: 'paragraph',
        text: 'The third floor has 3 fast biters, 25 toxic spitters, 2 floater bloaters, 4 toxic abominations, 12 exploders which means an additional 36 parasites, 10 frenzy giants, 1 turret and the Blind One.. These enemies are much stronger than their easy mode counterparts. Here is a map of the layout.',
      },
      {
        type: 'paragraph',
        text: 'Most of these enemies can be snuck up on for triple damage, but none of them can be reset after doing damage to them by using the elevator trick because Hard mode does not allow that. My favorite weapons and tactics are the same as I do for the second floor, but sadly I have not had enough time to do make a video tutorial for the third floor yet. If you would like me to extend my video to the third floor, then please follow this link and <L to="https://youtu.be/fqn8qYiowSc">like my video on youtube</L>. If I get 2500 likes on that video, I will make a full hard mode tutorial with an updated version for both floors (bunker tutorial require a lot of extra work so I want to make sure enough people want them).',
      },
      {
        type: 'paragraph',
        text: 'After clearing this floor (except the Blind One) and looting all 22 chests, you should get anywhere from 55-75 reputation points towards leveling up the Army Specialist.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Blind One',
      },
      {
        type: 'paragraph',
        text: 'The Blind One is a hardmode boss on the third floor (click on his name for stats). He give 10 red tickets and 18 reputation points for the Army Specialist so he is definitely worth killing every chance you get!',
      },
      {
        type: 'paragraph',
        text: 'If you want to use melee weapons, then I recommend using 1.4 Katanas, a set of military gear and 2000 hp worth of food. I know that some of you are low on food so If you don\'t mind using 1.7 Glocks, then you can reduce the amount of food you use to around 1200hp of food. And then if you\'re really low on food or if you just want to get it done with quickly then I would recommend this set of items with 1.4 m16s which means you only need to use 800hp of food. I would not suggest using anything nicer than an M16 because it will not save you that much food to use a nicer gun and you will probably want those nicer guns for multiplayer or at least for the upcoming Raiders update.',
      },
      {
        type: 'paragraph',
        text: 'If you are using first aid kits, I recommend replacing one of your tier 3 gear for a piece of SWAT gear so that you can get hit 5 times before using a first aid kit.',
      },
      {
        type: 'paragraph',
        text: 'The Blind One has a very predictable pattern of attack, but it is hard to describe in writing. This video shows exactly how he works.',
      },
      {
        type: 'youtube',
        text: 'https://www.youtube.com/embed/krIHj7E-Uls?start=36',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Fourth Floor (Easy Mode)',
      },
      {
        type: 'paragraph',
        text: 'The research team has not fully set up info for the 4th floor yet. In the meantime, this video will give you are great walkthrough of completing the fourth floor:',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/dLfEuloGOFU?start=50',
      },
      {
        type: 'paragraph',
        text: 'This section will be updated as soon as the research team can organize it.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Fourth Floor (Hard Mode)',
      },
      {
        type: 'paragraph',
        text: 'The research team has not fully set up info for the 4th floor yet. In the meantime, this video will give you are great walkthrough of completing the fourth floor:',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/dLfEuloGOFU?start=220',
      },
      {
        type: 'paragraph',
        text: 'This section will be updated as soon as the research team can organize it.',
      },
    ],
  },
  {
    id: 2,
    title: 'Multiplayer',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Multiplayer',
      },
      {
        type: 'paragraph',
        text: 'Since Last Day on Earth does not yet have Multiplayer, the tips in this section will mostly likely change when multiplayer is released. Also, keep in mind that is will be much easy to explain these with videos when multiplayer is released.',
      },
      {
        type: 'paragraph',
        text: 'Team positioning- Many multiplayer games are actually are just about numbers. They often have some nuances to them where it is beneficial to have skilled players, but the clan wars are mostly just a bunch of players running around killing each other with some kind of point or objective based system to determine who will win. I have a strong feeling that LDOE will not be like this because of the way the armor system works in LDOE. Two players with the best weapons and armor in the game won’t actually be able to kill each other by themselves. They will have to wait until one of them runs out of food or a teammate shows up to help them. For example, if you had a SCAR and you attacked an opponent with full SWAT gear, it would take 1.3 seconds to do 100 damage. This is a lot of time for him to hit the heal button and immediately heal himself. However, if you had 4 teammates with rifles attacking the same opponent, your team would do 100 damage in .3 seconds. This would make it very difficult for your opponent to time the heal button and would likely waste health or die.',
      },
      {
        type: 'paragraph',
        text: 'This means that team positioning will be a huge deal in LDOE. I have a feeling there will be so many team tactics formed around how to isolate enemies from their team members.',
      },
      {
        type: 'paragraph',
        text: 'AOE- I have already come up with one of these tactics that I think will work (obviously this has never been tested). The tactic involves having a high armor teammate with a grenade launcher and first aid kits. He is the point man for his team. He runs in to attract the attention of the enemy team. They will likely converge on him since they are wanting a single target, but even if they don’t he can continue towards them as long as his team is right behind him. When the two teams clash, he launches a grenade in the middle of their forces. This forces the enemy team to either keep attacking and take a large amount of AOE damage (67 damage to each person with SWAT) while he should be able to heal while running away and his teammates will have a strong advantage or the enemy team can split up to avoid the grenade which will likely result in leaving certain members to be picked off. ',
      },
      {
        type: 'paragraph',
        text: 'Obviously, the other team can do the same thing, but I’ll explain my some more nuances to those tactics when the time comes.',
      },
      {
        type: 'paragraph',
        text: 'Coordinated Tanking- As I mentioned earlier, Tanking will be very difficult if a group teams up on someone, but using a few tanks will probably still be a very good idea. These players will be people who have good armor and first aid kits. They will need to know how to attract attention, stay alive and get to safety before they run out of First Aid Kits. If a team is good at working with a Tank, they shouldn’t need to tank long before the tide is turned and they other team is running or dead.',
      },
      {
        type: 'paragraph',
        text: 'Runners- This tactic might not actually work depending on how the clan wars are set up, but sometimes you can use a player who acts like a hot head and pisses the team off so that some of the less disciplined enemy teammates will chase after him to kill him which splits up their team. These runners usually have to be good at letting their hp get really low and stay low even when healing to entice them to take the bait.',
      },
      {
        type: 'paragraph',
        text: 'Other Tactics- I will have many more tactics and videos to accompany them when the multiplayer update comes out.',
      },
    ],
  },
  {
    id: 3,
    title: 'Updates',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Updates',
      },
      {
        type: 'paragraph',
        text: 'Knowing the changes that Kefir (the creators of Last Day on Earth) has made is key to understanding how they think. This not only lets us predict what they might do next, but it allows us to know what we should prioritize after an update. For example, after update 1.6.9, several top players spent all their time farming reputation points in the winter zone because we knew that Kefir would probably remove this option in their next update. If you watch some of these videos, you will notice that there are several times that a course of action is recommended based on an understanding of what Kefir might do next. If you would like info on LDOE changes and hidden changes as they come out, make sure to subscribe to JCF.',
      },
      {
        type: 'paragraph',
        text: 'On this page, we use the following terms:',
      },
      {
        type: 'paragraph',
        text: 'Hidden Change = This is a change the Kefir made to the game that they did not mention in they patch or dev notes.',
      },
      {
        type: 'paragraph',
        text: 'Silent Update = Silent Updates are updates in which there are no patch or dev notes and therefore all changes are hidden changes.',
      },
      {
        type: 'paragraph',
        text: 'Secret Update = Secret Updates are when Kefir pushes a group of changes through the servers without ever creating an actual update. (These are very hard for us to catch right now, but we hope to be set up to catch these in the future).',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.0 (27-May-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Game release',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.1 (29-May-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Daily gift available! Now you can start your every day in the post-apocalyptic world with additional water and food supplies.',
          },
          {
            type: 'text',
            text: 'New range of goods at the Dealer’s. Hurry up to get in touch with him and change your resources for top notch firearms.',
          },
          {
            type: 'text',
            text: 'New armor and weapon packs in the shop! Tear zombie hordes and other survivors into shreds!',
          },
          {
            type: 'text',
            text: 'In your language soon! Localization in many languages started.',
          },
          {
            type: 'text',
            text: 'Minor bugs fixed and game optimization improved',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2 (30-May-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2.1 (31-May-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2.2 (01-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.3 (02-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bug with character moving fixed',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4 (02-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'New recipes! Recipes for cooking on Campfire and crafting on Tanning Rock added.',
          },
          {
            type: 'text',
            text: 'New items! By searching chests, bags and zombie pockets you can find some items never found before.',
          },
          {
            type: 'text',
            text: 'A variety of different changes added to the game process.',
          },
          {
            type: 'text',
            text: 'Minor bugs including connection ones fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.1 (09-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Quick slot added. Keep the most important items handy!',
          },
          {
            type: 'text',
            text: 'Shop interface improved. Rewards from packs will now be displayed in separate slots.',
          },
          {
            type: 'text',
            text: 'Changes in the gaming process added.',
          },
          {
            type: 'text',
            text: 'Minor bugs fixed and game optimization improved.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.2 (20-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Portuguese, Spanish and Russian localization added. More languages are coming soon.',
          },
          {
            type: 'text',
            text: 'More realism now! New parameter added - cleanliness.',
          },
          {
            type: 'text',
            text: 'New item added - shower. You can find it in the recipes menu.',
          },
          {
            type: 'text',
            text: 'Incorrect character textures display and app loading problems fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.2.1 (Silent Update) (21-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'No reported changes',
          },
          {
            type: 'text',
            text: '(Hidden change) Removed the chance to find engine parts in yellow and red zones',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.3 (30-June-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Push-notifications about travelling on the global map added.',
          },
          {
            type: 'text',
            text: 'All armor durability increased. (by experiment this was about 30% more)',
          },
          {
            type: 'text',
            text: 'Italian, German, French localizations added.',
          },
          {
            type: 'text',
            text: 'Changes added in some recipes for crafting weapons and other items.',
          },
          {
            type: 'text',
            text: 'Order of some objects’ recipes changed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.4 (07-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'App loading problem occurred with some players fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.5 (14-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bravo bunker was restarted.',
          },
          {
            type: 'text',
            text: 'It also has more enemies now.',
          },
          {
            type: 'text',
            text: 'The chopper recipe replaced the exhaust for 4 basic backpacks.',
          },
          {
            type: 'text',
            text: 'Chopper repaint opportunity (10 options!) and 5 new colors added. Gasoline drop increased.',
          },
          {
            type: 'text',
            text: 'Now you can put on and take off weapons and armor with a double tap!',
          },
          {
            type: 'text',
            text: 'Now you can quickly switch weapons from Quick Slot.',
          },
          {
            type: 'text',
            text: 'Fixed the CB radio image on minimap',
          },
          {
            type: 'text',
            text: 'Now the torch loses durability even without use as a weapon.',
          },
          {
            type: 'text',
            text: 'Toxic Spitters’ spits now decrease your cleanliness, dodge better!',
          },
          {
            type: 'text',
            text: 'Joystick lagging issue solved.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6 (Silent Update) (15-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'No reported changes',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.1 (Silent Update) (17-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) Fixed torch from staying lit on ground for long periods of time on dead AI players.',
          },
          {
            type: 'text',
            text: '(Hidden Change) First Aid Kit graphic was changed (from brown to green)',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.2 (Silent Update) (19-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) Fixed enemies at Bunker Bravo so they are all triggered together even after being reset',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.3 (Silent Update) (23-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'No reported changes',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5 (24-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Bunker alfa restarted - It’s again available for players. Vehicle parts, new traps as new enemies added to the first floor. To access other floors one has to charge and fix the battery. Wait in the nearest updates.',
          },
        ]
      },
      {
        type: 'paragraph',
        text: 'Please pay attention to the fact that if your device does not meet the recommended system requirements, the access to bunker’s lower floors will be unavailable',
      },
      {
        type: 'paragraph',
        text: 'Note: The underground part of the bunker is available for access for 24 hrs after entering the code. Don’t miss your chance!',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'There’s also a little surprise waiting for you on the first floor: a huge unstoppable Floater Bloater which can kill with a single punch.',
          },
          {
            type: 'text',
            text: 'Bunker floors are now protected by an automatic turret. Moreover, you’ll get a chance to find a minigun and use it as intended.',
          },
          {
            type: 'text',
            text: 'We keep working on the performance and removed some items that are not used in the game anymore with this update. Note that now there is trash in the inventory and boxes instead of them.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.1 (26-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Silent update).',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.2 (28-July-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'In order to make your search for the code to bunker Alfa simpler, we have added one more way to get it. Keep your eyes open in the most dangerous locations and you’ll make it. Even if it is difficult, you are always welcome to our Official Facebook page. Other survivors will be happy to give you a clue on the desired combination.',
          },
          {
            type: 'text',
            text: 'The dealer got drastically changed. Now he swaps weapon crates with different content for your stuff. Hurry up to make a nice deal! Last time it was obviously too dirty.',
          },
          {
            type: 'text',
            text: 'Decreased level of dirtying done by Toxic Spitter’s spit.',
          },
          {
            type: 'text',
            text: 'Every update makes the game better so that you could enjoy every moment in the world of Last Day on Earth. With this version we fixed a couple of old bugs and enhanced the performance.',
          },
          {
            type: 'text',
            text: '(Hidden Change) AK drop rate increased from 25% to 100% in weapon locker.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.3 (04-August-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'It seemed strange to us that you neighbour’s simplest walls could be broken only with C-4 and we decided to fix it. Now everything you need is a sharp hatchet, some time and a piece of impudence. And then, who knows what treasures there are inside.',
          },
          {
            type: 'text',
            text: 'We have drastically changed the shop and increased its range of goods. For your comfort the goods have been sorted out into categories so that everyone could find what they really need. Nice discounts and different offers will surprise even the pickiest buyers.',
          },
          {
            type: 'text',
            text: 'Overall game performance improved!',
          },
          {
            type: 'text',
            text: '(Hidden Change) Minigun drop increased to 33%. Chopper fork drop chances introduced.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.4 (12-August-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'It seems that the generator has enough power to get down to the second floor of the alfa bunker, but there are even more dangers and some unpleasant surprises waiting for you inside.',
          },
          {
            type: 'text',
            text: 'The chances to get chopper parts in final boxes were increased. Time to start engines!',
          },
          {
            type: 'text',
            text: 'There is a new weapon in the game - Zip gun. Easily assembled, shoots fine, can be a huge threat in experienced survivors’ hands.',
          },
          {
            type: 'text',
            text: 'More convenient weapon usage! An outworn item automatically gets changed for a new one from quick slot.',
          },
          {
            type: 'text',
            text: 'In order to excite the most sophisticated weapon fans we have added some modifications to the game: extended magazine, silencer, collimator and laser sights. Look for the samples in bunkers.',
          },
          {
            type: 'text',
            text: 'We have added a new resource - aluminium. It will be used when building weapons and some constructions. Pay attention to new recipes in melting furnace and workbench. Now you can craft Gunsmith Bench. Use it to make firearm parts.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Engine parts drop removed from Airdrops. Engine part drop rate increased to 33% in the bunker.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Guns drop rates from the bunker randomized and armor drop rate drastically decreased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Changed where weapons no longer do damage on breaking hit.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Frenzied Giant\'s hitrange increased by 50%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Chopper fork drop rate increased by 5%',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch of 3x hit on every crouch hit fixed.',
          },
        ]
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/PQO4CHj_aKw?start=23',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.5 (19-August-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We made it simpler to complete bunker Alfa. To open terminals you don’t  need resources anymore. One needs them only to fix the generator.',
          },
          {
            type: 'text',
            text: 'Turret’s strength drastically decreased while gas mask strength increased by 50%.',
          },
          {
            type: 'text',
            text: 'Getting bunker code is much simpler now. A soldier corpse used to only visit red locations and now you can meet him in less dangerous places.',
          },
          {
            type: 'text',
            text: 'In iron deposits there will be a new kind of ore, Bauxite, dropped with certain probability. It can be smelted into Aluminium Bars. Look for it carefully in the most dangerous game locations!',
          },
          {
            type: 'text',
            text: 'There are iron tools in the game now. They are firmer than stone ones and they are a great reason to visit neighbours once more.',
          },
          {
            type: 'text',
            text: 'We added a new type of fuel for your machines - Charcoal. You can get it using Campfire, burning Wood or Planks in it.',
          },
          {
            type: 'text',
            text: 'We keep on working in the technical side of Last Day on Earth and with this update we tried to improve the performance as much as possible. Our efforts lead to the fact that iPhone 5 users can now get down to bunker Alfa without any problems and the game will drastically speed up for other users.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Gas tank drop rate increased again.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Fixed the breaking hit no damage glitch.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Duct tape drop rate decreased in green and yellow zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Red zone duct tape drop rate increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Armor drop rate increase in bunker lockers and end of bunker crates (Floor 2).',
          },
        ]
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/PQO4CHj_aKw?start=63',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.6 (26-August-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We have drastically changed bunker Alfa! Welcome to a new floor - Lobby.',
          },
          {
            type: 'text',
            text: 'Lobby is available to everyone no matter how powerful the device is! However, lower floors are still open to those whose devices comply with the recommended system requirements.',
          },
          {
            type: 'text',
            text: 'At killed bunker inhabitants, in boxes and ‘red’ locations you can find special Coupons. Use lobby terminal to change them in order to get the best items in the game! ',
          },
          {
            type: 'text',
            text: '24 Hours for mopping up the bunker weren’t enough? We have increased the code time and now the bunker will be available for passing in 3 days.',
          },
          {
            type: 'text',
            text: 'You don’t need resources anymore to fix the generator between the floors. By calling the elevator you can instantly go to any of the available floors. ',
          },
          {
            type: 'text',
            text: 'Tired of too many zombies in bunker halls? Zombies have scattered in the rooms so now it\'s much easier to pass bunker floors.',
          },
          {
            type: 'text',
            text: 'Bunker reset.',
          },
          {
            type: 'text',
            text: 'Minigun: We keep on working on Last Day on Earth being realistic and today Minigun got some changes. Now it will spin up before shooting, get warm and inflict more damage!',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombie horde wall destruction massively increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Horde can no longer destroy level 3 walls.',
          },
          {
            type: 'text',
            text: '(Hidden Change) M16 durability decreased by 30%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Minigun durability increased by 70%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Minigun\'s damage increased by 22%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Added 1 second delay before minigun starts firing.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bauxite farming auto trick (Only mining the ores with bauxite) was patched.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bauxite amount drop dec. By 30%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Auto can no longer be cancelled in the middle of a tree cutting or ore mining.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Duct tape amount req. To make Iron Hatchet increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Top left AI base reset.',
          },
          {
            type: 'text',
            text: '(Hidden Change) The same AI base\'s motorcycle removed.',
          },
        ]
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/3PAXogeLFko?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.7 (Silent Update) (01-September-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) Amount of fast biters in green zones increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Amount of toxic spitters increased in yellow zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) AI players show up more often in yellow and red zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) No longer need a code for bunker alfa. ',
          },
          {
            type: 'text',
            text: '(Hidden Change) Horde no longer spawns based on the welcome mat.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/3PAXogeLFko?start=135',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.8 (08-September-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'There will be events especially for Chopper appearing on the map from time to time. Hurry up to start your motorcycle to get access to new discoveries and trophies!',
          },
          {
            type: 'text',
            text: 'We have increased the chance of Chopper parts drop in lobby of Bunker Alfa to help those who haven’t assembled one yet. For example, tank drops twice as often now!',
          },
          {
            type: 'text',
            text: 'We added Bow to the game as you wanted! It comes with special shooting mechanics. The stronger you knock the bowstring, the more damage it does!',
          },
          {
            type: 'text',
            text: 'We’ve added emotions to a character. To choose one, tap and hold on your character or use an IOS force touch feature.',
          },
          {
            type: 'text',
            text: 'ReplayKit support has been added for IOS players which allows to record and stream your adventures. Show the world you play Last Day on Earth!',
          },
          {
            type: 'text',
            text: '(Hidden Change) Charcoal and Rawhide icon changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch box spot fixed on 3rd floor.',
          },
          {
            type: 'text',
            text: '(Hidden Change) New glitch boxes made up by mistake.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Deer amount increased in green and yellow zones by 50%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Wolves amount inc. By 100%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Timer added in the mailbox for daily rewards (Canned beans and water).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Several enemies moved closer together in bunker alfa.',
          },
          {
            type: 'text',
            text: '(Hidden Change) More red tickets in red zones.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/Hn3VCQE5aOU?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.9 (12-September-2017)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Fixed exploits in lower levels of the bunker Alfa.',
          },
          {
            type: 'text',
            text: '(Hidden Change) All the glitch boxes created in 1.6.8 fixed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Reduced amount of experience gained from normal farming zones from 10 to 3.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Durability on guns of AI at rest stop events significantly decreased. ',
          },
          {
            type: 'text',
            text: '(Hidden Change) Rest stop event trigger method changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Hunger and thirst level dec. Every 9s now, means 33% faster.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/Hn3VCQE5aOU?start=104',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6 (27-September-17)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We made access to northern locations simple. Reach watchtower to unlock them. ',
          },
          {
            type: 'text',
            text: 'Warm clothes and campfire will help you not to freeze during the trip.',
          },
          {
            type: 'text',
            text: 'Even cold couldn’t stop the virus from spreading. New enemies that have already adapted to the weather conditions are waiting for you.',
          },
          {
            type: 'text',
            text: 'If you track and catch a fox, you can use its fur.',
          },
          {
            type: 'text',
            text: 'In new locations there will be resources that can be obtained with iron tools.',
          },
          {
            type: 'text',
            text: 'Pay attention to the changes in the recipes of Generator, Storage and other items.',
          },
          {
            type: 'text',
            text: 'We added metal walls and changed the required amount of resources for building other walls.',
          },
          {
            type: 'text',
            text: 'When Trip Wire Trap gets activated, you will receive an attack notification on your device.',
          },
          {
            type: 'text',
            text: 'We changed the number of slots in chests and the inventory size. Now it will be much easier to put everything in order.',
          },
          {
            type: 'text',
            text: 'Not all game variables are decided once and forever. Today we have changed the time of access in bunker again (Now you will have two days), so that you could change coupons and get rewards more often.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Backpack storage space decreased from 8 to 5.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Inventory slots went from 8 to 10. (Overall -1)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Various recipes were added mostly including iron and steel plates.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Weapons with 40-60 % durability added in bunker chests/lockers.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bunker alfa reset timer changed to 2 days.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Energy system changed resulting in less energy used for longer distances.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Recipes of more than 15 craftable items changed. Biggest change being Swat Armor req. Steel plates to make, and gunsmith bench also requires steel plates instead of aluminium wires. Recipes changed: Zip gun, Glock 17, Acid bath, Gunsmith bench, Floor lamp, Medical table, Electric generator, Trunk, Cosy couch, Tactical gear, Swat gear, Bed, Iron Hatchet & Iron pickaxe, Radio tower.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Herd of deer added in one of the rest stop events.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Map reshuffled to adjust winter and oak zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Icon of charcoal changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Few Oak trees and foxes added in normal red zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Chopper storage slots increased from 3 to 4.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bunker Alfa requires code for entry again.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Decreased chance of red ticket from Frenzied giants.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Increased chance of red tickets from chests/lockers.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Damage output of shovel and spiked devastator dec. By 1 means they no longer one shot fast biters in sneak attacks.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Strong alcohol added which reduces coldness by 80%.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Armor redistributed from chest pieces to boots.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dealer now keeps attacking you even if you leave the location and come back (After attacking him of course)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Engine parts added back to Aidboxes/Air drops.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitches and lags such as fuel will keep burning infinitely after item smelting is finished, and items could be duplicated in some way.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Minor tweaks to game graphics.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Graphics for pickup truck improved.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Lvl 3 walls cost 15 oak planks now.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/UpLSND3iwKs?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.1 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.2 (02-October-17)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '5X increased chance of tank drop in bunker boxes and 5X - in ‘engineer’ packs!',
          },
          {
            type: 'text',
            text: 'Northern locations aren’t for wimps, that’s why we decreased the ‘Rare weapon’ cost by 50%.',
          },
          {
            type: 'text',
            text: 'Fixed all found bugs.',
          },
          {
            type: 'text',
            text: 'Increased the overall game performance.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Art image changed for bunker Alfa.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Chopper spawn point changed to bottom now, always.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch of motorcycle disappearing when exiting bunker alfa fixed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Weapon glitch which allowed massive dps fixed (Stutter step and animation skip specifically for the shotgun)',
          },
          {
            type: 'text',
            text: '(Confirmed Change) The research team confirmed that the gas tank drop rate increased by 400% (5x).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Increased starvation damage from 2 to 4.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/UpLSND3iwKs?start=257',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.2.1',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) Icons changed for S.W.A.T. gear',
          },
          {
            type: 'text',
            text: '(Hidden Change) Icons changed for fur gear',
          },
          {
            type: 'text',
            text: '(Hidden Change) Icon changed for military backpack',
          },
          {
            type: 'text',
            text: '(Hidden Change) Fixed motorcycle spawn point to random again',
          },
          {
            type: 'text',
            text: '(Hidden Change) Significantly reduced the amount of red tickets you can get from winter zones',
          },
          {
            type: 'text',
            text: '(Hidden Change) Fixed two glitch spots on the 3rd floor.',
          },
          {
            type: 'text',
            text: '(Hidden Change) These changes caused extra lag',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/3cjzZvz5T3A?start=21',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.3 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.4  (14-October-17)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Sea always washes interesting things ashore. In the new event on the map you will find a wrecked ship. Talk with the old captain, maybe he has something to offer.',
          },
          {
            type: 'text',
            text: 'Whatever happens in the world, smugglers will always find something to make a good hand of. Soon they’ll remind about themselves and they might need some help this time.',
          },
          {
            type: 'text',
            text: 'At numerous requests, we increased chances of engine parts and wrench drop in aid boxes for some time.',
          },
          {
            type: 'text',
            text: 'We added two new protection packs into the blueprint list. The first pack: shirt, trousers and sneakers version with leather parts. And the second one: beanie, jacket, jeans and working boots with iron plates. Hurry up to craft!',
          },
          {
            type: 'text',
            text: '(Hidden Change) Healer and ads are back for everyone who spends money on the game (Previously it would disappear).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dead soldier w/bunker code gives 2 sets of military armor.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Visual changes to tier 1 and tier 2 gear.',
          },
          {
            type: 'text',
            text: '(Hidden Change) 6 extra crafting points for everyone.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Offline notice added.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bug where if use auto while fighting an AI, character runs to collect resources on ground (doesn\'t work everytime).',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/osDMmwJZACA?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.5 (October-23)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'With all dark soul we congratulate you on Halloween and we have prepared for the holiday:',
          },
          {
            type: 'text',
            text: 'Now you can grown pumpkin in garden beds and cook delicious soup!',
          },
          {
            type: 'text',
            text: 'There will be special objects everywhere: zombies’ brain, teeth, eyes that one will be able to change for holiday trophies: a pumpkin helmet, a zombie collar and a pattern for Chopper.',
          },
          {
            type: 'text',
            text: 'On locations you will be able to find a cemetery plus something interesting in tombs.',
          },
          {
            type: 'text',
            text: 'During the holiday healer will visit you twice a day.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Offline notice removed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Carrots changed to changed to pumpkins.',
          },
          {
            type: 'text',
            text: '(Hidden Change) New items for halloween event (eyes, brain, teeth)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dead soldier dropping military gear fixed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) No longer can use emotions while holding generator.',
          },
          {
            type: 'text',
            text: '(Hidden Change) No longer able to activate surrender animation while walking',
          },
          {
            type: 'text',
            text: '(Hidden Change) Healer shows up twice a day, on a schedule.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shipwreck changed to only 1 item every time instead of 3. (People who bought additional crates would still get 3 free boxes every time)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Smuggler\'s camp revamped completely.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Unconfirmed glitch where zombie horde destroys level 3 walls.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/A-BtQfR1wp8?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.6 (November-1)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'If you have any questions on the game, now it\'s easier to contact our technical support team. Look for the proper button in the game settings!',
          },
          {
            type: 'text',
            text: 'The holidays is over; so some items disappointed into thin air while others will stay with you for some more time.',
          },
          {
            type: 'text',
            text: 'As always, fixed bugs and optimized the game.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Franky removed from dealer.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombie parts turned to trash.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Graphics messed up where it shows white square as thumbnail for seasonal items.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Tier 2 gear visuals changed again.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Size of auto and crouch button increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch where we you can get 3x damage on deer if crouched and hit even if they spot you.',
          },
          {
            type: 'text',
            text: '(Hidden Change) support button added to settings.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Settings UI revamped.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Confirmation box added for account disconnect.',
          },
          {
            type: 'text',
            text: '(Hidden Change) IOS version added save as for recorded videos and stream button in settings.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Armor shuffled from pants to shoes in addition to previous armor addition to shoes.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/s5uVU900NFk?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.7 (November-3)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We updated the event with a wrecked ship and now you can get a cargo part if you manage to handle this.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Graphics bug of halloween items fixed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Loading screen picture is bigger now.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/s5uVU900NFk?start=108',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.8 (November-14)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '5X increased chance of tank drops in bunker’s lobby boxes!',
          },
          {
            type: 'text',
            text: 'Multiple performance enhancements.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Gas tank drop rate inc by 5x.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Layout of shop changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Art of tactical and swat gear changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bunker Alfa access cards added in airdrops.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Deer acts more natural now.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  No longer able to sneak deer from front.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Healer changed, no longer cycles based on updates. Offers change every week or 2 (Awaiting confirmation).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shipwreck can be used to spawn healer 3 to 4 times a day.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Healer now leaves if you exit the map twice.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Guns looks shinier in inventory and in hand.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Improvements to data sync system.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/vKqivH18lXU?start=27',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.9 (November-26)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Save an army specialist and get access to a new mode with special enemies.',
          },
          {
            type: 'text',
            text: 'Earn a reputation among the army and you’ll be able to get rare items and even modify your weapon!',
          },
          {
            type: 'text',
            text: 'Fight a zombie type - The Blind One and get trophies for killing it.',
          },
          {
            type: 'text',
            text: 'Welcome new weapons: SCAR, Dual Berettas and Multi-Shot grenade launcher, they will make your trip to the bunker a bit more comfortable. Also clean up in the new Alfa Shower room',
          },
          {
            type: 'text',
            text: '(Hidden Change) Easy mode sprinter FGs now have same speed as others.',
          },
          {
            type: 'text',
            text: '(Hidden Change) No longer able to sneak on enemies in lobby of bunker.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Patrol zombies no longer move in Bunker Alfa.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Design changes to shop.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Lightning added FG room in floor 2 near the terminal.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Graphical Changes the locker room in Lobby.',
          },
          {
            type: 'text',
            text: '(Hidden Change) VSS with full durability now accessible via floppy disks.',
          },
          {
            type: 'text',
            text: '(Hidden Change) White paint added.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Electronic circuit reintroduced.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Acid bath finishable.',
          },
          {
            type: 'text',
            text: '(Hidden Change)Infected crate added in floppy disk coordinates.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shipwreck removed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Leopard chopper pattern obtainable (Floppy disks).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Other patterns drop rate inc. In red crates.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dual berettas, FN Scar & Grenade launcher added. Obtainable from specialist at bunker.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Enemies lose armor when they can\'t reach you (i.e in a cage room). (Hardmode).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch where you can get 3x damage even enemies see you while in crouch.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/2dMiJZScZHI?start=16',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.9.1 (Silent Update)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) Fixed glitch where you can get 3x damage on enemies that see you in the bunker',
          },
          {
            type: 'text',
            text: '(Hidden Change) Blind one no longer takes huge damage from melee weapons when stunned.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch fixed where parasites won\'t attack if shot with a long range weapon.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Way less AI in red winter zones with fur gear.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dealer has better trades (Awaiting confirmation).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shiny gun effect fixed.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/2dMiJZScZHI?start=112',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.10 (December-5)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Minor bugs fixed and game optimization improved.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shower added in Bunker alfa lobby.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Game logo and notifications bar changed to christmas theme.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Free box added in shop which gives random rewards every hour.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Boxes in the shop changed, from giving 2 iffy and 1 decent item, they now give one 1 good item and a chance at a rare item.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Experience items for specialist removed from winter zones',
          },
          {
            type: 'text',
            text: '(Hidden Change) AI and other spawned enemies get stuck behind trees and sit there.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Character gets stuck behind trees in auto.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/ZyE9IYaq3gQ?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.11 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.12 (December-16)',
      },
      {
        type: 'paragraph',
        text: 'Christmas is coming and we are happy to present an update dedicated to this holiday:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Decorate a Christmas tree and collect ornaments and your gifts won’t make you wait.',
          },
          {
            type: 'text',
            text: 'Added new event ‘Holiday Van’. Keep an eye on the global map, it will appear towards the holiday!',
          },
          {
            type: 'text',
            text: 'Holiday weapons and armor! Magic and fireworks attached.',
          },
          {
            type: 'text',
            text: 'Treats to any taste that also give bonuses to stats.',
          },
          {
            type: 'text',
            text: 'Christmas without a turkey on the holiday table? No way!',
          },
          {
            type: 'text',
            text: 'Enable a device that can restart the Alfa bunker.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Tried to fix bunker glitch by removing barrels',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch so we can no longer remove equipment with a double click',
          },
          {
            type: 'text',
            text: '(Hidden Change) Glitch so that double click cannot be used to store items in an full chest even if it could be stacked',
          },
          {
            type: 'text',
            text: '(Hidden Change) Introduced the chance of getting batteries and light bulbs in the green zone',
          },
          {
            type: 'text',
            text: '(Hidden Change) Increased the chance of getting batteries and light bulbs in yellow and red zones.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/y267-0S4Dpk?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7 and 1.7.1 (January-5)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We added a new event called Raids!',
          },
          {
            type: 'text',
            text: 'Attack other survivors’ bases that raiders will point to!',
          },
          {
            type: 'text',
            text: 'Crush everything on your way and take your loot!',
          },
          {
            type: 'text',
            text: 'Build powerful defense for your base and revenge survivors that attacked you!',
          },
          {
            type: 'text',
            text: 'C4 is available now! Look for it in the bunker and other dangerous locations.',
          },
          {
            type: 'text',
            text: 'It\'s up to you to decide whether to raid others’ base or not. But as soon as you agree to raid, other survivors will be able to attack your base as well.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  When you open the free hourly box you could\'ve close it when you click "take" and do not wait for the animation and you would\'ve still get your reward but now you should watch the animation or you won\'t get anything.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Friendly AIs have Green icons on the minimap.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  New AI - Raiders, you can put up to 8 items to share with them after raid.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  C4 is obtainable in the Bunker ( red chest ), red zone and floppy disks.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Frost Staff deals more damage',
          },
          {
            type: 'text',
            text: '(Hidden Change)  You can cancel auto when you chop or mine xD.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Bugs with turret in bunker fixed and art in blueprint changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Carrot seeds changed name to seeds.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Animations of weapons are slower but the attack speed and damage is the same.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Oak tree icon changed on minimap.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  AI bases chests reset like they weren\'t open but there isn\'t anything. Glitch',
          },
          {
            type: 'text',
            text: '(Hidden Change)  You can\'t break walls in the north AI base. glitch',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Cant paint trunks anymore.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Bunker footstep sounds changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Lvl 4 walls need metal cutter.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Floppy loots contain 2 C-4 instead of 3',
          },
          {
            type: 'text',
            text: '(Hidden Change) Big one is invincible and can regenerate when hp below 200.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombie spawning rates is slightly increased.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombies won\'t drop any loots(ropes or piece of cloths) now.',
          },
          {
            type: 'text',
            text: '(Hidden Change) TBO always spawns in revenge raids.',
          },
          {
            type: 'text',
            text: '(Hidden Change) C-4 explosives are available in normal red zones.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Toxic Abom and Floater bloater won\'t use their jump power.',
          },
          {
            type: 'text',
            text: '(Hidden Change) No more noise when hit by spikes',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bunker red coupon crate aka combat gear chest contains 1 c4 instead of 2',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/b3f4QQZdfF0?start=38',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.2 (January-18)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text:'Removed holiday items except turkey and flare gun.',
          },
          {
            type: 'text',
            text:'Complete raiders’ tasks to attack neighbours’ bases more often.',
          },
          {
            type: 'text',
            text:'Now breaking 1 level walls makes less noise.',
          },
          {
            type: 'text',
            text:'After a deal with Raiders other survivors will be able to attack your base for 24 hours.',
          },
          {
            type: 'text',
            text:'Raiders can steal your stuff on others’ bases and bunkers.',
          },
          {
            type: 'text',
            text:'Changed radio. Look for useful contacts on the correct frequency.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  Lvl 3 wall recipe from 15 to 10 oak planks (stone brick stays the same).',
          },
          {
            type: 'text',
            text:'(Hidden Change)  New changes to packs in shop including C4 and Safe, and the drop rate is extremely rare.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  Pine log and stone buy-able again with real money.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  3x3 lvl3 and 3x3 lvl4 walls can be bought in shop now.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  Crafting items (anything) makes noise now while raiding.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  Noise bar only increases when the wall breaks, not when you are hacking it.',
          },
          {
            type: 'text',
            text:'(Hidden Change)  Raider now has quests, requiring',
          },
          {
            type: 'list',
            listItems:
            [
              {
                type: 'text',
                text: 'clear bunker normal mode'
              },
              {
                type: 'text',
                text: 'trade with dealer 3 times'
              },
              {
                type: 'text',
                text: 'open 25 red zone chests'
              },
              {
                type: 'text',
                text: 'craft 5 iron hatchets'
              },
              {
                type: 'text',
                text: 'Find or own 1 C4'
              },
            ],
          },
          {
            type: 'text',
            text:'(Hidden Change)  Can only place maximum of 80 spikes (was 300).'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Visual changes to chest/box/trunk/locker (looks more opened when opened)'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Removal of Halloween items such as hat, the head and broomstick. Also, Christmas Items had disappeared, including the Workbench and the Christmas Tree.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Lvl 1 walls make half a bar noise now with regular hatchet'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Lvl 2 walls make 2 bars of noise.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  New threat level: It adds + 1 day timer for every threat level increase. It drops by 1 level each time you get raided and increased by 1 level each time you raid someone.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  And the days of being in threat keep increasing even after 4 days, if you keep raiding.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  The account synchronization between devices is now completed (or almost complete), which only one device can be used at a time now.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Raiders can now be called anytime through tuning with the cb radio. Even if you reject them and then they leave, you will be able to call them again from cb radio. No need to wait 24 hrs.Also, bunker code can also be tuned on the radio.'
          },
          {
            type: 'text',
            text:'(Hidden Change)  Crafting bandages also makes noise. (Basically crafting anything).'
          },
          {
            type: 'text',
            text:'(Hidden Change)  threat level caps out at 4 , but days of being in threat keep increasing even after 4 days, if you keep raiding.'
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Bug Fixes',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'All guns that had fire rate animation reduced in the previous update got fixed back to normal.'
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/9_NFudzpB6A?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.3 (February-3)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We localized the game into Chinese simplified and Chinese traditional. Thus, we are happy to present you a special update!',
          },
          {
            type: 'text',
            text: 'New event on the map. Complete new tasks and get special rewards.',
          },
          {
            type: 'text',
            text: 'Want to prove to be the best in battles? Compete with a new character in destroying dangerous zombies.',
          },
          {
            type: 'text',
            text: 'New weapon and armor. Feel like a true warrior!',
          },
          {
            type: 'text',
            text: 'Try new dishes with bonuses to stats.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Bows do 1 damage to turrets and 1-3 to fg.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Home base logo changed. (I THINK).',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shop coins have chinese logos on them and new kind of cheap packs for raids i.e simply hatchets+c4, etc etc',
          },
          {
            type: 'text',
            text: '(Hidden Change) Threat attack screen, when tapped on, now shows days, hrs, minutes as well as seconds. (I think this wasn\'t there before, anyone confirm?)',
          },
          {
            type: 'text',
            text: '(Hidden Change) They fixed the bug in the chopper event where in the deer event the guy with a skull crusher wouldn\'t get alerted even if you hit him with a gun and it would be a free kill. No longer works',
          },
          {
            type: 'text',
            text: '(Hidden Change) Trunk can be repaint now.',
          },
          {
            type: 'text',
            text: '(Hidden Change) A new stack up button has been added.( also work for swap)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Stonecutter bench and Workbench looks changed a bit.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Turret\'s logo has been changed a bit in blueprint list.',
          },
          {
            type: 'text',
            text: '(Hidden Change) AI contains medium type rare items including duct tape.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shop has been changed, different kinda new box added in shop.',
          },
          {
            type: 'text',
            text: '(Hidden Change) New loading screen notes has been added.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombies dead bodies won\'t vanish when reentered the zone again.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Increased the amount of weapons you get in green zone chests.',
          },
          {
            type: 'text',
            text: '(Hidden Change) wild turkey in zone decreased.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cVLTTzBhdJM?start=76',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.4 (Skipped because the number 4 is considered an unlucky number in China)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.5/6/7 (February-11, iOS and Android)',
      },
      {
        type: 'paragraph',
        text: 'It\'s Chinese New Year and we are excited to invite you to celebrate it with us:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'A four-legged friend will get you to the new location Silent Abode. Help a wise elderly to get ready to see the new year in. Light up lanterns and cope with a beast hiding in the mist.',
          },
          {
            type: 'text',
            text: 'New event on the map. Help a wise elderly to get ready to see the new year in',
          },
          {
            type: 'text',
            text: 'Look for special items and exchange them for meals with bonuses at Dealer’s. Don’t forget that you have to assemble a radio for Dealer to appear',
          },
          {
            type: 'text',
            text: 'What kind of New Year is it without crackers and fireworks? Look for them on a special location and don’t forget a torch',
          },
          {
            type: 'text',
            text: 'We reduced energy consumption when traveling on the global map during the holiday by half. The offer will last from 15 to 25!',
          },
        ],
      },
      {
        type: 'paragraph',
        text: ' ',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'A four-legged friend will get you to the new location Silent Abode. Help a wise elderly to get ready to see the new year in. Light up lanterns and cope with a beast hiding in the mist.',
          },
          {
            type: 'text',
            text: 'Look for special items and exchange them for meals with bonuses at Dealer\'s. Don\'t forget that you have to assemble a radio to unlock Dealer!',
          },
          {
            type: 'text',
            text: 'What kind of New Year is it without crackers and fireworks? Look for them on a special location and don\'t forget a torch--zombies will definitely hate this!',
          },
          {
            type: 'text',
            text: '(Hidden Change) Walls have designs on them to celebrate the event.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Oranges/Kumquat added into the game to exchange with the dealer',
          },
          {
            type: 'text',
            text: '(Hidden Change) Added a timer on your inventory to show how much time is left for a certain boost.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Military armor art has been changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Loading screen has logo \'most innovative game of 2017\' now.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Added notifications turn on/off in settings.',
          },
          {
            type: 'text',
            text: '(Hidden Change) when we kill an ai they drop their weapon in the ground instead of holding it.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dining table has changed a bit. Now it\'s decorated with Chinese foods on it.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shop has been changed a bit too. Now they added package no. with shops crate.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Sneak attack in bunker lobby is back to normal. Now u can sneak attack in bunker lobby.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Design for Couch changed to Chinese theme.',
          },
          {
            type: 'text',
            text: '(Hidden Change) glitch - invisible walls',
          },
          {
            type: 'text',
            text: '(Hidden Change) u can sneak attack zombies in fireworks field, even if they see you.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cVLTTzBhdJM?start=278',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.8 (February-27, Android)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Now you can change your appearance. Hair length or skin color - no problem! And you can finally play as a female character!',
          },
          {
            type: 'text',
            text: 'Sometimes Dealer will contact you via radio and ask for certain things to make a deal.',
          },
          {
            type: 'text',
            text: 'Increased chances of “clean” boxes drop on the locations indicated on the floppy with coordinates.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dealer twice a day(cb radio at 100 and normal at 70)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Raid no death allowed, earlier 1 death was allowed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Noise no longer increases when you exit and enter a raid base.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Sound meter graphics changed along with points system added.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Tactical cap graphics changed.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Turret logo changed again to lvl 1 turret.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Raiding system has definitely changed. Raiders destroy way more lvl 3 walls than before and loot a lot deeper into the base, but in return also give amazing bases to revenge raid.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Sewing machines looks changed a bit.',
          },
          {
            type: 'text',
            text: '(Hidden Change) CB radio holds numbers of news instead of exclamation mark.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cVLTTzBhdJM?start=422',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.9 (March-5, Android; March-7, iOS)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'It seems that the generator in the bunker is charged enough to get the elevator down to the 4th floor.',
          },
          {
            type: 'text',
            text: 'Raiders have new quests which means even more ways to gain their goodwill.',
          },
          {
            type: 'text',
            text: 'Turret recipe changed. Now it can be used for protecting your house.',
          },
          {
            type: 'text',
            text: 'In order to make your way to chests during raids easier we added an opportunity to break furniture with a hatchet.',
          },
          {
            type: 'text',
            text: 'There’s a temporary oak location in the game with interesting events.',
          },
          {
            type: 'text',
            text: 'We have added the Korean language.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'NEW IN VERSION - 1.7.9',
      },
      {
        type: 'paragraph',
        text: 'RAID CHANGE',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We have added an opportunity to break furniture with a hatchet so that nothing stands in your way to others\' chests. But be careful - that\'s not relevant for the furniture made of other items upon crafting.',
          },
          {
            type: 'text',
            text: 'Raiders have new quests which means you can try other ways to gain their goodwill, for example make a set of tactical armor or kill 15 Toxic Abominations.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'TURRET',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'We have changed the turret recipe and now you can use it for your house defense.',
          },
          {
            type: 'text',
            text: 'Note that the turret shoots only warm blood targets and doesn\'t shoot zombies.',
          },
          {
            type: 'text',
            text: 'The turret can be upgraded. Look for special parts in the bunker to do this. If the turret is destroyed, you can repair it with these parts.',
          },
          {
            type: 'text',
            text: 'You can build up to 4 turrets, they are all gasoline powered.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'NEW LOCATIONS',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'There is a temporary oak location in the game now, where you\'ll be able not only to find resources but also take part in interesting events: welcome raiders, wild animals and lumberjacks!',
          },
          {
            type: 'text',
            text: 'The power supply of the bunker Alfa is almost repaired and the generator is charged enough to get the elevator down to the 4th floor. Look for useful items and turret parts but be careful: new traps won\'t make them wait.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: '[KOREAN]',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'There is the Korean language in the game now and more players can feel comfortable exploring the world of Last Day on Earth.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: ' ',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) New look and recipe for military armor',
          },
          {
            type: 'text',
            text: '(Hidden Change) Shop has new stuff including turret parts',
          },
          {
            type: 'text',
            text: '(Hidden Change) dead deer looks bigger',
          },
          {
            type: 'text',
            text: '(Hidden Change) New animal (diseased wolf)',
          },
          {
            type: 'text',
            text: '(Hidden Change) dog with skills are mentioned in bunker',
          },
          {
            type: 'text',
            text: '(Hidden Change) New raiders quests ',
          },
          {
            type: 'list',
            listItems:
            [
              {
                type: 'text',
                text: 'clear bunker 2nd floor',
              },
              {
                type: 'text',
                text: 'clear bunker 3rd floor',
              },
              {
                type: 'text',
                text: 'clear 4th floor',
              },
              {
                type: 'text',
                text: 'kill 15 toxic abominations in dangerous zones',
              },
              {
                type: 'text',
                text: 'craft 5 chests (lv2)',
              },
              {
                type: 'text',
                text: 'make 15 spike trap',
              },
              {
                type: 'text',
                text: 'make a full set of tactical armor',
              },
              {
                type: 'text',
                text: 'make 20 aid kits',
              },
              {
                type: 'text',
                text: 'kill the blind one',
              },
              {
                type: 'text',
                text: 'visit 5 air drops',
              },
              {
                type: 'text',
                text: 'make 20 iron plates',
              },
              {
                type: 'text',
                text: 'kill 5 turrets ',
              },            ],
          },
        ],
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: '(Hidden Change) We need hatchets to open chests during a raid.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Acid bath\'s size smaller now',
          },
          {
            type: 'text',
            text: '(Hidden Change) Melting furnace doesn\'t release any Carbon diOxide (CO2)aka fumes.(might be a bug)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Campfire doesn\'t show any fire when u put something to cook.(bug)',
          },
          {
            type: 'text',
            text: '(Hidden Change) In bunker alfa lobby there is a door which always said "The door is stuck" now it says "A dog with the skill true friend is required"',
          },
          {
            type: 'text',
            text: '(Hidden Change) Generator room in bunker Alfa 3rd floor has changed .Now the generator which we needed to power up has been shifted to 4th floor.',
          },
          {
            type: 'text',
            text: '(Hidden Change) They removed all the Chinese foods but Chinese armors and weapons still exist in the game.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Gas mask not working (Bug)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Fur armor doesn\'t protect u from cold rooms in floor 4 .(might be a Bug)',
          },
          {
            type: 'text',
            text: '(Hidden Change) C4 blows up the chests around it (meaning we can loot them).',
          },
          {
            type: 'text',
            text: '(Hidden Change)  They localized the shop currency.',
          },
          {
            type: 'text',
            text: '(Hidden Change) ATV no longer blocks your way as you can slip through the edge of the 3x3 space.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Upon returning to base, you will approach your base from different direction (I used to appear on south-west, now I appear on north-west and currently always north-east',
          },
          {
            type: 'text',
            text: '(Hidden Change) There is a weird bug which restores all your destroyed walls and all the trees/resources.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Raiders can steal from pickup truck.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cVLTTzBhdJM?start=516',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.9.1&2 (Silent Updates)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'home location enter freeze fix',
          },
          {
            type: 'text',
            text: 'restored fire particles in firepits and such',
          },
          {
            type: 'text',
            text: 'zombie corpses problem after the raid fixed',
          },
          {
            type: 'text',
            text: 'gas mask fixed',
          },
          {
            type: 'text',
            text: 'hole in the ground (4th floor bunker) fixed',
          },
          {
            type: 'text',
            text: 'hanging meat collider slightly reduced to match the size of the meat',
          },
          {
            type: 'text',
            text: 'game loading freeze fix',
          },
          {
            type: 'text',
            text: 'charge attack of the Blind One has been also fixed',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cVLTTzBhdJM?start=694',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.10 (March-14, Android; March-16, iOS)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Various minor bug fixes.',
          },
          {
            type: 'text',
            text: 'Multiple performance enhancements.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  The bug that doesn\'t save army gear quest still persists.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Update introduced another bug. Connect button has stopped working again.(they fixed it later in the update)',
          },
          {
            type: 'text',
            text: '(Hidden Change)  leaving and re entering makes 16 noise.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Smaller second and backpack slot items.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Raiders quests reset removed.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Trip-wire causes 4 noise.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cg_FGe0OQuU?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.11 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.7.12 (March-22)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'There are dogs in the game now!',
          },
          {
            type: 'text',
            text: 'Look for a new building in the list of blueprints - a dog crate where you can keep little puppies.',
          },
          {
            type: 'text',
            text: 'Breed animals, look for the right match for them and grow new species.',
          },
          {
            type: 'text',
            text: 'Many dogs have born traits: bloodhound will help your look for rare items, hunter - to track rare animals.',
          },
          {
            type: 'text',
            text: 'And you’ll be able to take some dogs with you, you will need them when passing hard-to-reach places and encountering enemies.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Added pets section in shop.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Added special treats for dogs in shop and the ability to buy dogs.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Added football helmet in a pack in shop.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Fixed the bug where chest could be opened through a wall.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Added 2 dog boxes trades at dealer\'s.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Descriptions of Raw Meat has changed',
          },
          {
            type: 'text',
            text: '(Hidden Change)  The blind one did not slap us five times now, he swing his head for the fifth time instead. But the damage still the same',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Death no longer allowed while raiding even if it is just one time, the base gone.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  As soon as we entered other survivor\'s base a random wolf attacks us.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Chopper Fuel consumption decreased by 1',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/cg_FGe0OQuU?start=87',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.8 (April-5, Android)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Access to Wall Sector 7 open! There you will find everything you need for studying the infected zone.',
          },
          {
            type: 'text',
            text: 'Cluster of anomalies spotted on the global map. One can visit this location only with a protective costume.',
          },
          {
            type: 'text',
            text: 'Be ready to encounter other survivors in the new infected zone. Power armor radio module will let you exchange messages with random players that appear to be nearby.',
          },
          {
            type: 'text',
            text: 'Cluster of anomalies is just the beginning of the process of establishing direct contact between survivors.',
          },
          {
            type: 'text',
            text: '(Hidden Change) zoomed view of base.',
          },
          {
            type: 'text',
            text: '(Hidden Change) double puppy glitch fixed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Juicy steak icon changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Juicy steaks description changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) A.I can heal 3 times in pine n limestone zones',
          },
          {
            type: 'text',
            text: '(Hidden Change) AI\'s can now farm wood, attack enemies, loot chests etc.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Spitters now spit differently',
          },
          {
            type: 'text',
            text: '(Hidden Change) The room that has *door stuck* in bunker alfa can no longer be opened, at least for the dog.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Sometimes Aboms slides in his ass instantly after he smashes. (bug?)',
          },
          {
            type: 'text',
            text: '(Hidden Change) We can now sneak by zombies upto the smallest circle in the mini map even if we get stinky.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  character speech bubble has a black background.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  steak changed - look and text.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  bug with wolves. They are moving very slowly and dealing no damage.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  name of titan bar changed to titanium.',
          },
          {
            type: 'text',
            text: '(Hidden Change) normal backpack icon changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) when you modify a dog it shows his skills in a new window.',
          },
          {
            type: 'text',
            text: '(Hidden Change) you can get a minigun in the caged room outside of bunker alpha with true friend.',
          },
          {
            type: 'text',
            text: '(Hidden Change) the big one damage in raid increases. In red zone doesn\'t.',
          },
          {
            type: 'text',
            text: '(Hidden Change) name changed to ldoe craft and zombie',
          },
          {
            type: 'text',
            text: '(Hidden Change) AI players now run away when they are losing the battle',
          },
          {
            type: 'text',
            text: '(Hidden Change)  Removed fixing the destroyed lvl 1 walls after zombie horde attacks ( u can build back the destroyed walls without having to collect every destroyed wall as it was before)',
          },
          {
            type: 'text',
            text: '(Hidden Change) Raiders aren\'t watching u when u move around them at base.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Puppy colors changed in shop.',
          },
          {
            type: 'text',
            text: '(Hidden Change) There are some codes or numbers written on chests in black colour.',
          },
          {
            type: 'text',
            text: '(Hidden Change)  sounds effect added to game on game load',
          },
          {
            type: 'text',
            text: '(Hidden Change) Zombies no longer get aggro to you immediately if you hit them and then leave the zone, until you go to them.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Equipping and unequipping the suit in sector 7 removes stinky',
          },
          {
            type: 'text',
            text: '(Hidden Change) Breeding gives offer to buy opposite gender',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/Pj5rdbQ-RJg?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.8.1 (April-11, Android)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'A glowing weapon stand will make your shelter more impressive. Now you can display your trophies and gaze upon them lovingly',
          },
          {
            type: 'text',
            text: 'You can now rename your pet at any time',
          },
          {
            type: 'text',
            text: 'New character emotions will allow you to control your pet\'s actions if it has the True Friend skill',
          },
          {
            type: 'text',
            text: 'Zombies now deal less damage to each other in the heat of battle',
          },
          {
            type: 'text',
            text: 'Workbench notifications have been added. You can manage notifications in the game\'s settings',
          },
          {
            type: 'text',
            text: '(Hidden Change) Raid change:-chest health resets if u go out of the base u r raiding',
          },
          {
            type: 'text',
            text: '(Hidden Change) if tbo hits the wall while u r on the other side of it the hit counter keeps increasing even if he\'s hitting the wall.',
          },
          {
            type: 'text',
            text: '(Hidden Change) the shop changed : the building divisio',
          },
          {
            type: 'text',
            text: '(Hidden Change) fixed clear data exploit for dogs, now altering dog lvl after breeding is not possibl',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.8.2 (April-26, Android)',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'New ability system! Standard actions in locations earn you exploration experience and points for various skills',
          },
          {
            type: 'text',
            text: 'The location entry screen has been updated',
          },
          {
            type: 'text',
            text: 'A Recycler is now available. Give new life to all the junk in your chests',
          },
          {
            type: 'text',
            text: 'Certain recipes have been changed',
          },
          {
            type: 'text',
            text: 'The Gunsmith Bench is temporarily unavailable. Its functions are now fulfilled by the new Recycler',
          },
          {
            type: 'text',
            text: 'The chance of a fuel tank dropping in the bunker has been increased',
          },
          {
            type: 'text',
            text: '(Hidden Change) Some sort of energy glitch/change where some people are getting too high energy counts for close zones (Saw it in resbakk\'s video)',
          },
          {
            type: 'text',
            text: '(Hidden Change) During peeing or shower, all interactive options go off and you cannot heal',
          },
          {
            type: 'text',
            text: '(Hidden Change) Diseased wolf attack sound changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Added plastic. Recipes changed to plastic',
          },
          {
            type: 'list',
            listItems:
            [
              {
                type: 'text',
                text: 'Medical table',
              },
              {
                type: 'text',
                text: 'Dining table',
              },
              {
                type: 'text',
                text: 'Fishing rod',
              },
              {
                type: 'text',
                text: 'Torture device',
              },
              {
                type: 'text',
                text: 'Weapon stand',
              },
              {
                type: 'text',
                text: 'Chemistry station',
              },
              {
                type: 'text',
                text: 'Explosive material',
              },
              {
                type: 'text',
                text: 'Tactical backpack',
              },
              {
                type: 'text',
                text: 'Electronics lab',
              },
              {
                type: 'text',
                text: 'C4',
              },
            ],
          },
          {
            type: 'text',
            text: '(Hidden Change) Experience shop category and some weapon package added in store',
          },
          {
            type: 'text',
            text: '(Hidden Change) Dog crate icon changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Auto chopping a tree or hitting a stone can be cancelled only with the auto button itself. Joystick no longer works. But auto walk can still be cancelled even with joystick',
          },
          {
            type: 'text',
            text: '(Hidden Change) Foxes now appeared in yellow and green zones',
          },
          {
            type: 'text',
            text: '(Hidden Change) When you press the sneak button your character stops moving',
          },
          {
            type: 'text',
            text: '(Hidden Change) The game to loads longer',
          },
          {
            type: 'text',
            text: '(Hidden Change) can\'t interact with gunsmith bench. When you click on it, it says - "one day it will come in handy"',
          },
          {
            type: 'text',
            text: '(Hidden Change) added a dead survivor and a dead frenzied giant at the gate in sector ',
          },
          {
            type: 'text',
            text: '(Hidden Change) parachute looks smaller in airdrop even',
          },
          {
            type: 'text',
            text: '(Hidden Change) u can\'t trick the animals in sneak attack any more (when u hit the animal while running away from u and u hit sneak just after hitting attack so it gives u triple damage won\'t work anymore',
          },
          {
            type: 'text',
            text: '(Hidden Change) can\'t open doors while freezing in floor 4 anymor',
          },
          {
            type: 'text',
            text: '(Hidden Change) You can only eat food until you\'re character is full up or fully healed',
          },
          {
            type: 'text',
            text: '(Hidden Change) Scrap metal stacks up to 50 now',
          },
          {
            type: 'text',
            text: '(Hidden Change) if you had gun parts in the gunsmith bench kefir gave them in the inbox',
          },
          {
            type: 'text',
            text: '(Hidden Change) something i forgot in 1.8 the events show on the map 1 by ',
          },
          {
            type: 'text',
            text: '(Hidden Change) In 1.8.1 they made that if your character is chasing something and you click the inventory he stops',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/lF12AFFf3To?start=6',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.8.3',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Zombie Cocoons have appeared in the infected zone, and it takes more than one person to destroy them. Find teammates to prevent the spread of the infection!',
          },
          {
            type: 'text',
            text: 'New tasks allow you to unlock new power armor abilities. Now you have access to the engineering multitool - you can use it to destroy the diseased cocoons.',
          },
          {
            type: 'text',
            text: 'You can’t attack other players with the multitool - your armor has a special chip that prevents it.',
          },
          {
            type: 'text',
            text: 'Don’t try to take the multitool into your base - it won’t work without your suit.',
          },
          {
            type: 'text',
            text: '(Hidden Change) New campfire.',
          },
          {
            type: 'text',
            text: '(Hidden Change) New gun skill in the sector.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Blue hp bar ',
          },
          {
            type: 'text',
            text: '(Hidden Change) New joystick look',
          },
          {
            type: 'text',
            text: '(Hidden Change) Walking through the cocoon',
          },
          {
            type: 'text',
            text: '(Hidden Change) you can sometimes see other people plant the stake when they are gathering resources.',
          },
          {
            type: 'text',
            text: '(Hidden Change) Can leave the area and it will also freeze up if you go to home screen even for a second (same fix)',
          },
          {
            type: 'text',
            text: '(Hidden Change) new offers in pet section in shop: black puppy and lvl 4 puppy',
          },
          {
            type: 'text',
            text: '(Hidden Change) batteries icon changed',
          },
          {
            type: 'text',
            text: '(Hidden Change) a glitch when going out of a base u r raiding running from the big one the game wont allow u to go back in . . It gets stuck on the loading screen',
          },
          {
            type: 'text',
            text: '(Hidden Change) added a sound when adding or removing fuel from chopper.',
          },
        ],
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/fKnoTDP1a80?start=6',
      },
    ],
  },
  {
    id: 4,
    title: 'Events',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Events',
      },
      {
        type: 'paragraph',
        text: 'Events are one of the easiest ways to get rich in Last Day on Earth. Some events are very simple, but it is hard to know how to trigger the event to happen, whereas some events are not very straightforward at all and if done wrong, can require far more resources than was needed. In this section, I will explain how to summon each event and, if applicable, the most strategic way to approach that event. There are six types of events (this section does not cover holiday events).',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Airdrops',
      },
      {
        type: 'paragraph',
        text: 'Airdrops are the most common event in Last Day on Earth. Airdrops always have one of the following weapons with 60% durability:',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Skullcrusher',
          },
          {
            type: 'text',
            text: 'Saw Mace',
          },
          {
            type: 'text',
            text: 'Machete',
          },
          {
            type: 'text',
            text: 'Glock 17',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'They also have 10 of a refined resource (pine planks, stone brick, or iron bars), 3 random amounts of generic parts and one rarer non-stackable item (ie. connecting rod).',
      },
      {
        type: 'paragraph',
        text: 'Airdrops are very poorly guarded which make them, in my opinion, one of the best ways to get rich in Last Day on Earth. This video shows you how to summon three airdrops everyday! (note: bunker reset is at midnight GMT)',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/vENdzPjte1s?start=79',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Dealer',
      },
      {
        type: 'paragraph',
        text: 'The dealer will not appear as an event until you first build your CB radio. Once this is built, it will appear once a day as long as your energy is at or below 70, you traveled at a distance of the equivalent of more than 20 energy and you used two loading screens to get to your world map. Here is a video example on how to summon the dealer. (note: bunker reset is at midnight GMT)',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/vENdzPjte1s?start=79',
      },
      {
        type: 'paragraph',
        text: 'When you visit the dealer, he will offer to trade you a weapon crate for some random items. The weapon crate has the chance of being any of the following weapons',
      },
      {
        type: 'list',
        listItems:
        [
          {
            type: 'text',
            text: 'Spiked devastator',
          },
          {
            type: 'text',
            text: 'Machete',
          },
          {
            type: 'text',
            text: 'Skull crusher',
          },
          {
            type: 'text',
            text: 'Saw blade',
          },
          {
            type: 'text',
            text: 'Katana',
          },
          {
            type: 'text',
            text: 'Glock',
          },
          {
            type: 'text',
            text: 'M16',
          },
          {
            type: 'text',
            text: 'Shotgun',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'The dealer can ask for items as simple as some beer and bolts, to expensive items like medical tables and sewing machines. This means that sometimes it is not worth it to trade with the dealer.',
      },
      {
        type: 'paragraph',
        text: 'Currently, I do not recommend using the dealer unless it is very easy to get to him and see what he is offering without using lots of energy.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Rest Stop',
      },
      {
        type: 'paragraph',
        text: 'The rest stop event is currently available every 36 hours. You have to use a motorcycle to get to the event, but you can first travel to a closer location using energy to save on gas. There three types of rest stop events you can encounter. For all of the events, I recommend using a glock and kiting enemies as you leave the area. Each time you leave, it resets the area. The first one has three guys guarding a motorcycle. I suggest going to the top right of the enemies and killing the guy with swat shoes first. Since he is the fastest one, he will stay in the front as you kill him. Then repeat this for the other character with a gun and then kill the guy with the skull crusher last. The other two are shown in this video. (note: the snorkel is now in the game and can only be found at the rest stop, but it is a very rare chance).',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/iPpuz8HSE-o?start=138',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Smuggler’s Camp',
      },
      {
        type: 'paragraph',
        text: 'The Smuggler’s camp is currently not in the game. Kefir’s original intent was for the event to be a 14 day event, but they let it go an extra day or two. They have not made a promise to bring it back anytime soon, but they did mention that we will likely see the characters Tom and Steve in future events. If you would like to see how the event played out just in case it or an event like it comes back, this video shows the event and explains the best strategy for completing it.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/IpAeOcMaAhQ?start=6',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Shipwreck',
      },
      {
        type: 'paragraph',
        text: 'The Shipwreck event is also not currently available in the game. Kefir has not made any mention as to whether or not the event will return. In fact, they never actually mentioned they removed the event in update 1.6.9.',
      },
      {
        type: 'paragraph',
        text: 'If you would like to see how the event played out just in case it or an event like it comes back, this video shows the event and explains the best strategy for completing it.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/WpHQG8T6480?start=50',
      },
    ],
  },
  {
    id: 5,
    title: 'AI Bases',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'AI Bases',
      },
      {
        type: 'paragraph',
        text: 'The LDOE player community calls the bases labeled with player names on your map, “AI Bases”. There aren’t actually any AI players building or guarding those bases, but they aren’t own by real players either. They are just placeholders for when the actual game come out. They are the exact same for all of us and they have a lot of great stuff in them that should be stolen as soon as you can. This video gives you the info you need to rob everything in the three bases closest to your base.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/3IQ0lRDlckk?start=70',
      },
      {
        type: 'paragraph',
        text: 'After you unlock the northern area of the map, you can visit the fourth AI base. This video shows you how to rob that base including the secret wall that lets you get into the second area.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/6OGA7KHUF_I?start=28',
      },
    ],
  },
  {
    id: 6,
    title: 'Tips & Tricks',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Tricks & Tips',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Elevator Trick',
      },
      {
        type: 'paragraph',
        text: 'When fighting in bunker alfa, you can use the elevator to go between floors, it resets the enemies of that floor. This can let you sneak up on some enemies twice. There are actually two ways of doing the elevator trick. This video explains the two ways and which one is faster in which situation.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/M92Tm4KZX7U?start=6',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Door Sneak Trick',
      },
      {
        type: 'paragraph',
        text: 'When you want to open a door, but not alarm the enemies on the other side. Slowly approach a door until the activation hand lights up. Staying at the maximum distance from the door possible with the lit hand, click the hand and then immediately click sneak. Watch 7 seconds of this video for a visual explanation.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/fqn8qYiowSc?start=412',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'How to Remove Your Dead Body',
      },
      {
        type: 'paragraph',
        text: 'When you die in your base, your body will stay there forever unless you die somewhere else in your base.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/e-VUV1ULmy4?start=10',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Avoiding Food Usage',
      },
      {
        type: 'paragraph',
        text: 'Designing and organizing your base can cost a lot of food and water. In fact, even farming at the green zone can use more food than you need to. This video shows how I kill myself to save food.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/e-VUV1ULmy4?start=47',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Building Three Sewing Machines',
      },
      {
        type: 'paragraph',
        text: 'It says the max is 2, but it is actually 3. :-)',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/e-VUV1ULmy4?start=80',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'The Motorcycle Magic Storage',
      },
      {
        type: 'paragraph',
        text: 'The Motorcycle has 4 extra slots of storage. These are the best 4 slots of storage in the game because you can bring it with you, but if you die, you don’t lose anything. In fact, your motorcycle with magically appear at your base with all your stuff perfectly in tact. You also don’t have to use gas to bring your motorcycle with you. Just get in the habit of leaving your base by clicking the drive button and your motorcycle will always be with you.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/e-VUV1ULmy4?start=88',
      },
    ],
  },  
  {
    id: 7,
    title: 'Resources',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Resources',
      },
      {
        type: 'paragraph',
        text: 'Often when people are trying to get rich, they look for a place that has the most of what they want and then they go to that place to try and get it. Unfortunately, that is not how life works and nor is it how it works in Last Day on Earth. The place that has the most of what you want is the red zone. It has more trees, more rocks, more metal, more cloth and more vehicle parts, but the red zone is often the worst place to get rich. Getting rich in Last Day on Earth is about bringing home more than you left home with which means that the cost of doing something is often more than  what you get out of doing it. This means that it is often more lucrative to farm the green zone since the green zone costs far less to farm than any of the other zones. But this is not always the case. Here are some tips for collecting each resource.',
      },
      {
        type: 'paragraph',
        text: 'Note: (COMING SOON!) If you are looking for a specific resource, I recommend searching for it in the database and then clicking on the link for “the best way to find this item”. It will reroute you here at the exact location you are looking for.',
      },


      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Acid Bath',
        id: true,
        idName: 'Acid_Bath',
      },
      {
        type: 'paragraph',
        text: 'The Acid Bath, an amazing piece of equipment that can clean infected crates for you and give you amazing loot. But arguably one of the hardest things to obtain in Last Day on Earth (currently). The acid bath has many components so lets break this down one by one, starting from the easiest. First, to even start working on the acid bath, you need its blueprint, the blueprint can be found in floor 3 of Bunker Alpha near the beginning area. ',
      },
      {
        type: 'paragraph',
        text: 'To begin setting up the acid bath you will need:',
      },
      {
        type: 'paragraph',
        text: '1. 25 Wooden Planks',
      },
      {
        type: 'paragraph',
        text: '2. 40 Iron Bars',
      },
      {
        type: 'paragraph',
        text: '3. 10 Aluminium Bars ',
      },
      {
        type: 'paragraph',
        text: '4. 20 Stone Bricks',
      },
      {
        type: 'paragraph',
        text: 'Starting from the easiest materials to get, you should already have wooden planks, stone bricks and iron bars stocked up if not, you can farm green pine zones and green rock zones for the required materials then refine them in their respective workbenches. ',
      },
      {
        type: 'paragraph',
        text: 'If you need iron fast you can go to yellow zones but watch out for toxic spitters and other enemies. If you have been farming Bunker Alpha regularly you should have enough aluminium wire to smelt into 10 bars, aluminium wires can be found in the boxes in Bunker Alfa (note: aluminium bars can also be found in the ticket crates). ',
      },
      {
        type: 'paragraph',
        text: 'After the initial setup, you need to place down your uncompleted acid bath on 2x2 level 3 floors. This is were the real work begins.',
      },
      {
        type: 'paragraph',
        text: 'To complete the Acid Bath you will need :',
      },
      {
        type: 'paragraph',
        text: '1. 20 Aluminium Plates',
      },
      {
        type: 'paragraph',
        text: '2. 50 Wiring',
      },
      {
        type: 'paragraph',
        text: '3. 5 Electronic Circuits ',
      },
      {
        type: 'paragraph',
        text: '4. 15 Engine parts ',
      },
      {
        type: 'paragraph',
        text: '5. 15 Aluminium Bars ',
      },
      {
        type: 'paragraph',
        text: '6. 100 Bolts',
      },
      {
        type: 'paragraph',
        text: '7. 25 Air Filters',
      },
      {
        type: 'paragraph',
        text: '8. 25 Steel Plates',
      },
      {
        type: 'paragraph',
        text: '9. 30 Rubber Parts',
      },
      {
        type: 'paragraph',
        text: '10.10 Connecting Rods',
      },
      {
        type: 'paragraph',
        text: 'That is one heck of a list to go through, so lets start from the easiest resources to get all the way to the hardest.',
      },
      {
        type: 'paragraph',
        text: 'Wiring, the most easiest thing to get on this list. Wiring can be found almost everywhere, in the chests from pine zones, rock zones, oak zones and winter zones and Bunker Alpha. In fact, you should already have enough wiring stored up if you have been collecting it from the beginning. You can also obtain wiring from the recycler.',
      },
      {
        type: 'paragraph',
        text: 'Bolts are basically the same as wiring, just slightly rarer and more useful. Bolts are found in the same areas as wiring and also the recycler. Since bolts are a common part used in a lot of blueprints you should already have tons of bolts saved up, so this shouldn\'t be a problem for you.',
      },
      {
        type: 'paragraph',
        text: 'Rubber parts are slightly more rare than bolts and wiring but can be found in the same locations as bolts and wiring. There\'s no real fast way of obtaining rubber parts, you just collect them throughout your time playing.',
      },
      {
        type: 'paragraph',
        text: 'Air filters can only be obtained in 2 places (raids excluded), The red ticket crate in Bunker Alpha and Floppy disc locations. If you farm Bunker Alpha regularly then you should already have enough Air Filters to put in the acid bath, but if you don\'t, I recommend just farming Bunker Alpha until you have enough.',
      },
      {
        type: 'paragraph',
        text: 'Connecting Rods can be found in Bunker Alpha, Airdrops and in dead AI players inventories in the red zone. Again, there is no fast way of getting connecting rods unless you already have some 10 stocked up, if not, just continue farming Bunker Alpha and going to airdrops regularly.',
      },
      {
        type: 'paragraph',
        text: 'Aluminum Bars and Aluminum Plates (grouping these 2 together cause they\'re basically the same thing). First, if you have been farming Bunker Alpha regularly then you should have a lot of aluminum wire saved up that are ready to be smelted into Aluminum Bars and then refined into Aluminum Plates. Altogether, it\'ll take 110 aluminum wires to get 15 Aluminum Bars and 20 Aluminum Plates. Currently, Bunker Alpha is the only reliable and consistent place to get Aluminum Wire and Aluminum Bars, these 2 resources can also be acquired through the recycler too.',
      },
      {
        type: 'paragraph',
        text: 'Steel Plates, not really hard to find, just hard to farm. The old fashioned way of doing it was to go to the winter zones and farm copper till you run out of pickaxes then go back to your base and smelt those copper ore into copper bars then smelting those copper bars into steel bars then finally refining those steel bars into steel plates. The whole process took a long time to finish and generally didn\'t yield much steel at all, at most 11 or 12 steel plates. But with the introduction of the recycler (thank you Kefir for the miracle of recycling) you can obtain copper bars or steel bars or even steel plates from a variety of different things. (Refer to the ldoe wiki for the list of things that can be recycled into steel). So farming steel isn\'t as hard as it used to be. (Protip: Batteries can give a ton of copper bars)',
      },
      {
        type: 'paragraph',
        text: 'Engine parts can be found in Bunker Alpha, old rusty engines found in the various zones, AI bases, Airdrops and Floppy disc locations. There is no real fast way of obtaining engine parts so I recommend just playing the game as normal and slowly collecting enough Engine parts.',
      },
      {
        type: 'paragraph',
        text: 'And now the rarest thing on this list, Electronic Circuits. Originally, the only place you could find electronic circuits was in Floppy disc locations and even that had a fairly low chance of giving you 1 electronic circuit. With the introduction of raiding it was slightly easier but still rare. Now with the introduction of the recycler it is significantly easier to get electronic circuits, assuming you have your electronics level fairly high in your recycler and you are putting in stacks of phones and USBs in the recycler overnight, you should have enough electronic circuits after a few weeks (depending on your luck)',
      },
      {
        type: 'paragraph',
        text: 'And that\'s about it for this guide on getting the acid bath. Now if you look closely in this guide I barely ever mention raids. While raids could technically give you all the resources on this list, they are highly random and depend on the base you are raiding. Which is why I excluded it from this guide.',
      },
      {
        type: 'paragraph',
        text: 'Thank you for taking the time to read this, so sorry if its too long but the acid bath has many components that needed explaining.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'LegendaryKLK)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Air Filter',
        id: true,
        idName: 'Air_Filter',
      },
      {
        type: 'paragraph',
        text: 'Air Filters can be found in the red ticket chest of Bunker Alfa, floppy disk chests, and as raid loot. It can not be crafted. My strategy is to open bunker alpha red ticket chest and floppy disk crates since raiding for air filters requires luck and there is often better loot to take.',
      },
      {
        type: 'acknowledgement',
        text: 'ShadowThief  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'AK-47',
        id: true,
        idName: 'AK-47',
      },
      {
        type: 'paragraph',
        text: 'Best place to get the ak-47 is from the red ticket crate in bunker alpha. ',
      },
      {
        type: 'paragraph',
        text: 'You can also get the ak-47 from the yellow and green ticket crates, rest stop events, the trader, rarely from red and yellow zones, and of course from raiding.',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted at the moment as it requires tungsten and ash planks in it\'s current formula.',
      },
      {
        type: 'paragraph',
        text: 'You can modify a low durability ak-47 at the bunker ',
      },
      {
        type: 'paragraph',
        text: 'Recycling: you can recycle your weapon to get at lvl 1 weapons category for scrap metal, weapon parts and steel bars',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Alcohol',
        id: true,
        idName: 'Alcohol',
      },
      {
        type: 'paragraph',
        text: 'Alcohol is an common resource that can be easily made using the medical table and putting in 5 berries. 5 berries make 1 bottle. You can also find a lot in coupon and loot chests in bunker Alpha. Alcohol can be used to make medkits, remove paint from storage chests, exchange with dealer and used in crafting explosive material. ',
      },
      {
        type: 'acknowledgement',
        text: 'Jade Swan  (Edited By:  Vedrana,  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Aluminum Bar',
        id: true,
        idName: 'Aluminum_Bar',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get lots of Aluminum Bars is to clear Bunker Alpha. If you do this consistantly, you will have more aluminum then you could possible use. ',
      },
      {
        type: 'paragraph',
        text: 'Here are some tips for getting getting aluminum bars in Bunker Alpha:',
      },
      {
        type: 'paragraph',
        text: '-It is very easy to get Aluminum Bars in crates',
      },
      {
        type: 'paragraph',
        text: '-It requires no fuel or furnace',
      },
      {
        type: 'paragraph',
        text: '-It does not require me to search for it',
      },
      {
        type: 'paragraph',
        text: 'On the side note Bunker floor 4 is for the most experienced people yet it is the least profitable. You get least Aluminum Bar of all tactics and it requires guns (lots of them). Additionally Floppy disc crates can have a lot of Wires and Bars as well but farming floppy crates for Aluminum Bar is unnecessary.',
      },
      {
        type: 'paragraph',
        text: 'Raiding for Aluminum Bar is an odd choice too because:',
      },
      {
        type: 'paragraph',
        text: '-Most raid missions require bunker runs which has more Aluminum Bar',
      },
      {
        type: 'paragraph',
        text: '-You get other stuff in raids that is more important to carry',
      },
      {
        type: 'paragraph',
        text: '-You are not guaranteed to open a chest with Aluminum Bars.',
      },
      {
        type: 'paragraph',
        text: 'But that does not mean you should not take Aluminum Bars in raids if you are desperate. If you have empty space it is one of the better choices.',
      },
      {
        type: 'paragraph',
        text: 'You can also get a lot of aluminum bars by smelting them from Aluminum Wires or Bauxite. ',
      },
      {
        type: 'paragraph',
        text: 'Bauxite can be found in the red rock zone, oak zones and winter zones, but this is the worst way to acquire Aluminum Bar because:',
      },
      {
        type: 'paragraph',
        text: '-The chances of getting bauxite from mining is low',
      },
      {
        type: 'paragraph',
        text: '-It costs too much to smelt it',
      },
      {
        type: 'paragraph',
        text: '-4 Bauxite only give 1 bar so it is not profitable either',
      },
      {
        type: 'paragraph',
        text: 'Smelting Aluminum Wires that you find in bunker Alpha is more efficient than using bauxite. ',
      },
      {
        type: 'paragraph',
        text: '-For 1 Aluminum Bar you need only 2 Aluminum Wires',
      },
      {
        type: 'paragraph',
        text: '-It costs half the fuel compared to Bauxite',
      },
      {
        type: 'paragraph',
        text: '-Aluminum Wires are very common',
      },
      {
        type: 'paragraph',
        text: '-Doing a Bunker run is cheaper and easier than multiple red zone runs',
      },
      {
        type: 'paragraph',
        text: 'Lastly and most recently, the Recycler. This newest addition to the game is the best way to get some rare items...But unfortunately Aluminum Bar is not one of those items. No item other than Beers is cheap enough to be counted and they all have a low chance to get you Aluminum Bar too. You also will want to use the Recycler for farming rare items. Overall best way to get Aluminum Bars consistently is through Bunker A. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'LiUnDe  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Aluminum Plate',
        id: true,
        idName: 'Aluminum_Plate',
      },
      {
        type: 'paragraph',
        text: 'The best way to get aluminum plates is by using the workbench to turn aluminum bars into plates. ',
      },
      {
        type: 'paragraph',
        text: 'You can find aluminum plates already made in floppy disk locations, but this requires doing hard mode and is not nearly as easy as finding aluminum bars and converting them.',
      },
      {
        type: 'acknowledgement',
        text: 'ShadowThief  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Aluminum Wire',
        id: true,
        idName: 'Aluminum_Wire',
      },
      {
        type: 'paragraph',
        text: 'The best way to get Aluminum Wire is through Bunker Alfa. You are guaranteed to find it in any of the coupon boxes. Also it can be found randomly in lockers and crates in the bunker\'s subfloors. ',
      },
      {
        type: 'paragraph',
        text: 'You can also find about 5-10 Aluminum wire in each rest stop event. ',
      },
      {
        type: 'paragraph',
        text: 'You can also find lot of aluminum wire in raids, but usually there is more rare stuff to bring home.',
      },
      {
        type: 'acknowledgement',
        text: 'Lizzy  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Animal Rawhide',
        id: true,
        idName: 'Animal_Rawhide',
      },
      {
        type: 'paragraph',
        text: 'Animal Rawhide can be easily obtained from killing gray wolves, rabid wolves, and deer.',
      },
      {
        type: 'paragraph',
        text: 'The most efficient way of obtaining it is simply to kill all the animals in a location you are going to farm anyways. For example, if you need pine logs and are farming the green zone, kill all the animals there as well and collect all of the rawhide. However, if you\'d like to focus directly on rawhide, you can move back and forth from green and yellow zones. Also, when killing an AI, there is chance of finding rawhide while looting him.',
      },
      {
        type: 'paragraph',
        text: 'To supplement your rawhide income, keep an eye out for the chopper event that has around 10 deer roaming around the map and kill all of them. Rawhide can be also obtained in unknown box (daily hour chest).""',
      },
      {
        type: 'acknowledgement',
        text: 'Thornz  (Edited By:  Vedrana,  Fuerza)',
      },
      
      
      
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'ATV Gas Tank',
        id: true,
        idName: 'ATV_Gas_Tank',
      },
      {
        type: 'paragraph',
        text: 'The ATV gas tank is a fairly common drop in the chests of any of the Red Zone areas and can also be found in any of the Bunker Alfa ticket crates. The ATV is needed for the second stage recipe of the ATV and extra ATV GAs Tanks are very useful in increasing the mechanics level in your Recycler as it offers a lot of experience.',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Fuerza)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'ATV Wheel',
        id: true,
        idName: 'ATV_Wheel',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the ATV wheel is just farming the green zones.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'The ATV wheel can also be found in:',
      },
      {
        type: 'paragraph',
        text: '1- the crates in all yellow, red zones',
      },
      {
        type: 'paragraph',
        text: '2- on the corpses if dead AI players',
      },
      {
        type: 'paragraph',
        text: '3- bunker alpha in the ticket crates',
      },
      {
        type: 'paragraph',
        text: '4- airdrop events',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Uses:',
      },
      {
        type: 'paragraph',
        text: '1- to finalized the ATV ( you need 16 atv wheels)',
      },
      {
        type: 'paragraph',
        text: '2- recycling produces scrap metal and steel bars, but (no tier 3 item) (needs 1 hour in the recycler)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'ATV',
        id: true,
        idName: 'ATV',
      },
      {
        type: 'paragraph',
        text: 'The ATV is a vehicle that will be implemented in future updates. It will require the ATV Driver skill, which will take some time to grind out in winter zones. The ATV blueprint takes up a 3x3 space of level 3 floors. It is currently not entirely craftable, but players might want to get started on the mountainous requirements. The blueprint phase of the ATV requires:',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '320 Bolts',
      },
      {
        type: 'paragraph',
        text: '100 Ball Bearings',
      },
      {
        type: 'paragraph',
        text: '1 ATV Transmission (unavailable)',
      },
      {
        type: 'paragraph',
        text: '1 ATV Gas Tank',
      },
      {
        type: 'paragraph',
        text: '250 Thick Fabric',
      },
      {
        type: 'paragraph',
        text: '500 Scrap Metal  ',
      },
      {
        type: 'paragraph',
        text: '150 Rubber Parts',
      },
      {
        type: 'paragraph',
        text: '16 ATV Wheels.',
      },
      {
        type: 'paragraph',
        text: '120 Wiring',
      },
      {
        type: 'paragraph',
        text: '200 Engine Parts.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Bolts, Ball bearings, Scrap Metal, Rubber parts, and Wiring will take a long period of grinding for them in resource zone chests, and all but scrap metal can also be found in the bunker chests. While grinding, you will come across an ATV Gas Tank very quickly. You will also find Plant Fiber in resource zones, to turn into Thick Fabric. Fabric is also located at chopper events, bunker chests and ticket crates, and A.I. The ATV Wheels will be found in the resource zone chests, along with airdrops and bunker ticket crates. The Engine Parts will be found in bunker ticket crates and occasionally air drops.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'All resources can be found by raiding. Items not available can be found by raiding hackers, although taking these items will mark you as a cheater, so take caution. Raiding will immensely aid in the very tedious grind of 200 engine parts, so if you are able to raid, do so. Kefir has said some vehicles will be built with the aid of clan mates, which may be why the ATV requires so many parts. Building the ATV is no easy feat. ',
      },
      {
        type: 'acknowledgement',
        text: 'Lukas Johnson)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Baked Beans',
        id: true,
        idName: 'Baked_Beans',
      },
      {
        type: 'paragraph',
        text: 'Baked Beans are not craft-able and can be gained in multiple ways',
      },
      {
        type: 'paragraph',
        text: '1.Inbox',
      },
      {
        type: 'paragraph',
        text: 'Once you open the game for the first time you will game 3 Baked Beans along with 3 Bottles of water in the inbox within the in game-store. This can be claimed everyday but will not stack up. It has an expiration of 5 days then you have to wait another 24 hours to gain another set',
      },
      {
        type: 'paragraph',
        text: '2.Unknown Box',
      },
      {
        type: 'paragraph',
        text: 'You can watch a 15-30 second video to have a chance to gain a can of beans, though it is not worth it since you will only gain 1, at the same time there is only a small chance of getting one.',
      },
      {
        type: 'paragraph',
        text: '3. Rock and Tree Zones',
      },
      {
        type: 'paragraph',
        text: 'You can find it inside the scattered chests around the different zones, it is somewhat common in green zones and are less common in yellow and red zones.',
      },
      {
        type: 'paragraph',
        text: '4.AI players',
      },
      {
        type: 'paragraph',
        text: 'When you get attacked within the zones, sometimes when you fight an AI and win they have some in their dead body.',
      },
      {
        type: 'paragraph',
        text: '5.Bases (Both AI and Raiding)',
      },
      {
        type: 'paragraph',
        text: 'You can find these in chests in both AI bases and raiding bases.',
      },
      {
        type: 'paragraph',
        text: '6. Bunker Alfa',
      },
      {
        type: 'paragraph',
        text: 'You can it also in Bunker Alfa from the ration crate and when looting in all 3 floors both easy and hard mode.',
      },
      {
        type: 'paragraph',
        text: '7.Events',
      },
      {
        type: 'paragraph',
        text: 'From Oak Clearing to Rest shop, you have a chance to gain baked beans in almost very event, though it is more rewarding to have something better.',
      },
      {
        type: 'paragraph',
        text: '8.In game-store',
      },
      {
        type: 'paragraph',
        text: 'Or if you are just the person that doesn\'t want to waste time and has a house of gold. You can just buy a bundle such as Survivor\'s pack, it gives you exactly a stack of Baked beans along with other items',
      },
      {
        type: 'paragraph',
        text: 'My Strategy',
      },
      {
        type: 'paragraph',
        text: 'Just by looking at the numerous ways you can get baked beans, you don\'t really need to buy it nor watch an ad in the store. At the same time some of the ways that you can gain it are simply forcing yourself to do something hard for something somewhat easy. Raiding bases and fighting AI\'s are risky and require standard to high gear, ration crate in bunker alfa offers a high possibility to gaining some cans as well as the sub levels in the bunker itself but will still require smart preparations such as bringing guns, medic kits, and armor, prior knowledge of the layout of the bunker floors and skills to out wit the zombies. Farming for it in the rock and tree zones are good ways to gain some beans but it is very unrewarding if you only focus on that one item. Events give the some great items so gaining cans this way is very inefficient. The best way to gain baked beans is in the inbox everyday since this guaranteed 3 cans, following this is farming for it in rock and tree zone while you are farming for other essential items for you to both not to waste time, gain some food and farm for some things that you need all at the same time. Overall, Baked beans are easy to gain especially if you claim your daily beans everyday and have space to grab some when farming for basic items.',
      },
      {
        type: 'acknowledgement',
        text: 'Ston1234 the gamer)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Ball Bearing',
        id: true,
        idName: 'Ball_Bearing',
      },
      {
        type: 'paragraph',
        text: 'The best way to collect ball bearings is farming zones and completing bunker alpha. At high level play, you will have more than you could ever need.',
      },
      {
        type: 'paragraph',
        text: 'Ball Bearings are used in the following Blueprints:',
      },
      {
        type: 'paragraph',
        text: '1- Weapon Stand',
      },
      {
        type: 'paragraph',
        text: '2- Zombie Truck',
      },
      {
        type: 'paragraph',
        text: '3- Mi-24 Helicopter',
      },
      {
        type: 'paragraph',
        text: '4- Safe',
      },
      {
        type: 'paragraph',
        text: '5- Turret',
      },
      {
        type: 'paragraph',
        text: '6- Mortar',
      },
      {
        type: 'paragraph',
        text: '7- And it is used at the trader',
      },
      {
        type: 'paragraph',
        text: 'And its used to finalize ',
      },
      {
        type: 'paragraph',
        text: '8- the generator (20 ball bearings) ',
      },
      {
        type: 'paragraph',
        text: '9- and the ATV (100 ball bearings)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bandages',
        id: true,
        idName: 'Bandages',
      },
      {
        type: 'paragraph',
        text: 'The way to get lots of bandages is to collect lots of cloth and craft it into bandages. This takes 5 cloth per bandage.',
      },
      {
        type: 'paragraph',
        text: 'You can also get lots of bandages in the chests of any of the zones, Bunker Alpha lockers, chests and coupon crates.',
      },
      {
        type: 'acknowledgement',
        text: 'Joseph Rosseinn L Dagas  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Baseball Bat',
        id: true,
        idName: 'Baseball_Bat',
      },
      {
        type: 'paragraph',
        text: 'The Baseball Bat cannot be crafted but can be found in:',
      },
      {
        type: 'paragraph',
        text: '1- chests in green, yellow, and red zones',
      },
      {
        type: 'paragraph',
        text: '2- Bunker Alfa ticket crates',
      },
      {
        type: 'paragraph',
        text: '3- rest stop events',
      },
      {
        type: 'paragraph',
        text: '4- corpses of dead AI players',
      },
      {
        type: 'paragraph',
        text: 'The Baseball Bat is most efficiently used against roaming zombies, wolves and fast biters as they have 80 health so you can sneak attack them for 60 damage and then giving the final hit before they can attack you ',
      },
      {
        type: 'paragraph',
        text: 'Recycling: you can recycle it for pine planks and duct tape (no tier 3 item)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Basic Backpack',
        id: true,
        idName: 'Basic_Backpack',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get the backpack is to craft it.',
      },
      {
        type: 'paragraph',
        text: 'It can also be found on be body of an AI player in any of the zones. ',
      },
      {
        type: 'acknowledgement',
        text: 'Rikki Autts  (Edited By:  Vedrana,  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Batteries',
        id: true,
        idName: 'Batteries',
      },
      {
        type: 'paragraph',
        text: 'The best place to find Batteries is in the lockers and chest scattered throughout Bunker Alfa but can also be found in other resources zones and events (Plane crash and Airdrops). Batteries cannot be crafted.',
      },
      {
        type: 'acknowledgement',
        text: 'Steve  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bauxite',
        id: true,
        idName: 'Bauxite',
      },
      {
        type: 'paragraph',
        text: 'Best way to get this is by farming red rock zone.',
      },
      {
        type: 'paragraph',
        text: 'Added in v. 1.5.5, Bauxite is a stackable (20 pieces) mineral that can be smelted into Aluminium Bars using the Melting Furnace. 4 pieces of Bauxite can be smelted into 1 Aluminium Bar, smelting time for 1 Aliminium Bar is 1 hour. It requires 12 pieces of Charcoal (1 Charcoal = 5 min, 20 s) to produce 1 Aluminium Bar. Can be obtained during mining Iron Ore deposits in Limestone Spires (Red), Oak Grove (Red), Oak Bushes (Yellow), Wooded Foothills (Yellow), Frosty Backwoods (Red). The best locations for farming Bauxite are: Oak Grove (Red), Frosty Backwoods (Red), Wooded Foothills (Yellow); Limestone Spires (Red) also contains a lot of Iron Ore deposits, but the chance of getting Bauxite is lower than in Northern locations. It is best to clear Oak Grove (Red) from zombies to safely farm for Iron Ore deposits or switch between Wooded Foothills (Yellow) and Frosty Backwoods (Red) to sneakingly make your way towards Iron Ore deposits, as well as searching for Copper Ore deposits, which are usually located nearby (you can then store your Bauxite at the Nothern NPC base). Before mining for Iron Ore, make sure you have enough space in your inventory. If you don\'t need Iron Ore, but need Bauxite, you can leave one piece of Bauxite in your inventory while filling others with unstackable items (such as vehicle parts, weapons, etc.) and press «Auto». 2 pieces of Bauxite can be found in the Northern NPC base and 5 pieces are available in North-Eastern NPC base. AI corpses can also have Bauxite. Rest stop events have a high chance of finding bauxite.The best use for Bauxite is giving them to Raiders since the Charcoal consumption is too high compared to the Aluminium Wire. 15-20 pieces is usually enough to make Raiders happy.',
      },
      {
        type: 'acknowledgement',
        text: 'brissenden  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beanie',
        id: true,
        idName: 'Beanie',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Protects ears from cold and bites. Adds armor.""',
      },
      {
        type: 'paragraph',
        text: 'Uses:',
      },
      {
        type: 'paragraph',
        text: '1- adds 3 armor',
      },
      {
        type: 'paragraph',
        text: '2- protects from cold',
      },
      {
        type: 'paragraph',
        text: '3- crafting reinforced beanie (beanie + 1 nail +  1 iron plate + 1 leather) ',
      },
      {
        type: 'paragraph',
        text: 'Beanie can be found in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1- bunker alpha in the ticket crates and the floors',
      },
      {
        type: 'paragraph',
        text: '2- the corpses of dead AI players green, yellow, and red zones',
      },
      {
        type: 'paragraph',
        text: '3- the corpses of dead AI players in rest stop events',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '(Unlocks at Level 22)',
      },
      {
        type: 'paragraph',
        text: 'To craft the beanie you need the following:',
      },
      {
        type: 'paragraph',
        text: '3 Thick Fabric',
      },
      {
        type: 'paragraph',
        text: '5 Rope',
      },
      {
        type: 'paragraph',
        text: '5 Piece of Cloth',
      },
      {
        type: 'paragraph',
        text: 'Recycling: beanie can be recycled to 40% thick leather, 5% cloths ( level 1 cloth category) (takes 10 mins)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beer',
        id: true,
        idName: 'Beer',
      },
      {
        type: 'paragraph',
        text: 'The best way to get beer is by clearing bunker alpha (100% guaranteed)',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“Great beer which is delicate in body and a little bitter at the finish.”',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1- Forces you to need to urinate after drinking.',
      },
      {
        type: 'paragraph',
        text: '2- restores 20% on the thirst meter',
      },
      {
        type: 'paragraph',
        text: '3- can be recycled to give you 5% aluminum bar ( level 1 in others category)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'you can find beer in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1- bunker alpha : all 4 floors',
      },
      {
        type: 'paragraph',
        text: '2-in the crates in all green, yellow and red zones',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'crafting: ',
      },
      {
        type: 'paragraph',
        text: 'beer can\'t be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Berry Tea',
        id: true,
        idName: 'Berry_Tea',
      },
      {
        type: 'paragraph',
        text: 'Berry Tea cannot be found in any zones. It is best to craft this item. Simply throw some berries in the campfire, and you will get 1 cup of tea for every 3 berries. Each Berry Tea restores 5 hunger and 30 thirst, but no health and no warmth. Also, the trader can ask for it, but this is very rare.',
      },
      {
        type: 'acknowledgement',
        text: 'Wasteland Dan  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Berry',
        id: true,
        idName: 'Berry',
      },
      {
        type: 'paragraph',
        text: 'Berries can only be harvested from Berry Bushes.',
      },
      {
        type: 'paragraph',
        text: '3 Berries are obtained when a Berry Bush is harvested and stacked 20 per stack.',
      },
      {
        type: 'paragraph',
        text: 'Uses:',
      },
      {
        type: 'paragraph',
        text: '1- increase health by 5',
      },
      {
        type: 'paragraph',
        text: '2- increase thurst meter by 1',
      },
      {
        type: 'paragraph',
        text: '3- increase hunger meter by 2',
      },
      {
        type: 'paragraph',
        text: '4-  5 berries = 1 alcohol in the medical table',
      },
      {
        type: 'paragraph',
        text: '5- 3 berries = 1 berry tea in the campfire',
      },
      {
        type: 'paragraph',
        text: 'Berry cant be recycled',
      },
      {
        type: 'paragraph',
        text: 'Berry cant be crafted ',
      },
      {
        type: 'paragraph',
        text: 'Berry is found in all green, yellow, red zones and can be found in raid bases.',
      },
      {
        type: 'paragraph',
        text: 'Best way to get it is farming the green pine or stone zone',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Black Paint',
        id: true,
        idName: 'Black_Paint',
      },
      {
        type: 'paragraph',
        text: 'best way to get black paint is by clearing bunker alpha and opening the ticket crates.',
      },
      {
        type: 'paragraph',
        text: 'you can also find black paint in every color zone, airdrop events, rest stop events, floppy disk locations and the shop',
      },
      {
        type: 'paragraph',
        text: 'it cant be crafted ',
      },
      {
        type: 'paragraph',
        text: 'it cant be recycled',
      },
      {
        type: 'paragraph',
        text: 'Uses:',
      },
      {
        type: 'paragraph',
        text: '1- Black Paint can be used to recolor Chests.',
      },
      {
        type: 'paragraph',
        text: '2- Black Paint can be used to paint the Chopper using certain Patterns.',
      },
      {
        type: 'paragraph',
        text: '*Bloater pattern: 10 black paint',
      },
      {
        type: 'paragraph',
        text: '*fire pattern: 20 black paint',
      },
      {
        type: 'paragraph',
        text: '*Harvey pattern : 5 black paint',
      },
      {
        type: 'paragraph',
        text: '*leopard pattern: 10 black paint',
      },
      {
        type: 'paragraph',
        text: '*military pattern: 10 black paint',
      },
      {
        type: 'paragraph',
        text: '*nuclear pattern: 5 black paint ',
      },
      {
        type: 'paragraph',
        text: '*skulls pattern: 20 black paint',
      },
      {
        type: 'paragraph',
        text: '*Halloween pattern: 5 black paint',
      },
      {
        type: 'paragraph',
        text: '*Christmas pattern: 5 black paint',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Blue Paint',
        id: true,
        idName: 'Blue_Paint',
      },
      {
        type: 'paragraph',
        text: 'The easiesr way to get Blue paint is by opening Bunker Alpha Coupon crate and chests/lockers in the lower lv\'s ',
      },
      {
        type: 'paragraph',
        text: 'it can also be found in any of the zones chests, airdrops, rest stop event, floppy disc location and from the shop',
      },
      {
        type: 'paragraph',
        text: 'It is used for painting the chopper (patterns: blue, captain and halloween), small boxes, chests and trunks ',
      },
      {
        type: 'paragraph',
        text: 'it can not be crafted ',
      },
      {
        type: 'paragraph',
        text: 'it can not be recycled',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bolts',
        id: true,
        idName: 'Bolts',
      },
      {
        type: 'paragraph',
        text: 'Best way to get this is by looting chests in any farming zone.',
      },
      {
        type: 'paragraph',
        text: 'Bolts a very useful component of last day on earth can be a pain to obtain early game so you shouldn’t pass the opportunity to pickup them, the Bolts can be found mostly in loot box’s in the pine forest and can be obtained from over bases that spawn on the map. This item cannot be crafted and this is what makes it a hard item to find in the start but can easily be stockpiled in later games. The easiest way of obtaining them is to travel to the closest location which should be the green pine and rock zone near bunker Alpha. You may be greeted by a handful of fast biters and some roamers but other than that it’s completely safe early game, you should start by clearing the zombies and then looting the maximum of three chests. If the chest do not have the bolt then you should leave the area and travel to the other location. Keep doing this until you have the satisfactory amount of bolts needed. Alternatively, if you have a lot of torchlight and expensive watches, you can recycle them for bolts.',
      },
      {
        type: 'acknowledgement',
        text: 'Advictoriom  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bottle of Gasoline',
        id: true,
        idName: 'Bottle_of_Gasoline',
      },
      {
        type: 'paragraph',
        text: 'Bottle of Gasoline is gained when you put empty bottles into the tank of a chopper and click on ""pour off"".',
      },
      {
        type: 'paragraph',
        text: 'A full tank will yield 40 bottles of gasoline.',
      },
      {
        type: 'paragraph',
        text: 'Bottles can be found in some NPC bases & at the rest stop event.',
      },
      {
        type: 'paragraph',
        text: 'The best way to gain these is visiting the rest stop event. There are always at least one chopper parked there that you can drain from, but they are never full so a stack of 20 empty bottles are enough to bring with you.',
      },
      {
        type: 'paragraph',
        text: 'During a raid you can also find choppers. They are always parked in the lower right corner and will not be inside the walls of a base. This means that they\'ll always be accessible during a raid and therefore you should always bring empty bottles with you in case there is a chopper.',
      },
      {
        type: 'paragraph',
        text: 'If you have a chopper with you, you should always prepare empty bottle in your chopper\'s gas slot to obtain gasoline from other choppers.',
      },
      {
        type: 'acknowledgement',
        text: 'The Desman  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bottle of Water',
        id: true,
        idName: 'Bottle_of_Water',
      },
      {
        type: 'paragraph',
        text: 'Best and fastest way to get the bottle of water is by clearing bunker alpha ( gives you 15-20 bottles of water)',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""A full bottle of water is the best at dealing with thirst.”',
      },
      {
        type: 'paragraph',
        text: 'you can find the bottle of water in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1- chests and dead AI players in any green, yellow and red zone',
      },
      {
        type: 'paragraph',
        text: '2- bunker alpha (all floors)',
      },
      {
        type: 'paragraph',
        text: '3- rest stop events',
      },
      {
        type: 'paragraph',
        text: '4- AI bases',
      },
      {
        type: 'paragraph',
        text: '5- the shop: survivor\'s pack',
      },
      {
        type: 'paragraph',
        text: '6- Inbox: Every 24 hours, 3 Full Bottles appear in the Inbox and disappear if not taken before their timer runs out (4 days)',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1- restores 50% on the thirst meter',
      },
      {
        type: 'paragraph',
        text: '2- Once drunk, a Full Bottle turns into an Empty Bottle',
      },
      {
        type: 'paragraph',
        text: '3-Empty Bottles can also be used to Pour On and Pour Off gasoline to and from choppers',
      },
      {
        type: 'paragraph',
        text: 'crafting:',
      },
      {
        type: 'paragraph',
        text: 'the bottle of water (empty or full ) can\'t e crafted',
      },
      {
        type: 'paragraph',
        text: 'but Placing the Empty Bottle in a Rain Catcher will replenish it, (takes 10  mins) You can reuse Empty Bottles indefinitely.',
      },
      {
        type: 'paragraph',
        text: 'Your character will need to pee after drinking 13 Full Bottles of Water. ',
      },
      {
        type: 'paragraph',
        text: 'the bottle of water can\'t be recycled',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Bow',
        id: true,
        idName: 'Bow',
      },
      {
        type: 'paragraph',
        text: 'Bow',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get the bow is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Although can be found in 1 of the ai bases and in raids.',
      },
      {
        type: 'paragraph',
        text: 'Type: ranged',
      },
      {
        type: 'paragraph',
        text: 'Unlock:',
      },
      {
        type: 'paragraph',
        text: 'Lv 10',
      },
      {
        type: 'paragraph',
        text: 'Craft Points 1',
      },
      {
        type: 'paragraph',
        text: 'Materials:',
      },
      {
        type: 'paragraph',
        text: '5 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '1 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '5 Rope',
      },
      {
        type: 'paragraph',
        text: '3 Duct Tape',
      },
      {
        type: 'acknowledgement',
        text: 'Klaustin  (Edited By:  Huakawa)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card A',
        id: true,
        idName: 'CAC_Card_A',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card D is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Delta (Bunker Delta is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card B',
        id: true,
        idName: 'CAC_Card_B',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card D is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Delta (Bunker Delta is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Yehya.bk  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card C',
        id: true,
        idName: 'CAC_Card_C',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card D is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Delta (Bunker Delta is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Colestep55  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card D',
        id: true,
        idName: 'CAC_Card_D',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card D is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Delta (Bunker Delta is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Jerrymouseisme  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card F',
        id: true,
        idName: 'CAC_Card_F',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card F is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Foxtrot (Bunker Foxtrot is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Ankit Anjan Adhikari  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card R',
        id: true,
        idName: 'CAC_Card_R',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to find the CAC Card R is to kill zombies in any locations, Toxic spitters, Floater Bloaters and Toxic abominations have the highes chance to drop it or by openeing chests in any zone',
      },
      {
        type: 'paragraph',
        text: 'Required to open Bunker Romeo (Bunker Romeo is not in the game)',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Thetimelord777  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CAC Card Z',
        id: true,
        idName: 'CAC_Card_Z',
      },
      {
        type: 'paragraph',
        text: 'There are currently 2 ways for a player to obtain the bunker Zulu common access card. The first one is the most hard but reliable, and it requires you to kill the toughest zombie currently in the game, the Big One. The second way to obtain this card is by finding it while raiding other peoples bases. This item currently has no use, but if you would like to obtain it as a trophy and don\'t want to rely on pure luck(by that I mean finding it while raiding), here are a couple of tips. First of all, there is only one type of the Big One that you should try to kill. There are 3 types of the Big One: the one that exists in the second floor of the bunker, the one that spawns in raids once the noise meter reaches 100 and the one that spawns in the red resource locations and the infected forest. The ones you should try to kill are those that spawn in dangerous locations and the infected forest, as the one in the bunker cannot be attacked in any way(there is currently no way to enter his room and fight him) and the one in the raids will deal increasing damage with each hit and will also heal back to full health once his hp drops below 20%. If you want to fight the Big One there are a couple of things you should know about him, such as he has 1000 HP, deals 17 damage per hit (swat armor equiped), does around one hit per second and has a running speed that is almost double than the player even with the best boots on. His most important characteristic though is his armour. His armour will block 95% of incoming damage, meaning that every 20 points of damage deal 1 point of damage to him. This means that in order to harm him you will need a weapon that deals +20 damage per hit. I only recommend ranged weapons, as they attack faster and will reduce the amount of hits you receive as you won\'t have to approach him as much. The most suitable weapons to kill him are the shotgun and the VSS vintorez,but I would recommend the shotgun, as it deals 3 dmg to the Big One ( actual damage is 70 but due to the armour it is reduced to 3) compared to the the VSS vintorez which deals 2 and is also a lot harder to find. The grenade launcher is not recommended, as you will most likely harm yourself while using it. The location you should choose to find and attack him should be the infected forest (all though the big one might be removed from there in an upcoming update) as there is an 100% chance that he will spawn. Other than that, he has a high chance of spawning in normal red zones. The whole fight will take around 30-40 medkits, 8-9 shotguns, two full sets of swat gear and a lot of patience and determination. Finally, it is also worth noting that during the fight you will have to face other hostile entities, such as toxic abominations, toxic spitters, rabid and diseased wolfs and, in some rare cases, even a second big one.',
      },
      {
        type: 'acknowledgement',
        text: 'Alexhans208  (Edited By:  Vedrana,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Camera',
        id: true,
        idName: 'Camera',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get the camera is by opening chests in any of the zones. Chests in the red zones have the best chance, but cameras are one of the rarest electronic items in the game. Sometimes you can get a stash of cameras by raiding another players base that would take months to farm, but this is based on luck. This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Lance018  (Edited By:  Huakawa,  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Campfire',
        id: true,
        idName: 'Campfire',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get the campfire is by crafting it, u can also find it rarely from an ai player\'s dead body',
      },
      {
        type: 'paragraph',
        text: 'Crafting becomes available at Lv.2 and requires one crafting point. It then requires 5 Pine Logs, 5 Limestone and 1 Plant Fiber to craft. You can craft up to 2 of them.',
      },
      {
        type: 'paragraph',
        text: 'After crafting it, you can place it on any level floor and the take up a 1x1 area.',
      },
      {
        type: 'paragraph',
        text: 'Recipes (the campfire needs fuel, pine log 1min, Pine Plank 2min, Charcoal 4min)',
      },
      {
        type: 'paragraph',
        text: 'Material                                Result                            Time needed',
      },
      {
        type: 'paragraph',
        text: '3 Berries                                1 Berry Tea                   2 minutes',
      },
      {
        type: 'paragraph',
        text: '1 Raw Meat                           1 Juicy Steak                   2 minutes',
      },
      {
        type: 'paragraph',
        text: '1 Carrot                                1 Carrot Stew                   2 minutes',
      },
      {
        type: 'paragraph',
        text: '1 Raw Turkey                           1 Roasted Turkey     40 minutes',
      },
      {
        type: 'paragraph',
        text: '1 Pine Log                           1 Charcoal                        4 minutes',
      },
      {
        type: 'paragraph',
        text: '1 Pine Plank                           2 Charcoals                   4 minutes',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Fuerza)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Cargo Pants',
        id: true,
        idName: 'Cargo_Pants',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this item is by farming the green zone for these simple ingredients/ materials.',
      },
      {
        type: 'paragraph',
        text: 'This piece of armor can be found on ai players in any zone and at the Rest Stop event (Chopper event). It also can be crafted for 3 plant fibers,1 piece of cloth, and 2 rope. ',
      },
      {
        type: 'acknowledgement',
        text: 'EdS  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Carrot',
        id: true,
        idName: 'Carrot',
      },
      {
        type: 'paragraph',
        text: 'The best way to get carrots is to grow them in a Garden Bed at home with Seeds. 1 seed = 2 carrots ( takes 1 hour). Can also be found in dead AI players and NPC survivor bases. It restores 15 health, 25 hunger and 5 thirst. You can make a maximum  96 carrots per day ( 2 garden bed maximum - that gives you 4 carrots an hour x 24 = 96 carrots). Carrots restore the same amount of health and hunger as Baked Beans.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Vedrana,  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Carrot Seeds',
        id: true,
        idName: 'Carrot_Seeds',
      },
      {
        type: 'paragraph',
        text: 'The best way to get carrot seeds is to collect plant fiber in any of the zones. There is around a 50-60% chance of getting one carrot seed each time you collect a plant fiber. The carrot seed cannot be crafted. They can also be found in Ai\' s bases garden beds and chests . Plus, you have a chance of getting 5 carrot seeds in the ""Unknow Box"" in the store for free after watching an advertisement .',
      },
      {
        type: 'acknowledgement',
        text: 'Trevor  (Edited By:  Vedrana,  Fuerza)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Carrot Stew',
        id: true,
        idName: 'Carrot_Stew',
      },
      {
        type: 'paragraph',
        text: 'The best way to get carrots stew is by every time you go to any zone, pick every vine bush you can then just come back and put it in your gardens. ',
      },
      {
        type: 'paragraph',
        text: 'Now use one campfire putting regular planks in the top and charcoal in the bottom this will generate you fuel for the other campfire where you put carrots in the top then 3-4  charcoal then go out getting  other materials and you\'ll have 20 carrot stew.',
      },
      {
        type: 'acknowledgement',
        text: 'Ollie  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'CB Radio',
        id: true,
        idName: 'CB_Radio',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description: ',
      },
      {
        type: 'paragraph',
        text: '""Allows contacting the dealer, raiders and getting the bunker code.""',
      },
      {
        type: 'paragraph',
        text: 'it cant be found in any location',
      },
      {
        type: 'paragraph',
        text: 'uses: ( exactly as the in-game description):',
      },
      {
        type: 'paragraph',
        text: '1- contacting the dealer ( not always)',
      },
      {
        type: 'paragraph',
        text: '2- contacting the raiders',
      },
      {
        type: 'paragraph',
        text: '3- getting bunker alpha access code',
      },
      {
        type: 'paragraph',
        text: 'crafting:',
      },
      {
        type: 'paragraph',
        text: '-unlocks at level 6',
      },
      {
        type: 'paragraph',
        text: '- maximum number on the base : 1',
      },
      {
        type: 'paragraph',
        text: '- placed on a level 1 floor',
      },
      {
        type: 'paragraph',
        text: '-recipe:',
      },
      {
        type: 'paragraph',
        text: '3 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '5 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '1 Wiring',
      },
      {
        type: 'paragraph',
        text: 'finalizing:',
      },
      {
        type: 'paragraph',
        text: 'In update 1.4.8, a finalizing phase (like the chopper) was added to the CB Radio.',
      },
      {
        type: 'paragraph',
        text: 'Required materials:',
      },
      {
        type: 'paragraph',
        text: '5 Bolts',
      },
      {
        type: 'paragraph',
        text: '5 Transistor',
      },
      {
        type: 'paragraph',
        text: '5 Scrap Metal',
      },
      {
        type: 'paragraph',
        text: '2 Duct Tape',
      },
      {
        type: 'paragraph',
        text: 'the CB radio is an essential  structure to the game, so crafting and finalizing it must be done specially to call the raiders',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Charcoal',
        id: true,
        idName: 'Charcoal',
      },
      {
        type: 'paragraph',
        text: 'It can be crafted by burning pine/oak plank in campfire. ',
      },
      {
        type: 'paragraph',
        text: 'You could also take it from raid but only if you have nothing else to get.',
      },
      {
        type: 'paragraph',
        text: 'The most efficient way to create charcoal is to burn pine plank with the help of charcoal. It can be created with oak plank but its not worth as it gives the same amount of charcoal as pine plank.',
      },
      {
        type: 'paragraph',
        text: 'Since charcoal burns for longest time, its the most efficient burning fuel in game. ',
      },
      {
        type: 'paragraph',
        text: 'These are the stats of burning charcoal',
      },
      {
        type: 'paragraph',
        text: 'Campfire=charcoal[6min 40sec]',
      },
      {
        type: 'paragraph',
        text: 'Melting Furnace=charcoal[5min 20sec]',
      },
      {
        type: 'paragraph',
        text: 'Refined Melting Furnace=charcoal[4min 20 sec]',
      },
      {
        type: 'paragraph',
        text: '6 coal = 20 coal[10 plank]',
      },
      {
        type: 'paragraph',
        text: '6 coal = 20 carrot stew',
      },
      {
        type: 'paragraph',
        text: '12 coal =1 copper bar[copper ore]',
      },
      {
        type: 'paragraph',
        text: '17 coal =1 steel bar',
      },
      {
        type: 'paragraph',
        text: '8 coal = 10 iron bar[iron ore/scrap metal]',
      },
      {
        type: 'paragraph',
        text: '5 coal = 1 aluminium[aluminium wire]',
      },
      {
        type: 'paragraph',
        text: '12 coal = 1 aluminium[bauxite]',
      },
      {
        type: 'acknowledgement',
        text: 'Scorpion  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Chest',
        id: true,
        idName: 'Chest',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain is simply by crafting it. ',
      },
      {
        type: 'paragraph',
        text: 'The chest can be rarely found by killing an AI and looting the body. For placing a chest, you need a level 2 floor or higher.',
      },
      {
        type: 'paragraph',
        text: 'The chest is a storage item with 25 slots. It can be crafted with 10 pine planks (which you can get from woodworking bench), 2 iron bars (from melting 4 iron ore), 4 bolts (available in every zone)  and 1 small box (crafted from 3 pine logs and 5 plant fibers).It\'s better than a small box due to his 25 slots. ',
      },
      {
        type: 'acknowledgement',
        text: 'Jake  (Edited By:  Vedrana,  Locket)',
      },
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Chopper Fork',
        id: true,
        idName: 'Chopper_Fork',
      },
      {
        type: 'paragraph',
        text: 'The ultimate BEST place to find chopper fork is the bunker alfa. ',
      },
      {
        type: 'paragraph',
        text: 'The fascinating thing about finding it in the bunker is that it can be obtained from yellow crates as well, alongside red crates.The best way to get it is to clear floor 3 , which gives around 15 to 20 yellow tickets, along with partally clearing floor 2. Do not clear floor 4 as it barely gives require amount of tickets. Floor 3 will also give red tickets along with yellow. Then switch to hardmode and kill TBO for red tickets as red crate has an even higher chance of getting chopper fork. Thats your best bet.',
      },
      {
        type: 'acknowledgement',
        text: 'F2pgaming007  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Chopper Gas Tank',
        id: true,
        idName: 'Chopper_Gas_Tank',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening red coupon chest in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'An essential part in order to complete the Chopper vehicle. This item is non craftable and can only be obtained through Mehanics pack at the store, if willing to be purchased, or through Bunker Alpha\'s redeemable Combat Gear Box for 30 Combat Gear Coupons (red coupons). Strategy for obtaining this is to clear up Bunker Alpha\'s Floors from zombies and cleaning up all lootable sections in the bunker. Frenzied Giants have a higher chance of dropping red coupons compared to bloaters and abominations. Exchange coupons in terminal, which is located in lobby of Bunker Alpha. It is a very low chance of finding gas tank, so it will take multiple times of redeeming coupons to obtain one.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Chopper Wheel',
        id: true,
        idName: 'Chopper_Wheel',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening yellow/red coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: '1. List Every Location',
      },
      {
        type: 'paragraph',
        text: '-Green zone: You are guaranteed to get this item from the first Ai(Humans who look like you not zombies) he will bring your first chopper wheel',
      },
      {
        type: 'paragraph',
        text: '-Red or yellow box in bunker Alfa: This time is you need luck to get this thing from the box, you may need the healer buff (Mud Broth, gives 5% chance up for vehicle part\'s). It\'s all about random.',
      },
      {
        type: 'paragraph',
        text: '-Raid event: Some survivor already got this item more than enough. So they probably put it somewhere in random boxes in their house, or they may put it on the old truck outside (don\'t hope so much though).',
      },
      {
        type: 'paragraph',
        text: '-Buy from store: this is not recommended, but this is the fastest way to get the chopper wheel. (No sweat)',
      },
      {
        type: 'paragraph',
        text: '2. Can it be crafted.',
      },
      {
        type: 'paragraph',
        text: '- The answer is no. You can only found it on the Green zone, bunker Alfa, or raiding other survivors houses',
      },
      {
        type: 'paragraph',
        text: '3. Offer your strategy',
      },
      {
        type: 'paragraph',
        text: '- Green zone : Before you go to green zone visit for the first time, i would recommend you go to the air plane crash event. You can have some weapons, armor and some food to heal there, after killing the first Ai i recommend to go home to save the chopper wheel first, unless you are really sure about your surviving skill you may cut down all trees and go home. But remember don\'t die in green zone, because once you die you lost everything you have in that zone. More importantly you lost the first chopper wheel',
      },
      {
        type: 'paragraph',
        text: '-Red or yellow box in bunker Alfa: this time you need a lot of weapons,  armor and foods to clear the bunker. For rookie you may only defeat the 2nd floor every 2 day and save all the coupon you got until it\'s ready to exchange for weapons and stuff. Don\'t forget to use the healer from your base before exchange the coupon, it may only 5% to increase the rates to get vehicle part\'s but if you lucky enough you may have the chopper wheel and maybe got the jackpot engine gas',
      },
      {
        type: 'paragraph',
        text: '-Raid event: This time is based on luck only, not every survivor got chopper wheel more than enough. But if you looking everywhere in their house you may found it on any boxes. This is base on luck there is no trick here',
      },
      {
        type: 'paragraph',
        text: '-Buy from store : This will require no skill but luck from your pocket. Not recommended thou. But this is the fastest way to get it. Everything is random even you buy it so don\'t get mad if you didn\'t get it after you buy it',
      },
      {
        type: 'acknowledgement',
        text: 'Jendra  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Chopper',
        id: true,
        idName: 'Chopper',
      },
      {
        type: 'paragraph',
        text: '""The best way to farm for the chopper is to repeatedly complete the alpha-bunker in normal mode everytime its possible which is every 2 days, to collect the coupons needed to open coupon crates.',
      },
      {
        type: 'paragraph',
        text: 'These coupons can be collected by killing zombies in the lower lvs, each type of Zombie and bunker crates/lockers drop these coupons, while all zombies have a chance to drop green and yellow ones, the red ones more likely drop from frenziet giants and rarely from toxic spitters, floater boaters and toxic abomminations, since these most likely will drop u a green or yellow one.',
      },
      {
        type: 'paragraph',
        text: 'Green coupon crate= Engine part, Wheels',
      },
      {
        type: 'paragraph',
        text: 'Yellow coupon crate= Engine Part, Wheels, Fork',
      },
      {
        type: 'paragraph',
        text: 'Red coupon crate= Engine Part, Wheels, Fork, Gas Tank',
      },
      {
        type: 'paragraph',
        text: 'Engine Parts can also be found in Air drops.',
      },
      {
        type: 'paragraph',
        text: 'The above named items are only found in the Alpha-bunker, while the other required items are easily found in any zone crate, where the best way to farm these is the green zones due to the low difficulty.',
      },
      {
        type: 'paragraph',
        text: 'Only 1 required item needs to be crafted, the backpack.',
      },
      {
        type: 'paragraph',
        text: 'The chopper is a vehicle in the game, which allows you to move between the zones by using fuel instead of energy and it is required to transport the infected box and the generator to unlock the nothern areas.',
      },
      {
        type: 'paragraph',
        text: 'Build the chopper',
      },
      {
        type: 'paragraph',
        text: 'Unlock:',
      },
      {
        type: 'paragraph',
        text: 'Lv 6',
      },
      {
        type: 'paragraph',
        text: 'Craft points 2',
      },
      {
        type: 'paragraph',
        text: 'Materials:',
      },
      {
        type: 'paragraph',
        text: '10 pine plank',
      },
      {
        type: 'paragraph',
        text: '05 ion bar',
      },
      {
        type: 'paragraph',
        text: '05 bolts',
      },
      {
        type: 'paragraph',
        text: 'Placement:',
      },
      {
        type: 'paragraph',
        text: 'Plank floor lv 2',
      },
      {
        type: 'paragraph',
        text: 'Max. 1',
      },
      {
        type: 'paragraph',
        text: 'Grid size 2x2',
      },
      {
        type: 'paragraph',
        text: 'Assembly/Finalize:',
      },
      {
        type: 'paragraph',
        text: '20 engine part',
      },
      {
        type: 'paragraph',
        text: '30 bolts',
      },
      {
        type: 'paragraph',
        text: '10 ball baearing',
      },
      {
        type: 'paragraph',
        text: '01 chopper fork',
      },
      {
        type: 'paragraph',
        text: '01 chopper gas tank',
      },
      {
        type: 'paragraph',
        text: '04 basic backpack',
      },
      {
        type: 'paragraph',
        text: '30 scrap metal',
      },
      {
        type: 'paragraph',
        text: '20 rubber parts',
      },
      {
        type: 'paragraph',
        text: '2 chopper wheel',
      },
      {
        type: 'paragraph',
        text: '10 wiring',
      },
      {
        type: 'paragraph',
        text: 'Optaining required Items:',
      },
      {
        type: 'paragraph',
        text: 'Airdrop',
      },
      {
        type: 'paragraph',
        text: 'Zone Crates',
      },
      {
        type: 'paragraph',
        text: 'Bunker Crates',
      },
      {
        type: 'paragraph',
        text: 'Ticket Crates (wheels, fork, gastank)',
      },
      {
        type: 'paragraph',
        text: 'Recycler',
      },
      {
        type: 'paragraph',
        text: 'Raids',
      },
      {
        type: 'paragraph',
        text: 'Craftable (only backpack)',
      },
      {
        type: 'paragraph',
        text: 'Requirements:',
      },
      {
        type: 'paragraph',
        text: 'Chopper driver skill (can be obtained by farming wood areas',
      },
      {
        type: 'paragraph',
        text: 'Fuel: (min. 20 / max. 200)',
      },
      {
        type: 'paragraph',
        text: 'Poor in',
      },
      {
        type: 'paragraph',
        text: 'Gasoline  25 fuel (min. 1 / max. 8 )',
      },
      {
        type: 'paragraph',
        text: 'Bottle of gasoline 5 fuel (min. 4 / max. 40)',
      },
      {
        type: 'paragraph',
        text: 'Poor out',
      },
      {
        type: 'paragraph',
        text: '1 empty bottle equals 1 bottle of gasoline',
      },
      {
        type: 'paragraph',
        text: 'Chopper colour:',
      },
      {
        type: 'paragraph',
        text: 'Pattern + required paints',
      },
      {
        type: 'paragraph',
        text: 'Features:',
      },
      {
        type: 'paragraph',
        text: 'Faster traveling without using energy, but fuel',
      },
      {
        type: 'paragraph',
        text: '4 extra storage slots',
      },
      {
        type: 'paragraph',
        text: '(Selecting drive in chopper and select walk or run, energy usage, in the map will allow you to take the chopper with you without using fuel)""',
      },
      {
        type: 'acknowledgement',
        text: 'Huakawa  (Edited By:  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Cleaver',
        id: true,
        idName: 'Cleaver',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'the cleaver is a melee weapon that can do 17 damage with a speed of 1.4 ',
      },
      {
        type: 'paragraph',
        text: 'it can be found in:',
      },
      {
        type: 'paragraph',
        text: '1- dead AI players ',
      },
      {
        type: 'paragraph',
        text: '2- floors of bunker alpha',
      },
      {
        type: 'paragraph',
        text: '3- Beginners can find a free Half-Broken Cleaver inside the Old Pick-up truck on the south of their base',
      },
      {
        type: 'paragraph',
        text: 'Crafting: (unlocks at level 18)',
      },
      {
        type: 'paragraph',
        text: 'recipe:',
      },
      {
        type: 'paragraph',
        text: '5 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '5 Leather',
      },
      {
        type: 'paragraph',
        text: '4 Pine Plank',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Combat Gear Coupon',
        id: true,
        idName: 'Combat_Gear_Coupon',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by clearing bunker Alpha normal mode.',
      },
      {
        type: 'paragraph',
        text: 'Combat Gear Coupons are the only way to open the army chest in bunker Alfa',
      },
      {
        type: 'paragraph',
        text: 'There are four main areas you can find Combat Gear Coupons: Bunker Alfa, Air Drops, AI Bases, and Red Zones. The only way of getting Combat Gear Coupons is to ether find them in chests, or kill toxic abominations, Frenzy giants, and the Blind one while in bunker Alfa. ',
      },
      {
        type: 'paragraph',
        text: 'The best way to get 30 Coupons (which is needed to open the army chest) is to kill all the toxic abominations, and Frenzy giants on 2nd/3rd floor, then go to the specialist and activate the  protocol which will allow you to fight the blind one who will drop 10 tickets when killed. This will give you about 30 coupons allowing you to open the army crate. Despite being the fastest way this can still take some time to do.',
      },
      {
        type: 'paragraph',
        text: 'If you don\'t have much time to spend, I find just killing the blind will give you more tickets for your time. Although if your new to the game this can be a difficult battle.',
      },
      {
        type: 'paragraph',
        text: 'This is by far the fastest way to get the coupons, in all the other locations you will only find one or two coupons in chests if your lucky.',
      },
      {
        type: 'acknowledgement',
        text: 'steve  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Comfortable Bed',
        id: true,
        idName: 'Comfortable_Bed',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Finally you can spread out your legs.""',
      },
      {
        type: 'paragraph',
        text: 'The bed can rarely be found on dead AI players',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '- Unlocks at level 58',
      },
      {
        type: 'paragraph',
        text: '- placed on stone floor - level 3 floor',
      },
      {
        type: 'paragraph',
        text: '-  Max: N/A',
      },
      {
        type: 'paragraph',
        text: '- Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: '- 2 Craft Point Icon required',
      },
      {
        type: 'paragraph',
        text: '- recipe:',
      },
      {
        type: 'paragraph',
        text: '14 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '8 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '10 Nails',
      },
      {
        type: 'paragraph',
        text: '5 Thick Fabric',
      },
      {
        type: 'paragraph',
        text: '1 Steel Plate',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Recycling :',
      },
      {
        type: 'paragraph',
        text: 'The comfortable bed can be recycled to give you a chance to get:',
      },
      {
        type: 'paragraph',
        text: ' Pine Plank, Scrap Metal, Thick Fabric',
      },
      {
        type: 'paragraph',
        text: 'Strategy:',
      },
      {
        type: 'paragraph',
        text: 'This item is for cosmetic decoration only and doesn\'t give any benefits at the time being, so just craft one bed for decoration because you never know when the developers might change its recipe again but only if you have an abundance of required materials.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Connecting Rod',
        id: true,
        idName: 'Connecting_Rod',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is from bunker Alpha coupon chests.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“Important engine component for assembling a Zombie Truck.”',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'connecting rod can be found in:',
      },
      {
        type: 'paragraph',
        text: '1-airdrop events',
      },
      {
        type: 'paragraph',
        text: '2-bunker alpha in red and yellow ticket crates',
      },
      {
        type: 'paragraph',
        text: '3-the shop : the engineer box',
      },
      {
        type: 'paragraph',
        text: '4-rarely from red zones , rest stops and dead AI players',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'connecting rods can\'t be crafted or recycled',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1-finalizing the acid bath (10 connecting rods required)',
      },
      {
        type: 'paragraph',
        text: '2-as the in game description say it might be used in finalizing the zombie truck, but this is not confirmed since the Zombie Truck is currently cannot be crafted and unavailable.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'the best way to get the connecting rods is from bunker alpha red ticket crate and from airdrop events, after you complete the acid bath requirement ( 10 connecting rods ) i suggest keep collecting them and set aside a chest or a trunk for them ( a spare 25-35  connecting rods) is enough for any upcoming updates as the connecting rods will be required again ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Copper Bar',
        id: true,
        idName: 'Copper_Bar',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by smelting copper ore into copper bar.',
      },
      {
        type: 'paragraph',
        text: 'Copper Bars can be found in Floor 4 of Bunker Alfa and during raids. However, they can be crafted from Copper Ore which can be harvested from the Winter regions of the Wooded Foothills and the Frosty Backwoods, but this requires a significant amount of time and resources to accomplish. Once the ore is harvested, it can be smelted into Copper Bar at your base using melting furnace. All this can be avoided by using the Recycler which is the FASTEST, EASIEST and BEST way to obtain Copper Bar. Only four items can be recycled to obtain Copper Bar: the Floor Lamp (which itself requires a Copper Bar to craft), Gold Watches, Camera and Batteries. Gold watch and Camera grant Copper Bars as a third slot item in Recycler, while Batteries grant them as a second slot. It is recommended to level up Electronics considerably, putting batteries later on. As you reach higher level, % of getting a copper bar is higher.',
      },
      {
        type: 'acknowledgement',
        text: 'Elliott Aguayo  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Copper Ore',
        id: true,
        idName: 'Copper_Ore',
      },
      {
        type: 'paragraph',
        text: 'The best way to farm this is by farming winter zone repeatedly while avoiding zombies.',
      },
      {
        type: 'paragraph',
        text: '1. Copper ore can be found in',
      },
      {
        type: 'paragraph',
        text: ' • Winterzone( need chopper to travel) ',
      },
      {
        type: 'paragraph',
        text: ' • Bunker floor 4(varies) ',
      },
      {
        type: 'paragraph',
        text: ' • Floopy co-ordinate loot(varies) ',
      },
      {
        type: 'paragraph',
        text: ' • Raid Bases(varies) ',
      },
      {
        type: 'paragraph',
        text: ' • events(varies',
      },
      {
        type: 'paragraph',
        text: '2. 5 copper ore can be converted into 1 copper bar(12 charcoal) ',
      },
      {
        type: 'paragraph',
        text: '3. Cheapest outfit is tactical armor and tactical pants with fur cap and fur boot. ',
      },
      {
        type: 'paragraph',
        text: 'There are two ways to prepare for it.',
      },
      {
        type: 'paragraph',
        text: '     1. Craft lots of iron pickaxe, gather healing items(medkits/bandages), weapons, multiple armor sets and store it in the winterzone ai base which is a much more safer approach for new players as you can store all items in regular basis in ai base and keep farming with less number of resources in inventory. ',
      },
      {
        type: 'paragraph',
        text: '    2. Carry Duct Tape, Iron Bar, Nails, Pine Plank as much as possible in proper ratio for crafting in your inventory and craft iron pickaxe on the go whenever needed. If you die you loose all the stuff so only for experienced players. ',
      },
      {
        type: 'paragraph',
        text: 'Farming. ',
      },
      {
        type: 'paragraph',
        text: 'Things you must follow to farm efficiently. ',
      },
      {
        type: 'paragraph',
        text: '• Yellow zone contains 1-3 copper ore and red zone contains 3-6 copper ore) ',
      },
      {
        type: 'paragraph',
        text: '• take guns to fight with winter zombies as they heal with each time they hit us. ',
      },
      {
        type: 'paragraph',
        text: '• fill inventory with no farmable item and keep atleast 1 coppee ore then use auto button to find the location of copper ore but always use it to find the direction, do not let it take you to the copper ore as it ll take the shortest route which kost likely ll be through center, so just see direction and keep following through edge. ',
      },
      {
        type: 'paragraph',
        text: '• farm zone on the edges as almost all the time copper ore ll be on the edge. Do not risk going to center while fighting zombies for 1 copper ore. ',
      },
      {
        type: 'paragraph',
        text: '• ignore everything else, you can farm those in other zones, it\'s not worth risking',
      },
      {
        type: 'paragraph',
        text: '• never fight zombies unless there no option to get past them and if u do always make sure u aggro least number of zombies and lead them to area with no other zombie. ',
      },
      {
        type: 'paragraph',
        text: '• make the visit as short as possible, get in the zone - farm-exist asap. It ll reduce the chances of encountering an AI/TBO in the zone. ',
      },
      {
        type: 'paragraph',
        text: '• before you leave base, die to reset your stink level(bathing cleans the stink but keeps the water drinking level so if you reach its limit, you ll pee and get stinky) ',
      },
      {
        type: 'paragraph',
        text: '• always heal yourself with medkit/bandages as eating food increases the water drinking level which ll lead to pee twice and stink faster. ',
      },
      {
        type: 'paragraph',
        text: '• if hungry/thirsty just eat/drink enough to keep you from dying, dont over eat/drink. Always eat/drink<100',
      },
      {
        type: 'paragraph',
        text: '• always check the zone with auto button twice before leaving the zone as if there\'s a copper ore in zone but it\'s not in straight view(blocked by small Boulder, stone, tree) then it ll not detect it and consider it as non existent. If you move to another location and try it ll detect it and move towards it.',
      },
      {
        type: 'paragraph',
        text: '• keep jumping between zones and continue farming until you are out of resources while saving copper ores in chopper or ai base for safety.',
      },
      {
        type: 'paragraph',
        text: '• getting stinky doesn\'t mean you have to go back to base, you can continue farming. Stay on edge and fight spitter which ll be attracted towards us and avoid going near any zombie. ',
      },
      {
        type: 'acknowledgement',
        text: 'Scorpion  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Cosy Couch',
        id: true,
        idName: 'Cosy_Couch',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Thanks to it life will become more comfortable as in good old times.""',
      },
      {
        type: 'paragraph',
        text: 'This item is for cosmetic decoration only and doesn\'t give any benefits.',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '-Unlocks at level 46 ',
      },
      {
        type: 'paragraph',
        text: '-1 craft point needed ',
      },
      {
        type: 'paragraph',
        text: '-Placement: Plank Floor (lvl.2)',
      },
      {
        type: 'paragraph',
        text: '-Max: 4',
      },
      {
        type: 'paragraph',
        text: '-Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: 'Materials:',
      },
      {
        type: 'paragraph',
        text: '20 Oak Plank',
      },
      {
        type: 'paragraph',
        text: '15 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '10 Nails',
      },
      {
        type: 'paragraph',
        text: '10 Thick Fabric',
      },
      {
        type: 'paragraph',
        text: 'strategy :',
      },
      {
        type: 'paragraph',
        text: 'this item is purely decorative and has no function at the moment,',
      },
      {
        type: 'paragraph',
        text: 'so don\'t build this unless you have an abundance of the materials required ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Crowbar',
        id: true,
        idName: 'Crowbar',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game Description:',
      },
      {
        type: 'paragraph',
        text: '""Massive metal bar used for breaking locks and heads.""',
      },
      {
        type: 'paragraph',
        text: 'the crowbar is a melee weapon that have 17 damage with 1.6 speed',
      },
      {
        type: 'paragraph',
        text: 'the fastest melee weapon in the game ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'you can find the crowbar in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1-the shop: Survivor\'s Pack.',
      },
      {
        type: 'paragraph',
        text: '2-bunker alpha floors and green ticket chest in the lobby',
      },
      {
        type: 'paragraph',
        text: '3- dead AI players',
      },
      {
        type: 'paragraph',
        text: 'Uses',
      },
      {
        type: 'paragraph',
        text: '1- Breaking locked wire door in Bunker Alpha\'s third floor',
      },
      {
        type: 'paragraph',
        text: '2- Breaking locked gate in Watchtower Area',
      },
      {
        type: 'paragraph',
        text: '3- Melee weapon',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '- unlocks at level 22',
      },
      {
        type: 'paragraph',
        text: '-recipe: ',
      },
      {
        type: 'paragraph',
        text: '7 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '3 Leather',
      },
      {
        type: 'paragraph',
        text: 'recycling:',
      },
      {
        type: 'paragraph',
        text: 'you can recycle the crowbar to get Scrap Metal, Leather ( and leveling up the melee category )',
      },
      {
        type: 'paragraph',
        text: '-In the Christmas Update 2017, the skin of Crowbars is changed so they look like a Candy Cane, before it was switched back after the special event was over',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'the crowbar is the fastest melee weapon in the game , it is very useful for doing the wall trick in bunker alpha with the frenzied giants , and it is a great weapon in general for farming the zones , it is relatively cheap and  effective ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Dad Hat',
        id: true,
        idName: 'Dad_Hat',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Dad Hat',
      },
      {
        type: 'paragraph',
        text: '1. List Every Location',
      },
      {
        type: 'paragraph',
        text: '• Green Zones(Got from AI\'s or Getting the Resources to make this item)',
      },
      {
        type: 'paragraph',
        text: '• Yellow Zones(Got from AI\'s or Getting the Resources to make this item)',
      },
      {
        type: 'paragraph',
        text: '• Achieved from events(except for The Dealer)',
      },
      {
        type: 'paragraph',
        text: '2. Can it be Crafted? ',
      },
      {
        type: 'paragraph',
        text: '-Yes it certainly can be crafted its quite easy actually.',
      },
      {
        type: 'paragraph',
        text: 'Ingredients: (no need in telling how many because its items can be easily picked out)',
      },
      {
        type: 'paragraph',
        text: '• Plant Fiber (Picked from the ground)',
      },
      {
        type: 'paragraph',
        text: '• Cloth (by killing zombies or using the sewing machine with plant fibers)',
      },
      {
        type: 'paragraph',
        text: '3. Strategy',
      },
      {
        type: 'paragraph',
        text: '-There are times when you run out of resources especially wood and stone these times are the most efficient way to get these resources.',
      },
      {
        type: 'paragraph',
        text: '•Plant Fibers- Pick one from the ground and split them if you want a lot then when your inventory is occupied click auto.',
      },
      {
        type: 'paragraph',
        text: '•Cloth- Get this item from killing zombies there\'s a high chance in getting cloth from them or farm for more plant fibers and sew it into the sewing machine.',
      },
      {
        type: 'paragraph',
        text: '4. Compare',
      },
      {
        type: 'paragraph',
        text: 'This item is a lot more cheaper than other hats like Tactical Hat, Beanie, Fur Beanie, SWAT Helmet and more and they are quite easy to get and perfect for farming green and yellow zones.',
      },
      {
        type: 'acknowledgement',
        text: 'BLACK_ALPHA39127  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Denim Jeans',
        id: true,
        idName: 'Denim_Jeans',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Denim Jeans',
      },
      {
        type: 'paragraph',
        text: '1. List of Every Location',
      },
      {
        type: 'paragraph',
        text: '• Green Zones(Got from AI\'s or Getting the Resources to make this item)',
      },
      {
        type: 'paragraph',
        text: '• Yellow Zones(Got from AI\'s or Getting the Resources to make this item)',
      },
      {
        type: 'paragraph',
        text: '• Achieved from events(except for The Dealer)',
      },
      {
        type: 'paragraph',
        text: '2. Can it be Crafted? ',
      },
      {
        type: 'paragraph',
        text: '-Yes it certainly can be crafted its quite easy actually.',
      },
      {
        type: 'paragraph',
        text: 'Ingredients: (no need in telling how many because its items can be easily picked out)',
      },
      {
        type: 'paragraph',
        text: '• Plant Fiber (Picked from the ground)',
      },
      {
        type: 'paragraph',
        text: '• Cloth (by killing zombies or using the sewing machine with plant fibers)',
      },
      {
        type: 'paragraph',
        text: '• Rope (by killing zombies or using tanning pack with plant fibers)',
      },
      {
        type: 'paragraph',
        text: '3. Strategy',
      },
      {
        type: 'paragraph',
        text: '-There are times when you run out of resources especially wood and stone these times are the most efficient way to get these resources.',
      },
      {
        type: 'paragraph',
        text: '• Plant Fibers- Pick one from the ground and split them if you want a lot then when your inventory is occupied click auto.',
      },
      {
        type: 'paragraph',
        text: '•Cloth- Get this item from killing zombies there\'s a 60-80% chance in getting cloth from them or farm for more plant fibers and sew it into the sewing machine.',
      },
      {
        type: 'paragraph',
        text: '•Rope- Got from killing zombies or from tanning packs ',
      },
      {
        type: 'paragraph',
        text: '4. Compare',
      },
      {
        type: 'paragraph',
        text: 'This item is a lot more cheaper than other Jeans like Military Trousers, Fur Pants, SWAT Leggings and more and they are quite easy to get and perfect for farming green and yellow zones.',
      },
      {
        type: 'acknowledgement',
        text: 'BLACK_ALPHA39127  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Dining Table',
        id: true,
        idName: 'Dining_Table',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Gathers everyone for a family dinner.""',
      },
      {
        type: 'paragraph',
        text: 'The Dining Table is a decorative furniture item you can craft for your home. It has no function or benefits',
      },
      {
        type: 'paragraph',
        text: 'The item can\'t be found in any location ',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '-Unlocks at level 40',
      },
      {
        type: 'paragraph',
        text: '-needs 1 Craft Points ',
      },
      {
        type: 'paragraph',
        text: '-recipe:',
      },
      {
        type: 'paragraph',
        text: '15 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '15 Nails',
      },
      {
        type: 'paragraph',
        text: '5 Empty Can',
      },
      {
        type: 'paragraph',
        text: '7 Plastic',
      },
      {
        type: 'paragraph',
        text: 'Placement: Plank Floor (lvl.2)',
      },
      {
        type: 'paragraph',
        text: 'Max: 3',
      },
      {
        type: 'paragraph',
        text: 'Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: 'Recycling:',
      },
      {
        type: 'paragraph',
        text: 'Recycling the dining table gives you a chance to get  Pine plank, scrap metal, aluminum bar and for leveling up the other category in the recycler',
      },
      {
        type: 'paragraph',
        text: 'Strategy:',
      },
      {
        type: 'paragraph',
        text: 'The dining table is purely decorative item with no function at the time being, don\'t craft it unless you have an abundance of the required materials ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Dish Antenna',
        id: true,
        idName: 'Dish_Antenna',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is in the bunker alfa by killing zombies and opening chests and getting the tickets and opening the various kits available.',
      },
      {
        type: 'paragraph',
        text: 'It can be found in the bunker alfa in the different kits available for different tickets namely yellow and red tickets. Also it is available in the green, yellow and red zones of various resources. The more dangerous the zone is, the better the chance of finding it is. Also found in air drops. It is not craftable. ',
      },
      {
        type: 'acknowledgement',
        text: 'Ankit Anjan Adhikari  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Doormat',
        id: true,
        idName: 'Doormat',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The doormat cannot be found in any zone at the moment, but occasionally an AI bot will drop it. It can be crafted with 15 grass , 5 animal hide and 10 rope, you can farm these items in green zone, which a few trip will do.',
      },
      {
        type: 'acknowledgement',
        text: 'Shade  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Dual Berettas',
        id: true,
        idName: 'Dual_Berettas',
      },
      {
        type: 'paragraph',
        text: 'Best way to get this is by opening floppy disc chests.',
      },
      {
        type: 'paragraph',
        text: 'This special weapon can be found exclusively in 2 locations; floppy disk locations and or on a raid. Like most firearms with the exception of the zip gun, it sadly cannot be crafted yet nor repaired. There are 2 way to acquire the dual Barrettas. The easiest being gaining over level 3 reputation with the specialist. After every floppy disk he gives you, you now have a great chance of acquiring the dual barettas. The other least reliable option is go on raids. Depending on your reputation with the raiders, bases will tend to have better loot like the barettas. However, it is not always guaranteed that ever base you raid will have them.',
      },
      {
        type: 'acknowledgement',
        text: 'Mrworldwide2  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Duct Tape',
        id: true,
        idName: 'Duct_Tape',
      },
      {
        type: 'paragraph',
        text: 'Best way to get this is by farming oak zones and the winter zones.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“One of the most important tools for surviving the zombie apocalypse.”',
      },
      {
        type: 'paragraph',
        text: 'Duct Tape can be found in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1- all green , yellow and red zones ',
      },
      {
        type: 'paragraph',
        text: 'best places to get them are the oak zones and the winter zones (+20 duct tapes)',
      },
      {
        type: 'paragraph',
        text: '2- airdrop events',
      },
      {
        type: 'paragraph',
        text: '3-rest stop events',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: 'Duct Tape is used in the following Blueprints:',
      },
      {
        type: 'paragraph',
        text: 'Makeshift bat ( needs 1 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'ATV ( needs 10 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Bow ( needs 3 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Dog crate ( needs 7 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Iron hatchet ( needs 5 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Iron pickaxe ( needs 5 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Nail Board ( needs 3 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Floor Lamp ( needs 2 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Zip gun ( needs 5 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Medical Table ( needs 3 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Skull Crusher ( needs 4 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Trunk ( needs 5 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Wiring( needs 1 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Saw Blade Mace ( needs 5 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'S&W Magnum( needs 1 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Explosive Material( needs 2 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'Shotgun( needs 2 duct tape)',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'duct tape is very important to the game, it is in the recipe of iron pickaxes which are needed for mining copper in the winter zones  and iron  hatchets which are needed to harvest oak from oak zones but and more importantly for breaking level 2 walls in a raid',
      },
      {
        type: 'paragraph',
        text: 'the best place to get the duct tapes is from the red oak zone and the winter zones, but since the oak zones can be cleared easier than the winter zones it\'s the best location to get duct tapes (10-20 duct tapes per visit)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Edible Mushroom',
        id: true,
        idName: 'Edible_Mushroom',
      },
      {
        type: 'paragraph',
        text: 'Best way to get this is by farming oak zones.',
      },
      {
        type: 'paragraph',
        text: 'Edible Mushroom is a non-craftable food item that spawns in both Oak Forest zones, as well as the Oak Clearing event. Edible Mushrooms restore 5 health points, 2 hunger points, and 1 thirst point when eaten. Edible Mushrooms have the same restoration statistics as Berries. Strategy to get them is to farm above mentioned locations.Can also be found in raids.',
      },
      {
        type: 'acknowledgement',
        text: 'TitanM1  (Edited By:  Vedrana,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Electric Generator',
        id: true,
        idName: 'Electric_Generator',
      },
      {
        type: 'paragraph',
        text: 'Best way is simply by crafting it. ',
      },
      {
        type: 'paragraph',
        text: 'Crafting a generator is unlocked at level 34 and needs 2 points. It is placed on ground or floor, size 1x1. Crafting requires 10 iron plate, 15 bolts, 5 aluminium bar and 5 wrenches.',
      },
      {
        type: 'paragraph',
        text: 'If you are lucky, you can find it in raids, which will save you all resources needed to craft one. ',
      },
      {
        type: 'paragraph',
        text: 'After generator is crafted and placed, there is a 2nd stage on finalizing it. It requires:',
      },
      {
        type: 'paragraph',
        text: '15 Aluminium Plate',
      },
      {
        type: 'paragraph',
        text: '10 Wrench',
      },
      {
        type: 'paragraph',
        text: '15 Rubber Parts',
      },
      {
        type: 'paragraph',
        text: '20 Ball Bearing',
      },
      {
        type: 'paragraph',
        text: '30 Iron Plate',
      },
      {
        type: 'paragraph',
        text: '40 Duct Tape',
      },
      {
        type: 'paragraph',
        text: '25 Wiring',
      },
      {
        type: 'paragraph',
        text: '5 Engine Part',
      },
      {
        type: 'paragraph',
        text: '50 Bolts',
      },
      {
        type: 'paragraph',
        text: '40 Gasoline',
      },
      {
        type: 'paragraph',
        text: 'The only current use for the generator is to restore power to the Watchtower. Note that the Chopper is needed to deliver the generator to the Watchtower. ',
      },
      {
        type: 'paragraph',
        text: 'More than one can be built.',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Electronic Circuit',
        id: true,
        idName: 'Electronic_Circuit',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain the Electronic Circuit would be in the military chests found in secret locations that are revealed by inserting the ""Floppy with Coordinates"" ',
      },
      {
        type: 'paragraph',
        text: 'The Electronic Circuit is one of the hardest items to find in LDOE and is undoubtedly a real struggle to obtain for both new and experienced players. (Obtained through gaining reputation levels with the Specialist) into the tactical terminal in the Overseer\'s room, Bunker Alfa.',
      },
      {
        type: 'paragraph',
        text: 'Another way in getting the Electronic Circuit can be done through raiding, although this strategy is pretty ineffective when considering how difficult it is to find a base with the Electronic Circuit and even if one manages to, it is likely to be heavily guarded.',
      },
      {
        type: 'paragraph',
        text: 'The Electronic Circuit currently cannot be crafted, as Tungsten Bars are not in the game yet. However, with update 1.8.2, the Recycler was introduced into the game, giving players an opportunity to gain it from recycling electronic related items. Currently, the items to recycle that have a chance to give Electronic Circuits are Smartphones, USB Drives and Signal Amplifiers. Theses items however, only give the player a chance to get the Electronic Circuit in a third slot, after the Electronics level in the Recycler is over 10.',
      },
      {
        type: 'paragraph',
        text: 'My strategy for obtaining the Electronic circuit have two types: Short term and  Long term benefits. The Short term strategy is to continuously gain reputation in the Overseer\'s Room to receive Floppy Disks. This allows the player to quickly get Electronic circuit from Floppy Disk to build current existing buildings/objects, e.g: Acid Bath, Sector 7.',
      },
      {
        type: 'paragraph',
        text: 'The Long term strategy is to focus on the recycler and gain as many levels in the Electronics section. With this strategy the player is setting long term by gaining little in the beginning to expand in the future. With the chance of getting an Electronic Circuit 1% more every 10 levels in third slot, one would expect not to receive much in the beginning, but once the levels start to build up, the player will be facing up to 5% as max. This allows the player to set himself for future buildings/objects that may or may not need Electronic Circuits.',
      },
      {
        type: 'paragraph',
        text: 'Overall in my opinion, I would prefer the Long term strategy over the Short term one, based on the fact that it is safer and cheaper to utilise, as well as greatly providing the player in the long run. With the Short term strategy, the Floppy disks the player receive are hard to get, requiring an abundance of guns and food to receive just one. The Long term strategy on the other hand can be made of us just by simply \'doing what you always do\' i.e, farming in zones and raiding.',
      },
      {
        type: 'paragraph',
        text: 'In conclusion, the Recycler greatly helps players to receive Electronic Circuits.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Silverspoon  (Edited By:  Vedrana,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Empty Bottle',
        id: true,
        idName: 'Empty_Bottle',
      },
      {
        type: 'paragraph',
        text: 'Easiest way to obtain empty bottle is simply by drinking a bottle of water. ',
      },
      {
        type: 'paragraph',
        text: 'After you drink it, empty bottle will appear in your inventory. Some people believe that empty bottles are no use, but my opinion is that they are very handy. I recommend taking 20 when you go on raid, just so you can transfer Gasoline from player chopper to yours. These can of course be refilled with water again using the Rain Catcher. It is also required in some recipes such as Chemistry station and houseplant.',
      },
      {
        type: 'acknowledgement',
        text: 'Tinghead34  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Empty Can',
        id: true,
        idName: 'Empty_Can',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by comsuming baked beans.',
      },
      {
        type: 'paragraph',
        text: 'Empty Can is an uncraftable item that is obtained when Baked Beans are eaten. In the recycler, with Empty Cans there is a chance of getting Scrap Metal and Aluminum Bars. Empty Cans can be found in all farming zones, and a chance of being found in the Bunker Alfa. Empty Cans can be used to craft Spiked Devastators, Dining Table, and the tripwire trap.',
      },
      {
        type: 'acknowledgement',
        text: 'TitanM1  (Edited By:  Vedrana,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Engine Part',
        id: true,
        idName: 'Engine_Part',
      },
      {
        type: 'paragraph',
        text: 'Best way to get engine part is Bunker Alpha coupon boxes.',
      },
      {
        type: 'paragraph',
        text: '1).ENGINE PARTS Location',
      },
      {
        type: 'paragraph',
        text: '►Bunkers (coupon boxes)',
      },
      {
        type: 'paragraph',
        text: '►AI Bases',
      },
      {
        type: 'paragraph',
        text: '►Airdrop Event (very rare)',
      },
      {
        type: 'paragraph',
        text: '►Floppy with Coordinates loot',
      },
      {
        type: 'paragraph',
        text: '►Mechanic\'s Box in in-app store (rare chance)',
      },
      {
        type: 'paragraph',
        text: '►Wrecked Cars in resource zones, brought back to home base on Chopper, and recycled with Recycler',
      },
      {
        type: 'paragraph',
        text: '2).You can\'t craft engine parts.',
      },
      {
        type: 'paragraph',
        text: 'The red coupon chests as it can provide up to 3 engine parts every time. Get the Floppy Disc with Coordinates too. Visit other locations I mentioned above for maximum gain of Engine Parts.',
      },
      {
        type: 'acknowledgement',
        text: 'Dwij  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Expensive Watches',
        id: true,
        idName: 'Expensive_Watches',
      },
      {
        type: 'paragraph',
        text: '1. The best way to get this is by farming Green, Yellow, and Red locations (forests or mountains, including oak forest, and winter locations), additionally, bunker Alpha and Air Drops',
      },
      {
        type: 'paragraph',
        text: '2. It is not craftable',
      },
      {
        type: 'paragraph',
        text: '3. To get some (4 to 10) you will have to enter Bunker Alpha, explore, and open all the boxes, so you get the most of them that you can get. Another easy way to keep collecting them is to go to Air Drops (there\'s a chance to get them, is not assured), you can kill all zombies in this location for extra chance of getting it.',
      },
      {
        type: 'paragraph',
        text: '4. They are as common as Flashlights, easier to get than USB Drives but harder to gather than Aluminum Wire or Duct Tape',
      },
      {
        type: 'acknowledgement',
        text: 'Trickster  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'First Aid Kit',
        id: true,
        idName: 'First_Aid_Kit',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by killing zombies for pieces of cloth, get berry for alcohol and turn them into first aid kit.',
      },
      {
        type: 'paragraph',
        text: 'First Aid Kits can be found at Bunker Alfa, enemy bases, events, sometimes green zones, yellow, and red zones. This item can be crafted by using 2 Alcohol, and 3 Bandages. My strategy on getting cloth to make Bandages for First Aid Kits is by killing all enemies in the zone, and collect all the plant fiber in the zone and take them to the sewing machine.(20 plant fibers makes 10 pieces of cloth, which can be crafted into bandages.) Getting Alcohol from zones is open all the chests in the zone to see if you can find some, and collect all the berries in the zone and take them to the medical table.(5 berries makes 1 Alcohol.) When getting First Aid Kits, Bandages, and Alcohol from Bunker Alfa open the coupon boxes.(If you have enough coupons to open them.) A Ration box will give you 2-3 First Aid Kits, 2-4 Bandages, and sometimes 1-2 Alcohol. A Survival box will give you 3-4 First Aid Kits, 3-5 Bandages, and sometimes 1-4 Alcohol. A Combat Gear box will give you 4-6 First Aid Kits, 4-8 Bandages, and 2-6 Alcohol. Another way of getting First Aid Kits, Bandages, and Alcohol from Bunker Alfa is by clearing the bunker.(Now it sounds obvious which it is but you will get at least 1 Bandage or First Aid Kit and some Alcohol from each level.) Getting these items from events is also a common way on getting these items. (Supply drop, rest stop, etc.) That\'s about it I really don\'t see any other way in getting these items.',
      },
      {
        type: 'acknowledgement',
        text: 'Ranger  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fishing Rod',
        id: true,
        idName: 'Fishing_Rod',
      },
      {
        type: 'paragraph',
        text: 'Fishing rod can only be crafted as it is craftable.',
      },
      {
        type: 'paragraph',
        text: 'But, it has no use right now in game. It can be crafted by collecting different resources ( view database). It may be found in raids. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Flare Gun',
        id: true,
        idName: 'Flare_Gun',
      },
      {
        type: 'paragraph',
        text: '1) Flare gun was an exclusive Christmas/winter event item and can only be obtained through raids now (revenge or normal)',
      },
      {
        type: 'paragraph',
        text: '2) It cannot be crafted',
      },
      {
        type: 'paragraph',
        text: '3) The best and the only way to get it is by being efficient in raids. Try to reach the centre of the base as usually, that\'s where the best loot is. Raids are something you can only good at by either trying yourself or watching videos. I recommend checking JCF out. Also please do not try raiding if you don\'t have at least 3 layers of level 3 walls. Or you might end up losing your good stuff.',
      },
      {
        type: 'acknowledgement',
        text: 'Divyam  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Flashlight',
        id: true,
        idName: 'Flashlight',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the flashlight is through clearing the bunker.',
      },
      {
        type: 'paragraph',
        text: 'You can get flashlights from green zones, yellow zones, red zones, dead zombies, raids, and the bunker. The flashlight cannot be crafted. The best way to get the flashlight is through clearing the bunker and opening the chests with loot(not the ticket crates) because it has a high chance of spawning in the chests, after clearing the bunker i normally have 5 to 6 flashlights, however it is random so there is a chance that you won\'t get any. It is comparable to the mobile phone.',
      },
      {
        type: 'acknowledgement',
        text: 'ColeDixon  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Floor Lamp',
        id: true,
        idName: 'Floor_Lamp',
      },
      {
        type: 'paragraph',
        text: 'It can only be crafted.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""It already look great, the electricity will make it even better.""',
      },
      {
        type: 'paragraph',
        text: '-This item is for cosmetic decoration only and doesn\'t give any benefits.',
      },
      {
        type: 'paragraph',
        text: '-it can\'t be found in any location',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '-Unlocks at level 28 ',
      },
      {
        type: 'paragraph',
        text: '-needs 1 craft point',
      },
      {
        type: 'paragraph',
        text: '-Placement: Floor (lvl.1)',
      },
      {
        type: 'paragraph',
        text: '-Max: 10',
      },
      {
        type: 'paragraph',
        text: '-Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: '-recipe:',
      },
      {
        type: 'paragraph',
        text: '7 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '1 Copper Bar',
      },
      {
        type: 'paragraph',
        text: '2 Bolts',
      },
      {
        type: 'paragraph',
        text: '5 Thick Fabric',
      },
      {
        type: 'paragraph',
        text: '3 Wiring',
      },
      {
        type: 'paragraph',
        text: '2 Duct Tape',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'This item is for cosmetic decoration only and doesn\'t give any benefits at the time being, so just craft one if you have an abundance of required materials.',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Floppy Disk',
        id: true,
        idName: 'Floppy_Disk',
      },
      {
        type: 'paragraph',
        text: 'The only way you can get it is in Bunker Alfa Hard mode. ',
      },
      {
        type: 'paragraph',
        text: 'You could get it from raiding other players\' base but it is very unlikely to happen. You cannot craft it. After activating Hard mode you will go to floor 3 and you do the wall trick almost on every zombie but not on fast bitters and toxic spitters because its hard(so take with you some glocks to kill them), FG(Frenzied Giant) you will craft around 6 crowbars and you will use wall trick on them too -->',
      },
      {
        type: 'paragraph',
        text: 'https://www.youtube.com/watch?v=09yUTnR3CR4-This is video how to do wall trick',
      },
      {
        type: 'paragraph',
        text: 'https://www.youtube.com/watch?v=H5gqf6bD8rw-This is video how to do Floor 3(do not craft bow for frenzied giants though) and this will learn you how to do other floors as well for the boss Blind One i recommend using 2 shotguns, 20 medkits and tier 3 armor(tactical, use this in whole bunker too) Blind One will hit you 5 times and then rush into wall and after he rush the wall its time to shoot. Also after his HP is down under 700 he will try to heal so you have to go to the left upper side of his room and use the button on wall after he starts ""feasting"" (healing) dead body on the ground you press button. Then he is healing second time after his hp is down under 400 you will go to the button that is close to the door and do the same after that he is not healing anymore. Do the 2 floor aswell with crowbars(4) and few glocks or m4(1-3)and collect Military Notebook, Identification Tags and Personal Effects that you will give to the Specialist in floor 1 and if you collect enough of them he will give you Floppy Disk. In Reputation level other than 3, 6, 9, 12 and 15, the army specialist will give you Floppy Disc as the reward of levelling up reputation.',
      },
      {
        type: 'acknowledgement',
        text: 'coolover3  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'FN Scar',
        id: true,
        idName: 'FN_Scar',
      },
      {
        type: 'paragraph',
        text: 'This can be found in floppy disk coordinates and during a raid. ',
      },
      {
        type: 'paragraph',
        text: 'It cannot be crafted like most guns except. My strategy is collecting as many reputation items and floppy disks as possible. This simply means completely bunker Alfa every 2 days. After obtaining level 9 reputation with the specialist, all coordinates all have a high chance of having the FN scar, especially  infected creates. While you’re less likely to find the FN scar on every raid, it still is a good pathway to getting a scar. However, the best option is to save your floppy disks for level 9 reputation and slowly be to cash them in to get the scar.',
      },
      {
        type: 'acknowledgement',
        text: 'Mrworldwide2  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fur Beanie',
        id: true,
        idName: 'Fur_Beanie',
      },
      {
        type: 'paragraph',
        text: 'Fur beanie is crafted from fur and other resources (view database). ',
      },
      {
        type: 'paragraph',
        text: 'It provides good armour and also warmth. It may be dropped by Ai players or found in raids. If you found it from dead AI bot, keep it if you can as fur is hard to get. Best way to get fur beanie is to craft it. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fur Boots',
        id: true,
        idName: 'Fur_Boots',
      },
      {
        type: 'paragraph',
        text: 'Fur boots is crafted from fur and other resources (view database). ',
      },
      {
        type: 'paragraph',
        text: 'It provides good armour, warmth and speed. It may be dropped by Ai players or found in raids. If you found it from dead AI bot, keep it if you can as fur is hard to get. Best way to get fur boots is to craft it.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fur Jacket',
        id: true,
        idName: 'Fur_Jacket',
      },
      {
        type: 'paragraph',
        text: 'Fur jacket is crafted from fur and other resources (view database). ',
      },
      {
        type: 'paragraph',
        text: 'It provides good armour and also warmth. It may be dropped by Ai players or found in raids. If you found it from dead AI bot, keep it if you can as fur is hard to get. Best way to get fur jacket is to craft it.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fur Trousers',
        id: true,
        idName: 'Fur_Trousers',
      },
      {
        type: 'paragraph',
        text: 'Fur trousers is crafted from fur and other resources (view database). ',
      },
      {
        type: 'paragraph',
        text: 'It provides good armour and also warmth. It may be dropped by Ai players or found in raids. If you found it from dead AI bot, keep it if you can as fur is hard to get. Best way to get fur trousers is to craft it. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Fur',
        id: true,
        idName: 'Fur',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming red pine forest.',
      },
      {
        type: 'paragraph',
        text: 'Fur is used to craft warm clothes, in order to travel to cold zones like in the north.',
      },
      {
        type: 'paragraph',
        text: 'Fur is obtained by killing foxes, which can be found in red forests, oak forests, and from looting other players\' bases. The best strategy of acquiring fur is by going to the red pine forest and melee-ing all the foxes that are roaming around. They may not attack, but be careful, they have 50 health and will run upon seeing you. Their fur is more valuable than the common animal rawhide found in deers and wolves, so save up this item for later!',
      },
      {
        type: 'acknowledgement',
        text: 'Colestep55  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Garden Bed',
        id: true,
        idName: 'Garden_Bed',
      },
      {
        type: 'paragraph',
        text: 'Garden bed is easily crafted by collecting resources (view database) and placed in build mode. ',
      },
      {
        type: 'paragraph',
        text: 'It useful to grow carrots. It may be dropped by Ai players.  ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Gas Mask',
        id: true,
        idName: 'Gas_Mask',
      },
      {
        type: 'paragraph',
        text: 'The Gas Mask can be found in every red crate in bunker Alpha. ',
      },
      {
        type: 'paragraph',
        text: 'You can also find in other players\' bases when raiding them. It cannot be crafted nor recycled. At the moment the Gas Mask is only useful to open the two lockers in the gas room located in the 3rd floor of bunker Alpha. Don\'t neglect it as it can have  coupons in normal mode or hard mode items in hard mode, along with all sort of more or less useful objects. ',
      },
      {
        type: 'paragraph',
        text: 'In order to open a red crate, you need 30 red coupons. Red coupons are found in:',
      },
      {
        type: 'paragraph',
        text: '* Bunker Alpha: ',
      },
      {
        type: 'paragraph',
        text: ' - Frenzy giants mainly but also in toxic abominations and toxic spotter (rarely). ',
      },
      {
        type: 'paragraph',
        text: ' - The blind one will give you 10 red coupons.',
      },
      {
        type: 'paragraph',
        text: ' - boxes and lockers in all floors.',
      },
      {
        type: 'paragraph',
        text: '* red and yellow forests and mountain locations. It\'s possible but it shouldn\'t be your main search area ',
      },
      {
        type: 'paragraph',
        text: '* Air drops and  chopper events: rare',
      },
      {
        type: 'paragraph',
        text: '* raiding',
      },
      {
        type: 'acknowledgement',
        text: 'Melqartn  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Gasoline',
        id: true,
        idName: 'Gasoline',
      },
      {
        type: 'paragraph',
        text: '""It can be found in Bunker Alpha Coupon crates (green, yellow, red)and lower lv chests/lockers, Raids, Air drop and  Rest stop event',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to optain this item is by opening the Bunker Alpha Coupon crates (green 20 Tickets, yellow 25 Tickets, red 30 Tickets)""',
      },
      {
        type: 'acknowledgement',
        text: 'Lance018  (Edited By:  Huakawa,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Glock 17',
        id: true,
        idName: 'Glock_17',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to obtain the Glock 17 (full durability) is by opening the green and yellow Coupon crate in Bunker Alpha',
      },
      {
        type: 'paragraph',
        text: 'It can be found in crates from the yellow and red zones (any), by trading with the dealer (Weapon crate), Airdrop, on AI\'s players dead body, NPC bases, Bunker Alpha Coupon crates and lower lv chests/lockers, dead soldier infront of Bunker Alpha and rest stop events',
      },
      {
        type: 'paragraph',
        text: 'It can not be crafted due to a missing imgredient in the recipe not being in the game yet (gun powder)',
      },
      {
        type: 'acknowledgement',
        text: 'MarioS  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Gold Bar',
        id: true,
        idName: 'Gold_Bar',
      },
      {
        type: 'paragraph',
        text: 'It’s usually found in chests in green, yellow, and red zones. ',
      },
      {
        type: 'paragraph',
        text: 'It holds no value except being sometimes requested by the dealer (along with other items) in exchange for a weapon crate. Its best to keep a good amount of these so you never run out in case the dealer wants them for a trade.',
      },
      {
        type: 'acknowledgement',
        text: 'TyNoMite  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Golf Club',
        id: true,
        idName: 'Golf_Club',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening chests in any farming zone.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Sports equipment for golf. Used to be too expensive for fights.""',
      },
      {
        type: 'paragraph',
        text: 'Golf club is a melee weapon that do 18 damage with an attack speed of 1.1 ',
      },
      {
        type: 'paragraph',
        text: 'golf club can\'t be crafted',
      },
      {
        type: 'paragraph',
        text: 'golf club can be found in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1-bunker alpha green ticket crate and in the chests in the floors',
      },
      {
        type: 'paragraph',
        text: '2- all green, yellow and red zones',
      },
      {
        type: 'paragraph',
        text: '3- dead AI players',
      },
      {
        type: 'paragraph',
        text: 'recycling: when recycled it gives you a chance to get Scrap Metal, Duct Tape, Aluminum Bar',
      },
      {
        type: 'paragraph',
        text: 'this weapon is best used against roaming zombies, fast biters, and non-infected wolves ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Green Paint',
        id: true,
        idName: 'Green_Paint',
      },
      {
        type: 'paragraph',
        text: 'The easiesr way to get Green paint is by opening Bunker Alpha Coupon crates and chests/lockers in the lower lv\'s ',
      },
      {
        type: 'paragraph',
        text: 'it can also be found in any of the zones chests, airdrops, rest stop event, floppy disc location and from the shop',
      },
      {
        type: 'paragraph',
        text: 'It is used for painting the chopper (patterns: bloater and military), small boxes, chests and trunks',
      },
      {
        type: 'paragraph',
        text: 'it can not be crafted ',
      },
      {
        type: 'paragraph',
        text: 'it can not be recycled',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Gun Oil',
        id: true,
        idName: 'Gun_Oil',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by doing bunker Alpha hard mode.',
      },
      {
        type: 'paragraph',
        text: 'Gun oil is only used for modifying glocks, m16 and ak-47 by the specialist at Bunker Alfa. You can only obtain gun oil from Bunker Alpha hard mode, rarely from raids and floppy\'s.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get gun oil is by farming hard mode, because it gives you the most amount of gun oil compared to floppy\'s and raids. While farming hard mode, you will also get a lot of name tags, personal effects and military notebooks which you can use to get floppy\'s from the specialist. It has a chance of getting gunoil and its a decent way to get extra gun oil.',
      },
      {
        type: 'paragraph',
        text: 'Raids aren\'t good for farming gun oil, simpy because it depends on if you gonna a good base to raid and your luck of finding it in chest.',
      },
      {
        type: 'acknowledgement',
        text: 'Zate  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Gunsmith Bench',
        id: true,
        idName: 'Gunsmith_Bench',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""A set of tools for making Weapon Parts.""',
      },
      {
        type: 'paragraph',
        text: '""One day will come in handy""',
      },
      {
        type: 'paragraph',
        text: 'gunsmith bench is temporarily shutdown',
      },
      {
        type: 'paragraph',
        text: 'it can\'t be used, it can\'t be moved ',
      },
      {
        type: 'paragraph',
        text: 'Crafting :',
      },
      {
        type: 'paragraph',
        text: '- unlocks at level 34',
      },
      {
        type: 'paragraph',
        text: '- needs 1 craft point',
      },
      {
        type: 'paragraph',
        text: '- Placement: Stone floor (lv.3)',
      },
      {
        type: 'paragraph',
        text: '- Max: 1',
      },
      {
        type: 'paragraph',
        text: '- Grid Size: 2×2',
      },
      {
        type: 'paragraph',
        text: '- recipe:',
      },
      {
        type: 'paragraph',
        text: '15 Pine Planks',
      },
      {
        type: 'paragraph',
        text: '25 Iron Bars',
      },
      {
        type: 'paragraph',
        text: '20 Rubber Parts',
      },
      {
        type: 'paragraph',
        text: '10 Aluminium Bar',
      },
      {
        type: 'paragraph',
        text: '20 Nails',
      },
      {
        type: 'paragraph',
        text: '-finalizing:',
      },
      {
        type: 'paragraph',
        text: '20 Aluminium Plate',
      },
      {
        type: 'paragraph',
        text: '20 Wrench',
      },
      {
        type: 'paragraph',
        text: '20 Wiring',
      },
      {
        type: 'paragraph',
        text: '5 Hammer',
      },
      {
        type: 'paragraph',
        text: '4 Chest',
      },
      {
        type: 'paragraph',
        text: '20 Duct Tape',
      },
      {
        type: 'paragraph',
        text: '30 Aluminium Bar',
      },
      {
        type: 'paragraph',
        text: '15 Steel Plate',
      },
      {
        type: 'paragraph',
        text: '20 Rubber Parts',
      },
      {
        type: 'paragraph',
        text: '50 Bolts',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'old Recipes:',
      },
      {
        type: 'paragraph',
        text: '1 Glock 17 gives 1 Weapon Part -> 1 hours',
      },
      {
        type: 'paragraph',
        text: '1 M16 gives 1 Weapon Part -> 1 hours',
      },
      {
        type: 'paragraph',
        text: '1 AK-47 gives 1 Weapon Part -> 1 hours',
      },
      {
        type: 'paragraph',
        text: '1 Shotgun gives 1 Weapon Part -> 1 hours',
      },
      {
        type: 'paragraph',
        text: '1 VSS Vintorez gives 1 Weapon Part -> 1 hours',
      },
      {
        type: 'paragraph',
        text: 'P.S. Put used weapons into it. Gun with 1 bullet is enough.',
      },
      {
        type: 'paragraph',
        text: 'Modified weapons cannot be used in the gunsmith bench',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'As the developers temporarily locked the gunsmith bench , there is no definite way to know how the new gunsmith bench will function, we will have to wait till they are finished changing the mechanics. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Hammer',
        id: true,
        idName: 'Hammer',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get this item is Bunker Alpha, there are 3 chests which can garuntee u a hammer (or wrench), these are in the lobby, lv 2 and lv3',
      },
      {
        type: 'paragraph',
        text: 'It can be found in any of the zone chests, Bunker Alpha Lobby, lower lv chest/locker, dead Ai players body, Ai bases and Raids',
      },
      {
        type: 'paragraph',
        text: 'This item can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Unique111  (Edited By:  Huakawa,  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Hatchet',
        id: true,
        idName: 'Hatchet',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to get a hatchet is by crafting it',
      },
      {
        type: 'paragraph',
        text: 'It also can be found on Ai players dead body, Ai bases and Raids',
      },
      {
        type: 'paragraph',
        text: 'To craft a hatchet u need 3 Pine log and 3 Limestone',
      },
      {
        type: 'paragraph',
        text: 'The hatchet is used to cut trees and chop down lv 1 walls and chests in Ai bases or Raids',
      },
      {
        type: 'paragraph',
        text: 'It breaks after 50 hits-trees, 6 hits-walls or 6 hits-chests',
      },
      {
        type: 'acknowledgement',
        text: 'Rik  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Hi-Tech Components',
        id: true,
        idName: 'Hi-Tech_Components',
      },
      {
        type: 'paragraph',
        text: 'This item can only be optained from the recycler by recycling phone, camera, signal amplefier and heat sensor',
      },
      {
        type: 'paragraph',
        text: 'It doesen\'t have any use for now but is needed in several blueprints which cant be crafted as of now due to other items not being in the game',
      },
      {
        type: 'acknowledgement',
        text: 'Pilotgrain26  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Hockey Stick',
        id: true,
        idName: 'Hockey_Stick',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by looting chests in any farming zone.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""High quality sports equipment. With an ice rink we could play hockey.""',
      },
      {
        type: 'paragraph',
        text: 'Hockey Stick is a melee weapon that does 15 damage , with 1.3 attack speed and 19.5 DPS',
      },
      {
        type: 'paragraph',
        text: 'it can be Found in:',
      },
      {
        type: 'paragraph',
        text: '1- Green Zone crates (Limestone Ridge or Pine Bushes),',
      },
      {
        type: 'paragraph',
        text: '2- dead AI Players',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: 'This weapon can\'t be crafted',
      },
      {
        type: 'paragraph',
        text: 'recycling: ',
      },
      {
        type: 'paragraph',
        text: 'by recycling this item it can give you a chance to get Pine Plank, Duct Tape, and Scrap Metal and leveling up the melee category in the recycler ',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: '-this weapon has a low- damage and slow attack speed, it can be used in green zones against roaming zombies, fast biters and non-infected wolves',
      },
      {
        type: 'paragraph',
        text: '- a weapon for beginners ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Horse Feeder',
        id: true,
        idName: 'Horse_Feeder',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to optain it is by crafting it',
      },
      {
        type: 'paragraph',
        text: 'It also can be found on AI players dead body or raids',
      },
      {
        type: 'paragraph',
        text: 'Unlock',
      },
      {
        type: 'paragraph',
        text: 'Lv 58',
      },
      {
        type: 'paragraph',
        text: 'Crafting points 1',
      },
      {
        type: 'paragraph',
        text: 'Materials',
      },
      {
        type: 'paragraph',
        text: 'Oak Planks 5',
      },
      {
        type: 'paragraph',
        text: 'Iron Bars 4',
      },
      {
        type: 'paragraph',
        text: 'Nails 4',
      },
      {
        type: 'paragraph',
        text: 'Placement',
      },
      {
        type: 'paragraph',
        text: 'Ground',
      },
      {
        type: 'paragraph',
        text: 'Max 4',
      },
      {
        type: 'paragraph',
        text: 'Grid size 1x1',
      },
      {
        type: 'paragraph',
        text: 'It has currently no use',
      },
      {
        type: 'acknowledgement',
        text: 'Jeff Brown  (Edited By:  Huakawa,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Houseplant',
        id: true,
        idName: 'Houseplant',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Houseplant is just a item of decoration. It can be crafted by collecting resources (view database) and placed in build mode. It maybe sometime dropped by Ai players. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Identification Tags',
        id: true,
        idName: 'Identification_Tags',
      },
      {
        type: 'paragraph',
        text: '1. The best way to get this is by doing Alpha Bunker ""HARD MODE""',
      },
      {
        type: 'paragraph',
        text: '2.Cannot Be Crafted',
      },
      {
        type: 'paragraph',
        text: '3. First Turn On The Protocol, ',
      },
      {
        type: 'paragraph',
        text: 'Equip Military Gear, Kill All Zombies to Get Identification Tags. ',
      },
      {
        type: 'paragraph',
        text: '(Machete,SawBladeMace,SkullCrusher,Any LongRanged Weapons) Guns Could be Better. ',
      },
      {
        type: 'paragraph',
        text: 'In Hard Mode... zombies Have Extra Armour. So always Try Sneak Hit First And Then Go For Normal Attack.. Bring 2 Sets Of Any Food, 1 set Of Bandage. ',
      },
      {
        type: 'paragraph',
        text: 'That\'s It. ',
      },
      {
        type: 'paragraph',
        text: 'Gathering enough dog tags will give us floppy disk when exchaged in overseer room.',
      },
      {
        type: 'acknowledgement',
        text: 'FourEyesYT  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Iron Bar',
        id: true,
        idName: 'Iron_Bar',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming iron ore and smelt it in furnace.',
      },
      {
        type: 'paragraph',
        text: 'Iron bars are one of the many and main resources within LDoE, Required for some if not most weapons and buildable/craftable items within the game.',
      },
      {
        type: 'paragraph',
        text: 'There are a few ways to obtain iron bars within the game, You could go to an airdrop and potentially get 10 or maybe even more iron bars from it. whilst probably being a bad way of obtaining iron bars it could be proved to be very helpful in the early game.',
      },
      {
        type: 'paragraph',
        text: 'Another way of obtaining iron bars is through the AI Players. Depending on which zone you are in along if this AI Character\'s \'Real Version\' was carrying iron bars on him/her before popping into your game as an AI, That\'ll most likely depend on if you\'ll be able find these guys/gals within the zones whilst farming.',
      },
      {
        type: 'paragraph',
        text: 'Most of my iron bar drops were in a 3 – 7 in range. While quite useful, It doesn\'t seem like the best way to obtain iron bars, even in the early game. Due to risk of dying and loosing your progress or just flat-out rarity of finding AI with iron bars.',
      },
      {
        type: 'paragraph',
        text: 'The third and probably one of the best ways to obtain iron bars is through iron ore. Whilst becoming a bit less useful due to scrap metal being able to stack up to 50, it\'s still one of the best Iron based items to smelt and obtain iron bars from.',
      },
      {
        type: 'paragraph',
        text: 'The fourth and newly potential best way to obtain iron bars is through scrap metal. ',
      },
      {
        type: 'paragraph',
        text: 'The fifth and maybe best or perhaps second best due to the tasks you need to do beforehand is raiding, breaking and entering into players homes and stealing their iron might be the best way of obtaining iron bars.',
      },
      {
        type: 'paragraph',
        text: 'But maybe you might have more than enough iron beforehand, so maybe the late-game Isn\'t the best option to do this from. But from an early to mid-game stand point this will be helpful so as long as you Don\'t Die.',
      },
      {
        type: 'paragraph',
        text: 'The sixth and last way I know of to obtain iron bars is the still fairly new Recycler. Most items if not all that require iron can put inside for a chance to get that iron back, through the forms of scrap, bars or maybe even iron plates. Whilst maybe taking some leveling to obtain your delicious goods back it\'s the third best way potentially.',
      },
      {
        type: 'paragraph',
        text: 'Iron Bars are mainly obtained through the ',
      },
      {
        type: 'paragraph',
        text: 'Melting Furnace using the following recipes:',
      },
      {
        type: 'paragraph',
        text: '2 Iron Ore = 1 iron bar',
      },
      {
        type: 'paragraph',
        text: '4 Scrap Metal = 1 iron bar ',
      },
      {
        type: 'paragraph',
        text: 'The Iron Bar is required to craft the following Blueprints:',
      },
      {
        type: 'paragraph',
        text: '1-CB Radio',
      },
      {
        type: 'paragraph',
        text: '2-Chopper',
      },
      {
        type: 'paragraph',
        text: '3-Stonecutter\'s Table',
      },
      {
        type: 'paragraph',
        text: '4-Tanning Rack',
      },
      {
        type: 'paragraph',
        text: '5-Cleaver',
      },
      {
        type: 'paragraph',
        text: '6-Sewing Table',
      },
      {
        type: 'paragraph',
        text: '7-ATV',
      },
      {
        type: 'paragraph',
        text: '8-Crowbar',
      },
      {
        type: 'paragraph',
        text: '9-Workbench',
      },
      {
        type: 'paragraph',
        text: '10-Floor Lamp',
      },
      {
        type: 'paragraph',
        text: '11-Shovel',
      },
      {
        type: 'paragraph',
        text: '12-Spiked Devastator',
      },
      {
        type: 'paragraph',
        text: '13-Medical Table',
      },
      {
        type: 'paragraph',
        text: '14-Skull Crusher',
      },
      {
        type: 'paragraph',
        text: '15-Tactical Body Armor',
      },
      {
        type: 'paragraph',
        text: '16-Tactical Trousers',
      },
      {
        type: 'paragraph',
        text: '17-Cozy Couch',
      },
      {
        type: 'paragraph',
        text: '18-Machete',
      },
      {
        type: 'paragraph',
        text: '19-SWAT Helmet',
      },
      {
        type: 'paragraph',
        text: '20-SWAT Body Armor',
      },
      {
        type: 'paragraph',
        text: '21-SWAT Trousers',
      },
      {
        type: 'paragraph',
        text: '22-SWAT Boots',
      },
      {
        type: 'paragraph',
        text: '23-Horse Feeder',
      },
      {
        type: 'paragraph',
        text: '24-Comfortable Bed',
      },
      {
        type: 'paragraph',
        text: '25-Saw Blade Mace',
      },
      {
        type: 'paragraph',
        text: '26-Chest',
      },
      {
        type: 'paragraph',
        text: '27- upgrading the floors to level 3',
      },
      {
        type: 'paragraph',
        text: 'The Iron Bar is required to craft the following recipes at the Workbench:',
      },
      {
        type: 'paragraph',
        text: '1 iron bar = 1 Iron plate',
      },
      {
        type: 'acknowledgement',
        text: 'ManiaWolfie  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Iron Hatchet',
        id: true,
        idName: 'Iron_Hatchet',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The ingredients are fairly easy to find, as the materials can be easily gotten from the working benches. The only ingredient that are harder to find is the Duct Tape.',
      },
      {
        type: 'paragraph',
        text: 'As it is mainly used for raiding or cutting down oak trees. It is recommended that you should collect Duct Tape whenever possible. For example, you should always reserve a slot or two to collect Duct Tape while looting chests in red oak zone. By doing so, you can replenish some of thte Duct Tape used for crafting the Iron Hatchet.',
      },
      {
        type: 'paragraph',
        text: 'In raids, I recommend to take a stack or two, depending how many stacks of Duct Tape you have back in your base.',
      },
      {
        type: 'acknowledgement',
        text: 'Win Loke  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Iron Ore',
        id: true,
        idName: 'Iron_Ore',
      },
      {
        type: 'paragraph',
        text: 'The best way of getting this is by farming any rock zone.',
      },
      {
        type: 'paragraph',
        text: 'For beginner, the best place to farm it is definitely green rock zone, but it only gives you 15 iron ore in each green zone so you might need to take a few more run to this place. If you are lucky enough, you can meet some random AI who will give you some iron ore if they are dead (either died from zombie attack or you killing it.)',
      },
      {
        type: 'paragraph',
        text: 'For experienced player, there are two options:',
      },
      {
        type: 'paragraph',
        text: '1. If you are not looking for a tough fight, yellow rock zone is recommended as it is definitely less dangerous than red zone and its iron deposits are quite a lot, giving you a total of 90 iron ores if you mine them all. This is enough for you to smelt them into 45 iron bar, which is enough to craft a handful of weapon.',
      },
      {
        type: 'paragraph',
        text: '2. If you are looking for more rare resources (e.g. you need more duct tape or you want to grind your skill experience faster), you should visit red rock zone and it will provide you 150 iron ores, which is a lot considering that it gives you 75 iron bar after smelting them, nearly double of what yellow rock zone can provides.',
      },
      {
        type: 'acknowledgement',
        text: 'Win Loke  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Iron Pickaxe',
        id: true,
        idName: 'Iron_Pickaxe',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The ingredients are fairly easy to find, as the materials can be easily gotten from the working benches. The only ingredient that are harder to find is the Duct Tape.',
      },
      {
        type: 'paragraph',
        text: 'As it is mainly used for mining copper ore in winter zone. It is recommended that you should collect Duct Tape whenever possible. For example, you should always reserve a slot or two to collect Duct Tape while looting chests in winter zone. By doing so, you can replenish some of thte Duct Tape used for crafting the Iron Pickaxe.',
      },
      {
        type: 'paragraph',
        text: 'In winter zone, while looking for copper deposit to mine, you should also look for any chests to loot. Personally, I will try to find and loot any chest in the area even if I have finished mining all the copper bar as it will provide quite a lot of Duct tape, usually enough to replenish all the Duct Tape used for crafting Iron Pickaxe, and sometimes even gives you surplus of Duct Tape when you take into account of the cost of Duct Tape in crafting Iron Pickaxe.',
      },
      {
        type: 'acknowledgement',
        text: 'Win Loke  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Jerky',
        id: true,
        idName: 'Jerky',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing raw meat in meat dryer.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Keeps its taste and nutritive properties for a long time.""',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can be found in:',
      },
      {
        type: 'paragraph',
        text: '1- bunker alpha ticket crates',
      },
      {
        type: 'paragraph',
        text: '2- dead AI players',
      },
      {
        type: 'paragraph',
        text: '3- Raid bases',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Jerky can be made by placing Raw Meat in the Meat Dryer. It has the same Health and Thirst as Juicy Steak but provides 10 more Hunger, without using any fuel.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Effects',
      },
      {
        type: 'paragraph',
        text: 'Health - 20',
      },
      {
        type: 'paragraph',
        text: 'Hunger - 40',
      },
      {
        type: 'paragraph',
        text: 'Thirst - 5',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'it has 3 advantages over the juicy steak:',
      },
      {
        type: 'paragraph',
        text: '1- restores 10 more Hunger',
      },
      {
        type: 'paragraph',
        text: '2- doesn\'t require fuel to craft',
      },
      {
        type: 'paragraph',
        text: '3- the campfires are free to craft coal instead of juicy steak ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Juicy Steak',
        id: true,
        idName: 'Juicy_Steak',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing raw meat in campfire.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Medium Rare. Greatest achievement of mankind""',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can only be found on dead AI payers and bunker creen coupon crate as well as a chance to get from raid bases.',
      },
      {
        type: 'paragraph',
        text: 'it can\'t be recycled',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'You can make Juicy Steak by placing Raw Meat in the Campfire.',
      },
      {
        type: 'paragraph',
        text: '( 1 raw meat = 1 juicy steak)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'When the Meat Dryer becomes available, it is recommended for all Raw Meat to be prepared into Jerky. This way it does not consume fuel to prepare.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Effects',
      },
      {
        type: 'paragraph',
        text: '20 - Health',
      },
      {
        type: 'paragraph',
        text: '30 - Hunger',
      },
      {
        type: 'paragraph',
        text: '5 - Thirst',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'jerky has 3 advantages over the juicy steak:',
      },
      {
        type: 'paragraph',
        text: '1- restores 10 more Hunger',
      },
      {
        type: 'paragraph',
        text: '2- doesn\'t require fuel to craft',
      },
      {
        type: 'paragraph',
        text: '3- the campfires are free to craft coal instead of juicy steak ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'but i recommend keeping a stack  of 20 juicy steaks as sometimes the trader asks for them (usually 5 juicy steaks)',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Katana',
        id: true,
        idName: 'Katana',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by visiting the dealer frequently.',
      },
      {
        type: 'paragraph',
        text: 'As it is not craftable, the best way to get this is by opening weapon crate from dealer.',
      },
      {
        type: 'paragraph',
        text: 'It can be found in chests, mainly in red zone, but the durability is usually around 50% so it is not ideal to get this in this method.',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      
      
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Leather',
        id: true,
        idName: 'Leather',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing animal rawhide in tanning rack.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“Durable material created by tanning Animal Rawhide using a Tanning Rack ”',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'The Leather is found in:',
      },
      {
        type: 'paragraph',
        text: '1- dead AI players',
      },
      {
        type: 'paragraph',
        text: '2- Inside NPC\'s bases',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: 'Leather is required to craft the following Blueprints',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '1-Cleaver',
      },
      {
        type: 'paragraph',
        text: '2-Crowbar',
      },
      {
        type: 'paragraph',
        text: '3-Thick Jacket',
      },
      {
        type: 'paragraph',
        text: '4-Denim Jeans',
      },
      {
        type: 'paragraph',
        text: '5-Work Boots',
      },
      {
        type: 'paragraph',
        text: '6-Spiked Devastator',
      },
      {
        type: 'paragraph',
        text: '7-Skull Crusher',
      },
      {
        type: 'paragraph',
        text: '8-Tactical Cap',
      },
      {
        type: 'paragraph',
        text: '9-Tactical Body Armor',
      },
      {
        type: 'paragraph',
        text: '10-Tactical Trousers',
      },
      {
        type: 'paragraph',
        text: '11-Tactical Boots',
      },
      {
        type: 'paragraph',
        text: '12-Torture Device',
      },
      {
        type: 'paragraph',
        text: '13-Machete',
      },
      {
        type: 'paragraph',
        text: '14-SWAT Boots',
      },
      {
        type: 'paragraph',
        text: '15-Horse Saddle',
      },
      {
        type: 'paragraph',
        text: '16-Saw Blade Mace',
      },
      {
        type: 'paragraph',
        text: '17-Military Backpack',
      },
      {
        type: 'paragraph',
        text: '18-Kevlar Helmet',
      },
      {
        type: 'paragraph',
        text: '19-Kevlar Body Armor',
      },
      {
        type: 'paragraph',
        text: '20-Kevlar Trousers',
      },
      {
        type: 'paragraph',
        text: '21-Kevlar Boots',
      },
      {
        type: 'paragraph',
        text: '22-Tactical Backpack',
      },
      {
        type: 'paragraph',
        text: '23-Assault Helmet',
      },
      {
        type: 'paragraph',
        text: '24-Assault Body Armor',
      },
      {
        type: 'paragraph',
        text: '25-Assault Trousers',
      },
      {
        type: 'paragraph',
        text: '26-Assault Boots',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'crafting:',
      },
      {
        type: 'paragraph',
        text: 'The Leather is mainly obtained through the Tanning Rack using the following recipe: 1 animal rawhide[wolf/deer] = 1 leather (takes 4 minutes)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'the leather is vital part in the game  as you read above it is in 26 blueprints , so i recommend stacking up the leather at your base ( at least a chest) ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Light Bulb',
        id: true,
        idName: 'Light_Bulb',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'While this item can be found in many places, including any farming zone, it is not advised to do so since it is not guarantee to get it from those zone.',
      },
      {
        type: 'paragraph',
        text: 'Thus, you should do bunker Alpha and loot all the chests as it is almost guarantee to get some light bulbs from all the chests.',
      },
      {
        type: 'acknowledgement',
        text: 'Benjamin  (Edited By:  Viju,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Limestone',
        id: true,
        idName: 'Limestone',
      },
      {
        type: 'paragraph',
        text: 'The easiest way to gather/optain Limestone is to farm the green yellow and red Limestone areas',
      },
      {
        type: 'paragraph',
        text: 'Limestone is a building material and crafting component',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can not be crafted',
      },
      {
        type: 'paragraph',
        text: 'it can not be recycled',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Limestone is used for crafting hatchet, pickaxe, campfire, melting furnice, meat dryer and to updgrade your walls and floors',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Limestone is used in the Stonecutter\'s Table to craft stone bricks (2)limestone = (1)stone brick',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Lock and Key',
        id: true,
        idName: 'Lock_and_Key',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming it in bunker alpha chests.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Still works but it\'s nearly impossible to turn the key.""',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can be found in:',
      },
      {
        type: 'paragraph',
        text: '1- bunker alpha floors',
      },
      {
        type: 'paragraph',
        text: '2- in the chests in all green, yellow and red zones',
      },
      {
        type: 'paragraph',
        text: '3- airdrop,plane crash',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can\'t be crafted',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Use:',
      },
      {
        type: 'paragraph',
        text: 'There is currently no Blueprints or Recipe at a Workstation that uses this item.',
      },
      {
        type: 'paragraph',
        text: 'the only use for it at the time being is for recycling',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'recycling:',
      },
      {
        type: 'paragraph',
        text: 'by recycling this item it can give you a chance to get Scrap Metal, Plastic',
      },
      {
        type: 'paragraph',
        text: 'and leveling up the ""other"" category in the recycler ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'as this item has only use is for recycling for plastic and trade with dealer, i recommend keep collecting it even though other item can be recycled into plastic because its main function is not yet introduced in the game',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'M16',
        id: true,
        idName: 'M16',
      },
      {
        type: 'paragraph',
        text: '""The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'You can get the m16 from: ',
      },
      {
        type: 'paragraph',
        text: '1-bunker alpha ticket crates (red , yellow, green) and rarely from the floors ',
      },
      {
        type: 'paragraph',
        text: '2-rest stop events ,',
      },
      {
        type: 'paragraph',
        text: '3-airdrop events,',
      },
      {
        type: 'paragraph',
        text: '4-the trader, ',
      },
      {
        type: 'paragraph',
        text: '5-rarely from red and yellow zones ',
      },
      {
        type: 'paragraph',
        text: '6-and of course from raiding ',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted at the moment as it requires tungsten and ash planks in it\'s current formula ',
      },
      {
        type: 'paragraph',
        text: 'Best place to get the m16 is from bunker alpha red ticket crate. Additionally, you can modify a low durability m16 at bunker alpha""',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Machete',
        id: true,
        idName: 'Machete',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '1. This weapon may be found in Airdrops, weapon crates from dealers, and NPCs in red,yellow zones and rest stop. It may also be found in chests and lockers of bunker alpha. ',
      },
      {
        type: 'paragraph',
        text: '2. This weapon is craftable, but at a hefty price. 15 iron bars, 3 wood planks, and 12 leather. The price isn\'t really on the iron bars, but more so the 12 leather which is difficult to obtain unless you farm constantly on green and other zones.',
      },
      {
        type: 'paragraph',
        text: '3. This weapon is the prefer choice in taking on bunkers and red zones, since out of all the craftable weapons it provides the most damage possibility. It can potentially take out a red zone using sneak technique along with avoiding any unnecessary enemies. Not only that it can take on several enemies in bunker paired with the wall trick technique. It is also the preferred melee weapon to take with during hard mode. However, again the price to make consists of a lot of resources and it should only be used for those hard areas if you only aim to craft such a weapon.',
      },
      {
        type: 'paragraph',
        text: '4. This weapon is in no comparison to any other weapon in the game. As stated it is the best melee weapon as far as versatility and damage output and being craftable. A cheaper option would be the shovel and a more preferable option is the katana which is only obtainable through drops and crates. ',
      },
      {
        type: 'acknowledgement',
        text: 'StillTho  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Makeshift Bat',
        id: true,
        idName: 'Makeshift_Bat',
      },
      {
        type: 'paragraph',
        text: 'Best way to get it is through crafting it. ',
      },
      {
        type: 'paragraph',
        text: 'Makeshift bat is melee weapon. It can be crafted by collecting resources (view database). It is dropped by Ai players and may be found in raids. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Meat Dryer',
        id: true,
        idName: 'Meat_Dryer',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Used for making delicious air-dried meat.""',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Meat Dryer enables you to make Jerky, It can turn 1 Raw Meat into 1 Jerky in 10 minutes.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'obtaining:',
      },
      {
        type: 'paragraph',
        text: 'it can\'t be found in any location',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '-Unlocks at level 14',
      },
      {
        type: 'paragraph',
        text: '-needs 2 Craft Points',
      },
      {
        type: 'paragraph',
        text: '-Placement: Ground (May be placed on any surface.)',
      },
      {
        type: 'paragraph',
        text: '-Max: 2',
      },
      {
        type: 'paragraph',
        text: '-Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: '-recipe:',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '5 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '12 Rope',
      },
      {
        type: 'paragraph',
        text: '10 Limestone',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'recycling:',
      },
      {
        type: 'paragraph',
        text: 'by recycling this item it can give you a chance to get Pine Plank, Rope, Limestone and leveling up the ""other"" category in the recycler ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: ' making jerky instead of juicy steak has 3 advantages:',
      },
      {
        type: 'paragraph',
        text: '1- jerky restores 10 hunger more than the steak',
      },
      {
        type: 'paragraph',
        text: '2- doesn\'t require fuel ',
      },
      {
        type: 'paragraph',
        text: '3- the campfire are free to other materials ( like coal ) instead of juicy steaks ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'this structure only have one function - making jerky , it is important source of food and health, with the carrots you will be set in regards for food and health especially at the beginning of the game ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Medical Table',
        id: true,
        idName: 'Medical_Table',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '""Contains all necessary tools to get Alcohol out of Berries.""',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1- the medical table is a structure for making alcohol out of berries ',
      },
      {
        type: 'paragraph',
        text: '5 Berries = 1 Alcohol takes 10 minutes',
      },
      {
        type: 'paragraph',
        text: '2- sometimes the dealer asks for it for trading',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can\'t be found in any location ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: '-Unlocks at level 34',
      },
      {
        type: 'paragraph',
        text: '-needs 2 Craft Points',
      },
      {
        type: 'paragraph',
        text: '-Placement: Plank Floor (lvl.2)',
      },
      {
        type: 'paragraph',
        text: '-Max: 2',
      },
      {
        type: 'paragraph',
        text: '-Grid Size: 1x1',
      },
      {
        type: 'paragraph',
        text: '-recipe:',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '20 Pine Plank',
      },
      {
        type: 'paragraph',
        text: '15 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '7 Nails',
      },
      {
        type: 'paragraph',
        text: '3 Duct Tape',
      },
      {
        type: 'paragraph',
        text: '5 Iron Bar',
      },
      {
        type: 'paragraph',
        text: '2 Plastic',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'recycling:',
      },
      {
        type: 'paragraph',
        text: 'by recycling this item it can give you a chance to get Pine Plank, Scrap Metal, Duct Tape and leveling up the ""other"" category in the recycler ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'crafting the medical table at its current function is not worth it because alcohol is found abundantly in a lot of locations, but it is believed that the developers will add more functions to the medical table so i recommend crafting one medical table if you have an abundance of the required materials. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'the dealer: sometimes the dealer asks for the medical table for trading, as crafting the medical table is expensive and there is no guarantee for what you are getting in return ( you can end up with a spiked devastator) I don\'t recommend making this trade unless it is a part of the raiders missions ( make 3 deals with the dealer)  and you don\'t want to wait an extra day and you don\'t want to pay coins to skip it',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Melting Furnace',
        id: true,
        idName: 'Melting_Furnace',
      },
      {
        type: 'paragraph',
        text: 'The only way to get Melting furnace is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'It is craftable. It is crafted by collecting resources (view database). It may be sometimes dropped by Ai players. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Military Backpack',
        id: true,
        idName: 'Military_Backpack',
      },
      {
        type: 'paragraph',
        text: 'If you were just unlocked the northern zones, raid the 4th AI base.',
      },
      {
        type: 'paragraph',
        text: 'If you already did and don\'t have steel plate, you should farm the winter zone for copper bar to make steel bar.',
      },
      {
        type: 'paragraph',
        text: 'To make a Military Backpack, the most important material you\'ll need is steel. The only way to get steel is to use the Refined Melting Furnace with 1 aluminum bar, 1 iron bar, 2 charcoal, and most importantly, 1 copper bar. You can also find steel bars or plates from raiding and floor 4 of Bunker Alfa, but the cost of clearing floor 4  is not worth it at the moment. You will also find 2 steel plates in the AI base after unlocking the watchtower. ',
      },
      {
        type: 'paragraph',
        text: 'The only ways to obtain copper is by mining the northern areas after unlocking watchtower(you get 1 copper ore and you need 5 to make a bar), raiding as usual, floor 4 of Bunker Alfa, and from recycling Batteries and Watches. ',
      },
      {
        type: 'paragraph',
        text: 'The most efficient way to get a Military Backpack will be through the Recycler, by recycling Batteries. You will find an abundance of batteries throughout Bunker Alfa, most noticeably floor 3. ',
      },
      {
        type: 'paragraph',
        text: 'For those with the Chopper, you can mine copper ore in the northern areas. Avoid fighting as much as possible, since the frozen zombies are tough opponents. ',
      },
      {
        type: 'paragraph',
        text: 'Those without Chopper only have 3 options, raiding, the Recycler, or floor 4 of Bunker Alfa. ',
      },
      {
        type: 'paragraph',
        text: 'Even if you do have a Chopper,  the Recycler still seems to be a better option. Raiding will expose you to other raiders if you\'re not ready, the grind of getting a Chopper has been extended because of the new Chopper skill, and floor 4 of Bunker Alfa costs more than what you\'re rewarded with. Like I stated earlier, there is an abundance of Batteries from Bunker Alfa. Don\'t let the drop rate of copper fool you, the drop rate is most definitely higher than what it seems.',
      },
      {
        type: 'paragraph',
        text: 'To get a Recycler now, the only problems will be Oak Planks and Aluminum bar. You will also find plenty of Aluminum bars or wires in Bunker Alfa. You will find 2-3 oak trees in the red pine zone, each giving 2 oak logs and requires 8 swings of an Iron Hatchet. You need 3 Oak Planks to make a Recycler, so you\'ll only need about 2 or 3 trips to the red pine zone.',
      },
      {
        type: 'paragraph',
        text: 'Now that you\'ve gotten some copper bars, you\'ll need to build a Refined Melting Furnace. I went crazy farming the red pine zone to get 20 Oak Planks. Each trip gives you roughly 1.3 Oak Planks, so you\'ll need to go back and forth 15 times.',
      },
      {
        type: 'paragraph',
        text: 'After you\'ve made some steel bars, you have to wait 3 hours to get 2 steel plates through the Workbench. Now you have all the necessary materials to get a Military Backpack.',
      },
      {
        type: 'acknowledgement',
        text: 'Protatoez  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Military Box',
        id: true,
        idName: 'Military_Box',
      },
      {
        type: 'paragraph',
        text: 'For once it can be obtained from shop, now there is no way to obtain it.',
      },
      {
        type: 'paragraph',
        text: 'The Military box has 45 slots. Which is currently the biggest storage unit you can positively put on your base. You cannot craft this this box .You can no longer buy this this box from the store. But it was once guaranteed to get one in the ""starter pack"" and with an very rare chance of getting it in the pack of "" Stash Making "". The Military box has 10 more slots. The only way to get it is wait for it to be back in the store . It is not really worth it though as it is very hard to get one the ""Stash Making"" pack when it was in it.',
      },
      {
        type: 'acknowledgement',
        text: 'Trevor  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Military Notebook',
        id: true,
        idName: 'Military_Notebook',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained from doing bunker Alpha hard mode.',
      },
      {
        type: 'paragraph',
        text: 'Military notebooks can be acquired via zombies in bunker alpha\'s hard mode, mostly from floaters,toxic abominations,exploders,frenzied giants and the blind one. It used to be dropped from frozen boaters in winter locations.The notebooks cannot be crafted. Many people suggest sweeping all the 3 floors in hard mode but this method is extremely expensive and exhausting even to some advanced players. The best way to get the notebooks and bunker alpha experience items is to kill the blind one every 2 days. This method might be slow compared to the complete sweep method,but it is far less expensive and exhausting to all players.It also allow players to focus on enjoying the fun fighting the blind one as a boss.',
      },
      {
        type: 'acknowledgement',
        text: 'Juli Kidman  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Minigun',
        id: true,
        idName: 'Minigun',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'The Minigun is a very rare weapon. It can be found in the red ticket coupon crate at Bunker Alfa. It can also be found in survivor bases while raiding and if you have a dog with the true friend trait you can get one at the entrance to Bunker Alfa just to the left of the main doorway at the ground level (can only be looted here one time).',
      },
      {
        type: 'acknowledgement',
        text: 'Jeff Brown  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Mobile Phone',
        id: true,
        idName: 'Mobile_Phone',
      },
      {
        type: 'paragraph',
        text: 'The best way to find this is by clearing any red zone.',
      },
      {
        type: 'paragraph',
        text: '""Locations where you can find the item:Every zone, Events, Bunker[Upstairs]',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the phone is killing Toxic Abominations, Floater Bloaters and Toxic Spitters in the Red Zone[not Infected Forest]. Go with your Red zone equipment of choice[Spiked Devastator and T2 Upgraded armor Recommended for best results and profit no matter the veterancy of player]. To get fast to the zone RUN to an Yellow Zone then WALK to the Red Zone[to minimize chances of Big One Spawning]. Then, kill as many Bloaters, Abominations and Spitters as possible[try to avoid other zombies and AI players for maximum profit]',
      },
      {
        type: 'paragraph',
        text: 'Why this zone? Because in this zone Abominations and Bloaters spawn very often in largest amounts. Plus, to make even more profit, you can kill turkeys and deers for dog food and leather for armor, and open chests for some of the best loot in the game.""',
      },
      {
        type: 'acknowledgement',
        text: 'Sci-FiGamer  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Modified AK-47',
        id: true,
        idName: 'Modified_AK-47',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'This item can be created by the specialist in Bunker Alpha and can only be obtained through packs at the store if willing to be purchased, or through Bunker Alpha\'s redeemable chest for 30 red coupons and the chest redeemable for 25 yellow coupons. Strategy for obtaining this is to clear up Bunker Alpha\'s Floors from zombies and cleaning up all loot-able sections in the bunker. Frenzied Giants have a higher chance of dropping red and yellow coupons compared to bloaters and abominations. With the security protocol activated, the Blind One will drop 10 red coupons with other items such as Military Tags and Military Notes. With the collected coupons, exchange it with the chest and hopefully get the item.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Modified Glock 17',
        id: true,
        idName: 'Modified_Glock_17',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: '""You can get the modified glock from: ',
      },
      {
        type: 'paragraph',
        text: '1-bunker alpha ticket crates (red , yellow,green)  ',
      },
      {
        type: 'paragraph',
        text: '2-rest stop events ,',
      },
      {
        type: 'paragraph',
        text: '3-airdrop events,',
      },
      {
        type: 'paragraph',
        text: '4-the trader, ',
      },
      {
        type: 'paragraph',
        text: '5- modifying a regular glock in bunker alpha ',
      },
      {
        type: 'paragraph',
        text: '6-and of course from raiding ',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted , the only way that come close to crafting is by modifying  a low durability glock at the bunker ',
      },
      {
        type: 'paragraph',
        text: 'Best place to get the modified glock is from bunker alpha red ticket crate""',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Modified M16',
        id: true,
        idName: 'Modified_M16',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'This item can be created by the specialist in Bunker Alpha and can only be obtained through packs at the store if willing to be purchased, or through Bunker Alpha\'s redeemable chest for 30 red coupons and the chest redeemable for 25 yellow coupons. Strategy for obtaining this is to clear up Bunker Alpha\'s Floors from zombies and cleaning up all loot-able sections in the bunker. Frenzied Giants have a higher chance of dropping red and yellow coupons compared to bloaters and abominations. With the security protocol activated, the Blind One will drop 10 red coupons with other items such as Military Tags and Military Notes. With the collected coupons, exchange it with the chest and hopefully get the item.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Nail Board',
        id: true,
        idName: 'Nail_Board',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this item is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '1. This item may be dropped from NPCs and can be found in zone chests, mostly red and yellow.',
      },
      {
        type: 'paragraph',
        text: '2. This item can be crafted, but requires a metal workbench and wood workbench to refine iron bars and wood to their respectable resources. Keep in mind 4 iron bars ultimately make 8 iron nails. Blue tape is probably the rarest item to obtain of the three. This can be found in zone chests, but the red zones have the possibility of giving around 10-15 blue tape. (something more or less). ',
      },
      {
        type: 'acknowledgement',
        text: 'StillTho  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Nails',
        id: true,
        idName: 'Nails',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing iron plate in workbench.',
      },
      {
        type: 'paragraph',
        text: 'Nails are obtained through the following methods:',
      },
      {
        type: 'paragraph',
        text: '1.As random loot drop from the chests and Lockers inside Bunker Alfa\'s underground floors.',
      },
      {
        type: 'paragraph',
        text: '2.In the Chests inside the Coupon terminals at Bunker Alfa\'s Lobby.',
      },
      {
        type: 'paragraph',
        text: '3.Inside NPC\'s bases',
      },
      {
        type: 'paragraph',
        text: 'The Nails are mainly obtained through the Workbench using the Iron Plate.',
      },
      {
        type: 'acknowledgement',
        text: 'pei ru  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Oak Log',
        id: true,
        idName: 'Oak_Log',
      },
      {
        type: 'paragraph',
        text: 'The best place to get this is to visit red oak zone.',
      },
      {
        type: 'paragraph',
        text: '""',
      },
      {
        type: 'paragraph',
        text: 'Oak Log',
      },
      {
        type: 'paragraph',
        text: 'Available Locations:',
      },
      {
        type: 'paragraph',
        text: '-Yellow and Red Oak Forest in the north (chopper required)',
      },
      {
        type: 'paragraph',
        text: '-Red pine Forest',
      },
      {
        type: 'paragraph',
        text: '-Special Oak event (spawns every week or so and looks like the oak forest locations)',
      },
      {
        type: 'paragraph',
        text: 'Red Oak Location',
      },
      {
        type: 'paragraph',
        text: 'Enemies:',
      },
      {
        type: 'paragraph',
        text: '-A lot of toxic spitters',
      },
      {
        type: 'paragraph',
        text: '-A good amount of toxic abominations',
      },
      {
        type: 'paragraph',
        text: '-Some normal abominations',
      },
      {
        type: 'paragraph',
        text: '-Very few fast bitters',
      },
      {
        type: 'paragraph',
        text: 'Neutral:',
      },
      {
        type: 'paragraph',
        text: '-A lot of foxes',
      },
      {
        type: 'paragraph',
        text: '-A good amount of deer',
      },
      {
        type: 'paragraph',
        text: 'Other info:',
      },
      {
        type: 'paragraph',
        text: '-Chance of The Big one to Spawn',
      },
      {
        type: 'paragraph',
        text: 'between 5-10% quite low.',
      },
      {
        type: 'paragraph',
        text: '-About 30-35 oak trees',
      },
      {
        type: 'paragraph',
        text: 'Yellow oak Zone',
      },
      {
        type: 'paragraph',
        text: 'Very similar to the red zone Key differences:',
      },
      {
        type: 'paragraph',
        text: '-A few less spitters and Abominations.',
      },
      {
        type: 'paragraph',
        text: '-about 15-20 oak trees',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Red pine area:',
      },
      {
        type: 'paragraph',
        text: 'again very similar to the red oak forest differences:',
      },
      {
        type: 'paragraph',
        text: '-Infected wolfs spawn in way more frequent',
      },
      {
        type: 'paragraph',
        text: '-The Big One spawns in way more frequent',
      },
      {
        type: 'paragraph',
        text: '- about 2-4 Oak trees',
      },
      {
        type: 'paragraph',
        text: 'Special oak event:',
      },
      {
        type: 'paragraph',
        text: '-slightly more enemies than the red oak forest (usually a lot of infected wolfs) ',
      },
      {
        type: 'paragraph',
        text: '-infected wolfs spawn in even more frequently',
      },
      {
        type: 'paragraph',
        text: '-Has some variations to the event',
      },
      {
        type: 'paragraph',
        text: 'Preparations:',
      },
      {
        type: 'paragraph',
        text: 'Equipment:',
      },
      {
        type: 'paragraph',
        text: '- 6 to 10 Iron hatchets',
      },
      {
        type: 'paragraph',
        text: '- Tier 2 Armor/reinforced',
      },
      {
        type: 'paragraph',
        text: '- 4-5 good weapons ',
      },
      {
        type: 'paragraph',
        text: '        Crowbar = most resource effective',
      },
      {
        type: 'paragraph',
        text: '        Machete = easier to farm',
      },
      {
        type: 'paragraph',
        text: '- 20 Berries',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'After gathering your equipment travel to the Red Oak forest location.',
      },
      {
        type: 'paragraph',
        text: 'Start clearing the edges of the map of spitters. Next start clearing the inner map.',
      },
      {
        type: 'paragraph',
        text: '-You have to clear all or most of the spitters',
      },
      {
        type: 'paragraph',
        text: '-you have to clear most of the toxic abominations because they have a higher agro radius',
      },
      {
        type: 'paragraph',
        text: '-you have to clear some of the normal abominations ',
      },
      {
        type: 'paragraph',
        text: 'After you cleared the zone of oak travel to the Radio tower and then directly back to the Red Oak Forest.',
      },
      {
        type: 'paragraph',
        text: 'You usually need 3 visits to the red zone to get about 170 oak. ',
      },
      {
        type: 'paragraph',
        text: 'Combat tips:',
      },
      {
        type: 'paragraph',
        text: 'Toxic Abominations/Normal Abominations',
      },
      {
        type: 'paragraph',
        text: '-High agro radius (agro at the 2 ring instead of the first)',
      },
      {
        type: 'paragraph',
        text: '-Abominations will sometimes use a special move which will deal area damage around them.',
      },
      {
        type: 'paragraph',
        text: '-As soon as you see the red ring, move away from the abomination, after leaving the red circle press the attack button. if you time it perfectly you will not get harmed by the attack and you can get a few free shoots at the abomination.',
      },
      {
        type: 'paragraph',
        text: '-The abomination can use this attack several times in a row so stay on guard.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Spitters:',
      },
      {
        type: 'paragraph',
        text: '-Extremely high agro radius',
      },
      {
        type: 'paragraph',
        text: '-Almost impossible to sneak up on',
      },
      {
        type: 'paragraph',
        text: '-Spitters use a fast special attack where they spit acid in front of them hurting you and increasing your stink meter if it hits.',
      },
      {
        type: 'paragraph',
        text: '-if you see more than 2 spitters approaching you leave the map and return and try to only agro 1 at a time. approach spitters as if you were trying to move directly past them if they did not use their acid spit start attacking them.',
      },
      {
        type: 'paragraph',
        text: '-Dodging the spit is difficult try to stay at N, W, S, E side of the spitter.',
      },
      {
        type: 'paragraph',
        text: '                        N',
      },
      {
        type: 'paragraph',
        text: '                W    spitter        E',
      },
      {
        type: 'paragraph',
        text: '                        S',
      },
      {
        type: 'paragraph',
        text: 'This will make it a bit easier to dodge their spit.',
      },
      {
        type: 'paragraph',
        text: '-Using a Keyboard decreases your reaction time by a few ms making it possible even for slower people to dodge.',
      },
      {
        type: 'paragraph',
        text: '-Skull crusher: attack and when the animation is finished move a bit to the left or right and then attack again. using this method will almost guarante you the ability to dodge the spit.',
      },
      {
        type: 'paragraph',
        text: '-Machete: if you dodged the first spit you can just keep pressing the attack the second spit will not come in time to harm you.',
      },
      {
        type: 'paragraph',
        text: '-Crowbar; the spitter will most of the time use his ability at 29hp if he hasn\'t used it already.(they can use the ability at least 2 times)',
      },
      {
        type: 'paragraph',
        text: 'Fast biter:',
      },
      {
        type: 'paragraph',
        text: '- Try to sneak up on them, a machete is an instant kill the crowbar usually is enough to finish him before they can harm you.',
      },
      {
        type: 'paragraph',
        text: 'Other useful tips:',
      },
      {
        type: 'paragraph',
        text: '-Gather all the berries AND Mushrooms you can they will be your main source of healing. ',
      },
      {
        type: 'paragraph',
        text: '-A Crowbar is enough to finish the foxes with a sneak attack so if you want to farm extra meat/pelts go ahead there are a lot of them in the middle of the map.',
      },
      {
        type: 'paragraph',
        text: '-Open all chest they contain good loot try only taking Weapons, food cans, items for the recycler(watches, batteries, Atv wheel) and duct tape.',
      },
      {
        type: 'paragraph',
        text: '-If you want to farm exploration xp gather all logs stones etc and delete them if you need the space.',
      },
      {
        type: 'paragraph',
        text: '-The big one will rarely appear in the red oak forest(between 5-15% chance from my experience)',
      },
      {
        type: 'paragraph',
        text: '-You have a decent chance of finding a broken car so make sure you have your chopper with you.',
      },
      {
        type: 'paragraph',
        text: '-You will also gain a lot of cloth produce bandages out of them and use them in emergencies.',
      },
      {
        type: 'paragraph',
        text: '-Craft T2 armor after one run it should be nearly destroyed you can then reinforce it to get an stronger armor set at full durability.',
      },
      {
        type: 'paragraph',
        text: '-Having the red stink icon is no reason to return early it will make things a bit more weapon/armor hungry but you should be able to push through ',
      },
      {
        type: 'paragraph',
        text: '-1 Iron hatches is roughly enough to get 1 stack of oak wood (20)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Why cycle between the red oak forest and the radio tower and not between the yellow zone and red zone?',
      },
      {
        type: 'paragraph',
        text: 'Both locations are filled with enemies. The Yellow oak will usually have a few less spitters but it also has A LOT less oak.',
      },
      {
        type: 'paragraph',
        text: 'cycling between the red and yellow consumes slightly less energy overall (39Energy to 44energy) but it will use more of your weapons and armor.',
      },
      {
        type: 'paragraph',
        text: 'At the end you can decide which of the 2 method you use depending on what\'s more important using less weapons(red oak-radio tower) less energy used(red oak-yellow oak)',
      },
      {
        type: 'paragraph',
        text: 'People who do not have a chopper:',
      },
      {
        type: 'paragraph',
        text: 'If you don\'t have a chopper the only way to obtain oak is the special oak event which spawns every week or so and the red pine forest area.',
      },
      {
        type: 'paragraph',
        text: 'The red pinewood area has a few oak trees but it has a good amount of strong enemies roughly the same as the red oak forest.',
      },
      {
        type: 'paragraph',
        text: 'Also The Big One can show up quite frequently(a lot more frequently than in the red oak area).',
      },
      {
        type: 'paragraph',
        text: 'you can use all of the above combat and other tips in this area as well. The biggest challenge is to actually find the oak trees because there will only be 2-4 of them.',
      },
      {
        type: 'paragraph',
        text: 'If you fill up your inventory with random stuff and you only have one slot with one oak log you can use the auto mode to see in which direction an oak tree is.',
      },
      {
        type: 'paragraph',
        text: 'All in all I would not recommend going here unless you have to craft something really important.',
      },
      {
        type: 'paragraph',
        text: 'The special oak forest event will usually spawn around the radio tower and usually have a 1Hour timer.',
      },
      {
        type: 'paragraph',
        text: 'This event has a decent amount of oak in it but it is more dangerous than the red oak forest because infected wolfs can spawn and they hit hard.',
      },
      {
        type: 'paragraph',
        text: 'At the end this is the best way to get oak if you do not have a chopper but it will also consume more resources than the red/yellow oak forest.',
      },
      {
        type: 'paragraph',
        text: '""',
      },
      {
        type: 'acknowledgement',
        text: 'Dreadisan  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Oak Plank',
        id: true,
        idName: 'Oak_Plank',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing oak log in woodworking bench.',
      },
      {
        type: 'paragraph',
        text: '""Oak Plank is refined Oak Log (x3) used for crafting many things. Can be used as fuel.',
      },
      {
        type: 'paragraph',
        text: 'Possible ways to obtain:',
      },
      {
        type: 'paragraph',
        text: '1. Refined from Oak Logs on Woodworking Bench (3 Oak Logs = 1 Oak Plank), refinery time 30 min.',
      },
      {
        type: 'paragraph',
        text: '2. AI players.',
      },
      {
        type: 'paragraph',
        text: '3. AI bases.',
      },
      {
        type: 'paragraph',
        text: 'For players who don\'t have Chopper the best strategy to find Oak Planks is to make them on Woodworking Bench using Oak Logs. 1-3 Oak Trees can be found in the Red Pine Woods, you will need Iron Hatchet to cut them. It takes 8 hits to cut down an Oak tree. You can also find 5 Oak trees at the Northern Watchtower. The best way to farm for Oak Logs in Pine Woods is to gear up (tier 2 armor, ingredients to upgrade tier 2 armor, 1-3 Iron Hatchets, 1-3 stacks of food, stack of water), fill your inventory with items that can\'t be found in locations leaving one Oak Log and press «Auto». After cutting down all Oak Trees in Pine Woods, go to Bunker Bravo and store your Oak Logs in the Military Lockers. Watch for Big One and AIs. Whenever they show up, rezone and continue farming. When your tier 2 armor is almost broken, upgrade it using the ingredients you brought with you. After using up all Iron Hatchets, take all your Oak Logs from Bunker Bravo to your base, take a shower, gear up and repeat.',
      },
      {
        type: 'paragraph',
        text: 'The best way to farm Oak Logs for players who have Chopper and unlocked the Watchtower is the Red Oak Grove. You can find 60 Oak Logs there. You will need 3.5 Iron Hatchets to cut down all Oak Trees. Two pieces of tier 2 armor with 2 pieces of tier 1 armor is enough to keep you warm, you can bring ingredients to upgrade your armor if you wish to continue farming switching between zones. Be sure to bring a gun for hostile AIs, stack of food and 2-4 melee weapons for safely switching between locations.',
      },
      {
        type: 'paragraph',
        text: 'Oak Planks are essential for building level 3 Walls. They are also used to craft the Radio Tower, Trip Wire Trap, Trunk, Fishing Rod, Zip Gun, Recycler, Refined Melting Furnace, Cozy Couch, Horse Feeder and Weapon Stand.""',
      },
      {
        type: 'acknowledgement',
        text: 'Dreadisan  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Paddle',
        id: true,
        idName: 'Paddle',
      },
      {
        type: 'paragraph',
        text: 'This weapon can only be found as loot in chests(green or yellow zone).',
      },
      {
        type: 'acknowledgement',
        text: 'lemon hung  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Bloater',
        id: true,
        idName: 'Pattern_Bloater',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from floppy disk coordinates and chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Common Pattern to paint the chopper not useful in any other way. It is not craftable. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Blue',
        id: true,
        idName: 'Pattern_Blue',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from floppy disk coordinates and chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Common Pattern to paint the chopper not useful in any other way. It is not craftable. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Captain',
        id: true,
        idName: 'Pattern_Captain',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Common Pattern to paint the chopper not useful in any other way. It is not craftable.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Christmas\'17',
        id: true,
        idName: 'Pattern_Christmas\'17',
      },
      {
        type: 'paragraph',
        text: 'Not obtainable anymore but perhaps you can get it from raid, but this is nearly impossible.',
      },
      {
        type: 'paragraph',
        text: 'The Christmas 2017 Pattern was one of many other prices (items for buffs) that you could have gotten by giving Christmas parts or other items (Steel Plates, Gasoline, Iron Plates) to a truck in a special event area. Not available anymore!',
      },
      {
        type: 'acknowledgement',
        text: '[CX] RE8E  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Fire',
        id: true,
        idName: 'Pattern_Fire',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Pattern to paint the chopper not useful in any other way. It is not craftable. ',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Halloween\'17',
        id: true,
        idName: 'Pattern_Halloween\'17',
      },
      {
        type: 'paragraph',
        text: 'Not obtainable anymore but perhaps you can get it from raid, but this is nearly impossible.',
      },
      {
        type: 'paragraph',
        text: 'The Halloween 2017 Pattern was one of 3 Halloween items that you could have gotten (for 3000 points) by giving zombie parts to a guy at the dealer location named ""Jack O\'Lantern"".',
      },
      {
        type: 'acknowledgement',
        text: '[CX] RE8E  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Harvey',
        id: true,
        idName: 'Pattern_Harvey',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Common Pattern to paint the chopper not useful in any other way. It is not craftable.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Kitty',
        id: true,
        idName: 'Pattern_Kitty',
      },
      {
        type: 'paragraph',
        text: 'Currently there is no way getting this. (maybe raid but it\'s nearly impossible)',
      },
      {
        type: 'paragraph',
        text: '1. In raids',
      },
      {
        type: 'paragraph',
        text: '    In the shop (not anymore)',
      },
      {
        type: 'paragraph',
        text: '2. No. It can\'t be crafted',
      },
      {
        type: 'paragraph',
        text: '3. The single way possible to get the Kitty pattern is by raiding. This pattern was introduced a long time ago along with the other patterns but it was obtainable only from the shop crates that used to cost coins,after the crate was deleted it from the shop only the owners of the pattern had it,making it the most rare item in the game',
      },
      {
        type: 'paragraph',
        text: '3. Besides the fact that it is exclusive like the Halloween pattern,it also is the 2nd most expensive pattern in the game, requiring 20 white paint and 20 red paint,first being the skull patter which is not exclusive,but it still requires 20 white paint.',
      },
      {
        type: 'acknowledgement',
        text: 'GabrielMihai  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Leopard',
        id: true,
        idName: 'Pattern_Leopard',
      },
      {
        type: 'paragraph',
        text: 'It can only be found in floppy disc chests.',
      },
      {
        type: 'paragraph',
        text: 'Very rare Pattern to paint the chopper not useful in any other way. It is not craftable. It can be found in floppy disc chest.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Military',
        id: true,
        idName: 'Pattern_Military',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by going to rest stop event.',
      },
      {
        type: 'paragraph',
        text: '1. Location - Rest stop events. Raids.',
      },
      {
        type: 'paragraph',
        text: '2. Pattern military cannot be crafted.',
      },
      {
        type: 'paragraph',
        text: '3. Take a gun, preferably a rifle, m16 or ak-47 to the rest stop event along with some good quality armour and something to heal. Killing the AI in the event and looking in their chopper is a way to get pattern military. Raiding also has a chance of providing the pattern military. ',
      },
      {
        type: 'paragraph',
        text: '4. The bunker crates, green, yellow and red, cannot drop the pattern military.',
      },
      {
        type: 'acknowledgement',
        text: 'Invincible Drake  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Nuclear',
        id: true,
        idName: 'Pattern_Nuclear',
      },
      {
        type: 'paragraph',
        text: 'It can be found in yellow and red ticket crate in bunker Alfa, also from chopper event.',
      },
      {
        type: 'paragraph',
        text: 'Common Pattern to paint the chopper not useful in any other way. It is not craftable.',
      },
      {
        type: 'acknowledgement',
        text: 'Kishan_kd  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pattern Skulls',
        id: true,
        idName: 'Pattern_Skulls',
      },
      {
        type: 'paragraph',
        text: 'The skull pattern is only obtainable from the Blind One boss battle on floor 3 hard mode of bunker alfa. ',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted because it is a trophy. It takes 20 white paint (only obtainable from floppy disks) and 20 black paint. The best way to get the pattern (in my opinion.) You need to clear the first exploder, 2 fast biters, 1 floater boater and 6 toxic spitters. The gear you will need is swat armor (1 swat body armor or trousers + other 3 tactical armor pieces) unless you have the bruiser skill. You only need 1 level. The Blind One does 100 damage in Military armour. If you have more than 100 heath, you can use military amour. Bring 20 med - kits with you. Bring 2 shotguns and 2 ak-47s to the fight.(The Ak- 47s are for killing the other ememies) Make sure your amour is more than half durability. Start the fight. Let him hit you 5 times. Do not shoot until he is finished charging. As soon as he hits the wall, shoot him with the shotgun. You can hit him 5 times before he is moving again. Repeat this until he dies. There is a catch though! At 700 heath the Blind One will try to heal himself. Pull the alarm on the top left wall as soon as he starts healing himself. It\'s okay if he heal a little bit. After that go to the bottom right Corner of his cage. (DO NOT WALK OUT THE DOOR, HE WILL RESET) repeat the process I listed before. At 400 heath, he tries to heal again! Pull the alarm next to you when he starts healing. Now finish killing him. You will have to switch to a new shotgun. A shotgun do exactly 1000 damage to him, but he heals. You will need a couple extra shots to finish the Blind One. The skull pattern does not always drop. You may get his head to put on your wall. You may only get the guaranteed drop: 10 red tickets, 3 dog tags, 3 personal effects and 3 military notebooks. These are hard mode items. That is how you may get the skull pattern. If you don\'t get it,  repeat the whole process again until you get it.',
      },
      {
        type: 'acknowledgement',
        text: 'Cole  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Personal Effects',
        id: true,
        idName: 'Personal_Effects',
      },
      {
        type: 'paragraph',
        text: 'The best place to get this is by doing bunker Alpha hard mode.',
      },
      {
        type: 'paragraph',
        text: 'Personal Effects are only obtainable as random loot from chests in Bunker Alfa, or as drops from enemies in Bunker Alfa, but only after activating the security protocol (performed in the same room where the Specialist is located on Floor 1 of Bunker Alfa after his one-time rescue) which changes the loot of the bunker, and respawns all enemies with more challenging versions (commonly called “hard mode”). Personal Effects are one of the items used to level up the Specialist, and yield a moderate amount of experience points, and are usually dropped by enemies of moderate difficulty.',
      },
      {
        type: 'acknowledgement',
        text: 'Elliott Aguayo  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pickaxe',
        id: true,
        idName: 'Pickaxe',
      },
      {
        type: 'paragraph',
        text: 'You should just craft this by picking of the materlas needed on the ground and craft it.',
      },
      {
        type: 'paragraph',
        text: 'This item is usually found on A.I. players in any resource zone and can be crafted. The best way to utilize this item is to find the resources needed to craft it on the go within the resource zone you want to use the pickaxe in (crafting parts required lie inside every zone). ',
      },
      {
        type: 'acknowledgement',
        text: 'Blaise  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Piece of Cloth',
        id: true,
        idName: 'Piece_of_Cloth',
      },
      {
        type: 'paragraph',
        text: 'The best way of getting this is by using sewing table and/or killing zombies in red zone.',
      },
      {
        type: 'paragraph',
        text: 'Piece of cloth can be found in various locations, such as zones (excluding those with no zombie enemies such as sector 7). Technically speaking a piece of cloth cannot be crafted however it can be converted from grass to a piece of cloth through the sewing table, 2 grass per a piece of cloth. The best strategy I have seen to acquire a piece of cloth is through farming it in the zones, mainly red and yellow zones as they have a higher chance to drop them due to the tougher enemies. In the zones you can farm cloth through eliminating zombies and AI along with farming grass to cover it into cloth through the sewing table at your base. Another way is raids however it is a low chance for you have to search for them and it is not always guaranteed. Therefore the best place to farm cloth is going to the zones farming grass to convert to cloth in the sewing table and/or eliminating zombies in red zones and yellow zones.',
      },
      {
        type: 'acknowledgement',
        text: 'Titan35  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pine Log',
        id: true,
        idName: 'Pine_Log',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming red pine zone.',
      },
      {
        type: 'paragraph',
        text: 'Location(s):',
      },
      {
        type: 'paragraph',
        text: '-Home (only once)',
      },
      {
        type: 'paragraph',
        text: '-Pine Bushes',
      },
      {
        type: 'paragraph',
        text: '-Pine Grove',
      },
      {
        type: 'paragraph',
        text: '-Pine Wood',
      },
      {
        type: 'paragraph',
        text: '-Infected Forest',
      },
      {
        type: 'paragraph',
        text: '-Limestone Ridge',
      },
      {
        type: 'paragraph',
        text: '-Limestone Cliffs',
      },
      {
        type: 'paragraph',
        text: '-Limestone Spires',
      },
      {
        type: 'paragraph',
        text: '-Wall. Sector 7 (only once)',
      },
      {
        type: 'paragraph',
        text: '-Oak Bushes',
      },
      {
        type: 'paragraph',
        text: '-Oak Grove',
      },
      {
        type: 'paragraph',
        text: '-Wooded Foothills',
      },
      {
        type: 'paragraph',
        text: '-Frosty Backwoods',
      },
      {
        type: 'paragraph',
        text: '-Watchtower (only once)',
      },
      {
        type: 'paragraph',
        text: '-Raiding Other Player’s base (if there is any)',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this item is chopping down Pine Trees with a Hatchet or Iron Hatchet.',
      },
      {
        type: 'paragraph',
        text: 'Strategy:',
      },
      {
        type: 'paragraph',
        text: '[Works best when you have access to the Reinforced set]',
      },
      {
        type: 'paragraph',
        text: '1. Beat Bunker Bravo and loot all the lockers util there are empty.',
      },
      {
        type: 'paragraph',
        text: '2. Pack the lockers by bringing consumables such as Bandages, Carrots, or Jerky; Armor (preferably the reinforced set: Reinforced Boots, Reinforced Jacket, Reinforced Jeans, and Reinforced Beanie); Be sure to bring a Military Backpack (To carry more goods) or use a Backpack; Weapons that do 25 or more damage such as Spiked Devastator, Shovel, Machete, etc. (There is no need to bring guns) from Home to Bunker Bravo.',
      },
      {
        type: 'paragraph',
        text: '3. If you have a Chopper (To carry more goods), store the Military Backpack in case you die. If not use a backpack.',
      },
      {
        type: 'paragraph',
        text: '4. Carry two weapons, 10-20 consumable items, have a full set of reinforced armor equipped at all times. Then raid and loot Pine Wood (if you want to complete missions along the process) or Pine Grove (if you want to avoid the chances of likely dying or meeting the Big One). Then bring loots back to Bunker Bravo, pack up for another go, and repeat.',
      },
      {
        type: 'paragraph',
        text: '5. If you have no time to play or have other things to do in the reality be sure carry all the looted goods from Bunker Bravo to Home, and bring consumables, armor, and weapons (refer to step 2) again to Bunker Bravo to repeat step 4.',
      },
      {
        type: 'paragraph',
        text: 'If you repeat this process you would probably get at least 400 or more Pine Logs.',
      },
      {
        type: 'paragraph',
        text: 'Also, If Kefir decides to update or reset Bunker Bravo, be sure to loot everything in Bunker Bravo and bring them to Home.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Lance018  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Pine Plank',
        id: true,
        idName: 'Pine_Plank',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing pine log in woodworking bench.',
      },
      {
        type: 'paragraph',
        text: 'Pine Planks is one of the most basic resource of the game and is used in many recipes such as Furniture, Workbenches, Weapons and Tools. ',
      },
      {
        type: 'paragraph',
        text: 'Pine Planks may also be used for upgrading your base defense to a level 2 Wall. The following list below is the required materials for upgrading the wall to a level 2:',
      },
      {
        type: 'paragraph',
        text: '* Floor (5 Pine Planks, 5 Limestones)',
      },
      {
        type: 'paragraph',
        text: '* Normal Wall (20 Pine Planks, 10 Limestones)',
      },
      {
        type: 'paragraph',
        text: '* Wall with a Window (20 Pine Planks, 10 Limestones)',
      },
      {
        type: 'paragraph',
        text: '* Wall with a Door (25 Pine Planks, 15 Limestones)',
      },
      {
        type: 'paragraph',
        text: 'This item is not Craftable but it can be easily obtained through refining Pine Logs using a wood working bench. Alternatively, they can also be obtained through Air Drops, AI Bases, or Raiding.',
      },
      {
        type: 'paragraph',
        text: '1 Pine Log is required to be able to refine 1 Pine Plank, and it takes 4 Minutes each to be refined. Making it a total of 1/2 Hour to make a total of 20 stacks of Pine Planks.',
      },
      {
        type: 'paragraph',
        text: 'You can place a maximum of 2 Wood Working Bench on your base and each of them can hold up to maximum of 20 stacks of Pine Logs each.',
      },
      {
        type: 'paragraph',
        text: 'So having 2 Wood Working Benches would be the most efficient way to produced Pine Planks. With 20 stacks placed on each Wood Working Bench, Both would yield up to 40 Planks for about 1/2 Hours.',
      },
      {
        type: 'paragraph',
        text: 'Also If you want to continue producing Pine Planks in the most efficient way, restocking the Wood Working Bench when its about 5 to 1 Pine Logs away in order for it to continue refining more Pine Planks.',
      },
      {
        type: 'paragraph',
        text: 'Another fast way of obtaining Pine Planks is through the Raiding System, though I would only recommend this if you have no other things that are worth taking during the raid or depending on your preferences. As raiding cost depends on what you would give to the raiders after, the armor, weapons and tools you used during that time.',
      },
      {
        type: 'paragraph',
        text: 'Other Notes:',
      },
      {
        type: 'paragraph',
        text: '* Spending coins for speeding production of Pine Planks is not worth it, you would need at least 8 Coins each (120 Coins for one stack of 20 Pine Planks), which is very expensive. Also coin prices would vary depending on how much time left it is to refine the Logs into planks. 8 coins would be the maximum ',
      },
      {
        type: 'paragraph',
        text: '* Air Drops is also not an efficient way of gathering Pine Planks as they tend to only have a chance of giving Pine Planks within the Air Drop. It gives a maximum of 10 Pine Planks.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Latency_vi  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Plant Fiber',
        id: true,
        idName: 'Plant_Fiber',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming red pine zone.',
      },
      {
        type: 'paragraph',
        text: 'PLANT FIBER:',
      },
      {
        type: 'paragraph',
        text: 'Always collect this resource:',
      },
      {
        type: 'paragraph',
        text: ' You will be using Bunker Bravo as a secondary base of operations so that to store and protect your loot after each run or in the even that you die. There are 6 lockers which can be used to store your loot. It’s not only PLANT FIBER which can be collected during a run, but other resources and items which can be collected and stored, for example the different electronic devices one gets from the crates and zombies, food and weapons so that it can all be stored at the Bunker until one is ready to travel back to the player base, so that less resources is needed when traveling to and from the bunker and player base.',
      },
      {
        type: 'paragraph',
        text: ' To save energy, I only farm in the red zone, to maximize the resources collected and because it is near by the bunker.',
      },
      {
        type: 'paragraph',
        text: '(Note: This strategy works best due to one being able to use the Bunker Bravo to store items. It will need to change once devs. changes the Bunker, but until then perfect for storing loot until you have everything you need.',
      },
      {
        type: 'paragraph',
        text: 'Location:',
      },
      {
        type: 'paragraph',
        text: 'All zones has a different amounts of PLANT FIBER, but it does vary from location to location.',
      },
      {
        type: 'paragraph',
        text: 'Red zones – 40',
      },
      {
        type: 'paragraph',
        text: 'Yellow zones – 30',
      },
      {
        type: 'paragraph',
        text: 'Green zones – 20',
      },
      {
        type: 'paragraph',
        text: 'Special Events:         (Varies)',
      },
      {
        type: 'paragraph',
        text: 'Raids:                (Varies and if you are lucky)',
      },
      {
        type: 'paragraph',
        text: '(Note: That all amounts can vary depending on other survivors (A.I.) which are farming those resources in the same zone, so do yourself a favour and kill those survivors and check their backpack.)',
      },
      {
        type: 'paragraph',
        text: 'Can it be crafted?',
      },
      {
        type: 'paragraph',
        text: 'The PLANT FIBER cannot be crafted, only picked up.',
      },
      {
        type: 'paragraph',
        text: 'Strategy: ',
      },
      {
        type: 'paragraph',
        text: 'This strategy requires some preparation, but will only need you to head to the bunker once. Mainly due to the fact that you will be using the as a secondary base to store your items after a run to the red pine zone.',
      },
      {
        type: 'paragraph',
        text: 'Preparation-        Weapons –         1 ranged weapon (for A.I players)',
      },
      {
        type: 'paragraph',
        text: '                                Saw mace/Skull Crusher',
      },
      {
        type: 'paragraph',
        text: '                                2 machetes/Katana',
      },
      {
        type: 'paragraph',
        text: '                                2 weaker weapons ',
      },
      {
        type: 'paragraph',
        text: '                Food -                 2-3 stacks of cooked food',
      },
      {
        type: 'paragraph',
        text: 'Armour:        I just take one stack of upgraded tier 2 armour and 1 stake of each item to upgrade the tier 2 armour from the A.I. players who have been killed.',
      },
      {
        type: 'paragraph',
        text: 'Before heading out make sure to drink a lot of water until nature calls, then take a shower and then eat till you are full. Once you have all that, bring all the items you need and head to the Bunker. I normally travel just before bed once I have used all my energy in and around my base, so that it can be filled in the morning, and if you have a bike make sure you have a full tank of gas if you do run out of energy',
      },
      {
        type: 'paragraph',
        text: 'Once I get to the Bunker I drop all the items I have brought, I have 3 lockers for Weapons, Armour and food/bandages.',
      },
      {
        type: 'paragraph',
        text: 'I then take a few weapons and 1 stack of food all depending on how many items you will need to clear the red zone of zombies.',
      },
      {
        type: 'paragraph',
        text: 'Once I get there I first kill all the zombies and animals in the zone and open all the crates and store all the items I have collected and want to take back in a crate near my bike. ',
      },
      {
        type: 'paragraph',
        text: 'I then collect a few PLANT FIBERs, then fill my inventory with other items that cannot be picked up by in the zone. One I have all 40 pieces of fiber. I place them in the crates with the other items and loot I will be taking back to the bunker. I then clear out the rest of zone for the experience points.',
      },
      {
        type: 'paragraph',
        text: 'Once I am done in the zone, I head back to bunker to resupply rest or once I have collected enough PLANT FIBER and other resources I travel back to my base with a full backpack of Items.',
      },
      {
        type: 'paragraph',
        text: 'Compare:',
      },
      {
        type: 'paragraph',
        text: 'Not sure how other players collect PLANT FIBER, but this strategy save on resources, energy and time moving to and from the zone and player home, by using the bunker and its lockers. This strategy doesn’t just for the PLANT FIBER but other resources which can be collected in the red pine zone. You can store all the items you need and want to take back at the bunker until it’s a full stacked then transfer all the items back to base without wasting space.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Kyle-kyrooo  (Edited By:  Locket)',
      },
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Rain Catcher',
        id: true,
        idName: 'Rain_Catcher',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'You can find rain catchers in other players base but you can\'t bring it home.Rain catcher is a craftable item.Best way to obtain it is by crafting it.',
      },
      {
        type: 'acknowledgement',
        text: 'Nealxy  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Ration Coupon',
        id: true,
        idName: 'Ration_Coupon',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'The ration coupon can be obtained in three different ways. Bunker Alpha,air drops and whilst raiding other peoples\' bases.Ration coupons cannot be crafted.The easiest way to obtain ration coupons is from Bunker Alpha (normal mode) this is because green coupons drop from very weak enemies such as fast biters and  toxic spitters. Other enemies can also drop them but it is less common. Due to the fact that there are a lot of these enemies it means that by playing Bunker Alpha you will accumulate a vast amount of green tickets. I would recommend clearing out floor two and three as these floor contain a lot of fast bitters and toxic spitters. However raiding other peoples\' bases is not as good or efficient as clearing Bunker Alpha but you can still accumulate a lot of green tickets from raiding other peoples\' bases as they are very common. I would not recommend farming air drops for ration coupons as you can only find 4 air drops per day. ',
      },
      {
        type: 'acknowledgement',
        text: 'SultanHalal  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Raw Meat',
        id: true,
        idName: 'Raw_Meat',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by farming any zone repeatedly.',
      },
      {
        type: 'paragraph',
        text: 'Cooked, dried or consumed directly to restore hit points and to lessen hunger/thirst. Raw meat can only be dropped and found in deers, foxes and AI players or in other players’ bases when raiding. Strategy to obtain raw meat is to hunt deers as they can be found in farming locations such as mountains and forests and in Chopper events or rest stops that spawns several deers. Deers have 20 Hit Points so it is recommended to sneak and kill these with one hit compared to foxes with 50 Hit Points.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Raw Turkey',
        id: true,
        idName: 'Raw_Turkey',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing red or yellow zones.',
      },
      {
        type: 'paragraph',
        text: '""1. Red zone: 2-4 turkeys',
      },
      {
        type: 'paragraph',
        text: '     Yellow zone: 1-2 turkeys',
      },
      {
        type: 'paragraph',
        text: '     Green zone: 0-1 turkeys',
      },
      {
        type: 'paragraph',
        text: '2. It can\'t be crafted and can only be found',
      },
      {
        type: 'paragraph',
        text: '3. # I suggest that you go between the Yellow and Red zone and only kill turkeys and deer if you\'re trying to get food for dog crate.',
      },
      {
        type: 'paragraph',
        text: '     # Or kill turkeys and zombies and loot all the chest if you\'re trying level up your skill',
      },
      {
        type: 'paragraph',
        text: '     # If there are too much zombies and you\'re gathering turkeys to cook them for healing then only kills the turkeys and loot the chest (only kill zombies if necessary, if you see 3-4 zombies in an area just ignore that chest and wait for the turkey to wander to you)""',
      },
      {
        type: 'acknowledgement',
        text: 'Hoàng Đinh  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Red Paint',
        id: true,
        idName: 'Red_Paint',
      },
      {
        type: 'paragraph',
        text: 'he easiesr way to get Red paint is by opening Bunker Alpha Coupon crates and chests/lockers in the lower lv\'s ',
      },
      {
        type: 'paragraph',
        text: 'it can also be found in any of the zones chests, airdrops, rest stop event, floppy disc location and from the shop',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'It is used for painting the chopper (patterns: bloater, captain, halloween, Fire, Leopard amd Kitty), small boxes, chests and trunksblue ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'it can not be crafted ',
      },
      {
        type: 'paragraph',
        text: 'it can not be recycled',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Refined Melting Furnace',
        id: true,
        idName: 'Refined_Melting_Furnace',
      },
      {
        type: 'paragraph',
        text: 'The best way to ge this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The Refined Melting is a type of workbench that is used to create copper, steel, titan and tungsten bars. The Refined Melting Furnace can be learned and crafted. There is a possibility that it can be dropped by AI players carrying this item and by raiding bases with this item stored in chests though extremely rare. Best strategy to obtain a Refined Melting Furnace is to obtain the needed materials to make it and then crafting it in the crafting menu.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Beanie',
        id: true,
        idName: 'Reinforced_Beanie',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to craft it.',
      },
      {
        type: 'paragraph',
        text: '""The reinforced Beanie is an item that can be crafted but also be found on A.I. players and other players bases.',
      },
      {
        type: 'paragraph',
        text: 'The reinforced apparel itself is the apparel crafting the most, because it takes only one tier 2 garment which can be almost broken, but after crafting a reinforced tier 2 gear the hitpoints reset and you get a new garment. It also costs nothing you just have to pay a few nails, metal plates, a little bit of leather and in the case of boots a little bit of rope.',
      },
      {
        type: 'paragraph',
        text: 'But I want to remind you at this point, do not take reinforced from A.I. players, because then it is almost broken down and you cannot repair it. Some math, broken reinforced tier 2 equals worthless.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the materials is following.',
      },
      {
        type: 'paragraph',
        text: '-->Metal (for nails and metal plates) - Recycle as much as possible or farm yellow zones (basic backpack) and red zones (military backpack). Do this by clearing the area and then press auto.',
      },
      {
        type: 'paragraph',
        text: '-->Animal Rawhide (for leather) - Kill deers and wolves',
      },
      {
        type: 'paragraph',
        text: '-->Rope - Get it from zombies',
      },
      {
        type: 'paragraph',
        text: '-->Tier 2 apparel Do the bunker alpha and open a green ticket box or kill A.I. players. If you want to kill A.I. players do it fast before they attack any other enemies. The apparel could be broken. You also can craft, but i would Never recommend it because it cost too much.',
      },
      {
        type: 'paragraph',
        text: 'The best and efficacious way to get this gear is by crafting it.',
      },
      {
        type: 'paragraph',
        text: ' ""',
      },
      {
        type: 'acknowledgement',
        text: 'FetteKotlette 3d  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Boots',
        id: true,
        idName: 'Reinforced_Boots',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '""The reinforced Boots are items that can be crafted but also be found on A.I. players and other players bases.',
      },
      {
        type: 'paragraph',
        text: 'The reinforced apparel itself is the apparel crafting the most, because it takes only one tier 2 garment which can be almost broken, but after crafting a reinforced tier 2 gear the hitpoints reset and you get a new garment. It also costs nothing you just have to pay a few nails, metal plates, a little bit of leather and in the case of boots a little bit of rope.',
      },
      {
        type: 'paragraph',
        text: 'But I want to remind you at this point, do not take reinforced from A.I. players, because then it is almost broken down and you cannot repair it. Some math, broken reinforced tier 2 equals worthless.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the materials is following.',
      },
      {
        type: 'paragraph',
        text: '-->Metal (for nails and metal plates) - Recycle as much as possible or farm yellow zones (basic backpack) and red zones (military backpack). Do this by clearing the area and then press auto.',
      },
      {
        type: 'paragraph',
        text: '-->Animal Rawhide (for leather) - Kill deers and wolves',
      },
      {
        type: 'paragraph',
        text: '-->Rope - Get it from zombies',
      },
      {
        type: 'paragraph',
        text: '-->Tier 2 apparel Do the bunker alpha and open a green ticket box or kill A.I. players. If you want to kill A.I. players do it fast before they attack any other enemies. The apparel could be broken. You also can craft, but i would Never recommend it because it cost too much.',
      },
      {
        type: 'paragraph',
        text: 'The best and efficacious way to get this gear is by crafting it.""',
      },
      {
        type: 'acknowledgement',
        text: 'FetteKotlette 3d  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Jacket',
        id: true,
        idName: 'Reinforced_Jacket',
      },
      {
        type: 'paragraph',
        text: 'The best way of getting this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '""The reinforced Jacket is an item that can be crafted but also be found on A.I. players and other players bases.',
      },
      {
        type: 'paragraph',
        text: 'The reinforced apparel itself is the apparel crafting the most, because it takes only one tier 2 garment which can be almost broken, but after crafting a reinforced tier 2 gear the hitpoints reset and you get a new garment. It also costs nothing you just have to pay a few nails, metal plates, a little bit of leather and in the case of boots a little bit of rope.',
      },
      {
        type: 'paragraph',
        text: 'But I want to remind you at this point, do not take reinforced from A.I. players, because then it is almost broken down and you cannot repair it. Some math, broken reinforced tier 2 equals worthless.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the materials is following.',
      },
      {
        type: 'paragraph',
        text: '-->Metal (for nails and metal plates). Recycle as much as possible or farm yellow zones (basic backpack) and red zones (military backpack). Do this by clearing the area and then press auto.',
      },
      {
        type: 'paragraph',
        text: '-->Animal Rawhide (for leather) - Kill deers and wolves',
      },
      {
        type: 'paragraph',
        text: '-->Rope - Get it from zombies',
      },
      {
        type: 'paragraph',
        text: '-->Tier 2 apparel Do the bunker alpha and open a green ticket box or kill A.I. players. If you want to kill A.I. players do it fast before they attack any other enemies. The apparel could be broken. You also can craft, but i would Never recommend it because it cost too much.',
      },
      {
        type: 'paragraph',
        text: 'The best and efficacious way to get this gear is by crafting it.""',
      },
      {
        type: 'acknowledgement',
        text: 'FetteKotlette 3d  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Jeans',
        id: true,
        idName: 'Reinforced_Jeans',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The reinforced Jeans is an item that can be crafted but also be found on A.I. players and other players bases.',
      },
      {
        type: 'paragraph',
        text: 'The reinforced apparel itself is the apparel crafting the most, because it takes only one tier 2 garment which can be almost broken, but after crafting a reinforced tier 2 gear the hitpoints reset and you get a new garment. It also costs nothing you just have to pay a few nails, metal plates, a little bit of leather and in the case of boots a little bit of rope.',
      },
      {
        type: 'paragraph',
        text: 'But I want to remind you at this point, do not take reinforced from A.I. players, because then it is almost broken down and you cannot repair it. Some math, broken reinforced tier 2 equals worthless.',
      },
      {
        type: 'paragraph',
        text: 'The best way to get the materials is following.',
      },
      {
        type: 'paragraph',
        text: '-->Metal (for nails and metal plates) - Recycle as much as possible or farm yellow zones (basic backpack) and red zones (military backpack). Do this by clearing the area and then press auto.',
      },
      {
        type: 'paragraph',
        text: '-->Animal Rawhide (for leather) - Kill deers and wolves',
      },
      {
        type: 'paragraph',
        text: '-->Rope - Get it from zombies',
      },
      {
        type: 'paragraph',
        text: '-->Tier 2 apparel Do the bunker alpha and open a green ticket box or kill A.I. players. If you want to kill A.I. players do it fast before they attack any other enemies. The apparel could be broken. You also can craft, but i would Never recommend it because it cost too much.',
      },
      {
        type: 'paragraph',
        text: 'The best and efficacious way to get this gear is by crafting it.',
      },
      {
        type: 'acknowledgement',
        text: 'FetteKotlette 3d  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Trousers',
        id: true,
        idName: 'Reinforced_Trousers',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Reinforced Trousers can be crafted and can only be obtained by looting dead AI players equipped with the item. It is CANNOT be found in chests of any farming location, events and in Bunker Alpha. It is a type of pants that adds resistance to zombie hits and bullets. Strategy to obtain this item is to craft it directly in the crafting menu after obtaining the needed items to make it. In crafting, it is recommended to use damaged Trousers as durability is restored to max after crafting the item regardless of durability of Trouser. Place and keep damaged Trousers in your base to easily craft Reinforced Trousers when needed. It is similar to the ones worn by raiders.',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Road Sign',
        id: true,
        idName: 'Road_Sign',
      },
      {
        type: 'paragraph',
        text: 'Can be sometimes found on either red or yellow zones inside chests and it is the only way.',
      },
      {
        type: 'paragraph',
        text: 'This is very useful in killing zombies in bunker (especially frenzied giants) as it has the longest attack range in the game.',
      },
      {
        type: 'acknowledgement',
        text: 'raccesha  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Roasted Turkey',
        id: true,
        idName: 'Roasted_Turkey',
      },
      {
        type: 'paragraph',
        text: 'The best place to find this is to go yellow or red zone.',
      },
      {
        type: 'paragraph',
        text: 'Red zones and yellow zones are the best places to hunt for wild turkeys can\'t be crafted  but I find it to be best to use charcoal when roasting turkey one turkey takes about 30 minutes cook I find that 16 charcoal pieces roughly estimated what you need to cook one turkey compared to using Pine or oak trees which would consume more fuel so in my opinion charcoal is the best strategy when it comes to roasting turkeys',
      },
      {
        type: 'acknowledgement',
        text: 'Robert S Smith jr  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Rope',
        id: true,
        idName: 'Rope',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by killing zombies in any zone.',
      },
      {
        type: 'paragraph',
        text: 'Rope can be found in any location from zombies or AI players and also in raid. You can make it using tanning rack (you need plant fiber x2 for 1 rope) and using recycler or be found in packs from shop (pack for stash making and unknown box) my strategy is to farm it from zombies',
      },
      {
        type: 'acknowledgement',
        text: 'Andrija  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Rubber Parts',
        id: true,
        idName: 'Rubber_Parts',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by doing bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Rubber Parts is a very common item drop in chests located in any resource zone or Bunker Alfa.  You can find Rubber Parts in bulk by completing Bunker Alfa.  At lower player levels, you can find Rubber Parts by alternating between Green and Yellow resource zones.',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Safe',
        id: true,
        idName: 'Safe',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained from shop.',
      },
      {
        type: 'paragraph',
        text: 'The safe is an item that can only be found in the shop and can\'t currently be crafted. If you would like to obtain this item and don\'t mind spending money I would suggest waiting for a package or deal similar to the 2x2 metal room that came with guaranteed safe. If you don\'t want to wait you could try your luck at \'\'The pack for stash making\'\' however you aren\'t guaranteed to get it this way. if you are free to play the only way of obtaining this item is by raiding other players and hoping that they left one in a chest however this is extremely unlikely. The safe has 5 slots and has the smallest storage of the chest items however it makes up for it by being unreadable without using the metal cutter which is not currently in the game.  ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: '5LizardsInASuit  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Saw Blade Mace',
        id: true,
        idName: 'Saw_Blade_Mace',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '1. Saw Blade Mace can be found in airdrops, dealers, and raid and can\'t be found in normal zones aside from NPCs. ',
      },
      {
        type: 'paragraph',
        text: '2. This weapon is craftable, but similar to the machete is really expensive to craft and consists of 5 individual materials to make. These include: 15 iron bars, 10 wooden planks, 5 blue tape, 5 scrap, and 12 leather. ',
      },
      {
        type: 'paragraph',
        text: '3. With the cost comes the legacy of being the weapon of choice against frenzy giants and hard mode toxic spitters. Due to its really low durability it is suggested to only be used to sneak attack giants as well as possibly sneak attack bloaters. However, personally i only aim to use this weapon on frenzy giants and avoid on normal enemies as this weapon is hard to craft and even harder to find. Another thing to note is that this weapon can inflict huge damage to NPCs even with armor. ',
      },
      {
        type: 'paragraph',
        text: '4. This weapon has no direct comparison, it is simply the more mature brother of the skull crusher and the frenzy giant killer. This is the strongest weapon in the game, but the most damage per second goes to the machete. Both of which are extremely difficult to craft. ',
      },
      {
        type: 'acknowledgement',
        text: 'StillTho  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Scrap Metal',
        id: true,
        idName: 'Scrap_Metal',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by using the recycler.',
      },
      {
        type: 'paragraph',
        text: 'Scrap Metal is a non craft-able item that is a great substitute for iron ore in making iron bars for having a high max item-per-stack of 50 and low time of 2 minutes. It is a common item that can be found in numerous ways:',
      },
      {
        type: 'paragraph',
        text: '1.Recycler',
      },
      {
        type: 'paragraph',
        text: 'Weapons, armor and even empty cans, nearly every single item that you put in the recycler can give you scrap metal',
      },
      {
        type: 'paragraph',
        text: '2.Bases',
      },
      {
        type: 'paragraph',
        text: 'AI bases or real player bases have these inside their chests',
      },
      {
        type: 'paragraph',
        text: '3.Tree and Rock zones',
      },
      {
        type: 'paragraph',
        text: 'Searching the chests or bags scattered around all 3 zones of both tree and rock zone can give you a certain amount of scrap metal, but not as much.',
      },
      {
        type: 'paragraph',
        text: '4.AI players',
      },
      {
        type: 'paragraph',
        text: 'Whenever it is a guy named John that smacks you in the head with a crowbar or Pestro that tries to punch you to death, killing AI players give a chance to leave some scrap metal in their inventory, but it\'s best to not hope for it',
      },
      {
        type: 'paragraph',
        text: 'Comparison',
      },
      {
        type: 'paragraph',
        text: 'Overall, it\'s best to just focus using the recycler to gain scrap metal. Often recycle items such as nearly broken weapons or armor, furniture, empty cans and even vehicle parts to get some. It is suggested to recycle them because it is a waste of space, and space is a main issue to new, veterans and pro players of the game. So get your recycle up and start scraping some things that you don\'t need!',
      },
      {
        type: 'acknowledgement',
        text: 'Ston1234 the gamer  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Sewing Table',
        id: true,
        idName: 'Sewing_Table',
      },
      {
        type: 'paragraph',
        text: 'It is a craftable item, which makes crafting the easiest way to optain it',
      },
      {
        type: 'paragraph',
        text: 'Also can be found on dead Ai players body',
      },
      {
        type: 'paragraph',
        text: 'It is used to turn (2)Plant fiber into (1)Piece of cloth and (2)Piece of cloth into (1) Thick fabric',
      },
      {
        type: 'acknowledgement',
        text: 'Nealxy  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Shirt',
        id: true,
        idName: 'Shirt',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'This piece of armor can be found on AI players in any zone and at the Rest Stop event (Chopper event). It also can be crafted for 3 plant fibers and 3 pieces of cloth. The best way to get this item is by farming the green zone for these simple ingredients/ materials.',
      },
      {
        type: 'acknowledgement',
        text: 'EdS  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Shotgun',
        id: true,
        idName: 'Shotgun',
      },
      {
        type: 'paragraph',
        text: 'The most efficient way to get this is by meeting dealer.',
      },
      {
        type: 'paragraph',
        text: '1. Obtainable by opening weapon crates sold by the dealer, also on choppers at the bikers\' camp temporal map event.',
      },
      {
        type: 'paragraph',
        text: '2. A probability to get one by opening yellow and red coupon crates at the bunker alfa.',
      },
      {
        type: 'paragraph',
        text: '2 Crafting: Not craftable yet (Tungsten bars and ash planks are not in the game).',
      },
      {
        type: 'paragraph',
        text: '3 Strategy: Check the radio for the dealer\'s signal, if what he requests is a considerable trade for you, go ahead and trade with him, you might get a shotgun or a useful weapon.',
      },
      {
        type: 'paragraph',
        text: '4 Clearing the bunker for a shotgun may cost you more resources than the ones you can make it up using the shotgun. If you are in need of one better follow the strategy. ',
      },
      {
        type: 'acknowledgement',
        text: 'Peridotite  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Shovel',
        id: true,
        idName: 'Shovel',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Shovel can be crafted. In order to craft shovel you will first need to reach level 34,and unlock recipe for crafting with one crafting point. Then you will need next materials:7x Iron Bars,x3 Nails,x8 Pine Planks.',
      },
      {
        type: 'paragraph',
        text: 'Best strategy is to craft it because it is not sure that you will find it, but if you are looking to find one you can do it while you farm resources, just open few chest, also every hour you get one unknown box for free and i suggest you to open one, my advice is dont loot just for shovel if you go to zones because its not worth it that much, but still keep your eye open for one(free weapon cant be bad :D) Additionally, shovel can be found in unknown box, green ticket box in bunker, when you raiding other players or AI base,in chest while you looting zones, also you can get it if u kill AI player (if he does have a shovel).',
      },
      {
        type: 'acknowledgement',
        text: 'Vuk  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Shower',
        id: true,
        idName: 'Shower',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The ""Shower"" is needed to remove the Stink level. It is highly recommended to take a shower before farming zones. When our stink level is high, we are not able to sneak attack on zombies or animals, and it will attract zombies on us.',
      },
      {
        type: 'paragraph',
        text: 'It can be crafted. It takes 10 pine logs, 1 piece of cloth and 3 iron ore. You can build up to two in your Base, only on Ground (no Floors)',
      },
      {
        type: 'paragraph',
        text: 'Strategy of having one: Head to a nearest green zone and collect all items needed for shower. Once you built it, place it near your Rain Catcher. Have 4 bottles in Rain Catcher, 2 for your thirst and 2 to take a shower. Lobby of bunker Alpha also contains shower. It is located in room with one Floater Bloater.',
      },
      {
        type: 'acknowledgement',
        text: 'ABProved  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Signal Amplifier',
        id: true,
        idName: 'Signal_Amplifier',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to do bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'It can be found in coupon chests in Bunker Alpha, airdrops and in chests in all farming zones. More dangerous the zone, better the chances of finding it. It is not craftable. The best way to get is by opening chests in zones, attending airdrops and opening coupon chests in bunker Alpha.',
      },
      {
        type: 'acknowledgement',
        text: 'Ankit Anjan Adhikari   (Edited By:  Vedrana Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Skull Crusher',
        id: true,
        idName: 'Skull_Crusher',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it. Though it should only be used in some situations.',
      },
      {
        type: 'paragraph',
        text: '1. Skull Crusher can be obtained through events such as dealer, air drop, and raids. Can be found while looting an AI. It is extremly rare to find them in chests in zones.',
      },
      {
        type: 'paragraph',
        text: '2. Avoid using in zones. In my personal experience, I only use Skull Crusher when doing Bunker Alpha. Crafting this weapon would simply kill your resources and in my opinion should be only crafted for bunker use. It takes 12 iron,12 nails, 5 leather and 4 blue tape. ',
      },
      {
        type: 'paragraph',
        text: '3. When using the skull crusher, it is mostly to take on an enemy quickly or to inflict alot of dmg to save the durability of another weapon. On the second floor of Bunker Alpha, it oneshots the roamers in the first hallway. So it is the preferred choice of weapon. It is also recommended to use the weapon to sneak attack bloaters and toxic abominations. It is not recommended to you it on Frenzied Giant since it doesnt have that much range as Sawmace. However, keep in mind these aren\'t easy to come by and pretty expensive to make. So craft and use only in bunker or really hard zones. ',
      },
      {
        type: 'paragraph',
        text: '4. There is no direct comparison to any other weapons. It is simply the bloater killer, the baby version of the Sawblade. It is also important to note that its slow attack rate makes it preferable strictly for sneak attack then switching to a more optimal weapon such as machete.',
      },
      {
        type: 'acknowledgement',
        text: 'StillTho  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Small Box',
        id: true,
        idName: 'Small_Box',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'Uses: its used as a storage unit,it can store up to 15 items and it is used in the recipe for crafting the chest',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Finding the small box: Small box can be found rarely by killing an AI and looting his or her body on any location (red,yellow, green zones)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Crafting :Small box can be crafted using 5 plant fiber and  3 pine logs which also can be found on any location as well (red,yellow, green zones )',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Best strategy for finding resources for crafting the small box is farming the green zone (stone or pine)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Recycling: the small box is in the (others) catagory in the recycler on lvl 1 it has 40% chance of giving pine logs ',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Sneakers',
        id: true,
        idName: 'Sneakers',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'To get sneakers you need ""Plant Fiber"", ""Piece of Cloth"", and ""Rope"". All of these can be gotten in a green zone. You will find plants, just pick them up. Kill a couple of zombies and they will drop rope and cloth. Go to the blueprints menu and craft away!',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'KillDroid509  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Snorkel',
        id: true,
        idName: 'Snorkel',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained from rest stop event.',
      },
      {
        type: 'paragraph',
        text: 'Snorkel is one of the rarest item in the game and can be found in the Rest Stop events and raids.It cannot be crafted, and it is probably going to be used for diving, which isn\'t implemented into LDoE yet. The best strategy would be to go on as many raids as possible and attend every Rest Stop event. There are higher chances of looting snorkel in raids from a high level base, rather than obtaining it from Rest Stop event.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'SinisterZombo  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Spear',
        id: true,
        idName: 'Spear',
      },
      {
        type: 'paragraph',
        text: 'You should pick up pine log from the ground and craft it.',
      },
      {
        type: 'paragraph',
        text: 'The spear is an item obtainable through crafting or from killing AI players in the green or yellow zones. Crafting it is by far the best way to make a spear as it only costs 3 pine logs to make it, which you can easily pick up from the ground in any zone. Killing AI players is not a good method of obtaining the spear as it is way more expensive than crafting it .',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Chris .B  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Spike Trap',
        id: true,
        idName: 'Spike_Trap',
      },
      {
        type: 'paragraph',
        text: 'The Best to get it is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'It can be found anywhere on AI players randomly spawned in the wilderness when you kill them, more commonly so in green zones. It is the first trap that a player can craft, requiring 10 pine logs, 10 rope, and 2 metal scraps.',
      },
      {
        type: 'paragraph',
        text: 'Materials for spike traps can easily be found in the woods. It is more advisable to go to yellow zones, as they have more trees, and spawn more zombies like the Floater Bloater that provide more rope and cloth, a necessary item needed for crafting bandages and thick cloth. Because rope is common among killed zombies as loot, generally more developed players use plant fiber to create cloth instead of rope. However, if you plan on stockpiling on these traps, feel free to craft rope by placing it into the tanning rack. I generally run to the green zone to find materials for the spike trap because it\'s energy efficient, safer, and easier to find metal scraps within the containers and zombies with one (or rarely two) pieces of rope. There are more than enough trees to provide enough pine logs for 4-6 spike traps, and if you need more rope, you can take a quick trip to the yellow zone to kill some zombies. The resources in the green area should give you ample cloth, rope, and plant fibers to almost craft a full set of tier one armor, which will see you through most of the zombies in yellow zones (mainly the Toxic Spitters and the Fast Biters).',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Elioc997472  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Spiked Devestator',
        id: true,
        idName: 'Spiked_Devestator',
      },
      {
        type: 'paragraph',
        text: 'The Best to get it is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The following item required to craft:',
      },
      {
        type: 'paragraph',
        text: '●10 Iron bars',
      },
      {
        type: 'paragraph',
        text: '●5 Empty Cans',
      },
      {
        type: 'paragraph',
        text: '●5 Leathers',
      },
      {
        type: 'paragraph',
        text: '●8 Nails',
      },
      {
        type: 'paragraph',
        text: 'Description(In Game):Blunt Weapon with a killing Design.',
      },
      {
        type: 'paragraph',
        text: 'Damage:26 Damage(normal)/78 Damage(Sneak)',
      },
      {
        type: 'paragraph',
        text: 'How to get item: IRON ORE-Use the Furnace to smelt iron ore. Iron ore can be found in any of the rock zones.(recommend to go to yellow rock zone for more iron ore for less weapons and danger)',
      },
      {
        type: 'paragraph',
        text: 'Empty can-A byproduct when you eat baked bean. Baked beans are found in all zones, bunker alpha, etc... Typically you will get 3 baked beans in your inbox.',
      },
      {
        type: 'paragraph',
        text: 'Leather- This item is created when you put deer skin in a tanning rack.Deer can be found in all zones and can\'t be attack directly, so its recommended to sneak behind and if you don\'t want to waste a good weapons durability bring a spear as it can one shot a deer.(recommended to get an abundant deer hide is to hop between both green zones forest and rock and just hunt deer as there is less danger in both locations)',
      },
      {
        type: 'paragraph',
        text: 'Nails- Nails can be crafted in the workshop when you put iron plate which can be made when you put iron bar in the workshop each plate gives 2 nails.',
      },
      {
        type: 'paragraph',
        text: 'Uses(Recommendations): The Spike devestator could be used as a weapon for a red zone run as it\'s Attack speed and damage could kill many enemy quickly, but won\'t kill Toxic Spitters and Fast Biters in one hit with a sneak attack. Another Use is to finish low health enemies is bunker alpha if you are trying to save durability for example your Saw blade mace.',
      },
      {
        type: 'paragraph',
        text: 'Compared: Crowbar/Shovel/Spike dev',
      },
      {
        type: 'paragraph',
        text: 'Toxic spitter how long it took to kill:',
      },
      {
        type: 'paragraph',
        text: 'Shovel:4.80sec Crowbar:3.40sec Spike dev:3.22 sec',
      },
      {
        type: 'paragraph',
        text: 'Zombie how long it took to kill:',
      },
      {
        type: 'paragraph',
        text: 'Shovel:2.38 sec Crowbar:1.96 sec Spike dev: 1.42we ',
      },
      {
        type: 'paragraph',
        text: 'Making this can help in runs despite the resource to make.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Trill(H.B.)  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Steel Bar',
        id: true,
        idName: 'Steel_Bar',
      },
      {
        type: 'paragraph',
        text: 'Best and easiest way would be by getting a copper bar from Recycler and refine it into steel bar.',
      },
      {
        type: 'paragraph',
        text: 'Obtaining steel bars was a pain for every player in LDoE. The process used to start with farming copper ores in winter zones and turning them to bars.',
      },
      {
        type: 'paragraph',
        text: 'But we can now get the steel bar in various ways ; both difficult and easy, thanks to the recycler .',
      },
      {
        type: 'paragraph',
        text: 'The locations to find steel bars are :',
      },
      {
        type: 'paragraph',
        text: '1.Bunker alpha 4th floor',
      },
      {
        type: 'paragraph',
        text: '2.Smelting various items in refined melting furnace.',
      },
      {
        type: 'paragraph',
        text: '3.Floppy zone loot.',
      },
      {
        type: 'paragraph',
        text: '4.Recycler ',
      },
      {
        type: 'paragraph',
        text: '1.In Bunker Alpha\'s 4th floor steel bars can be found inside final loot boxes. Chests behind heavy turrets can also have steel bar.',
      },
      {
        type: 'paragraph',
        text: '2.After obtaining the copper ore, you need to convert them to copper bars using the Melting Furnace. After obtaining the copper bars you are finally ready to get your precious steel bars! You now need to first craft a “Refined Melting Furnace” from your blueprints. Its an upgraded version of the regular furnace and is used for obtaining more advanced type of resources in the game.',
      },
      {
        type: 'paragraph',
        text: 'You need to put in 1 iron bar, 1 copper bar, 1 aluminium bar and 2 charcoals in your refined melting furnace to obtain 1 steel bar. Make sure to burn them using charcoals instead of wood or planks because it takes quite some time to get the steel bar ready in it.',
      },
      {
        type: 'paragraph',
        text: '3.Floppy zone can be accessed by getting the floppy disk. It gives about 1 to 3 steel bars and steel plates. Though it is not effective to get the floppy disk just for the steel',
      },
      {
        type: 'paragraph',
        text: '4. The Recycler is one of the best workbench created by Kefir in LDoE and it is the easiest way to get steel. We can recycle various items to get steel. ',
      },
      {
        type: 'paragraph',
        text: 'The items are: Atv wheel, Truck wheel, Truck sawblade, engine parts, wrenches ,all firearms, SWAT armor, katana and heat sensor. Items like Atvwheel. Truck wheel and Truck sawblade are really easy to find in all farming areas. The best way would be by recycling batteries to get copper bars. and then with Refined Meltin Furnace turn it into a steel bar.',
      },
      {
        type: 'paragraph',
        text: 'Steel bars can also be found in some special events which Kefir makes for players. Also can be found in raids.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Awish Regmi  (Edited By:  Vedrana,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Steel Plate',
        id: true,
        idName: 'Steel_Plate',
      },
      {
        type: 'paragraph',
        text: 'Best and easiest way would be by getting a copper bar from Recycler and refine it into steel bar before turning it into steel plate.',
      },
      {
        type: 'paragraph',
        text: 'Steel plates can be found in different locations. They can be found in Alfa bunker floor 4, floppy disk locations and the AI base in the Northern zones. Steel plates can be crafted from steel bars using Workbench. In level 4 of bunker Alpha, steel plates can be found in final loot chests and chests behind heavy turrets. There is a chance to get steel plate from floppy disk chest and infected chest. Another way would be by farming copper ore in winter zone and after a long proces of refining it, make it as a steel plate. Best and easiest way would be by getting a copper bar from Recycler, refine the copper bar to steel bar with Refined Melting Furnace and at end put steel bar into Workbench to make a steel plate.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'SebastianM2479  (Edited By:  Vedrana,  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Stone Brick',
        id: true,
        idName: 'Stone_Brick',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to turn limestone into stone brick in stonecutter’s table.',
      },
      {
        type: 'paragraph',
        text: 'First of all you can get stone bricks from air drops or chopper events. But the best way to get stone is like this: Go to the yellow zone, kill all the zombies(sneak them with a skull crusher or the normal zombies with a machete) and then fill your inventory with stone(with 1 normal stone on each slot) and 4 pickaxes and auto everything. You need to check the game sometimes because your pickaxes will break. But if you don\'t mind getting 4 stacks of berries while farming you can leave it do the job. Remember to keep a good weapon in your hands as players(ai\'s) can come to kill you. After you have filled your inventory you can go home and put all of your stone in the benches to make bricks and after that go back to farming and repeat.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Firesky(Greg)  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Stonecutter\'s Table',
        id: true,
        idName: 'Stonecutter\'s_Table',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to craft it in menu.',
      },
      {
        type: 'paragraph',
        text: 'The Stonecutter\'s Table is a building needed to refine Limestone into Stone Bricks. In order to craft it, you need the following materials: 20 Pine Planks, 10 Iron Bars and 5 Scrap Metals.',
      },
      {
        type: 'paragraph',
        text: 'The best strategy to gather all the materials needed is by refining Pine Logs in the Woodworking Bench and burning Iron Ore/Scrap Metal in the Melting Furnace for Iron Bars. As for Scrap Metal, you need to either recycle items in the Recycler or open chests in Pine, Limestone, Oak, or winter areas to obtain them. Between these two choices, I recommend looting boxes for low-level players and recycling items for higher-level players. This is because low-level players need a lot of Scrap Metal anyways, whereas high-level players will probably have excess items that yield Scrap Metal in their bases.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jerrymouseisme  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Strong Alcohol',
        id: true,
        idName: 'Strong_Alcohol',
      },
      {
        type: 'paragraph',
        text: 'The best way to get strong alcohol is through opening chests in all red zones, it can also be obtained on AI/NPC inventories as well as raiding other people\'s base.',
      },
      {
        type: 'acknowledgement',
        text: 'Aranaidz  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Survival Kit Coupon',
        id: true,
        idName: 'Survival_Kit_Coupon',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is killing zombies in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'The survival kit coupon can be found in 4 different places. Bunker Alpha, air drops, yellow and red zones as well as whilst raiding other peoples bases. Survival kit coupons cannot be crafted. The easiest way to obtain these coupons is from Bunker Alpha (normal mode) as they are a fairly common drop. They drop from toxic spitters, floater bloaters and toxic abominations. These enemies are fairly common therefore making it easier to obtain survival kit coupons. I would recommend that you clear floor one and two as these enemies are common on these floors. I would not recommend air drops as you can only find four air drops per day and I would not recommend farming yellow and red zones as survival coupons are quite rare to find there. However raiding other peoples bases can be a decent source of survival coupons but this strategy is not as efficient as clearing Bunker Alpha as the raiding quests can be quite long and tedious and most player will use thsre tickets instantly and only have a small amount left over.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'SultanHalal  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'SWAT Body Armor',
        id: true,
        idName: 'SWAT_Body_Armor',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'SWAT Body Armor can be found in the following places:',
      },
      {
        type: 'paragraph',
        text: 'RED Coupon Crates in Bunker Alfa',
      },
      {
        type: 'paragraph',
        text: 'Raids! If one is lucky, they can open a chest completely filled with SWAT Armor during raids.',
      },
      {
        type: 'paragraph',
        text: 'It can also be crafted: cloth pieces: x15 Steel Plates: x2 Thick Fabric: x20',
      },
      {
        type: 'paragraph',
        text: 'Is it worth it to craft SWAT Body Armor? No. Currently Steel Plates are the highest tier loot and their main usage should be to build level 4 walls. However, you can use one of JCF\'s video talking about how to clear the bunker efficaciously to get more red tickets and open the Combat Gear crate to find more SWAT Body Armor.',
      },
      {
        type: 'paragraph',
        text: 'I would honestly save SWAT Armor only for the toughest of zones, i.e, Bunker Alfa hard mode and Northern Winter Zones. If you are running out of armor, crafting up Thick Jackets and Denim Jeans is the most effective way to clear the bunker as the cost for crafting armor after Tactical Clothes increases exponentially.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Shrinivas  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'SWAT Boots',
        id: true,
        idName: 'SWAT_Boots',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'SWAT Boots as of now are footwear that gives the highest speed when equipped and is craftable. It can also be obtained in the chest in exchange for 30 Combat Gear Coupons in Bunker Alpha\'s Terminal. Best way to obtain this is not to craft since it requires a rare steel plate, but to farm Combat Gear Coupons. To obtain combat gear coupons, clean all floors of Bunker Alpha. Frenzied Giants have a higher Combat Gear Coupon drop rate compared to Toxic Abominations and Floater Bloaters. Various lootable locations such as lockers in Bunker Alpha also contain these coupons. With hard mode enabled, killing the Blind One makes it drop 10 Combat Gear Coupons, identification tags and military notes. When you have collected enough coupons, exchange it in the terminal and hopefully obtain the item and many others more!',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'SWAT Helmet',
        id: true,
        idName: 'SWAT_Helmet',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'SWAT Helmet as of now is a headwear that gives the highest defense against hits and is craftable. It can also be obtained in the chest in exchange for 30 Combat Gear Coupons in Bunker Alpha\'s Terminal. Best way to obtain this is not to craft since it requires a rare steel plate, but to farm Combat Gear Coupons. To obtain combat gear coupons, clean all floors of Bunker Alpha. Frenzied Giants have a higher Combat Gear Coupon drop rate compared to Toxic Abominations and Floater Bloaters. Various lootable locations such as lockers in Bunker Alpha also contain these coupons. With hard mode enabled, killing the Blind One makes it drop 10 Combat Gear Coupons, identification tags and military notes. When you have collected enough coupons, exchange it in the terminal and hopefully obtain the item and many others more!',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'SWAT Trousers',
        id: true,
        idName: 'SWAT_Trousers',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'SWAT Trousers as of now are pants that gives the highest defense against hits and is craftable. It can also be obtained in the chest in exchange for 30 Combat Gear Coupons in Bunker Alpha\'s Terminal. Best way to obtain this is not to craft since it requires a rare steel plate, but to farm Combat Gear Coupons. To obtain combat gear coupons, clean all floors of Bunker Alpha. Frenzied Giants have a higher Combat Gear Coupon drop rate compared to Toxic Abominations and Floater Bloaters. Various lootable locations such as lockers in Bunker Alpha also contain these coupons. With hard mode enabled, killing the Blind One makes it drop 10 Combat Gear Coupons, identification tags and military notes. When you have collected enough coupons, exchange it in the terminal and hopefully obtain the item and many others more!',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Tactical Body Armor',
        id: true,
        idName: 'Tactical_Body_Armor',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Tactical Body Armor can be crafted using 10 Thick Fabric, 8 Leather and 4 Iron Plate.  Tactical Body Armor can also be found by various AI Survivors in the resource zones and can also be found in Bunker Alfa ticket crates.  It is not advised to craft tactical gear, unless required, as you can easily find 2-3 sets through Bunker Alfa ticket crates.  ',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Tactical Boots',
        id: true,
        idName: 'Tactical_Boots',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Tactical Boots can be crafted using 8 Thick Fabric, 7 Leather, 5 Rope and 2 Iron Plate.  Tactical Boots can also be found by various AI Survivors in the resource zones and can also be found in Bunker Alfa ticket crates.  It is not advised to craft tactical gear, unless required, as you can easily find 2-3 sets through Bunker Alfa ticket crates.  ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Tactical Cap',
        id: true,
        idName: 'Tactical_Cap',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Tactical Cap can be crafted using 9 Thick Fabric and 7 Leather.  Tactical Cap can also be found by various AI Survivors in the resource zones and can also be found in Bunker Alfa ticket crates.  It is not advised to craft tactical gear, unless required, as you can easily find 2-3 sets through Bunker Alfa ticket crates.  ',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Tactical Trousers',
        id: true,
        idName: 'Tactical_Trousers',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by opening coupon chests in bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Tactical Trousers can be crafted using 10 Thick Fabric, 7 Leather and 4 Iron Plate. Tactical Trousers can also be found by various AI Survivors in the resource zones and can also be found in Bunker Alfa ticket crates. It is not advised to craft tactical gear, unless required, as you can easily find 2-3 sets through Bunker Alfa ticket crates.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Tanning Rack',
        id: true,
        idName: 'Tanning_Rack',
      },
      {
        type: 'paragraph',
        text: 'The only way to get this is to craft it.',
      },
      {
        type: 'paragraph',
        text: 'Leather is an important item for clothing.Craft a tanning rack to make leather.Tanning rack is craftable item and crafting it is the best way to get it.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Nealxy  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Thick Fabric',
        id: true,
        idName: 'Thick_Fabric',
      },
      {
        type: 'paragraph',
        text: 'The best place to get this is by turning pieces of cloth into thick fabric.',
      },
      {
        type: 'paragraph',
        text: '1. Locations: Bunker, Air drop event, plane crash event , enemies’ bases ',
      },
      {
        type: 'paragraph',
        text: '(Raids), from other survivors ( A.I.) and rest stop event.',
      },
      {
        type: 'paragraph',
        text: '2. It can be crafted out pieces of cloth',
      },
      {
        type: 'paragraph',
        text: '3. Thick fabric can be easily obtained in the bunker, but the fastest way is to ',
      },
      {
        type: 'paragraph',
        text: 'craft them out of pieces of cloth, the sewing table. Pieces of cloth can be ',
      },
      {
        type: 'paragraph',
        text: 'found by killing zombies in the zones or they can be crafted in the sewing ',
      },
      {
        type: 'paragraph',
        text: 'table out of plant fiber.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Daniel  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Thick Jacket',
        id: true,
        idName: 'Thick_Jacket',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: '1. Locations: It can be found in all locations were other survivors ( I.A.) might spawn and in the bunker.',
      },
      {
        type: 'paragraph',
        text: '2. It can be crafted. You need thick fabric, rope and leather. ',
      },
      {
        type: 'paragraph',
        text: '3. Fastest way to obtain: open green coupon crates in the bunker. Green tickets are easy to obtain killing zombies in the bunker.',
      },
      {
        type: 'paragraph',
        text: 'Fastest way to craft: collect plant fiber in the zones and pieces of cloth and ropes by killing zombies. In addition kill deer to get animal rawhide. Out of the plant fiber craft additional ropes (with the tanning rack) and pieces of cloth (with the sewing table). Thick fabric can be obtained in the bunker, but the fastest way is to craft them out of pieces of cloth with the sewing table. At the end craft the leather out of the animal rawhide with the tanning rack.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Dantai  (Edited By:  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Torch',
        id: true,
        idName: 'Torch',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting it.',
      },
      {
        type: 'paragraph',
        text: 'The torch is a craftable low damage weapon. It cannot be found anywhere expect in the hands of an AI player in green zone. It has the same durability as the makeshift bat and almost the same DPS. If you are holding it in your hand it burns out after 400 seconds. It is not used for anything but you can light a fire in the night with it.',
      },
      {
        type: 'acknowledgement',
        text: 'Unique111  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Transistor',
        id: true,
        idName: 'Transistor',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to loot chests in any zone.',
      },
      {
        type: 'paragraph',
        text: 'Is a component used to complete most first phase building of vehicles and equipment. It can be found in chests of all farming locations, raiding other player’s bases, all floors or Bunker Alpha and disassembling items in the recycler. Best Strategy to obtain transistors is to loot all chests in the area while farming and when visiting the bunker, clear all floors and loot all chests/locker/etc to obtain the item.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Trash',
        id: true,
        idName: 'Trash',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to search it in Bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: '1- Located in the level 1 & 2 of Bunker Alpha. They are inside two trash cans, 1st trash-can is located next to orange ticket crate terminal on level 1 of bunker-Alpha and the 2nd trash-can is located on the 2nd level of bunker-Alpha\'s dining hall near the food counter(watch out for the FG next to it though). ',
      },
      {
        type: 'paragraph',
        text: '2- it cannot be crafted at this moment, also currently no use for them but maybe it can be used as fertilizer for the carrot growing bad or something like that in the future.',
      },
      {
        type: 'paragraph',
        text: '3- 1st can is accessible without killing any zombies in 1st floor but you have to kill 8 roaming zombies,1 toxic spitter, 3 floater bloaters (5 if you get noticed by the 2 in the hall where the door to dining hall is located) and one FG. easiest way to kill them will be to gun them all down :D but if you want to save the guns best way is to use a long range melee weapon(eg,sawblademace,skullcrusher,roadsign) to kill the 8 initial roaming zombies by hitting them once and taking a few steps forward so they don\'t have a chance to hit you. next in your way will be a single floater which you can kill by any melee weapon, next will be a single toxic spitter and you can kill it with sneak attack, then if you open the door to the dining hall the two floater bloaters will charge at you and you can kill them easily with a decent melee weapon(machete is one of the most effective and affordable weapons for new players raiding bunker) and lastly you can sneak 1 hit on FG with preferably saw blade mace(since it deals most sneak attack damage out of all craftable melee weapons) and finish him off with either bow, flare gun(lots of AI drop them in red zones),normal glock(my personal weapon of choice). extra note: if you use any guns, please do save the last bullet in case you want to recycle it in recycler for good loot or modify using the specialist for a brand new weapon.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'drthvdr8  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Trip Wire Trap',
        id: true,
        idName: 'Trip_Wire_Trap',
      },
      {
        type: 'paragraph',
        text: 'This can only be crafted.',
      },
      {
        type: 'paragraph',
        text: 'Trip wires increases the noise meter by 4 each time when tripped during raiding bases. This item is craftable and only 1 is allowed to be placed in the base. It requires oak planks which can be time consuming to obtain. It is not found in any locations other than raiding other player’s base or looting AI players carrying this item though rare. Best way to obtain this is to collect required items and craft it in the menu.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Truck Saw Blade',
        id: true,
        idName: 'Truck_Saw_Blade',
      },
      {
        type: 'paragraph',
        text: 'Truck Saw Blade can be found in Red and Yellow resource zone chests as well as Bunker Alfa ticket crates.  They are used in the Zombie Truck, which is not yet available in the game.  Truck Saw Blade can be recycled in the Recycler for a small chance to get a steel bar and metal scraps',
      },
      {
        type: 'acknowledgement',
        text: 'xhobbesx  (Edited By:  Viju)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Truck Wheel',
        id: true,
        idName: 'Truck_Wheel',
      },
      {
        type: 'paragraph',
        text: '1. The best way to get an truck wheel is to go to red zones, and sometimes yellow zones. The rock quarry and pine forest that are 37 ish energy away from the base work fine. The bunker can give you these in crates, but not as often.',
      },
      {
        type: 'paragraph',
        text: '2. As of right now the Truck wheel can only be found ',
      },
      {
        type: 'paragraph',
        text: '3. You can either use the healer’s buff of +5% chance to find a vehicle part of just go when you have time, but bring strong melee weapons and maybe a spare gun if possible. Creep around the zone being careful to not spook the scattered zombies, but watch out for toxic spitters. The main thing to do is check the chest and leave. No other way of getting the wheel without a chest. To be quick, if you don’t find one the first try go to the yellow zone and come back.',
      },
      {
        type: 'paragraph',
        text: '4. Other alternatives include the bunker and rare drops of survivors. Survivors have a low chance and rarely show up, and the bunker takes two days to reset along with the time farming for tickets and no garunteed wheel.Truck Wheel can be recycled in the Recycler for a small chance to get a steel bar and metal scraps.  ',
      },
      {
        type: 'acknowledgement',
        text: 'Tracy  (Edited By:  Viju)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Trunk',
        id: true,
        idName: 'Trunk',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by crafting.',
      },
      {
        type: 'paragraph',
        text: 'Uses: its used as a storage unit,it can store up to 35 items with a limit of max 40 trunks.',
      },
      {
        type: 'paragraph',
        text: 'Finding the trunk: it cant be found in any location in the game , it can be crafted only',
      },
      {
        type: 'paragraph',
        text: 'Crafting : the trunk  can be crafted using 15 oak planks, 5 steel bars, 10 nails, 5 iron plates , 5 duct tapes and 1 chest (needs 10 pine planks, 2 iron bars, 4 bolts and 1 small box( needs 3 pine logs and 5 plant fibers to craft) )',
      },
      {
        type: 'paragraph',
        text: 'Best strategy for finding all the needed resources for crafting the trunk is farming the red oak zone for all items except for steel bars ',
      },
      {
        type: 'paragraph',
        text: '1-oak planks : red oak zone gives 60 oak logs which can crafted in 20 oak planks',
      },
      {
        type: 'paragraph',
        text: '2- duct tape: the red oak zone giveson average 10 duct tapes ',
      },
      {
        type: 'paragraph',
        text: '3- nails 4- iron plates : YOU only need to collect 20 iron ore whuch can belater converted to 10 iron bars which in turn can be converted into 10 iron plates and then convert 5 of those to nails ',
      },
      {
        type: 'paragraph',
        text: '5- the chest : all resourses of the chest can be found on red oak zone ',
      },
      {
        type: 'paragraph',
        text: 'The steel bars which you can get by farming copper ore in the winter zones and then crafting steel bars or by doing bunker alpha floor 4 espically hard mode or by using the recycler,',
      },
      {
        type: 'paragraph',
        text: 'The best strategy on the long run is using the recycler ',
      },
      {
        type: 'paragraph',
        text: '(You can find the information you need in details about steel bar crafting under steel bar and the recycler)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Turret',
        id: true,
        idName: 'Turret',
      },
      {
        type: 'paragraph',
        text: 'It can only be built three times into three different levels.',
      },
      {
        type: 'paragraph',
        text: 'Turrets are used to protect your base from raiders. Maximum of four turrets can be placed in your home base. Items needed for building (lvl1) turrets are: 5 Weapon Parts 20 Turret Parts 1 Minigun 20 Iron Plates 10 Wrenches 20 Rubber Prats 40 Wires 1 Heat Sensor 5 Aluminum Bars 25 Bolts',
      },
      {
        type: 'paragraph',
        text: '(Note: level 1 turret deals 20 DMG)',
      },
      {
        type: 'paragraph',
        text: '(lvl2) 20 Weapon Parts 1 Electronic Circuits 40 Turret Parts 40 Wires 5 Steel Plates 10 Aluminum Bars',
      },
      {
        type: 'paragraph',
        text: '(Note: level 2 turret upgrade adds 10 DMG and 300 defense) (3lvl) 40 Weapon Parts 3 Heat Sensors 3 Electronic Circuits 50 Turret Parts 5 Steel Bars 40 Wires',
      },
      {
        type: 'paragraph',
        text: '(Note: level 3 turret upgrade adds 5 DMG 200 defense) So in total you will need 60 Weapon Prats 110 Turret Parts 120 Wires 4 Heat Sensors 10 Wrenches 20 Iron Plates 15 Aluminum Bars 4 Electronic Circuits 5 Steel Bars 5 Steel Plates 25 Bolts and 20 Rubber Parts. ',
      },
      {
        type: 'paragraph',
        text: 'A lot of items needed for building turrets are gathered in the bunker Alfa, so not only you need to get all the items listed above, you’re going to need to clear bunker Alfa around 20 times. And get 4 Electronic Circuits you are going to need a Minigun which is obtainable through dog breeding (Opening the weapon stash in front of bunker Alfa with a True Friend Skill dog which will take months of active playing and lots of food) or getting it in a Red Coupon Box while trying to get other Items. (I\'m focusing on items that are hard to get) There is a lot of Steel and Aluminum in Bunker Alfa. Weapon parts are the one of the hardest items to get currently you can only get them through the recycling system. And Turret parts are gathered killing Turrets in the bunker (M14/AK with sight attachment should be used to avoid turrets from attackking you). And you can\'t build a level 1 turret and upgrade it as you have more resources because they use up Gasoline. 4 Electronic Circuits are currently obtainable on Floppy Disc locations. If you want to do this efficiently check out JCF\'s videos on How to spawn 4 events and Bunker Tutorials. Turrets aren\'t worth it at the moment but if you have a abundance of item and guns and you like the challenge go for it. (Note these are the resources used up for 1 lvl 3 Turret).',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'NidalXXL  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'USB Drive',
        id: true,
        idName: 'USB_Drive',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to search them in yellow or red zone.',
      },
      {
        type: 'paragraph',
        text: '1. USB Drives often appear in yellow and red zones throughout the map. They are a rare loot from toxic abominations and toxic spitters, and could also appear in chests from the same zones.',
      },
      {
        type: 'paragraph',
        text: '2. It can’t be crafted, but recycling it gives you a chance of obtaining an electronic circuit.',
      },
      {
        type: 'paragraph',
        text: '3. If you’re looking for USB Drives, the best way to obtain them is to kill toxic abominations and toxic spitters in the red limestone zone, because in the red pine forest you have a higher chance of TBO being spawned, and the oak forests and the winter zones are very far away. Just circle the map by the outkirts, so the toxic spitters come one on one to attack you (this way they are easier to kill and you don’t run the risk of being spit by one of them while killing another) and when you’re finished killing them, go look for the remaining toxic abominations.',
      },
      {
        type: 'paragraph',
        text: '4. USB Drives and Cellphones both have a chance of getting you an electronic circuit at the recycler, so if you don’t want to run the risk of getting to a red zone, it is better to look for cellphones in yellow and green zones.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Hombre Peo  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'VSS Vintorez',
        id: true,
        idName: 'VSS_Vintorez',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to level up army specialist’s reputation level and get loot from floppy disc chests.',
      },
      {
        type: 'paragraph',
        text: 'The VSS Vintorez has a chance to be found in few places: a NPC Survivor Base given to you by the raiders, the location provided by the Floppy Disk, and certain AI in red resource zones. In addition to these places, you also have a chance of getting the VSS Vintorez by purchasing a Pack For Unlocking, found in the store. This ranged weapon has a crafting recipe of 14 Weapon Parts, 8 Titanium Bar, 5 Steel Bar, and 10 Ash Plank, but since Titanium Bar and Ash Plank isn\'t in the game yet, it cannot be crafted, yet. With the chances of finding an AI in a red resource zone with a VSS Vintorez seemingly decrease since update 1.8, the best way to get the VSS Vintorez is by getting the Floppy Disk. This item, when redeemed (in the room with the Specialist), provides a location with either a box or infected box, which has a very high chance of giving you a VSS Vintorez, on top of other great loot. You obtain the Floppy Disk by completing Hard Mode of Bunker Alfa, and turning in the experience items (Military Notebook, Identification Tags, Personal Effects) to the Specialist. Once you get enough experince points, the Specialist will give you a Floppy Disk (unless you\'ve completed level 3, 6, 9, 12, 15 when you get a weapon or ability to modify a weapon instead). This is the best strategy because spending money on a chance item usually just wastes money (as the drop rate is very low), and it\'s very rare to find a VSS Vintorez while raiding a NPC Survivor Base.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tim Cheek (060)  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Weapon Crate',
        id: true,
        idName: 'Weapon_Crate',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to meet the dealer.',
      },
      {
        type: 'paragraph',
        text: 'The weapon crate can be found at 2 different locations in game The chopper event or through trading with the dealer. It cannot be crafted and when opened with randomly give you a weapon for every 16 crates you open, on average you get 1 shotgun, The best way to get this item is through trading and the weapon it gives you will have 100% durability and its various weapons include a spiked devastator, machete, Katana, Skull crusher, saw blade mace, Glock 17, M16 and finally the Shotgun. You can get 1-2 weapon crates on average per day.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Stick78  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Weapon Parts',
        id: true,
        idName: 'Weapon_Parts',
      },
      {
        type: 'paragraph',
        text: 'The best and fastest way to get this is to do bunker as much as possible',
      },
      {
        type: 'paragraph',
        text: 'Weapon parts are uncommon components used to build and assemble and upgrade weapons and turrets. This item cannot be crafted but can be obtained by placing weapons in the Recycler and by redeeming the Ration, Survival Kit and Combat Chest as these surely contain weapon parts. Strategy to obtain this is to place guns in the Recycler. Another strategy to obtain Weapon Parts it to collect coupons and hsing them to redeem chests. Frenzied Giants have a higher chance of dropping Combat Gear Coupons compared to Toxic Abominations and Floater Bloaters but both have chances to drop Survival Kit Coupons. With Hard Mode or Security Protocol Activated, killing the Blind One makes it drop 10 Combat Gear Coupons, identification tags and military notes. With enough coupons, redeem them in Bunker Alpha’s Terminals and hopefully get the item. Ration coupons are very commonly obtained by killing Roaming Zombies and Fast Biters.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'White Paint',
        id: true,
        idName: 'White_Paint',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to loot floppy disc chest.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“Why not paint something white?”',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1- white Paint can be used to recolor Chests.',
      },
      {
        type: 'paragraph',
        text: '2- white Paint can be used to paint the Chopper using certain Patterns.',
      },
      {
        type: 'paragraph',
        text: '*kitty pattern: 20 white paint',
      },
      {
        type: 'paragraph',
        text: '*skulls pattern: 20 white paint',
      },
      {
        type: 'paragraph',
        text: '*Christmas pattern: 5 white paint',
      },
      {
        type: 'paragraph',
        text: 'you can find the white paint in floppy disc loot and raid bases only and cannot be crafted.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Wiring',
        id: true,
        idName: 'Wiring',
      },
      {
        type: 'paragraph',
        text: 'Wiring is easy to find and the best place to find it is find it is any green zone.',
      },
      {
        type: 'paragraph',
        text: 'It is needed for a few recipes, such as: the CB Radio and a turret. You can get wiring from a lot of locations: Bunker Alfa, green zones, yellow zones, red zones, oak zones, winter zones, raids and AI bases.',
      },
      {
        type: 'paragraph',
        text: 'Wiring is craftable, but it\'s not worth it to craft wiring, because you will need a copper bar for making a single wiring. ',
      },
      {
        type: 'paragraph',
        text: 'The best way of getting wiring is by farming the green zones over and over again, because the green zones has the weakest and least amount of enemy\'s, it\'s really safe because of the weak AI\'s and the green zones are the nearest locations.',
      },
      {
        type: 'paragraph',
        text: 'Why green zones are better for farming wiring then other zones is because: yellow and red zones are far more dangerous, because of the stronger zombies and AI\'s and it has a chance of the big one spawning. Oak zones are not good for farming wiring, because they are way further away from your base and has a lot of toxic spitters and abominations. Winter zones are also not as good as farming wiring in green zones, because the zombies there are way stronger and the locations are way too far away from your base. ',
      },
      {
        type: 'paragraph',
        text: 'Bunker Alfa is okay for farming wiring, but not as good as green zones, because of the small amount of wiring you get for every floor.',
      },
      {
        type: 'paragraph',
        text: 'Raids usually have a lot of wiring, but people usually aren\'t taking wiring from raids, because wiring are really easy to get and you can find and get way more important and rarer items from raids.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Zate  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Woodworking Bench',
        id: true,
        idName: 'Woodworking_Bench',
      },
      {
        type: 'paragraph',
        text: 'Best way to obtain a woodworking bench is to obtain the required materials to craft it from the crafting menu[10 pine logs and 5 iron ore].',
      },
      {
        type: 'paragraph',
        text: 'A simple workbench that converts wood logs to planks for base fortification and to craft advance gear and equipment. This item is craftable and can only be obtained from dead AI players carrying this item uncommon.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Work Boots',
        id: true,
        idName: 'Work_Boots',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to craft it.',
      },
      {
        type: 'paragraph',
        text: '1. Locations: It can be found in all locations were other survivors ( I.A.) might spawn and in the bunker.',
      },
      {
        type: 'paragraph',
        text: '2. It can be crafted. You need piece of cloth, rope and leather. ',
      },
      {
        type: 'paragraph',
        text: '3. Fastest way to obtain: open green coupon crates in the bunker. Green tickets are easy to obtain killing zombies in the bunker.',
      },
      {
        type: 'paragraph',
        text: 'Fastest way to craft: collect plant fiber in the zones and pieces of cloth and ropes by killing zombies. In addition kill deer to get animal rawhide. Out of the plant fiber craft additional ropes ( with the tanning rack) and pieces of cloth( with the sewing table). At the end craft the leather out of the animal rawhide with the tanning rack.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Dantai  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Workbench',
        id: true,
        idName: 'Workbench',
      },
      {
        type: 'paragraph',
        text: 'It can only be crafted.',
      },
      {
        type: 'paragraph',
        text: 'The Workbench is a workstation piece of furniture used to turn metal bars into plates (and plates into nails, where applicable). No more than two Workbenches may be placed at the player\'s home base, each constructed of 15 Pine Planks, 10 Iron Bars, and 4 Stone Bricks. ',
      },
      {
        type: 'paragraph',
        text: 'When placed in the Workbench, 1 Iron Bar becomes 1 Iron Plate in 20 minutes; 2 Aluminium Bars become 1 Aluminium Plate in 1 hour; 1 Iron Plate becomes 2 Nails in 4 minutes; and 1 Steel Bar becomes 1 Steel Plate in 1 hour and 30 minutes.',
      },
      {
        type: 'paragraph',
        text: 'On the Recycler, a Workbench can be recycled into Pine Plank, Scrap Metal, and Stone Brick in 10 minutes and 1 second at an appropriate level of Other recycling skill. ',
      },
      {
        type: 'paragraph',
        text: 'Like other furniture, Workbenches at AI/NPC and Mirrored Survivor Bases cannot be used but may be smashed to access possible contents during raids, at the expense of 8 points of noise.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Fallen_Caryatid  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Wrench',
        id: true,
        idName: 'Wrench',
      },
      {
        type: 'paragraph',
        text: 'It can only be found, and the best place for it is Bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'Locations',
      },
      {
        type: 'paragraph',
        text: '1) All of the zones',
      },
      {
        type: 'paragraph',
        text: '2) Bunker Alpha',
      },
      {
        type: 'paragraph',
        text: '3) Raiding',
      },
      {
        type: 'paragraph',
        text: '4) Floppy disk loot',
      },
      {
        type: 'paragraph',
        text: '5) Airdrop',
      },
      {
        type: 'paragraph',
        text: 'Can it be crafted: NO',
      },
      {
        type: 'paragraph',
        text: 'Uses : Gunsmith Bench (20), Electric Generator (5 + 10), Sector 7 Gateway Door (5), and Turret (10 each). ',
      },
      {
        type: 'paragraph',
        text: 'Recycle:Scrap metal and steel bar',
      },
      {
        type: 'paragraph',
        text: 'Bunker Alpha Strategy',
      },
      {
        type: 'paragraph',
        text: 'While running through bunker alpha I clear each room using machetes then after clearing I go through each box or locker in hopes of the chance of a wrench drop.',
      },
      {
        type: 'paragraph',
        text: 'Zone Farming Strategy',
      },
      {
        type: 'paragraph',
        text: 'When Farming i choose the yellow zones, i kill all the enemies by sneak attacking with a crowbar then i loot each chest in hopes for a wrench if i fail then i just farm wood, stone or anything else i need then leave the zone and reset the map by traveling to a different location',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Spike  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Yellow Paint',
        id: true,
        idName: 'Yellow_Paint',
      },
      {
        type: 'paragraph',
        text: 'Best way to get yellow paint is by clearing bunker alpha and opening the ticket crates and from floppy disk locations and it cannot be crafted.',
      },
      {
        type: 'paragraph',
        text: 'In-game description:',
      },
      {
        type: 'paragraph',
        text: '“Why not paint something yellow?”',
      },
      {
        type: 'paragraph',
        text: 'uses:',
      },
      {
        type: 'paragraph',
        text: '1- yellow Paint can be used to recolor Chests.',
      },
      {
        type: 'paragraph',
        text: '2- yellow Paint can be used to paint the Chopper using certain Patterns.',
      },
      {
        type: 'paragraph',
        text: '*fire pattern: 20 yellow paint',
      },
      {
        type: 'paragraph',
        text: '*Harvey pattern : 7 yellow paint',
      },
      {
        type: 'paragraph',
        text: '*leopard pattern: 10 yellow paint',
      },
      {
        type: 'paragraph',
        text: '*nuclear pattern: 7 yellow paint ',
      },
      {
        type: 'paragraph',
        text: 'you can find the yellow paint in the following locations:',
      },
      {
        type: 'paragraph',
        text: '1- bunker alpha: in the ticket crates and on the floors',
      },
      {
        type: 'paragraph',
        text: '2- in the chests in all green, yellow, red zones',
      },
      {
        type: 'paragraph',
        text: '3- airdrop events',
      },
      {
        type: 'paragraph',
        text: '4- rest stop events',
      },
      {
        type: 'paragraph',
        text: '5- floppy disk locations',
      },
      {
        type: 'paragraph',
        text: '6- from the shop',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Zip Gun',
        id: true,
        idName: 'Zip_Gun',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain this is to craft it. However, it is not recommended to craft unless necessary as it is better off to use other weapon since it costs a lot to craft this.',
      },
      {
        type: 'paragraph',
        text: 'Description',
      },
      {
        type: 'paragraph',
        text: 'The Zip Gun is a ranged weapon / firearm--the first gun made craftable in the game. With a damage of 18 and speed of 0.8',
      },
      {
        type: 'paragraph',
        text: 'It is rather slow compared to other weapons, but adequate against slower enemies like normal-mode Frenzied Giants in Bunker Alfa and larger enemies like Floater Bloaters and Toxic Abominations in resource zones, Bunker Alpha.It has 100 shots and it deals 18 damage in total is 1800 damage.',
      },
      {
        type: 'paragraph',
        text: 'The Zip Gun, so long as it has at least one shot of durability remaining, may also be scrapped at the Recycler for a chance to extract Scrap Metal, Aluminium Bar, and Steel Bar after an hour.',
      },
      {
        type: 'paragraph',
        text: 'The zip gun can be found in:',
      },
      {
        type: 'paragraph',
        text: '1- chests in green, yellow, red zones',
      },
      {
        type: 'paragraph',
        text: '2-bunker alpha',
      },
      {
        type: 'paragraph',
        text: '3- dead AI players',
      },
      {
        type: 'paragraph',
        text: '4- Rest Stop Chopper',
      },
      {
        type: 'paragraph',
        text: 'Crafting: Its craftable but too costly for its use so not recommended to craft.',
      },
      {
        type: 'paragraph',
        text: 'Recipe:',
      },
      {
        type: 'paragraph',
        text: '2 Steel Bars',
      },
      {
        type: 'paragraph',
        text: '4 Weapon Parts',
      },
      {
        type: 'paragraph',
        text: '5 Duct Tape',
      },
      {
        type: 'paragraph',
        text: '3 Bolts',
      },
      {
        type: 'paragraph',
        text: '1 Oak Plank',
      },
      {
        type: 'paragraph',
        text: 'Strategy: ',
      },
      {
        type: 'paragraph',
        text: 'Even though the zip gun is the slowest and have the least damage in the game of all ranged weapons, it is best used against frenzied gaints in normal mode in bunker alpha , i don\'t recommend crafting it but when found save it for bunker alpha',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      
      
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Iron Plate',
        id: true,
        idName: 'Iron_Plate',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is by processing the Iron Bar into Iron Plate.',
      },
      {
        type: 'paragraph',
        text: 'I recommend player to farm Iron Ore in either yellow or red rock zone as it will provide at least 45 or 75 iron bar respectively, which in turn will provide 45 or 75 iron plate.',
      },
      {
        type: 'paragraph',
        text: 'For player that is not capable of clearing yellow or red rock zone easily, green rock zone is a ok option but it is not as fast as doing yellow or red rock zone since it only provide enough resource for 15 iron plate, considering the smelting and processing of Iron Bar, it will take a while to make some stacks of it.',
      },
      {
        type: 'acknowledgement',
        text: 'Win Loke  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'MILKOR MGL',
        id: true,
        idName: 'MILKOR_MGL',
      },
      {
        type: 'paragraph',
        text: '1. The Milkor MGL can only be obtained from the bunker specialist upon reaching level 15 reputation.It can also appear as a rare drop in floppy crates/infected box once the player has reached level 15 reputation.',
      },
      {
        type: 'paragraph',
        text: 'The Milkor MGL can also be bought from the store occasionally during limited-time events',
      },
      {
        type: 'paragraph',
        text: '2.Currently, the Milkor MGL cannot be crafted',
      },
      {
        type: 'paragraph',
        text: '3.The best way to get the Milkor MGL is to start saving up floppy disk until he/she reaches level 15 reputation. That way, all floppy crates/infected box will have a chance to contain this weapon.',
      },
      {
        type: 'paragraph',
        text: 'Additionally, it is advised to take the strange berries from the healer prior to opening the box, as it can increase the chances of obtaining the weapon.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Boon kiat  (Edited By:  Locket)',
      },
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Shirt',
        id: true,
        idName: 'Reinforced_Shirt',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain Reinforced Shirt is to craft them as the resources are fairly easy to find.',
      },
      {
        type: 'paragraph',
        text: 'Reinforced Shirt can be crafted and can only be obtained by looting dead AI players equipped with the item. It is CANNOT be found in chests of any farming location, events and in Bunker Alpha. It is a type of body armor that adds resistance to zombie hits and bullets. Strategy to obtain this item is to craft it directly in the crafting menu after obtaining the needed items to make it. In crafting, it is recommended to use damaged Shirts as durability is restored to max after crafting the item regardless of durability of Shirt. Place and keep damaged Shirts in your base to easily craft Reinforced Shirt when needed. It is similar to the ones worn by raiders in Oak Forest events.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Reinforced Sneakers',
        id: true,
        idName: 'Reinforced_Sneakers',
      },
      {
        type: 'paragraph',
        text: 'The best way to obtain Reinforced Sneakers is to craft them as the resources are fairly easy to find.',
      },
      {
        type: 'paragraph',
        text: 'Reinforced Sneakers can be crafted and can only be obtained by looting dead AI players equipped with the item. It is CANNOT be found in chests of any farming location, events and in Bunker Alpha. It is a type of foot wear that increases character’s movement speed when equipped. Strategy to obtain this item is to craft it directly in the crafting menu after obtaining the needed items to make it. In crafting, it is recommended to use damaged Sneakers as durability is restored to max after crafting the item regardless of durability of Sneakers. Place and keep damaged Sneakers in your base to easily craft Reinforced Sneakers when needed. It is similar to the ones worn by raiders in Oak Forest Events',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jup-Jup  (Edited By:  Locket)',
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Warrior Armor',
        id: true,
        idName: 'Warrior_Armor',
      },
      {
        type: 'paragraph',
        text: 'That item can not be crafted or even find, because it is a special item from the event Chinеsе New year. ',
      },
      {
        type: 'paragraph',
        text: 'After this update you can not find it anywhere. Before you were able to find them in the two Mu Lan\'s chests ( update 1.7.3 ) and in the chest right next to the old Chinese man( 1.7.5).For Mu Lan: the first chest is for completing her tasks ( like the old Chinese man\'s chest) and the second one is for defeating her in a duel. To win, you had to kill 16 zombies before Mu Lan. It is cool to have this item like a souvenir from that event.It can be found in raid bases if got lucky.',
      },
      {
        type: 'acknowledgement',
        text: 'Stick78  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Warrior Boots',
        id: true,
        idName: 'Warrior_Boots',
      },
      {
        type: 'paragraph',
        text: 'That item can not be crafted or even find, because it is a special item from the event Chinеsе New year. ',
      },
      {
        type: 'paragraph',
        text: 'After this update you can not find it anywhere. Before you were able to find them in the two Mu Lan\'s chests ( update 1.7.3 ) and in the chest right next to the old Chinese man( 1.7.5).For Mu Lan: the first chest is for completing her tasks ( like the old Chinese man\'s chest) and the second one is for defeating her in a duel. To win, you had to kill 16 zombies before Mu Lan. It is cool to have this item like a souvenir from that event.It can be found in raid bases if got lucky.',
      },
      {
        type: 'acknowledgement',
        text: 'Stick78  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Warrior Greaves',
        id: true,
        idName: 'Warrior_Greaves',
      },
      {
        type: 'paragraph',
        text: 'That item can not be crafted or even find, because it is a special item from the event Chinеsе New year. ',
      },
      {
        type: 'paragraph',
        text: 'After this update you can not find it anywhere. Before you were able to find them in the two Mu Lan\'s chests ( update 1.7.3 ) and in the chest right next to the old Chinese man( 1.7.5).For Mu Lan: the first chest is for completing her tasks ( like the old Chinese man\'s chest) and the second one is for defeating her in a duel. To win, you had to kill 16 zombies before Mu Lan. It is cool to have this item like a souvenir from that event.It can be found in raid bases if got lucky.',
      },
      {
        type: 'acknowledgement',
        text: 'Stick78  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Warrior Helmet',
        id: true,
        idName: 'Warrior_Helmet',
      },
      {
        type: 'paragraph',
        text: 'That item can not be crafted or even find, because it is a special item from the event Chinеsе New year. ',
      },
      {
        type: 'paragraph',
        text: 'After this update you can not find it anywhere. Before you were able to find them in the two Mu Lan\'s chests ( update 1.7.3 ) and in the chest right next to the old Chinese man( 1.7.5).For Mu Lan: the first chest is for completing her tasks ( like the old Chinese man\'s chest) and the second one is for defeating her in a duel. To win, you had to kill 16 zombies before Mu Lan. It is cool to have this item like a souvenir from that event.It can be found in raid bases if got lucky.',
      },
      {
        type: 'acknowledgement',
        text: 'Stick78  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Recycler',
        id: true,
        idName: 'Recycler',
      },
      {
        type: 'paragraph',
        text: 'This can only be crafted.',
      },
      {
        type: 'paragraph',
        text: 'To get the recycler you at least need to',
      },
      {
        type: 'paragraph',
        text: '1:for aluminum no. (5) : craft some stone pickaxes and get inuf equipment and go-to the red Rock zone in the west of the map if you encounter the big one exit the area and go to yellow zone enter it and then exit it again and then go back to the red Rock zone when you are there the trick of filling your inventory won\'t work which is filling your inventory with stuff that cannot be obtained with auto-mode like cloth and put bauxite in their inventory and press auto then the character starts going to the iron which has a bigger chance of giving bauxite so instead try and find bauxite regularly and when you find one fill do the trick that is up 4 lines and your character will start collecting iron regularly but it won\'t take any space in your inventory but after collecting all iron in the zone you should have about 1 to 5 bauxite you should do this 4-7 times and if you are well equipped you shouldn\'t have any problem then go home and put 4 of bauxite in the smelting furnace with at least 15 coal ',
      },
      {
        type: 'paragraph',
        text: '2: bulb (1) : can be found in chests in any of the zones but best chance is in the red',
      },
      {
        type: 'paragraph',
        text: '3: oak planks (3) : if you don\'t have the chopper or the electric generator you can go to the red zones with iron axes and at find 1-3 oak trees do this 3-9 times but don\'t forget to go with good equipment or you will die then go home and put 9 oak in the wood working bench ',
      },
      {
        type: 'paragraph',
        text: '4:iron plates: (8) go to green Rock zone and mine iron (16) and go home and smelt the into bar then put all of the bars into the work bench and wait 2:40 hours ',
      },
      {
        type: 'paragraph',
        text: '5: bolts (20) and rubber parts (10) can be found in any of the zones best chance in the red ones',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'The Dark Lord  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Dog Crate',
        id: true,
        idName: 'Dog_Crate',
      },
      {
        type: 'paragraph',
        text: 'It can only be crafted, and the resources are fairly easy to find.',
      },
      {
        type: 'paragraph',
        text: 'In-game Description:',
      },
      {
        type: 'paragraph',
        text: '""Used for keeping and breeding dogs""',
      },
      {
        type: 'paragraph',
        text: 'The Dog Crate is where you raise your Puppies and breed your adult Dogs. It is also where you assign specific pets to either walk around your base or accompany you on your adventures.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '-it can\'t be found on any location, so you will have to craft it, the ingredients are fairly easy to obtain, mainly from green zone.',
      },
      {
        type: 'paragraph',
        text: 'Crafting:',
      },
      {
        type: 'paragraph',
        text: 'recipe:',
      },
      {
        type: 'paragraph',
        text: '20 Pine Logs',
      },
      {
        type: 'paragraph',
        text: '7 Duct Tape',
      },
      {
        type: 'paragraph',
        text: '15 Limestone',
      },
      {
        type: 'paragraph',
        text: '10 Scrap Metal',
      },
      {
        type: 'paragraph',
        text: 'finalizing:',
      },
      {
        type: 'paragraph',
        text: '5 Empty Cans',
      },
      {
        type: 'paragraph',
        text: '15 Pieces of Cloth',
      },
      {
        type: 'paragraph',
        text: '10 Bolts',
      },
      {
        type: 'paragraph',
        text: '20 Rope',
      },
      {
        type: 'paragraph',
        text: '15 Pine Planks',
      },
      {
        type: 'paragraph',
        text: '2 Small Boxes',
      },
      {
        type: 'paragraph',
        text: 'Dog Crate Phase 2',
      },
      {
        type: 'paragraph',
        text: 'Placement: Ground',
      },
      {
        type: 'paragraph',
        text: 'Max: 1',
      },
      {
        type: 'paragraph',
        text: 'Grid Size: 3×2 (non-rotatable)',
      },
      {
        type: 'paragraph',
        text: 'Functions',
      },
      {
        type: 'paragraph',
        text: 'There are three functional stations inside the Dog Crate that can be accessed.',
      },
      {
        type: 'paragraph',
        text: '1- Feeder',
      },
      {
        type: 'paragraph',
        text: 'Only accessible when you\'ve gotten your first puppy, here you supply food to help your dogs survive and grow.',
      },
      {
        type: 'paragraph',
        text: 'Accepted foods include:',
      },
      {
        type: 'paragraph',
        text: 'Raw Meat: Adds 2.4 hours divided by the number of Dogs',
      },
      {
        type: 'paragraph',
        text: 'Raw Turkey: Adds 12 hours divided by the number of Dogs',
      },
      {
        type: 'paragraph',
        text: 'Dry Food: Adds 24 hours divided by the number of Dogs (and a buff to Breeding for Rank increases)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '2-Kennel',
      },
      {
        type: 'paragraph',
        text: 'The Kennel Management menu lets you see each of your Puppies and Dogs (females with red collars; males with blue collars), as well as allowing you to assign three of them to the ""Walking on Base"" and one to the ""With You"" tasks.',
      },
      {
        type: 'paragraph',
        text: 'Only the buffs of the three Dogs ""Walking on Base"" (plus those of the one dog ""With You,"" if applicable) will be active at any given time. You may drag any adult Dog of your choice into these slots.',
      },
      {
        type: 'paragraph',
        text: '(Note: ""With You"" only accepts Dogs with the Rank IV True Friend trait.)',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '3-Breeding',
      },
      {
        type: 'paragraph',
        text: 'Only accessible when you\'ve gotten your first adult Dogs, here you will crossbreed your dogs to optimize their levels and traits.',
      },
      {
        type: 'paragraph',
        text: 'The male and female dogs you choose to breed must be of equal rank, and the puppy produced will be of equal or higher rank.',
      },
      {
        type: 'paragraph',
        text: 'Before choosing to ""Crossbreed,"" you have the option to ""Inherit traits"" to ensure the parent passes their specific traits to the offspring. When you breed a Puppy from a Dog with a rare color/markings, you have the option to keep that appearance for the Puppy.',
      },
      {
        type: 'paragraph',
        text: '(Note: When you breed Dogs, you gain 1 Puppy but lose both parents. ""After crossbreeding you\'ll get a puppy but its parents will run away."")',
      },
      {
        type: 'paragraph',
        text: 'strategy:',
      },
      {
        type: 'paragraph',
        text: 'When you breed a pair of Rank I dogs...100% chance their puppy will be a Rank II dog.',
      },
      {
        type: 'paragraph',
        text: 'When you breed a pair of Rank II dogs...60% chance their puppy will be a Rank III dog ([without Dry Food] buff).',
      },
      {
        type: 'paragraph',
        text: 'When you breed a pair of Rank III dogs...25 - 30% chance of getting a Rank IV dog.',
      },
      {
        type: 'paragraph',
        text: 'When you breed a pair of Rank IV dogs...5 - 10% chance you\'ll get a dog with the True Friend trait.',
      },
      {
        type: 'paragraph',
        text: 'This means on average you will need to breed 360 to 940 Rank I puppies to get one dog with the True Friend trait.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Heat Sensor',
        id: true,
        idName: 'Heat_Sensor',
      },
      {
        type: 'paragraph',
        text: 'Heat Sensor can only be found in Bunker Alpha.',
      },
      {
        type: 'paragraph',
        text: 'You can find it in Bunker Alpha lv 2, 3 and 4 by destroying any of the turrets, while heavy turrets have a higher chance of droping it',
      },
      {
        type: 'paragraph',
        text: 'Best Weapons to use are long ranged weapons such as M16 and AK-47 or a Glock17 with the collimator sight Modification',
      },
      {
        type: 'paragraph',
        text: 'You will need the Heat Sensor to finalize and upgrade your turrets',
      },
      {
        type: 'paragraph',
        text: 'It can not be crafted',
      },
      {
        type: 'acknowledgement',
        text: 'Insane4Life  (Edited By:  Huakawa,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Turret Parts',
        id: true,
        idName: 'Turret_Parts',
      },
      {
        type: 'paragraph',
        text: 'The best way to get this is to do bunker Alpha 4th floor',
      },
      {
        type: 'paragraph',
        text: 'Turret Parts can only be obtained from destroying turrets in bunker Alfa. They can drop a maximum of 5 turret parts each. They are used in the crafting and repair of the Turret which is a craftable item in which you can place at your home to defend from raiders and zombies. ',
      },
      {
        type: 'paragraph',
        text: 'There are 8 total turrets in bunker Alfa that you can obtain the turret parts from (16 if you count both normal and hard modes). It needs a long ranged gun to destroy turret.',
      },
      {
        type: 'paragraph',
        text: '1 on floor 2 at around the half way point',
      },
      {
        type: 'paragraph',
        text: '1 on floor 3 fairly close to the beginning',
      },
      {
        type: 'paragraph',
        text: '6 on floor 4 throughout the floor',
      },
      {
        type: 'acknowledgement',
        text: 'Jeff Brown  (Edited By:  Viju,  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Weapon Stand',
        id: true,
        idName: 'Weapon_Stand',
      },
      {
        type: 'paragraph',
        text: 'It is only craftable (see item database for items need to craft it).',
      },
      {
        type: 'paragraph',
        text: 'The Weapon Stand is an item in Last Day on Earth that can hold and display 4 weapons or tools. These can be oriented vertically or horizontally. The Weapon Stand can be lit up for 24 hours using batteries. It can only be placed on level 3 floors. It is a purely cosmetic item.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'David V  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Plastic',
        id: true,
        idName: 'Plastic',
      },
      {
        type: 'paragraph',
        text: 'Best way to get them: killing zombies in green, yellow and red zones. ',
      },
      {
        type: 'paragraph',
        text: 'Sometimes you can find them during raids, too. Cameras can only be found in raids or in the plane crash event!',
      },
      {
        type: 'paragraph',
        text: 'It can´t be crafted either, it can be only obtained from the recycler.',
      },
      {
        type: 'paragraph',
        text: 'Bunker cards, cameras and phones have highest chance to drop plastic when dismantled in the recycler.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Dantai  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Car Engine',
        id: true,
        idName: 'Car_Engine',
      },
      {
        type: 'paragraph',
        text: 'The only way to obtain Rusty Vehicle is to search it in resource zones as it can sometimes appear on the minimap as a loot container. ',
      },
      {
        type: 'paragraph',
        text: 'Once the Rusty Vehicle is opened, the player can carry the car Engine found inside to their Chopper (or maybe ATV, in the future) to be transported on the heavy baggage rack to their home base.( it can\'t be carried by hand to your base).',
      },
      {
        type: 'paragraph',
        text: 'Obtaining:',
      },
      {
        type: 'paragraph',
        text: 'The Rusty Vehicle with an engine inside is very rare. It may be more common in red zones than yellow, and more common in yellow zones than green, (some people report that the best way to find it is by going to red stone zone).',
      },
      {
        type: 'paragraph',
        text: 'Recycling',
      },
      {
        type: 'paragraph',
        text: 'The car Engine can be recycled with the Mechanics skill in the Recycler. Though they look the same, there are two different versions of the car Engine with two different, possible sets of outputs:',
      },
      {
        type: 'paragraph',
        text: '1: Aluminium Wire; Aluminium Bar; Engine Part',
      },
      {
        type: 'paragraph',
        text: '2: Aluminium Bar; Engine Part; Steel Plate',
      },
      {
        type: 'paragraph',
        text: 'Warning: Once placed on the Recycler, the car Engine cannot be removed until it is fully processed.( takes 90 mins).',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Since the car Engine cannot be removed from the Recycler once placed, it\'s best to be sure your Mechanics recycling skill level is high enough that you\'re not wasting the rare item\'s potential opportunity for an Engine Part and/or Steel Plate.',
      },
      {
        type: 'paragraph',
        text: 'You can just put on the ground on your base it will not disappear like the infected box.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Tareq Al-Amour  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Football Helmet',
        id: true,
        idName: 'Football_Helmet',
      },
      {
        type: 'paragraph',
        text: 'Football Helmet is an item which can be obtained only from shop at section. ',
      },
      {
        type: 'paragraph',
        text: '""EQIPMENT - PACK FOR UNLOCKING"". It gives 6 armor which is fairly high (comparable to tactical hat or SWAT helmet). Keep it in inbox and only take it out in emergency situation.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Jake  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Power Armor Suit',
        id: true,
        idName: 'Power_Armor_Suit',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained in sector 7.',
      },
      {
        type: 'paragraph',
        text: 'The only place to get the Power Armor Suit is the Sector 7 wall located in the eastern region of the map. It cannot be crafted by a player. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'To use the armor you need to first activate the terminal in the Sector 7. To do so you need the following materials; 30 iron plates, 20 aluminum plates, 50 wiring, 5 steel plates, 75 bolts, 5 wrenches, 50 transistors, 20 aluminum wires, 10 copper bars and 3 electronic circuits. (Note: The items needed to open the Sector 7 was decreased by half in a silent update right after the addition of the cocoons.) ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'When you finalise the terminal you gain access to Power Armor Suit which can be used to travel to infected locations behind the wall. There you can interact and talk to real players and complete missions. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'Before wearing the Power Armor Suit, you actually need to wear a different and unique suit which allows you to enter the room containing the Power Armor. While wearing these two you can not access the crafting menu and your inbox.',
      },
      {
        type: 'paragraph',
        text: 'With the addition of the engineering multitool in version 1.8.3 you can see the additions on your suit. For now everyone has 2 additions; a chip that prevents you from attacking players, and the engineering multitool. ',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: 'The best ways to get the items needed to get inside the Sector 7 are the following; for electronic circuits you can use the recycler, you can get it from floppy disc locations or through raiding. The other items can be gathered from the recycler, the bunker or some of the locations. You can see all the things that you can get from the recycler from the internet.',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'paragraph',
        text: '',
      },
      {
        type: 'acknowledgement',
        text: 'Omer Heken  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Multitool',
        id: true,
        idName: 'Multitool',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained in sector 7.',
      },
      {
        type: 'paragraph',
        text: 'The only way to get it is by opening the doors at the sector seven. If you wish to open the doors, best way to do it is by recycler. After you opened the doors at the sector, 7 you will see the power armor. Then, you will automatically have the multitool after equipping power armor.',
      },
      {
        type: 'acknowledgement',
        text: 'Crowolf  (Edited By:  Locket)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Control Chip',
        id: true,
        idName: 'Control_Chip',
      },
      {
        type: 'paragraph',
        text: 'This can only be obtained in sector 7.',
      },
      {
        type: 'paragraph',
        text: 'Control Chip',
      },
      {
        type: 'paragraph',
        text: 'The control chip is an unobtainable item located in the Power Armor in Sector 7',
      },
      {
        type: 'paragraph',
        text: 'It can\'t be crafted',
      },
      {
        type: 'paragraph',
        text: 'Although prevents players from attacking each other when using the Power Armor',
      },
      {
        type: 'paragraph',
        text: 'The only way to use the control chip is Sector 7 and the cluster of Anomalies (inside the power armor)',
      },
      {
        type: 'acknowledgement',
        text: 'ZD.  (Edited By:  Huakawa,  Locket)',
      },
    ],
  },
  {
    id: 8,
    title: 'Pets',
    contentItems:
    [
      {
        type: 'heading',
        headingType: 'title',
        text: 'Dogs (Pets)',
      },
      {
        type: 'paragraph',
        text: 'Currently dogs are the only pets you can get in the game. Dogs give you one passive buff for each level and you can equip up to four of them in your base. There are two main things you need to know about dogs.',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'How to Find and Breed Dogs',
      },
      {
        type: 'paragraph',
        text: 'The first thing you need to do is build a dog pin. It takes up a 3x4 space and you can\'t rotate it yet. You will then need to finish it by collecting other materials (see video at bottom).',
      },
      {
        type: 'paragraph',
        text: 'Second, after you build your dog pin, go to the green zone and farm. After about 30 seconds, a puppy will come up to you. This is your “free” puppy. Go over to him and pick him up. He will be added into your inventory. After this, you will occasionally be able to find additional puppies in the zones, but they are very rare.  The best places to find them are floppy disk locations and air drops, but even those have become much rarer than when dogs were first released. There also seems to be a puppy that comes to the pickup at your base right after the horde attacks. This is also rare, but your chances increase the closer you go to your base after the horde attacks.',
      },
      {
        type: 'paragraph',
        text: 'Third, when your dog pen is finished, make sure you add some food. Raw turkey is worth 12 hours of food and raw meat is worth 2.4 hours. This number is then divided by however many dogs you have in your pen. This means that if you have 10 dogs, you will need to kill 100 deer every day to keep them fed. Which is a lot. But your dogs will not die or leave when they are not fed. They just stop growing or giving you buffs.',
      },
      {
        type: 'paragraph',
        text: 'The fourth step is letting your puppies out of their boxes by selecting the puppy box and clicking “open.” At this point you’ll want to name your puppy.',
      },
      {
        type: 'paragraph',
        text: 'Fifth, wait for your puppy to become a dog. This takes 24 hours. Most dogs start at Rank 1, which means they are given one skill. Rank 2 dogs have 2 skills, and so on. ',
      },
      {
        type: 'paragraph',
        text: 'Side note about skills: there are nine different skills that a dog can have, but some of them can only be obtained when they are higher rank. Most of these skills are buffs ranging from one to five percent, which can provide huge modifications to your gameplay. If you want to know more about skills scroll to the article below this one. ',
      },
      {
        type: 'paragraph',
        text: 'Sixth step: begin breeding to acquire higher rank dogs. When you breed a male and female, which have to be the same rank, there is a chance that their puppy will be will be a higher rank. The new puppy will never be a lower rank than its parents. ',
      },
      {
        type: 'paragraph',
        text: 'But both of the dog parents will run away, leaving you to raise their dog child.',
      },
      {
        type: 'paragraph',
        text: 'Seriously, that\'s not a joke, you will lose those two dogs once you breed them.',
      },
      {
        type: 'paragraph',
        text: 'So for example, Let’s say you find ten Rank 1 dog\'s, five male and five female, if you breed all of them, you will lose your ten dogs and then have five new puppies. When those puppies grow up, I believe all of them will be Rank 2 dogs.',
      },
      {
        type: 'paragraph',
        text: 'These odds decrease as you breed dogs of higher rank. My guess is that breeding two Rank two dogs have around a 40% chance of breeding a Rank 3 dog, and breeding two Rank 3 dogs has around a 20% chance of breeding a Rank 4 dog.  These numbers can be increased by using a buff which increases the chance of getting a higher ranked puppy by an unknown percentage, but this item can only be bought in the shop. ',
      },
      {
        type: 'paragraph',
        text: 'Now, a word about equipping the dogs. When you select your dog crate, you will be able to see all of your dogs, how much longer each of your puppies have until they grow up, and the skills they have. You will also notice four slots. This is where you can equip specific dogs to perform tasks. These three slots are designated for dogs to guard your base.  These dogs will not attack zombies unless they have the skill “guard dog.” However, it is still worth it is to place dogs in the slots, as the only buffs that get activated are from the dogs in these four slots. ',
      },
      {
        type: 'paragraph',
        text: 'Only dogs with the skill “true friend” can be equipped into the fourth slot. The true friend skill is only available to Rank 4 dogs. The true friend skill is so rare it is almost impossible to get. You will notice that many players have a true friend and that is because they used the data reset trick which is very controversial. While I did use this trick to get my own true friend, I have since come to the conclusion that this trick ruins the game. Here is a video explaining how it works and why I no longer use or promote this trick.',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/tdPpn6KdM-0?start=6',
      },
      {
        type: 'paragraph',
        text: 'Lastly, if you are a player that is wanting to make a purchase to speed up the process of developing the use of dogs in your game, it is way more valuable to buy the highest rank dog in the shop. The data clear trick does not work for leveling up dogs so spending $50 for a rank 4 dog is going to be cheaper than buying 10 rank 3 dogs for $8 each or buying 120 rank 1 dogs. ',
      },
      {
        type: 'paragraph',
        text: 'Below is a video that gives visuals for this article.  ',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/ZAYDTJcunag?start=47',
      },
      {
        type: 'heading',
        headingType: 'heading',
        text: 'Everything about Dog Buffs',
      },
      {
        type: 'paragraph',
        text: 'There are nine skills that a dog can have and some of them are way better than others. ',
      },
      {
        type: 'paragraph',
        text: 'Let\'s go through the nine skills. ',
      },
      {
        type: 'paragraph',
        text: '<B>Companion Skill:</B> Equipping your dog with this skill gives your character a one to five percent bonus on how much experience you get. If your character is Level 99, this skill is worthless to you. What percentage of bonus you get on these dogs is based on luck.',
      },
      {
        type: 'paragraph',
        text: '<B>Careful Skill:</B> Equipping your dog with this skill gives your dog pen a one to five percent bonus in how fast your dogs grow. This is an incredible buff to have active when you have a lot of puppies',
      },
      {
        type: 'paragraph',
        text: '<B>Well-Stocked Skill:</B> Equipping your dog with this skill reduces how much food your dog pen consumes by one to five percent. This buff can also be incredibly helpful since, as I mentioned in the article above, the food intake of your dog pen can be extremely overwhelming. ',
      },
      {
        type: 'paragraph',
        text: '<B>Hunter Skill:</B> Equipping your dog with this skill gives your character a one to five percent increased chance to run into rare animals. If you look on the game, you’ll see this includes the fox, but I would argue that this also includes turkeys and finding more puppies. I will talk about this more later on.',
      },
      {
        type: 'paragraph',
        text: '<B>Bloodhound Skill:</B> Equipping your dog with this skill gives your character a one to five percent increased chance to find rare items. This is, of course, an amazing skill to aid in finding gas tanks and electronic circuits, but is not useful for getting higher ranked dogs. ',
      },
      {
        type: 'paragraph',
        text: '<B>Witty Skill:</B> Equipping your dog with this skill gives your dog pen a one to three percent bonus on getting higher ranked dogs when you are breeding. This is a key skill for the strategy I will be presenting in the next part of this article. ',
      },
      {
        type: 'paragraph',
        text: '<B>Leader Skill:</B> Equipping your dog with this skill gives your four equipped dogs one to three extra attack damage. I think this will be a very desirable skill when we have a lot of high ranked dogs, but when you are just starting out, it feels kind of useless.',
      },
      {
        type: 'paragraph',
        text: '<B>Guard Skill:</B> Equipping your dog with this skill enables them to attack the horde and zombies around the base. As mentioned in this article above, to make use of the skills you equip your dogs with, you have to place them in the slots. They will appear around your base, but will not attack unless equipped with the guard skill. ',
      },
      {
        type: 'paragraph',
        text: '<B>True Friend Skill:</B> And finally, a dog with the True Friend skill can be placed in the fourth slot, allowing you to have more active buffs; but more importantly, it is able to travel and fight with you. ',
      },
      {
        type: 'paragraph',
        text: 'The following test samples were gained by using 100s of test samples:',
      },
      {
        type: 'paragraph',
        text: 'At Rank 1, your dog can get one of these 4 skills. Even if you reroll your skills at a higher rank, your dog will always have one of these four skills in that lvl 1 slot. Here is a breakdown of what skills your dog will probably end up with in the lvl 1 slot: ',
      },
      {
        type: 'image',
        imageType: 'full',
        imageSrc: '/lvl-1-skill-chances.png',
      },
      {
        type: 'paragraph',
        text: 'At Rank 2, your dog can get one of these 4 skills in addition to it’s lvl 1 skill. Even if you reroll your skills at a higher rank, your dog will always have one of these four skills in that lvl 2 slot. Here is a breakdown of what skills your dog will probably end up with in the lvl 2 slot:',
      },
      {
        type: 'image',
        imageType: 'full',
        imageSrc: '/lvl-2-skill-chances.png',
      },
      {
        type: 'paragraph',
        text: 'At Rank 3, your dog can get one of these 5 skills in addition to it’s lvl 1 & 2 skills. Even if you reroll your skills at a higher rank, your dog will always have one of these five skills in that lvl 3 slot. Here is a breakdown of what skills your dog will probably end up with in the lvl 3 slot:',
      },
      {
        type: 'image',
        imageType: 'full',
        imageSrc: '/lvl-3-skill-chances.png',
      },
      {
        type: 'paragraph',
        text: 'At Rank 4, your dog can get one of these 4 skills in addition to it’s other skills. Here is a breakdown of what skills your dog will probably end up with in the lvl 4 slot:',
      },
      {
        type: 'image',
        imageType: 'full',
        imageSrc: '/lvl-4-skill-chances.png',
      },
      {
        type: 'paragraph',
        text: 'Here is JCF’s strategy on how to use some skills to get higher Rank Dogs faster:',
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/jSe7FhghYUk?start=19',
      },
      {
        type: 'paragraph',
        text: 'Contributors: Fuerza and Cícero Artifon',
      },
    ]
  },
]





 












 





