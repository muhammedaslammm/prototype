import Product from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

const addProduct = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res
        .status(400)
        .json({ success: false, error: "no files found to procee" });

    console.log("files:", req.files);
    const uploadedImages = await Promise.all(
      req.files.map(
        (file) =>
          new Promise((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                { folder: "bizdata_products" },
                (error, result) => {
                  if (error) reject(error);
                  else resolve(result.secure_url);
                }
              )
              .end(file.buffer);
          })
      )
    );

    const { brand, product_name, description, price } = req.body;
    const new_product = new Product({
      images: uploadedImages,
      brand,
      product_name,
      description,
      price: mongoose.Types.Decimal128.fromString(price.toString()),
    });
    const product = await new_product.save();
    const formattedProduct = {
      ...product.toObject(),
      price: product.price.toString(),
    };
    console.log("product created");
    res.json({
      success: true,
      message: "product created",
      product: formattedProduct,
    });
  } catch (error) {
    console.log("server error :", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// get products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const formatedProducts = products.map((product) => ({
      ...product.toObject(),
      price: product.price.toString(),
    }));
    res.json({
      success: true,
      message: "products fetched from db",
      products: formatedProducts,
    });
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
