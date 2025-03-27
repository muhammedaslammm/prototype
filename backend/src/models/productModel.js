import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  images: { type: [String], required: true },
  brand: { type: String, required: true },
  product_name: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  description: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

const Product = mongoose.model("product", ProductSchema);

export default Product;
