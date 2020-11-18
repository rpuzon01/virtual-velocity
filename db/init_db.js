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
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT false
    );
    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'created',
      "userId" INTEGER REFERENCES users(id),
      "datePlaced" DATE       
    );
    CREATE TABLE order_products(
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "orderId" INTEGER REFERENCES orders(id),
      price INTEGER NOT NULL
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
