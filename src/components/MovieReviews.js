// Code MovieReviews Here
import React from 'react'

const MovieReviews = movies => {
    return <div className = 'review-list'>
        { movies.reviews.map(review => {
            return <div className="review">{review.display_title}</div>
            })
        }
    </div>
}

export default MovieReviews