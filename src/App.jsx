import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import cartItems from './data';

// Redux
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// store - stores the data, think of state (of the app) and provides methods to update store
const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
