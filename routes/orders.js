const express = require("express");
const ordersRouter = express.Router();
const { requireUser, isAdmin } = require("./utils");
const { addProductToOrder } = require("../db/order_product");

ordersRouter.get("/orders", requireUser, isAdmin, async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get(
  "/orders/cart",
  requireUser,
  isAdmin,
  async (req, res, next) => {
    try {
      const orders = await getPendingOrdersByUsers();
      res.send(orders);
    } catch (error) {
      next(error);
    }
  }
);

ordersRouter.post("/orders", requireUser, async (req, res, next) => {
  try {
    const orders = await createNewOrder(productId, orderId, price, quantity);
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get(
  "/users/:userId/orders",
  requireUser,
  async (req, res, next) => {
    const { userId } = req.params;
    try {
      const orders = await getOrderByUser(userId);
      res.send(orders);
    } catch (error) {
      next(error);
    }
  }
);

//Add a single product to an order (using order_products). Prevent duplication on ("orderId", "productId") pair. If product already exists on order, increment quantity and update price.
//cannot complete without addProductToOrder
//500 error
//orders folder
ordersRouter.post(
  "orders/:orderId/products",
  requireUser,
  async (req, res, next) => {
    const { orderId } = req.params;
    const { productId, price, quantity } = req.body;

    try {
      const orderProducts = await addProductToOrder(
        orderId,
        productId,
        price,
        quantity
      );
      console.log("orderProducts:", orderProducts);
      res.send(orderProducts);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = ordersRouter;
