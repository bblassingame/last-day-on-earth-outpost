import React from 'react'
import { Route, Link } from 'react-router-dom'

import StrategyArticle from './strategy-article'

const StrategyContent = (props) => {
  return (
    <div className='strategy-content-container'>
      <h1 className='strategy-heading-title'>LDOE: Strategy</h1>
      <Route key={7} exact path='/strategy' render={() => renderArticleLinks(props.onArticleClick)} />
      <Route key={0} path='/strategy/BaseDesign' render={(routeProps) => <StrategyArticle articleData={strategyData[0]} {...routeProps} />} />
      <Route key={1} path='/strategy/BunkerAlpha' render={(routeProps) => <StrategyArticle articleData={strategyData[1]} {...routeProps} />} />
      <Route key={2} path='/strategy/Mulitplayer' render={(routeProps) => <StrategyArticle articleData={strategyData[2]} {...routeProps} />} />
      <Route key={3} path='/strategy/Updates' render={(routeProps) => <StrategyArticle articleData={strategyData[3]} {...routeProps} />} />
      <Route key={4} path='/strategy/Events' render={(routeProps) => <StrategyArticle articleData={strategyData[4]} {...routeProps} />} />
      <Route key={5} path='/strategy/AIBases' render={(routeProps) => <StrategyArticle articleData={strategyData[5]} {...routeProps} />} />
      <Route key={6} path='/strategy/TipsAndTricks' render={(routeProps) => <StrategyArticle articleData={strategyData[6]} {...routeProps} />} />
    </div>
  )
}

const renderArticleLinks = (onArticleClick) => {
  return (
    [
      <Link key={0} to='/strategy/BaseDesign' className='strategy-article-link' onClick={() => onArticleClick('BaseDesign')}>Base Design</Link>,
      <Link key={1} to='/strategy/BunkerAlpha' className='strategy-article-link' onClick={() => onArticleClick('BunkerAlpha')}>Bunker Alpha</Link>,
      <Link key={2} to='/strategy/Mulitplayer' className='strategy-article-link' onClick={() => onArticleClick('Mulitplayer')}>Mulitplayer</Link>,
      <Link key={3} to='/strategy/Updates' className='strategy-article-link' onClick={() => onArticleClick('Updates')}>Updates</Link>,
      <Link key={4} to='/strategy/Events' className='strategy-article-link' onClick={() => onArticleClick('Events')}>Events</Link>,
      <Link key={5} to='/strategy/AIBases' className='strategy-article-link' onClick={() => onArticleClick('AIBases')}>AI Bases</Link>,
      <Link key={6} to='/strategy/TipsAndTricks' className='strategy-article-link' onClick={() => onArticleClick('TipsAndTricks')}>Tips &amp; Tricks</Link>,
    ]
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
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'The doormat item allows you to choose your spawn point in your base, so make sure to place the doormat at the start of you workflow, by that I mean, where you enter your base to drop your farmed supplies.',
          },
          {
            text: 'I think the beginning of your workflow should start with your woodworking room because it\'s the most common resource you will need to get. Followed by stone, then furnaces, and then your sewing machines.',
          },
          {
            text: 'I suggest building the maximum amount of chests. The more chests you have the more you can separate things by type which is helpful for remembering where things are.',
          },
          {
            text: 'Put your furnaces near your workbench because they work well together.',
          },
          {
            text: 'Put your shower and water catcher together. I put four bottles in my rain catcher and everytime I visit , I drink two of them and then shower and then put the four empty bottles back in the rain catcher.',
          },
          {
            text: 'Put your tanning rack and meat drying rack together because when you have one of these resources, then you will probably have the other one as well.',
          },
          {
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
        text: 'Tip number one, hide everything. Information is power. The more they know about your base, the easier it will be for them to figure out what your strategy is. this this is why I use what I\'m calling the Great Wall of China strategy. This wall around my base is helpful against the zombie horde because it lets me regulate which walls I will have to repair, but that is only the third and least important reason I use this strategy. The first reason I built it is because when someone approaches my base, it is going to look like this. And then when they go to the effort of the destroying one of my walls, my base is going to look like this. I\'m forcing them to use C4 even just to get a peek inside.',
      },
      {
        type: 'paragraph',
        text: 'This brings us to Tip Number Two: make them spend more than you do. When you look at the traps that they\'re going to have for us to make, they are expensive. Having a minefield on the outside of your base will allow any Punk just wondering around to set off your traps. This will cost you a lot of resources replenishing your traps and that guy can come back and just get all the stuff, if he even had stuff. If you are mapping out your future bass, make sure your traps are reserved for only serious Invaders by making them have to spend resources like C4 to even get to your traps. If you do this, then you might be able to make your base gain resources for you. For example, I am hoping to have a line of landmines here with turrets dispersed among them. When a committed invader uses C4 to break through my inner wall, and tries to take out my turrets which I imagine he\'d be prepared for, if I can set it up to where he\'ll hit a land mine at the same time he getting shot by a turret, he will probably not be able to heal fast enough to avoid dying. This would leave his body in my base with turrets guarding it which means I have a greater chance of logging in in time to gather his equipment.',
      },
      {
        type: 'paragraph',
        text: 'Tip three: put yourself in their shoes. If you were your enemy, how would you outsmart yourself. This may seem basic, but a lot of people don\'t actually sit back and try to Think Through The Eyes of their enemy. I used this approach when I used to play Clash of Clans several years ago and it allowed me to get to the top even though I refuse to spend money like most of the other top players. I had level 7 walls when my competition had level 12 walls and often, I would still beat them, because of this mentality. I would sit back and look at my base and I would think “how would I attack this”. And then I make adjustments and then I would do it again and then I make more adjustments. I would also watch replays. I don\'t know if last day on Earth will offer replays, but you will be able to see where they busted through your walls. When you see a pattern, compensate for it.',
      },
      {
        type: 'paragraph',
        text: 'Lastly, put your most valuable stuff in the most inner rooms. I\'ve got my medical table, my woodworking, my stone and eventually my radio tower all in outer rooms because they use and produce the least valuable items. Meanwhile, I keep my food and armor and weapons in a place that they would have to break through four walls to get to them.',
      },
      {
        type: 'paragraph',
        text: 'There are two other things I don’t mention in my video that are important to keep in mind:',
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
    title: 'Bunker Alpha',
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
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Can I use only easily craftable weapons here and what is the cheapest one I can use in this situation?',
          },
          {
            text: 'Which enemies can I sneak up on and can I sneak up on them multiple times?',
          },
          {
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
        text: 'Hard Mode',
      },
      {
        type: 'paragraph',
        text: 'Hard mode is hard. I do not currently recommend doing hard mode because it requires a lot of resources, but doing hard mode is the only way to get the best items in the game. If you are ok with getting those items very slowly, then I recommend only killing the Blind One every time the bunker resets because you can actually gain resources killing the Blind One even if you use guns because the reward is so good. However, if you do not want to wait that long, then here are some tips for Hard Mode.',
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
        text: 'Beta Update 1.0',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Game release',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.1',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Daily gift available! Now you can start your every day in the post-apocalyptic world with additional water and food supplies.',
          },
          {
            text: 'New range of goods at the Dealer’s. Hurry up to get in touch with him and change your resources for top notch firearms.',
          },
          {
            text: 'New armor and weapon packs in the shop! Tear zombie hordes and other survivors into shreds!',
          },
          {
            text: 'In your language soon! Localization in many languages started.',
          },
          {
            text: 'Minor bugs fixed and game optimization improved',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2.1',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.2.2',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Bug fix and game optimization',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.3',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Bug with character moving fixed',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'New recipes! Recipes for cooking on Campfire and crafting on Tanning Rock added.',
          },
          {
            text: 'New items! By searching chests, bags and zombie pockets you can find some items never found before.',
          },
          {
            text: 'A variety of different changes added to the game process.',
          },
          {
            text: 'Minor bugs including connection ones fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.1',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Quick slot added. Keep the most important items handy!',
          },
          {
            text: 'Shop interface improved. Rewards from packs will now be displayed in separate slots.',
          },
          {
            text: 'Changes in the gaming process added.',
          },
          {
            text: 'Minor bugs fixed and game optimization improved.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.2',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Portuguese, Spanish and Russian localization added. More languages are coming soon.',
          },
          {
            text: 'More realism now! New parameter added - cleanliness.',
          },
          {
            text: 'New item added - shower. You can find it in the recipes menu.',
          },
          {
            text: 'Incorrect character textures display and app loading problems fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.2.1 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'No reported changes',
          },
          {
            text: '(Hidden change) Removed the chance to find engine parts in yellow and red zones',
          },
        ]
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/embed/Ld_0EgScS4E?start=19',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.3',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Push-notifications about travelling on the global map added.',
          },
          {
            text: 'All armor durability increased. (by experiment this was about 30% more)',
          },
          {
            text: 'Italian, German, French localizations added.',
          },
          {
            text: 'Changes added in some recipes for crafting weapons and other items.',
          },
          {
            text: 'Order of some objects’ recipes changed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.4',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'App loading problem occurred with some players fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.5',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Bravo bunker was restarted.',
          },
          {
            text: 'It also has more enemies now.',
          },
          {
            text: 'The chopper recipe replaced the exhaust for 4 basic backpacks.',
          },
          {
            text: 'Chopper repaint opportunity (10 options!) and 5 new colors added. Gasoline drop increased.',
          },
          {
            text: 'Now you can put on and take off weapons and armor with a double tap!',
          },
          {
            text: 'Now you can quickly switch weapons from Quick Slot.',
          },
          {
            text: 'Fixed the CB radio image on minimap',
          },
          {
            text: 'Now the torch loses durability even without use as a weapon.',
          },
          {
            text: 'Toxic Spitters’ spits now decrease your cleanliness, dodge better!',
          },
          {
            text: 'Joystick lagging issue solved.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'No reported changes',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.1 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Hidden Change) Fixed torch from staying lit on ground for long periods of time on dead AI players.',
          },
          {
            text: '(Hidden Change) First Aid Kit graphic was changed (from brown to green)',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.2 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Hidden Change) Fixed enemies at Bunker Bravo so they are all triggered together even after being reset',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.4.6.3 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'No reported changes',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
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
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'There’s also a little surprise waiting for you on the first floor: a huge unstoppable Floater Bloater which can kill with a single punch.',
          },
          {
            text: 'Bunker floors are now protected by an automatic turret. Moreover, you’ll get a chance to find a minigun and use it as intended.',
          },
          {
            text: 'We keep working on the performance and removed some items that are not used in the game anymore with this update. Note that now there is trash in the inventory and boxes instead of them.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.1',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Silent update).',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.2',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'In order to make your search for the code to bunker Alfa simpler, we have added one more way to get it. Keep your eyes open in the most dangerous locations and you’ll make it. Even if it is difficult, you are always welcome to our Official Facebook page. Other survivors will be happy to give you a clue on the desired combination.',
          },
          {
            text: 'The dealer got drastically changed. Now he swaps weapon crates with different content for your stuff. Hurry up to make a nice deal! Last time it was obviously too dirty.',
          },
          {
            text: 'Decreased level of dirtying done by Toxic Spitter’s spit.',
          },
          {
            text: 'Every update makes the game better so that you could enjoy every moment in the world of Last Day on Earth. With this version we fixed a couple of old bugs and enhanced the performance.',
          },
          {
            text: '(Hidden Change) AK drop rate increased from 25% to 100% in weapon locker.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.3',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'It seemed strange to us that you neighbour’s simplest walls could be broken only with C-4 and we decided to fix it. Now everything you need is a sharp hatchet, some time and a piece of impudence. And then, who knows what treasures there are inside.',
          },
          {
            text: 'We have drastically changed the shop and increased its range of goods. For your comfort the goods have been sorted out into categories so that everyone could find what they really need. Nice discounts and different offers will surprise even the pickiest buyers.',
          },
          {
            text: 'Overall game performance improved!',
          },
          {
            text: '(Hidden Change) Minigun drop increased to 33%. Chopper fork drop chances introduced.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.4',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'It seems that the generator has enough power to get down to the second floor of the alfa bunker, but there are even more dangers and some unpleasant surprises waiting for you inside.',
          },
          {
            text: 'The chances to get chopper parts in final boxes were increased. Time to start engines!',
          },
          {
            text: 'There is a new weapon in the game - Zip gun. Easily assembled, shoots fine, can be a huge threat in experienced survivors’ hands.',
          },
          {
            text: 'More convenient weapon usage! An outworn item automatically gets changed for a new one from quick slot.',
          },
          {
            text: 'In order to excite the most sophisticated weapon fans we have added some modifications to the game: extended magazine, silencer, collimator and laser sights. Look for the samples in bunkers.',
          },
          {
            text: 'We have added a new resource - aluminium. It will be used when building weapons and some constructions. Pay attention to new recipes in melting furnace and workbench. Now you can craft Gunsmith Bench. Use it to make firearm parts.',
          },
          {
            text: '(Hidden Change) Engine parts drop removed from Airdrops. Engine part drop rate increased to 33% in the bunker.',
          },
          {
            text: '(Hidden Change) Guns drop rates from the bunker randomized and armor drop rate drastically decreased.',
          },
          {
            text: '(Hidden Change) Changed where weapons no longer do damage on breaking hit.',
          },
          {
            text: '(Hidden Change) Frenzied Giant\'s hitrange increased by 50%.',
          },
          {
            text: '(Hidden Change) Chopper fork drop rate increased by 5%',
          },
          {
            text: '(Hidden Change) Glitch of 3x hit on every crouch hit fixed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.5',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'We made it simpler to complete bunker Alfa. To open terminals you don’t  need resources anymore. One needs them only to fix the generator.',
          },
          {
            text: 'Turret’s strength drastically decreased while gas mask strength increased by 50%.',
          },
          {
            text: 'Getting bunker code is much simpler now. A soldier corpse used to only visit red locations and now you can meet him in less dangerous places.',
          },
          {
            text: 'In iron deposits there will be a new kind of ore, Bauxite, dropped with certain probability. It can be smelted into Aluminium Bars. Look for it carefully in the most dangerous game locations!',
          },
          {
            text: 'There are iron tools in the game now. They are firmer than stone ones and they are a great reason to visit neighbours once more.',
          },
          {
            text: 'We added a new type of fuel for your machines - Charcoal. You can get it using Campfire, burning Wood or Planks in it.',
          },
          {
            text: 'We keep on working in the technical side of Last Day on Earth and with this update we tried to improve the performance as much as possible. Our efforts lead to the fact that iPhone 5 users can now get down to bunker Alfa without any problems and the game will drastically speed up for other users.',
          },
          {
            text: '(Hidden Change) Gas tank drop rate increased again.',
          },
          {
            text: '(Hidden Change) Fixed the breaking hit no damage glitch.',
          },
          {
            text: '(Hidden Change) Duct tape drop rate decreased in green and yellow zones.',
          },
          {
            text: '(Hidden Change) Red zone duct tape drop rate increased.',
          },
          {
            text: '(Hidden Change) Armor drop rate increase in bunker lockers and end of bunker crates (Floor 2).',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.6',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'We have drastically changed bunker Alfa! Welcome to a new floor - Lobby.',
          },
          {
            text: 'Lobby is available to everyone no matter how powerful the device is! However, lower floors are still open to those whose devices comply with the recommended system requirements.',
          },
          {
            text: 'At killed bunker inhabitants, in boxes and ‘red’ locations you can find special Coupons. Use lobby terminal to change them in order to get the best items in the game! ',
          },
          {
            text: '24 Hours for mopping up the bunker weren’t enough? We have increased the code time and now the bunker will be available for passing in 3 days.',
          },
          {
            text: 'You don’t need resources anymore to fix the generator between the floors. By calling the elevator you can instantly go to any of the available floors. ',
          },
          {
            text: 'Tired of too many zombies in bunker halls? Zombies have scattered in the rooms so now it\'s much easier to pass bunker floors.',
          },
          {
            text: 'Bunker reset.',
          },
          {
            text: 'Minigun: We keep on working on Last Day on Earth being realistic and today Minigun got some changes. Now it will spin up before shooting, get warm and inflict more damage!',
          },
          {
            text: '(Hidden Change) Zombie horde wall destruction massively increased.',
          },
          {
            text: '(Hidden Change) Horde can no longer destroy level 3 walls.',
          },
          {
            text: '(Hidden Change) M16 durability decreased by 30%.',
          },
          {
            text: '(Hidden Change) Minigun durability increased by 70%.',
          },
          {
            text: '(Hidden Change) Minigun\'s damage increased by 22%.',
          },
          {
            text: '(Hidden Change) Added 1 second delay before minigun starts firing.',
          },
          {
            text: '(Hidden Change) Bauxite farming auto trick (Only mining the ores with bauxite) was patched.',
          },
          {
            text: '(Hidden Change) Bauxite amount drop dec. By 30%.',
          },
          {
            text: '(Hidden Change) Auto can no longer be cancelled in the middle of a tree cutting or ore mining.',
          },
          {
            text: '(Hidden Change) Duct tape amount req. To make Iron Hatchet increased.',
          },
          {
            text: '(Hidden Change) Top left AI base reset.',
          },
          {
            text: '(Hidden Change) The same AI base\'s motorcycle removed.',
          },
        ]
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.7 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Hidden Change) Amount of fast biters in green zones increased.',
          },
          {
            text: '(Hidden Change) Amount of toxic spitters increased in yellow zones.',
          },
          {
            text: '(Hidden Change) AI players show up more often in yellow and red zones.',
          },
          {
            text: '(Hidden Change) No longer need a code for bunker alfa. ',
          },
          {
            text: '(Hidden Change) Horde no longer spawns based on the welcome mat.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.8',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'There will be events especially for Chopper appearing on the map from time to time. Hurry up to start your motorcycle to get access to new discoveries and trophies!',
          },
          {
            text: 'We have increased the chance of Chopper parts drop in lobby of Bunker Alfa to help those who haven’t assembled one yet. For example, tank drops twice as often now!',
          },
          {
            text: 'We added Bow to the game as you wanted! It comes with special shooting mechanics. The stronger you knock the bowstring, the more damage it does!',
          },
          {
            text: 'We’ve added emotions to a character. To choose one, tap and hold on your character or use an IOS force touch feature.',
          },
          {
            text: 'ReplayKit support has been added for IOS players which allows to record and stream your adventures. Show the world you play Last Day on Earth!',
          },
          {
            text: '(Hidden Change) Charcoal and Rawhide icon changed.',
          },
          {
            text: '(Hidden Change) Glitch box spot fixed on 3rd floor.',
          },
          {
            text: '(Hidden Change) New glitch boxes made up by mistake.',
          },
          {
            text: '(Hidden Change) Deer amount increased in green and yellow zones by 50%.',
          },
          {
            text: '(Hidden Change) Wolves amount inc. By 100%.',
          },
          {
            text: '(Hidden Change) Timer added in the mailbox for daily rewards (Canned beans and water).',
          },
          {
            text: '(Hidden Change) Several enemies moved closer together in bunker alfa.',
          },
          {
            text: '(Hidden Change) More red tickets in red zones.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.5.9',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Fixed exploits in lower levels of the bunker Alfa.',
          },
          {
            text: '(Hidden Change) All the glitch boxes created in 1.6.8 fixed.',
          },
          {
            text: '(Hidden Change) Reduced amount of experience gained from normal farming zones from 10 to 3.',
          },
          {
            text: '(Hidden Change) Durability on guns of AI at rest stop events significantly decreased. ',
          },
          {
            text: '(Hidden Change) Rest stop event trigger method changed.',
          },
          {
            text: '(Hidden Change) Hunger and thirst level dec. Every 9s now, means 33% faster.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'We made access to northern locations simple. Reach watchtower to unlock them. ',
          },
          {
            text: 'Warm clothes and campfire will help you not to freeze during the trip.',
          },
          {
            text: 'Even cold couldn’t stop the virus from spreading. New enemies that have already adapted to the weather conditions are waiting for you.',
          },
          {
            text: 'If you track and catch a fox, you can use its fur.',
          },
          {
            text: 'In new locations there will be resources that can be obtained with iron tools.',
          },
          {
            text: 'Pay attention to the changes in the recipes of Generator, Storage and other items.',
          },
          {
            text: 'We added metal walls and changed the required amount of resources for building other walls.',
          },
          {
            text: 'When Trip Wire Trap gets activated, you will receive an attack notification on your device.',
          },
          {
            text: 'We changed the number of slots in chests and the inventory size. Now it will be much easier to put everything in order.',
          },
          {
            text: 'Not all game variables are decided once and forever. Today we have changed the time of access in bunker again (Now you will have two days), so that you could change coupons and get rewards more often.',
          },
          {
            text: '(Hidden Change) Backpack storage space decreased from 8 to 5.',
          },
          {
            text: '(Hidden Change) Inventory slots went from 8 to 10. (Overall -1)',
          },
          {
            text: '(Hidden Change) Various recipes were added mostly including iron and steel plates.',
          },
          {
            text: '(Hidden Change) Weapons with 40-60 % durability added in bunker chests/lockers.',
          },
          {
            text: '(Hidden Change) Bunker alfa reset timer changed to 2 days.',
          },
          {
            text: '(Hidden Change) Energy system changed resulting in less energy used for longer distances.',
          },
          {
            text: '(Hidden Change) Recipes of more than 15 craftable items changed. Biggest change being Swat Armor req. Steel plates to make, and gunsmith bench also requires steel plates instead of aluminium wires. Recipes changed: Zip gun, Glock 17, Acid bath, Gunsmith bench, Floor lamp, Medical table, Electric generator, Trunk, Cosy couch, Tactical gear, Swat gear, Bed, Iron Hatchet & Iron pickaxe, Radio tower.',
          },
          {
            text: '(Hidden Change) Herd of deer added in one of the rest stop events.',
          },
          {
            text: '(Hidden Change) Map reshuffled to adjust winter and oak zones.',
          },
          {
            text: '(Hidden Change) Icon of charcoal changed.',
          },
          {
            text: '(Hidden Change) Few Oak trees and foxes added in normal red zones.',
          },
          {
            text: '(Hidden Change) Chopper storage slots increased from 3 to 4.',
          },
          {
            text: '(Hidden Change) Bunker Alfa requires code for entry again.',
          },
          {
            text: '(Hidden Change) Decreased chance of red ticket from Frenzied giants.',
          },
          {
            text: '(Hidden Change) Increased chance of red tickets from chests/lockers.',
          },
          {
            text: '(Hidden Change) Damage output of shovel and spiked devastator dec. By 1 means they no longer one shot fast biters in sneak attacks.',
          },
          {
            text: '(Hidden Change) Strong alcohol added which reduces coldness by 80%.',
          },
          {
            text: '(Hidden Change) Armor redistributed from chest pieces to boots.',
          },
          {
            text: '(Hidden Change) Dealer now keeps attacking you even if you leave the location and come back (After attacking him of course)',
          },
          {
            text: '(Hidden Change) Engine parts added back to Aidboxes/Air drops.',
          },
          {
            text: '(Hidden Change) Glitches and lags such as fuel will keep burning infinitely after item smelting is finished, and items could be duplicated in some way.',
          },
          {
            text: '(Hidden Change) Minor tweaks to game graphics.',
          },
          {
            text: '(Hidden Change) Graphics for pickup truck improved.',
          },
          {
            text: '(Hidden Change) Lvl 3 walls cost 15 oak planks now.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.1 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.2',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '5X increased chance of tank drop in bunker boxes and 5X - in ‘engineer’ packs!',
          },
          {
            text: 'Northern locations aren’t for whimps, that’s why we decreased the ‘Rare weapon’ cost by 50%.',
          },
          {
            text: 'Fixed all found bugs.',
          },
          {
            text: 'Increased the overall game performance.',
          },
          {
            text: '(Hidden Change) Art image changed for bunker Alfa.',
          },
          {
            text: '(Hidden Change) Chopper spawn point changed to bottom now, always.',
          },
          {
            text: '(Hidden Change) Glitch of motorcycle disappearing when exiting bunker alfa fixed.',
          },
          {
            text: '(Hidden Change) Weapon glitch which allowed massive dps fixed (Stutter step and animation skip specifically for the shotgun)',
          },
          {
            text: '(Confirmed Change) The research team confirmed that the gas tank drop rate increased by 400% (5x).',
          },
          {
            text: '(Hidden Change) Increased starvation damage from 2 to 4.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.2.1',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Hidden Change) Icons changed for S.W.A.T. gear',
          },
          {
            text: '(Hidden Change) Icons changed for fur gear',
          },
          {
            text: '(Hidden Change) Icon changed for military backpack',
          },
          {
            text: '(Hidden Change) Fixed motorcycle spawn point to random again',
          },
          {
            text: '(Hidden Change) Significantly reduced the amount of red tickets you can get from winter zones',
          },
          {
            text: '(Hidden Change) Fixed two glitch spots on the 3rd floor.',
          },
          {
            text: '(Hidden Change) These changes caused extra lag',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.4',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.3 (Skipped)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Sea always washes interesting things ashore. In the new event on the map you will find a wrecked ship. Talk with the old captain, maybe he has something to offer.',
          },
          {
            text: 'Whatever happens in the world, smugglers will always find something to make a good hand of. Soon they’ll remind about themselves and they might need some help this time.',
          },
          {
            text: 'At numerous requests, we increased chances of engine parts and wrench drop in aid boxes for some time.',
          },
          {
            text: 'We added two new protection packs into the blueprint list. The first pack: shirt, trousers and sneakers version with leather parts. And the second one: beanie, jacket, jeans and working boots with iron plates. Hurry up to craft!',
          },
          {
            text: '(Hidden Change) Healer and ads are back for everyone who spends money on the game (Previously it would disappear).',
          },
          {
            text: '(Hidden Change) Dead soldier w/bunker code gives 2 sets of military armor.',
          },
          {
            text: '(Hidden Change) Visual changes to tier 1 and tier 2 gear.',
          },
          {
            text: '(Hidden Change) 6 extra crafting points for everyone.',
          },
          {
            text: '(Hidden Change) Offline notice added.',
          },
          {
            text: '(Hidden Change) Bug where if use auto while fighting an AI, character runs to collect resources on ground (doesn\'t work everytime).',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.5',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'With all dark soul we congratulate you on Halloween and we have prepared for the holiday:',
          },
          {
            text: 'Now you can grown pumpkin in garden beds and cook delicious soup!',
          },
          {
            text: 'There will be special objects everywhere: zombies’ brain, teeth, eyes that one will be able to change for holiday trophies: a pumpkin helmet, a zombie collar and a pattern for Chopper.',
          },
          {
            text: 'On locations you will be able to find a cemetery plus something interesting in tombs.',
          },
          {
            text: 'During the holiday healer will visit you twice a day.',
          },
          {
            text: '(Hidden Change) Offline notice removed',
          },
          {
            text: '(Hidden Change) Carrots changed to changed to pumpkins.',
          },
          {
            text: '(Hidden Change) New items for halloween event (eyes, brain, teeth)',
          },
          {
            text: '(Hidden Change) Dead soldier dropping military gear fixed.',
          },
          {
            text: '(Hidden Change) No longer can use emotions while holding generator.',
          },
          {
            text: '(Hidden Change) No longer able to activate surrender animation while walking',
          },
          {
            text: '(Hidden Change) Healer shows up twice a day, on a schedule.',
          },
          {
            text: '(Hidden Change) Shipwreck changed to only 1 item every time instead of 3. (People who bought additional crates would still get 3 free boxes every time)',
          },
          {
            text: '(Hidden Change) Smuggler\'s camp revamped completely.',
          },
          {
            text: '(Hidden Change) Unconfirmed glitch where zombie horde destroys level 3 walls.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.6',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'If you have any questions on the game, now it\'s easier to contact our technical support team. Look for the proper button in the game settings!',
          },
          {
            text: 'The holidays is over; so some items disappointed into thin air while others will stay with you for some more time.',
          },
          {
            text: 'As always, fixed bugs and optimized the game.',
          },
          {
            text: '(Hidden Change) Franky removed from dealer.',
          },
          {
            text: '(Hidden Change) Zombie parts turned to trash.',
          },
          {
            text: '(Hidden Change) Graphics messed up where it shows white square as thumbnail for seasonal items.',
          },
          {
            text: '(Hidden Change) Tier 2 gear visuals changed again.',
          },
          {
            text: '(Hidden Change) Size of auto and crouch button increased.',
          },
          {
            text: '(Hidden Change) Glitch where we you can get 3x damage on deer if crouched and hit even if they spot you.',
          },
          {
            text: '(Hidden Change) support button added to settings.',
          },
          {
            text: '(Hidden Change) Settings UI revamped.',
          },
          {
            text: '(Hidden Change) Confirmation box added for account disconnect.',
          },
          {
            text: '(Hidden Change) IOS version added save as for recorded videos and stream button in settings.',
          },
          {
            text: '(Hidden Change) Armor shuffled from pants to shoes in addition to previous armor addition to shoes.',
          },
          {
            text: '',
          },
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.7',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'We updated the event with a wrecked ship and now you can get a cargo part if you manage to handle this.',
          },
          {
            text: '(Hidden Change) Graphics bug of halloween items fixed.',
          },
          {
            text: '(Hidden Change) Loading screen picture is bigger now.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.8',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '5X increased chance of tank drops in bunker’s lobby boxes!',
          },
          {
            text: 'Multiple performance enhancements.',
          },
          {
            text: '(Hidden Change) Gas tank drop rate inc by 5x.',
          },
          {
            text: '(Hidden Change) Layout of shop changed.',
          },
          {
            text: '(Hidden Change) Art of tactical and swat gear changed.',
          },
          {
            text: '(Hidden Change) Bunker Alfa access cards added in airdrops.',
          },
          {
            text: '(Hidden Change) Deer acts more natural now.',
          },
          {
            text: '(Hidden Change)  No longer able to sneak deer from front.',
          },
          {
            text: '(Hidden Change) Healer changed, no longer cycles based on updates. Offers change every week or 2 (Awaiting confirmation).',
          },
          {
            text: '(Hidden Change) Shipwreck can be used to spawn healer 3 to 4 times a day.',
          },
          {
            text: '(Hidden Change) Healer now leaves if you exit the map twice.',
          },
          {
            text: '(Hidden Change) Guns looks shinier in inventory and in hand.',
          },
          {
            text: '(Hidden Change) Improvements to data sync system.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.9',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Save an army specialist and get access to a new mode with special enemies.',
          },
          {
            text: 'Earn a reputation among the army and you’ll be able to get rare items and even modify your weapon!',
          },
          {
            text: 'Fight a zombie type - The Blind One and get trophies for killing it.',
          },
          {
            text: 'Welcome new weapons: SCAR, Dual Berettas and Multi-Shot grenade launcher, they will make your trip to the bunker a bit more comfortable. Also clean up in the new Alfa Shower room',
          },
          {
            text: '(Hidden Change) Easy mode sprinter FGs now have same speed as others.',
          },
          {
            text: '(Hidden Change) No longer able to sneak on enemies in lobby of bunker.',
          },
          {
            text: '(Hidden Change) Patrol zombies no longer move in Bunker Alfa.',
          },
          {
            text: '(Hidden Change) Design changes to shop.',
          },
          {
            text: '(Hidden Change) Lightning added FG room in floor 2 near the terminal.',
          },
          {
            text: '(Hidden Change) Graphical Changes the locker room in Lobby.',
          },
          {
            text: '(Hidden Change) VSS with full durability now accessible via floppy disks.',
          },
          {
            text: '(Hidden Change) White paint added.',
          },
          {
            text: '(Hidden Change) Electronic circuit reintroduced.',
          },
          {
            text: '(Hidden Change) Acid bath finishable.',
          },
          {
            text: '(Hidden Change)Infected crate added in floppy disk coordinates.',
          },
          {
            text: '(Hidden Change) Shipwreck removed.',
          },
          {
            text: '(Hidden Change) Leopard chopper pattern obtainable (Floppy disks).',
          },
          {
            text: '(Hidden Change) Other patterns drop rate inc. In red crates.',
          },
          {
            text: '(Hidden Change) Dual berettas, FN Scar & Grenade launcher added. Obtainable from specialist at bunker.',
          },
          {
            text: '(Hidden Change) Enemies lose armor when they can\'t reach you (i.e in a cage room). (Hardmode).',
          },
          {
            text: '(Hidden Change) Glitch where you can get 3x damage even enemies see you while in crouch.',
          },
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.9.1 (Silent Update)',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: '(Hidden Change) Fixed glitch where you can get 3x damage on enemies that see you in the bunker',
          },
          {
            text: '(Hidden Change) Blind one no longer takes huge damage from melee weapons when stunned.',
          },
          {
            text: '(Hidden Change) Glitch fixed where parasites won\'t attack if shot with a long range weapon.',
          },
          {
            text: '(Hidden Change) Way less AI in red winter zones with fur gear.',
          },
          {
            text: '(Hidden Change) Dealer has better trades (Awaiting confirmation).',
          },
          {
            text: '(Hidden Change) Shiny gun effect fixed.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.10',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Minor bugs fixed and game optimization improved.',
          },
          {
            text: '(Hidden Change) Shower added in Bunker alfa lobby.',
          },
          {
            text: '(Hidden Change) Game logo and notifications bar changed to christmas theme.',
          },
          {
            text: '(Hidden Change) Free box added in shop which gives random rewards every hour.',
          },
          {
            text: '(Hidden Change) Boxes in the shop changed, from giving 2 iffy and 1 decent item, they now give one 1 good item and a chance at a rare item.',
          },
          {
            text: '(Hidden Change) Experience items for specialist removed from winter zones',
          },
          {
            text: '(Hidden Change) AI and other spawned enemies get stuck behind trees and sit there.',
          },
          {
            text: '(Hidden Change) Character gets stuck behind trees in auto.',
          },
        ],
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.11 (Skipped)',
      },
      {
        type: 'heading',
        headingType: 'subheading',
        text: 'Beta Update 1.6.12',
      },
      {
        type: 'paragraph',
        text: 'Christmas is coming and we are happy to present an update dedicated to this holiday:',
      },
      {
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Decorate a Christmas tree and collect ornaments and your gifts won’t make you wait.',
          },
          {
            text: 'Added new event ‘Holiday Van’. Keep an eye on the global map, it will appear towards the holiday!',
          },
          {
            text: 'Holiday weapons and armor! Magic and fireworks attached.',
          },
          {
            text: 'Treats to any taste that also give bonuses to stats.',
          },
          {
            text: 'Christmas without a turkey on the holiday table? No way!',
          },
          {
            text: 'Enable a device that can restart the Alfa bunker.',
          },
          {
            text: '(Hidden Change) Tried to fix bunker glitch by removing barrels',
          },
          {
            text: '(Hidden Change) Glitch so we can no longer remove equipment with a double click',
          },
          {
            text: '(Hidden Change) Glitch so that double click cannot be used to store items in an full chest even if it could be stacked',
          },
          {
            text: '(Hidden Change) Introduced the chance of getting batteries and light bulbs in the green zone',
          },
          {
            text: '(Hidden Change) Increased the chance of getting batteries and light bulbs in yellow and red zones.',
          },
        ],
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
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Skullcrusher',
          },
          {
            text: 'Saw Mace',
          },
          {
            text: 'Machete',
          },
          {
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
        type: 'ordered-list',
        listItems:
        [
          {
            text: 'Spiked devastator',
          },
          {
            text: 'Machete',
          },
          {
            text: 'Skull crusher',
          },
          {
            text: 'Saw blade',
          },
          {
            text: 'Katana',
          },
          {
            text: 'Glock',
          },
          {
            text: 'M16',
          },
          {
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
]





 












 





