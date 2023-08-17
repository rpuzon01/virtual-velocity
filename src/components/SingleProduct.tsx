import swal from 'sweetalert';
import { useAppSelector } from '../redux/hooks';
import { selectCurrentToken } from '../redux/slices/authSlice';
import { Product } from '../types';

type SingleProductProps = {
  product: Product
}

const SingleProduct = ({product}: SingleProductProps) => {

  const token = useAppSelector(selectCurrentToken);

  const {
    imageURL,
    name,
    description,
    category,
    inStock,
  } = product;

  const handleAddToCart = async () => {
    // let found = false;
    // cart.products.forEach((item: any) => {
    //   if(item.name === name){
    //     found = true;
    //   }
    // })
    // if (found) {
    //   swal('Error: Product has already been added to your cart. Please modify the quantity in your cart');
    // } else {
    //   setCart({
    //     ...cart,
    //     products: [...cart.products, {...product, quantity: 1}]
    //   })
    //   swal('Product has been added to your cart. You can modify the quantity in your cart');
    // }
  }

  return (
    <div className="flex flex-col rounded shadow basis-[30%]">
      <img className="w-full max-h-[40rem] rounded" src={imageURL}/>
      <div className="p-2 m-4">
        <div>
          <span className="font-bold">Name: </span> 
          {name}
        </div>
        <div>
          <span className="font-bold">Description: </span> 
          {description}
        </div>
        <div>
          <span className="font-bold">Category: </span> 
          {category}
        </div>
      </div>
      {token && <div>
        {inStock 
          ? <div 
            className="flex justify-center p-2 m-4 bg-blue-600 text-white"
            onClick={handleAddToCart}
          >Add To Cart</div>
          : <div className="flex justify-center p-2 m-4 bg-red-600 text-white">Out of stock</div>
      }
      </div>}
    </div>
  );
}

export default SingleProduct;
