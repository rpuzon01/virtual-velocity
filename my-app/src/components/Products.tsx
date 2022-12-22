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
            <div>
              <div>Name: {name}</div>
              <div>Description: {description}</div>
              <div>Category: {category}</div>
              <div>inStock: {(inStock) ? "Yes" : "No"} get rid of this and just do a conditional on the button</div>
            </div>
            <div>
              button goes here
            </div>
          </div>
        })} 
      </div>
  );
};

export default Products;
