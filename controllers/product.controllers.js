const Product = require("../model/Products");
const createProduct = async(req, res) => {
  const body = req.body.product;
  console.log(req.body);
  if (body) {
    const addProduct = await Product.create(body);
    res.status(200).send({
      sucess: true,
      message: "Product added successfully",
      product: {
        name: body.name,
        quantity: body.quantity,
      },
    });
  } else {
    res.status(200).send({
      success: false,
      message: "Enter product details",
    });
  }
};

const getProduct = async(req, res) => {
    const products = await Product.find();
    if(products){
        res.send({
            success: true,
            products
        });
    }else{
        res.send({
            success: false,
            message: "No Products found"
        })
    }
};

const deleteProduct = async(req, res) =>{
    const id = req.body.id;
    const product = await Product.findByIdAndDelete(id);

    if(product){
        res.send({
            success: true,
            product
        })
    }else{
        res.send({
            success: false,
            message: "Give proper id"
        })
    }
}
module.exports = {
  createProduct,
  getProduct,
  deleteProduct
};
