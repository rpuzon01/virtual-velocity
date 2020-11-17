// code to build and initialize DB goes here
const { createProducts } = require("./products.js");

const {
  client,
  // other db methods
} = require("./index");

async function buildTables() {
  try {
    client.connect();
    console.log("Dropping All Tables...");
    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS products;
    `);
    // build tables in correct order
    console.log("Starting to build tables...");
    await client.query(`
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      description TEXT UNIQUE NOT NULL,
      price VARCHAR(255) UNIQUE NOT NULL,
      imageURL TEXT,
      inStock BOOLEAN NOT NULL,
      category VARCHAR(255) NOT NULL
    );
    `);
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    console.log("starting to create initial product!");

    const productsToCreate = [
      {
        id: 1,
        name: "PSA grade 10 Base set Charzard",
        description: "(dummy description)",
        price: 1295.95,
        imageURL: "",
        inStock: true,
        category: "Pokemon Cards",
      },
    ];
    const products = await Promise.all(
      productsToCreate.map((product) => createProducts(product))
    );
    console.log("products created: ", products);
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
