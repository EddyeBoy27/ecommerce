require("express-async-errors");
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { products } from "./routes";
import * as middleware from "./middlewares";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/products", products);

app.use(middleware.errorHandler);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`);
});
