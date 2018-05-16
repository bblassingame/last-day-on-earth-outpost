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
        text: 'Currently, the best way to deal with the horde is to find the normal path they take when you are offline and build lvl 2 walls (level 3 would be more ideal, but difficult because they require 15 oak to build) staggered so that no more than 10 zombies hit each wall. This will kill all the zombies without losing any walls. Hopefully JCF can make a video explaining this strategy soon.'
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
        text: 'The rest stop event is currently available every 36 hours. You have to use a motorcycle to get to the event, but you can first travel to a closer location using energy to save on gas. There three types of rest stop events you can encounter. The first one has three guys guarding a motorcycle. If you go to the far northwest side of them and shoot the guy on that side who is holding a skull crusher, none of them will attack you. After that, it is best to try and kill the other two separately (you can always use the loading screen to reset the players). The other two are shown in this video. (note: the snorkel is now in the game and can only be found at the rest stop, but it is a very rare chance).',
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
        text: 'Stay tuned!  We will begin filling out this article with submissions from winners of the Kefir! giveaway...',
      },
    ],
  },  
]





 












 





