const express = require("express");
const ordersRouter = express.Router();
const { requireUser } = require("./utils");

//admin?
ordersRouter.get("/orders", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

// ordersRouter.get("/orders/cart", requireUser, async (req, res, next) => {
//   try {
//     const orders = await getPendingOrdersByUsers();
//     res.send(orders);
//   } catch (error) {
//     next(error);
//   }
// });

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
    try {
      const orders = await getOrderByUser(username);
      res.send(orders);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = ordersRouter;
