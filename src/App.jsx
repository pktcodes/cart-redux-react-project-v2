// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './data';

// redux stuff
import { legacy_createStore as createStore } from 'redux';

const initialState = {
  count: 10,
};

// reducer - function to update the store/state
// Two arguments - state, action
// state - old state or state before update
// action - what happened /what update needed for the state
// return updated or old state
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
};

// store - stores the data, think of state (of the app)
const store = createStore(reducer, initialState);
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
