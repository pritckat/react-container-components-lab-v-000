// Code MovieReviews Here
import React from 'react';

const MovieReview = (
  { headline, byline, link, summary_short }
) => {
  return(
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>{headline}</a>
      </header>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(MovieReview)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews