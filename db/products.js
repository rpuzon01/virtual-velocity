const { client } = require("./index");

async function createProducts({
  id,
  name,
  description,
  price,
  imageURL,
  inStock,
  category,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO products (id, name, description, price, imageURL, inStock, category)
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *;
      `,
      [id, name, description, price, imageURL, inStock, category]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createProducts,
};
