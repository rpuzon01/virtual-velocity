import { useNavigate } from "react-router-dom";
import { createPaymentIntent } from "../API";

const Cart = ({cart, token, setClientSecret}: any) => {
  const navigate = useNavigate();
  
  const handleIntent = async () => {
    setClientSecret( await createPaymentIntent(cart));
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
              </div>
              <div className="flex gap-2 items-center mx-4">
                <span className="cursor-pointer bg-blue-500 p-2 px-3 rounded">+</span>
                <span className="text-2xl">{quantity}</span>
                <span className="cursor-pointer bg-red-500 p-2 px-3 rounded">-</span>
              </div>
            </div>
          )
        })
        : <div>
          The cart is empty
        </div>}
      </div>
      <div>Total: </div>
      <div 
        onClick={
          async () => { 
            if (!cart.products.length) {
              return
            }
            await handleIntent();
            navigate("/checkout")
          } 
        }
      className="cursor-pointer bg-blue-600 py-2 px-4 w-fit rounded text-white">Checkout</div>
    </div>
  );
}

export default Cart;
