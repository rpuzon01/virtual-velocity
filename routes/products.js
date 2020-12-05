const router = require("express").Router();

const {
  getAllProducts,
  getProductById,
  updateProduct,
} = require("../db/utils");

const { requireUser, isAdmin } = require("./utils");

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

router.patch("/:productId", isAdmin, async (req, res, next) => {
  const { productId } = req.params;
  const { name, description, price, imageURL, inStock, category } = req.body;

  try {
    const updatedProduct = await updateProduct({
      id: productId,
      name,
      description,
      price,
      imageURL,
      inStock,
      category,
    });
    console.log("updatedProduct", updatedProduct);
    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
