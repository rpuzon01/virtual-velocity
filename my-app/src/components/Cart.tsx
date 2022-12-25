import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProductToOrder, createPaymentIntent } from "../API";

const Cart = ({cart, setCart, token, setClientSecret}: any) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState("");
  
  const handleIntent = async () => {
    setClientSecret(await createPaymentIntent(cart));
  }

  const handleDelete = async (id: number) => {
    const newProducts = cart.products.filter((elem: any) => elem.id !== id)
    setCart({...cart, products: newProducts});
  }
  /*
* do a post o /order/:orderId/products
* check if the products are aleady there
   */

  const handlePlus = async (id: number) => {

    const newProducts = [...cart.products];
    for(const product of newProducts) {
      if(product.id === id) {
        product.quantity++;
      }
    }

    setCart({
      ...cart,
      products: newProducts
    })  

  }

  const handleMinus = async (id: number) => {
    const newProducts = [...cart.products];
    for(const product of newProducts) {
      if(product.id === id && product.quantity > 0) {
        product.quantity--;
      }
    }

    setCart({
      ...cart,
      products: newProducts
    })  
  }

  if (!token) {
    return (
      <div>
        Please Login to access this page
      </div>
    )
  }

  if (!cart) {
    return (
      <div>
        Loading Cart...
      </div>
    )
  }

  useEffect(() => {
    const newTotal = (() => {
      const reduced = cart?.products.reduce((a: any,b: any)=> { 
        return a + (b.price * b.quantity);
      }, 0)
      return (reduced/100).toFixed(2);
    })();
    setTotal(newTotal);
  }, [cart]);


  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="py-4 flex flex-col gap-4">
        {(cart.products.length)
        ? cart.products.map(({
          id, 
          name,
          imageURL,
          category,
          price,
          quantity,
          totalProductPrice
        }: any) => {
          return (
            <div 
              key={id}
              className="flex justify-between items-center gap-4 border border-black-400 rounded"
            >
              <div className="flex justify-between items-center gap-4 ">
                <img className="object-contain max-w-[100px]" src={imageURL} />
                <div>
                  <span className="font-bold">Name: </span>
                  {name}
                </div>
                <div>
                  <span className="font-bold">Category: </span>
                  {category}
                </div>
                <div>
                  <span className="font-bold">Price: </span>
                  {price/100}
                </div>
                  {
                    quantity === 0 &&
                    <span className="font-bold bg-red-500 text-white p-2 rounded">This Product will not be added to this order</span>
                  }
              </div>
              <div className="flex gap-2 items-center mx-4">
                <span onClick={() => {
                  handlePlus(id);
                }} className="cursor-pointer bg-blue-500 p-2 px-3 rounded">+</span>
                <span className="text-2xl">{quantity}</span>
                <span onClick={() => {
                  handleMinus(id);
                }} className="cursor-pointer bg-red-500 p-2 px-3 rounded">-</span>
                <span onClick={() => {
                  handleDelete(id);
                }} className="cursor-pointer bg-red-500 p-2 px-3 rounded">Remove from cart</span>
              </div>
            </div>
          )
        })
        : <div>
          The cart is empty
        </div>}
      </div>
      <div>Total: {total}</div>
      <div 
        onClick={
          async () => { 
            if (!cart.products.length) {
              return
            }
    // const products = await Promise.all(
    //   productsToCreate.map((product) => createProduct(product))
    // );
            await Promise.all(cart.products.map((product: any) => {
              return addProductToOrder(token, cart.id, product);
            }));
            await handleIntent();
            navigate("/checkout")
          } 
        }
      className="cursor-pointer bg-blue-600 py-2 px-4 w-fit rounded text-white">Checkout</div>
    </div>
  );
}

export default Cart;
