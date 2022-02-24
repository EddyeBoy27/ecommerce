import mongoose, { Mongoose, Connection } from "mongoose";
import config from "../config";

const connectionDB = async (): Promise<Connection> => {
  const conn = await mongoose.createConnection(config.mongo.url, config.mongo.options).asPromise();
  return conn;
};

const closeDB = (): Promise<void> => mongoose.connection.close();

export { connectionDB, closeDB };
