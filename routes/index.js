const apiRouter = require('express').Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/users', require('./users'))

apiRouter.use('/orders', require('./orders'))

apiRouter.use('/products', require('./products'));

module.exports = apiRouter;
