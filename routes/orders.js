const express = require("express");
const ordersRouter = express.Router();
const { requireUser, isAdmin } = require("./utils");
const { getAllOrders, getCartByUser, createOrder } = require('../db/utils');

ordersRouter.get("/", [requireUser, isAdmin], async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

ordersRouter.get("/cart", requireUser, async (req, res, next) => {
    try {
      const order = await getCartByUser(req.user);
      res.send(order);
    } catch (error) {
      next(error);
    }
  }
);

ordersRouter.post("/", requireUser, async (req, res, next) => {
  try {
    const order = await createOrder({status: 'created', userId: req.user.id});
    res.send(order);
  } catch (error) {
    next(error);
  }
});


module.exports = ordersRouter;
