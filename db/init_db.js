const { client } = require("./index");

const { 
    createOrderProduct,
    createProduct, 
    createOrder, 
    createUser,
    setUserAsAdmin,
    getAllUsers,
    getUserById,
    getUser,
    getUserByUsername,
    getOrderById,
    getAllOrders,
    getOrdersByUser,
    getCartByUser,
    getOrdersByProduct,
    updateOrder,
    cancelOrder,
    completeOrder,
    getOrderProductById,
    addProductToOrder,
    destroyOrderProduct
} = require("./utils");

async function buildTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
    DROP TABLE IF EXISTS order_products;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS users;
    `);

    console.log("Starting to build tables...");
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      "firstName" VARCHAR(255) NOT NULL,
      "lastName" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "imageURL" TEXT DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT false
    );
    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'created',
      "userId" INTEGER REFERENCES users(id),
      "datePlaced" DATE DEFAULT CURRENT_DATE
    );
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      "imageURL" TEXT DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
      "inStock" BOOLEAN NOT NULL DEFAULT false,
      category VARCHAR(255) NOT NULL
    );
    CREATE TABLE order_products(
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "orderId" INTEGER REFERENCES orders(id),
      price INTEGER NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 0,
      UNIQUE ("productId", "orderId")
    );
    `);
  } catch (error) {
      console.error(error);
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
        price: 399995,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 2,
        name: "PSA grade 10 Base set Blastoise",
        description: "(dummy description)",
        price: 349995,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 3,
        name: "PSA grade 10 Base set Venusaur",
        description: "(dummy description)",
        price: 339995,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 4,
        name: "PSA grade 10 Base set Mew",
        description: "(dummy description)",
        price: 299999,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 5,
        name: "PSA grade 10 Base set MewTwo",
        description: "(dummy description)",
        price: 299999,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 6,
        name: "Pokemon Jungle 1st Edition Box(Sealed)",
        description: "(dummy description)",
        price: 2400099,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 7,
        name: "Pokemon Fossil 1st Edition Box(Sealed)",
        description: "(dummy description)",
        price: 1800099,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 8,
        name: "Pokemon Base Set 1st Edition Box(Sealed)",
        description: "(dummy description)",
        price: 4000099,
        inStock: true,
        category: "Pokemon Cards",
      },
      {
        id: 9,
        name: "Pokemon Mystery Box",
        description: "(dummy description)",
        price: 4599,
        inStock: true,
        category: "Pokemon Cards",
      },
    ];
    const products = await Promise.all(
      productsToCreate.map((product) => createProduct(product))
    );
    console.log("products created: ", products);

    // ---------

    const usersToCreate = [
      {
        firstName: "elmar",
        lastName: 'fudd',
        email: 'elmarisawesome@me.com',
        username: "elmarisme",
        password: 'elmar12345',
      },

      {
        firstName: "dougy",
        lastName: 'fresh',
        email: 'dougIstheman@me.com',
        username: "dougIsMe",
        password: 'dougy12345',
      }
    ]
    const users = await Promise.all(
      usersToCreate.map((user) => createUser(user))
    )
      console.log('user testing');
    console.log('users created:', users)
      const allUsers = await getAllUsers();
      console.log('Getting users with getAllUsers(): ', allUsers);
      const user1 = await getUserById(1);
      console.log('Getting user 1: ', user1);
    await setUserAsAdmin(2);
      const userWithUsername = await getUserByUsername('dougIsMe');
      console.log('Getting user with name', userWithUsername);
      const userWithUserPass = await getUser({username: 'elmarisme', password: 'elmar12345'});
      console.log('getting user with login:', userWithUserPass);

    // ------

    const ordersToCreate = [
      {
        status: "created",
        userId: 1,
      },
      {
        status: "created",
        userId: 1,
      },
    ];
    const orders = await Promise.all(
      ordersToCreate.map((order) => createOrder(order))
    );
    console.log("order created:", orders);

    // -----------

    const orderProductsToCreate = [
      {
        productId: 1,
        orderId: 1,
        price: 5000,
        quantity: 1,
      },
      {
        productId: 2,
        orderId: 1,
        price: 5001,
        quantity: 1,
      },
      {
        productId: 3,
        orderId: 1,
        price: 5002,
        quantity: 1,
      }
    ];
    const order_product = await Promise.all(
      orderProductsToCreate.map((order_product) =>
        createOrderProduct(order_product)
      )
    );
    console.log("order_product created:", order_product);

    // -----------
    console.log('order testing');
      const order1 = await getOrderById(1);
      console.log('getting order with id1: ', order1);
      console.log('products of order1', order1.products);
      const allOrders = await getAllOrders();
      console.log('getting all orders', allOrders);
      const userOrders = await getOrdersByUser({id: 1});
      console.log('getting orders of user with id1:', userOrders);
      const userCart = await getCartByUser({id: 1});
      console.log('getCartByUser({id: 1})', userCart);
      const orderByProduct = await getOrdersByProduct({id: 1});
      console.log('getOrdersByProduct({id: 1})', orderByProduct);
      console.log('UpdatingOrders---');
      const updatedOrder = await updateOrder({id: 2, status: 'updating'});
      console.log('changing status to updating', updatedOrder);
      const updatedOrder2 = await updateOrder({id: 2, userId: 2});
      console.log('changing userid to 2', updatedOrder2);
      const completedOrder = await completeOrder({id: 2});
      console.log('completing order', completedOrder);
      const cancelledOrder = await cancelOrder(2);
      console.log('cancelling order', cancelledOrder);

      // starting to test order prods
      console.log('order prods testing');
      const orderProd1 = await getOrderProductById(1);
      console.log('getting order prod with id of 1', orderProd1);
      const addToPrevOP = await addProductToOrder({
          orderId: 1,
          productId: 1,
          price: 10000,
          quantity: 2
      });
      console.log('adding to made op', addToPrevOP);
      const addToNewOP = await addProductToOrder({
          orderId: 1,
          productId: 5,
          price: 7000,
          quantity: 3
      });
      console.log('adding to unmade op', addToNewOP);
      await destroyOrderProduct(4);
      const destroyedOP = await getOrderProductById(4);
      console.log('deleting op 4', destroyedOP);



  } catch (error) {
      console.error(error);
  }
}

client.connect()
  .then(buildTables)
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());

module.exports = { 
    buildTables,
    populateInitialData
}
