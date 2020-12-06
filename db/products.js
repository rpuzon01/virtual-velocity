const { client } = require("./index");

const getProductById = async (id) => {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
           SELECT * FROM products
           WHERE id = $1;
        `,
      [id]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const { rows: products } = await client.query(`
            SELECT * FROM products;
        `);
    return products;
  } catch (error) {
    throw error;
  }
};

const createProduct = async ({
  name,
  description,
  price,
  imageURL,
  inStock,
  category,
}) => {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
            INSERT INTO products (name, description, price, "imageURL", "inStock", category)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `,
      [name, description, price, imageURL, inStock, category]
    );
    return product;
  } catch (error) {
    throw error;
  }
};

const destroyProduct = async ({id}) => {
  try {
    const { rows: [products] } = await client.query(`
    DELETE FROM order_products
    USING products
    WHERE products.id = order_products."productId"
    AND products.id = $1;

    DELETE FROM products
    WHERE products.id = $1
    RETURNING *;
    `, [id])
    return products

  } catch (error) {
    throw error
  }
}

// destroyProduct
// destroyProduct({ id })
// hard delete a product.
// make sure to delete all the order_products whose product is the one being deleted.
// make sure the orders for the order_products being deleted do not have a status = completed

// DELETE FROM order_products
// JOIN orders
// ON orders.id = order_products."orderId"
// USING products
// WHERE products.id = order_products."productId"
// AND products.id = $1;
// AND NOT orders.status = 'completed';

// DELETE FROM products
// WHERE products.id = $1
// RETURNING *;


module.exports = {
  destroyProduct,
  getProductById,
  getAllProducts,
  createProduct,
};
