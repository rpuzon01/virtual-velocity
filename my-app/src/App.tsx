import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Login, Products, Logout, Register, Account } from "./components";
import { fetchProducts, getCart, getUser } from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

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
    setUser(await getUser(token as string));
  }

  const handleCart = async () => {
    setCart(await getCart(token as string));
  }

  useEffect(() => {
    if (token && !user) {
      handleUser(); 
    }
    if (token) {
      handleCart();
    }
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
            // setOrders={setOrders} 
            // token={token} 
            // user={user} 
            // setProducts={setProducts} 
            // cart={cart} 
            // setCart={setCart} 
          />}
        />
        <Route
          path="/products"
          element={
            <Products 
              products={products}
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
              orders={[]}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App;
