import express from "express";
import {
  addProduct,
  getSingleProduct,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProduct);
router.get("/products/:productid", getSingleProduct);

export default router;
