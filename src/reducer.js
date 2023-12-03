import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      }),
    };
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
