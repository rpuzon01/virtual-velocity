const router = require("express").Router();
const { requireUser, isAdmin } = require("./utils");

const { getAllProducts, getProductById } = require("../db/utils");

router.get("/", async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await getProductById(productId);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId"), isAdmin, async (req, res, next) => {
// DELETE /products/:productId (*admin) Only admins can delete a product
const { productId} = req.params;

try {
  const products = await destroyProduct({ id })
  res.send(products)

} catch (error) {
  throw error;
}

}

module.exports = router;
