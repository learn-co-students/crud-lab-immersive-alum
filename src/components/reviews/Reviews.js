import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, deleteReview } = this.props

    return (
      <ul>
        {reviews.map(r => <Review key={r.id} review={r} deleteReview={deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
