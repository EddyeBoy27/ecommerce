import mongoose, { Mongoose } from "mongoose";
import config from "../config";

export const connectionDB = async (): Promise<Mongoose> =>
  mongoose.connect(config.mongo.url, config.mongo.options);

export const closeDB = (): Promise<void> => mongoose.connection.close();
