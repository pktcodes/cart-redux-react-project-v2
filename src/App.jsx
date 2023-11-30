// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './data';

// redux stuff
import { legacy_createStore as createStore } from 'redux';

// reducer - function to update the store/state
const reducer = () => {
  console.log('Hello world');
};

// store - stores the data, think of state (of the app)
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
