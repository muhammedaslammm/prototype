import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import productRouter from "./routers/productRouter.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

// routes
app.use("/", productRouter);

export default app;
