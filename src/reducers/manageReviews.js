import cuid from 'cuid'

export default function manageReviews (state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }

      return [...state, review]

    case 'DELETE_REVIEW':
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
};
