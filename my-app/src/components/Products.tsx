const Products = ({products}:any) => {

  if (!products.length) {
    return (
      <div>
        There are currently no products
      </div>
    )
  }

  return (
      <div className="flex flex-wrap gap-8 px-16 py-8 w-full justify-center">
        {products.map(({id, name, imageURL, description, category, inStock}: any, i: number) => {
          return <div 
            className="flex flex-col rounded shadow basis-[30%]"
            key={id}
          >
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
              {inStock 
                ? <div className="flex justify-center p-2 m-4 bg-blue-600 text-white">Add To Cart</div>
                : <div className="flex justify-center p-2 m-4 bg-red-600 text-white">Out of stock</div>
              }
          </div>
        })} 
      </div>
  );
};

export default Products;
