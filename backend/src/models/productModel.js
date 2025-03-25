import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  images: { type: [String], required: true },
  brand: { type: String, required: true },
  product_name: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  description: { type: String, required: true },
  stock: [
    {
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Product = mongoose.model("product", ProductSchema);

export default Product;
