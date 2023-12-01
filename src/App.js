import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = true
  return (
    <Router>
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/products/:category' element={ <ProductList />} />
      <Route path='/product/:id' element={ <Product />} />
      <Route path='/cart' element={ <Cart />} />
      <Route path='/login' element={user? <Navigate to="/" /> :<Login />} />
      <Route path='/Register' element={user? <Navigate to ="/" /> :  <Register />} />
     </Routes>
    </Router>
  );
}

export default App;


