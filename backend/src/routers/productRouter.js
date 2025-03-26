import express from "express";
import {
  addProduct,
  getSingleProduct,
  getProducts,
} from "../controllers/productController.js";
import upload from "../middlewares/multerConfig.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", upload.array("images", 5), addProduct);
router.get("/products/:productid", getSingleProduct);

export default router;
