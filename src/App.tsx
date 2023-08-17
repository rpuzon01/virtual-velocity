import { Route, Routes } from 'react-router-dom';
import { Confirmation, Home, Cart, Navigation, Products, Register, Account } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="flex flex-col">
      <Navigation />
      {false && <Register />}
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />
        <Route
          path="/products"
          element={
            <Products />
          }
        />
        <Route 
          path="/account"
          element={<Account />}
        />
        <Route 
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/confirmation/:id"
          element={<Confirmation />}
        />
      </Routes>
    </div>
  )
}

export default App;
