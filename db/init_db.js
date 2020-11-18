// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    // build tables in correct order

    await client.query(`
      DROP TABLE IF EXISTS order_products;
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS users;
    `);

    await client.query(`
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
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());




