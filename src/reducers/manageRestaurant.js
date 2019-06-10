import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }

      return [...state, restaurant]

    case 'DELETE_RESTAURANT':
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
}
