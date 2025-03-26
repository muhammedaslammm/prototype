import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// routes
app.use("/", productRouter);

export default app;
