import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import cartItems from './data';

// Redux
import { legacy_createStore as createStore } from 'redux';
import { DECREASE, INCREASE } from './actions';
import reducer from './reducer';

const initialState = {
  count: 0,
  name: 'john',
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
