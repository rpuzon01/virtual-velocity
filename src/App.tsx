import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Confirmation, Checkout, Home, Cart, Navigation, Login, Products, Logout, Register, Account } from "./components";
import { fetchProducts, getCart, getUser } from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51MIKYTLlbExMMygnQNzjQmhGDZ7esjSxfZimoJ6i8iwWzRI4cX3HIuATrVdhTx4uEHwo7kFz5VuoMCxQGQUsSAVY00TO7msJdM");

const App = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [cart, setCart] = useState({
    products: []
  });
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    if(localStorage.getItem("token")) {
      return localStorage.getItem("token")
    } else {
      return ""
    }
  });
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      setProducts(await fetchProducts());
    } catch (error) {
      console.error(error);
    }
  }

  const handleUser = async () => {
    if (token && !user) {
      setUser(await getUser(token as string));
    }
  }

  const handleCart = async () => {
    if (token) {
      setCart(await getCart(token as string));
    }
  }

  useEffect(() => {
    handleUser(); 
    handleCart();
  }, [token]);

  useEffect(() => {
    handleProducts();
  }, []);

  return (
      <div className="flex flex-col">
        <Navigation token={token} cart={cart}>
          {!token 
            ? <Login
                setToken={setToken}
                setUser={setUser}
              /> 
            : <Logout 
                setToken={setToken}
                setUser={setUser}
                setCart={setCart}
              />
          }
        </Navigation>
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              products={products} 
              token={token} 
              cart={cart} 
              setCart={setCart} 
            />}
          />
          <Route
            path="/products"
            element={
              <Products 
                products={products}
                token={token}
                setCart={setCart}
                cart={cart}
              />
            }
          />
          <Route 
            path="/register"
            element={
              <Register 
                setToken={setToken}
                setUser={setUser}
              />
            }
          />
          <Route 
            path="/account"
            element={
              <Account 
                user={user}
              />
            }
          />
          <Route 
            path="/cart"
            element={
              <Cart 
                cart={cart}
                token={token}
                setCart={setCart}
                setClientSecret={setClientSecret}
              />
            }
          />
          <Route 
            path="/checkout"
            element={<Elements options={{ clientSecret }} stripe={stripePromise}>
              <Checkout 
                cart={cart}
                token={token}
                clientSecret={clientSecret}
                />
            </Elements>}
          />
          <Route
            path="/confirmation/:id"
            element={<Confirmation 
              cart={cart} 
              setCart={setCart} 
              token={token} 
            />}
          />
        </Routes>
      </div>
  )
}

export default App;
