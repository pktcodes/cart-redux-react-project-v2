import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import cartItems from './data';

// Redux
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

// React-Redux
// Provider: Wrap Application and pass store
// connect: used in components to connect and access store
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
