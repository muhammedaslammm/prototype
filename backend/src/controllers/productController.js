import Product from "../models/productModel.js";
import mongoose from "mongoose";

const addProduct = async (req, res) => {
  try {
    const { brand, product_name, description, price } = req.body;
    const new_product = new Product({
      brand,
      product_name,
      description,
      price: mongoose.Types.Decimal128.fromString(price.toString()),
    });
    const product = await new_product.save();
    console.log("product created");
    res.json({ success: true, message: "product created", product });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// get products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, message: "products fetched from db", products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  try {
    let { productid } = req.params;
    const product = await Product.findById(productid);
    res.json({ success: true, message: "product fetched", product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, getProducts, getSingleProduct };
