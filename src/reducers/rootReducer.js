import { combineReducers } from 'redux'

import manageRestaurant from './manageRestaurant'
import manageReviews from './manageReviews';

const rootReducer = combineReducers({
  restaurants: manageRestaurant,
  reviews: manageReviews
})

export default rootReducer
