const express = require("express");
const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/",getProduct);
router.post("/create",createProduct);
router.delete("/:id",deleteProduct);
router.post("/:id/update_quantity",updateProduct)

module.exports = router;
