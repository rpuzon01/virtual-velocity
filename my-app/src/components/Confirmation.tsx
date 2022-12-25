import { useState, useEffect } from "react";
import { confirmOrder } from "../API";

const Confirmation = ({cart, setCart, token}: any) => {
  const [order, setOrder] = useState<any>(null);

  const handleConfirmedOrder = async () => {
    if (!order && cart.products.length) {
      try {
        console.log("hello", cart, token);
        const { completedOrder, cart: newCart } = await confirmOrder(token, cart.id)
        setOrder(completedOrder);
        setCart(newCart)
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    handleConfirmedOrder();
  });

  if (!order) {
    return (
      <div>
        Please do not refresh or leave this page. The order is currently processing... Please Wait
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col m-16 p-8 bg-gray-500/30 rounded">
        <h1>Thank you for placing an order with us.</h1>
        <div>Confirmation for Order#: {order.id}</div>
        <div>{
          order.products.map(({
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
                    <div>
                      <span className="font-bold">Quantity: </span>
                      {quantity}
                    </div>
                  </div>
                </div>
              )
            })
        }</div>
      </div>
    </div>
  );
}

export default Confirmation;
