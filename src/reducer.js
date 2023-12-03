import { DECREASE, INCREASE, CLEAR_CART } from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
};

export default reducer;

// Alternative Setup using switch statement
/* 
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  } 
 */
