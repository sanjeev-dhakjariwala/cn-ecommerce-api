const Product = require("../model/Products");

//Adding product
const createProduct = async (req, res) => {
  const body = req.body.product;
  console.log(req.body);
  if (body) {
    const addProduct = await Product.create(body);
    res.status(200).send({
      sucess: true,
      message: "Product added successfully",
      data: {
        product: {
          name: body.name,
          quantity: body.quantity,
        },
      },
    });
  } else {
    res.status(200).send({
      success: false,
      message: "Enter product details",
    });
  }
};
//Getting all products
const getProduct = async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.send({
      success: true,
      data: {
        products,
      },
    });
  } else {
    res.send({
      success: false,
      message: "No Products found",
    });
  }
};
//Delete product by id
const deleteProduct = async (req, res) => {
  const id = req.body.id;
  const product = await Product.findByIdAndDelete(id);

  if (product) {
    res.send({
      success: true,
      data: {
        product,
      },
    });
  } else {
    res.send({
      success: false,
      message: "Give correct id",
    });
  }
};

//update product quantity

const updateProduct = async (req, res) => {
  console.log(req.body);
  const quantity = parseInt(req.body.quantity);
  const id = req.body.id;
  const product = await Product.findById(id);
  console.log(id);
  if (product) {
    product.quantity = parseInt(product.quantity) + quantity;
    await Product.findByIdAndUpdate(id, product);
    res.send({
      success: true,
      message: "Product updated Successfully",
      data: {
        product,
      },
    });
  } else {
    res.send({
      success: false,
      message: "Product not found",
    });
  }
};
module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
