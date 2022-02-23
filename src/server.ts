import dotenv from "dotenv";
import express from "express";
import { products } from "./routes";

dotenv.config();

const app = express();

app.use("/products", products);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`);
});