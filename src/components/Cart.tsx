import { Button } from 'react-bootstrap';
import { useAppSelector } from '../redux/hooks';
import { selectCurrentToken } from '../redux/slices/authSlice';
import { useGetCartQuery } from '../redux/slices/ordersApiSlice';
import { Product } from '../types';
import CartItem from './CartItem';
import Loader from './Loader';


const Cart = () => {
  const token = useAppSelector(selectCurrentToken);
  const {
    data: cart,
    isLoading
  } = useGetCartQuery();

  if (!token) {
    return (
      <div>
        Please Login to access this page
      </div>
    );
  }

  if(isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <div>
        Your Cart
      </div>
      <div className='flex flex-col gap-4'>
        {cart?.products.map((product: Product) => <CartItem key={product.id} product={product}/>)}
      </div>
      <div>
        total
      </div>
      <Button variant="outline-primary">
        chekcout
      </Button>
    </div>
  );
}

export default Cart;
