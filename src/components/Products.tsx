import { SingleProduct } from "./";

const Products = ({products, token, cart, setCart}:any) => {
  if (!products.length) {
    return (
      <div>
        There are currently no products
      </div>
    )
  }

  return (
      <div className="flex flex-wrap gap-8 px-16 py-8 w-full justify-center">
        {products.map((product: any) => <SingleProduct key={product.id} token={token} cart={cart} setCart={setCart} product={product} />)}
      </div>
  );
};

export default Products;
