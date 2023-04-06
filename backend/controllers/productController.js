import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@fetch all the products router GET /api/products---Public router

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@fetch single products router GET /api/products/:id---Public router

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProducts, getProductById };
