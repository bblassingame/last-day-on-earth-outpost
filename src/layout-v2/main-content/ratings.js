import React from 'react'

import RatingsIcon from './ratings-icon.png'
import RatingsIconGold from './ratings-icon-gold.png'
import RatingsIconGrey from './ratings-icon-grey.png'

const Ratings = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={RatingsIcon} alt='a star image representing a section that displays user reviews' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Ratings</h1>
        {createRatings(ratingsData)}
      </div>
    </div>
  )
}

/*****************************   Ratings Containers   *****************************/
/**********************************************************************************/

// creates the main container for the ratings
const createRatings = (ratingsData) => {
  let ratings = []

  ratings = ratingsData.map( rating => createRating(rating))

  return (
    <div className='ratings'>
      {ratings}
    </div>
  )
}

// creates each individual rating
const createRating = (rating) => {
  return (
    <div className='rating-container' key={rating.ID}>
      {createRatingsNameRow(rating.reviewerName, rating.rating)}
      {createRatingsInfoContainer(rating.title, rating.comment)}
    </div>
  )
}

/*****************************   Ratings Info Heading   *****************************/
/************************************************************************************/

// creates the ratings row with the name and the stars for that rating
const createRatingsNameRow = (name, rating) => {
  console.log(rating)
  return (
    <div className='ratings-name-row'>
      {createRatingsName(name)}
      {createRatingsStarContainer(rating)}
    </div>
  )
}

// creates the rating name <p> element
const createRatingsName = (name) => {
  return (
    <p>
      {name}
    </p>
  )
}

// creates the rating stars container
const createRatingsStarContainer = (rating) => {
  let stars = []

  for(let i = 0 ; i < 5 ; i++) {
    if(rating >= i) {
      stars.push(createRatingsStar(true, i))
    }
    else {
      stars.push(createRatingsStar(false, i))
    }
  }

  return (
    <div className='ratings-star-container'>
      {stars}
    </div>
  )
}

// creates each individual star
const createRatingsStar = (isGold, key) => {
  let imgSrc = null

  if(true === isGold) {
    imgSrc = RatingsIconGold
  }
  else {
    imgSrc = RatingsIconGrey
  }

  return (
    <img key={key} className='img-fill' src={imgSrc} alt='a star image representing one of the five total stars a reviewer can give on a review' />
  )
}

/*****************************   Ratings Info Content   *****************************/
/************************************************************************************/

// creates the ratings information container with the title and comment
const createRatingsInfoContainer = (title, comment) => {
  return (
    <div className='ratings-info-container'>
      {createRatingsTitle(title)}
      {createRatingsComment(comment)}
    </div>
  )
}

// creates the ratings title
const createRatingsTitle = (title) => {
  let pClass = 'ratings-title'

  if(title === '')
    pClass += ' hidden-element'

  return (
    <p className={pClass}>
      {title}
    </p>
  )
}

// creates the ratings comment
const createRatingsComment = (comment) => {
  return (
    <p className = 'ratings-comment'>
      {comment}
    </p>
  )
}

/*****************************   Ratings Data   *****************************/
/****************************************************************************/

const ratingsData = [
  {
    ID: 1,
    reviewerName: 'K Thornton', 
    rating: 5, 
    title: 'Great Value and Awesome Customer Service', 
    comment: 'They have multi size units and will work with you if you lease over two units. They also offer electronic transfer for the monthly fee. Good customer service if any issue should arise.', 
    date: '20140311'
  },
  {
    ID: 2,
    reviewerName: 'Debbie Helbig', 
    rating: 5, 
    title: 'Good price for large storage area', 
    comment: 'We rented a 7.5\' x 10\' unit which was quite ample for the amount of stuff that we had to store. The price per month was excellent for a climate controlled facility. Security at the facility seemed very good. The owners were very friendly and very helpful.', 
    date: '20170507'
  },
  {
    ID: 3,
    reviewerName: 'Melissa A. Harris', 
    rating: 5, 
    title: '', 
    comment: 'Best place for cleanliness and climate control.  Ashly Lloyd so easy to work with on maintaining our rental contracts and payments.  We rented for years!', 
    date: '20170721'
  },
]

export default Ratings