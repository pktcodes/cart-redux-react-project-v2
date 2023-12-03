import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

// Redux
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

// React-Redux
// Provider: Wrap Application and pass store
// connect: used in components to connect and access store
import { Provider } from 'react-redux';

// store - stores the data, think of state (of the app) and provides methods to update store
const store = createStore(reducer);

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
