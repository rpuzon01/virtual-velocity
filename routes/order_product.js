const express = require("express");
const orderProductsRouter = express.Router();
const { requireUser, isAdmin } = require("./utils");
const { getUserById } = require("./users");
const { getOrderById } = require("./orders");

const { getOrderProductById, destroyOrderProduct } = require("../db/utils");

//500 error
orderProductsRouter.patch(
  "/:orderProductId",
  requireUser,
  async (req, res, next) => {
    const { orderProductId } = req.params;

    try {
      const orderProduct = await getOrderProductById(orderProductId);
      const order = await getOrderById(orderProduct.orderId);
      const user = await getUserById(order.userId);

      if (req.user.id === order.userId) {
        const updatedOrderProducts = await updateOrderProduct({
          id: orderProductId,
          ...req.body,
        });
        console.log("updatedOrderProducts:", updatedOrderProducts);
        res.send(updatedOrderProducts);
      } else {
        next({
          message:
            "Logged in user should be the owner of the updated order_product.",
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

//500 error
orderProductsRouter.delete(
  "/:orderProductId",
  requireUser,
  async (req, res, next) => {
    const { orderProductId } = req.params;
    const id = req.params.orderProductId;

    try {
      const orderProduct = await getOrderProductById(orderProductId);
      const order = await getOrderById(orderProduct.orderId);
      const user = await getUserById(order.userId);

      if (req.user.id === order.userId) {
        const deletedOrderProducts = await destroyOrderProduct(id);
        console.log("deletedOrderProducts:", deletedOrderProducts);
        res.send(deletedOrderProducts);
      } else {
        next({
          message:
            "Logged in user should be the owner of the deleted order_product.",
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = orderProductsRouter;
