// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './data';

// redux stuff
import { legacy_createStore as createStore } from 'redux';

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

import { DECREASE, INCREASE } from './actions';

const initialState = {
  count: 0,
  name: 'john',
};

const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1, name: 'anna' };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  return state;
};

// store - stores the data, think of state (of the app)
const store = createStore(reducer, initialState);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cartAmount={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
