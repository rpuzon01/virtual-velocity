import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Login, Products, Logout, Register } from "./components";
import { fetchProducts, getUser } from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

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

  useEffect(() => {
    if (token && !user) {
      handleUser(); 
    }
  }, [token]);

  useEffect(() => {
    handleProducts();
  }, []);

  console.log("user", user);

  return (
    <div className="flex flex-col">
      <Navigation token={token}>
        {!token 
          ? <Login
              setToken={setToken}
              setUser={setUser}
            /> 
          : <Logout 
              setToken={setToken}
              setUser={setUser}
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
      </Routes>
    </div>
  )
}

export default App;
