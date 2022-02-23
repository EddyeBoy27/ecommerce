import mongoose, { Mongoose } from "mongoose";
import config from "../config";

const connectionDB = async (): Promise<Mongoose> =>
  mongoose.connect(config.mongo.url, config.mongo.options);

const closeDB = (): Promise<void> => mongoose.connection.close();

export { connectionDB, closeDB };
