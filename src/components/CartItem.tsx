import Button from 'react-bootstrap/Button';
import { Product } from '../types';
import { useDeleteOrderProductMutation, useUpdateOrderProductMutation } from '../redux/slices/orderProductsApiSlice';


type CartItemProps = {
  product: Product;
}

const CartItem = ({
  product
} : CartItemProps) => {
  const {
    orderProductId,
    quantity,
    price
  } = product;

  const [updateOrderProduct] = useUpdateOrderProductMutation();
  const [deleteOrderProduct] = useDeleteOrderProductMutation();
  const handleIncrement = async () => {
    await updateOrderProduct({
      id: orderProductId,
      quantity: quantity+1,
      price
    }).unwrap();
  }

  const handleDecrement = async () => {
    if(quantity - 1 === 0) {
      await deleteOrderProduct({
        id : orderProductId
      }).unwrap();
      return;
    }

    await updateOrderProduct({
      id: orderProductId,
      quantity: quantity-1,
      price
    }).unwrap();
  }

  const handleRemove = async () => {
    await deleteOrderProduct({
      id : orderProductId
    }).unwrap();
  }

  return (
    <div 
      className='h-[200px] mx-16 p-2
      flex justify-around items-center
      border border-black rounded'
    >
      <img className='object-fit w-[100px]' src={product.imageURL} />
      <div>
        {product.name}
      </div>
      <div>
        ${product.price}
      </div>
      <div className="flex gap-2 items-center">
        <Button
          onClick={handleIncrement}
          variant='outline-primary'
        >
          +
        </Button>
          {product.quantity}
        <Button
          onClick={handleDecrement}
          variant='outline-danger'
        >
          -
        </Button>
      </div>
      <div>
        <Button
          onClick={handleRemove}
          variant='outline-danger'
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
