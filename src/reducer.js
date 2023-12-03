import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';

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
  if (action.type === INCREASE) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === GET_TOTALS) {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        // amount
        cartTotal.amount += amount;
        // total
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total: parseFloat(total.toFixed(2)), amount };
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
