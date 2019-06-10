import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {

    const { reviews, addReview, restaurantId, deleteReview } = this.props

    const filteredReviews = reviews.filter(r => r.restaurantId === restaurantId)

    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurantId} />
        <Reviews reviews={filteredReviews} deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', review:{text, restaurantId}}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
