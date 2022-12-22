import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Login, Products } from "./components";
import { fetchProducts } from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [products, setProducts] = useState([]);
  const handleProducts = async () => {
    try {
      setProducts(await fetchProducts());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    handleProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <Navigation>
        <Login
          // setCart={setCart}
          // setOrders={setOrders}
          // setUser={setUser}
          // token={token}
          // setToken={setToken}
        />
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
      </Routes>
    </div>
  )
}

export default App;
