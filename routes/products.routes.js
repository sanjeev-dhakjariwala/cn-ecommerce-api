const express = require("express");
const {
  createProduct,
  getProduct,
  deleteProduct
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/",getProduct);
router.post("/create",createProduct);
router.delete("/:id",deleteProduct);

module.exports = router;
