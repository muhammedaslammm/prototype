import app from "../server.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    app.listen(process.env.PORT, () =>
      console.log(
        `database connected and server waiting for request in port ${process.env.PORT}`
      )
    );
  } catch (error) {
    console.log("database connection failed", error);
  }
};

export default connectDB;
