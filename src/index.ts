const express = require("express");
import * as database from "./database/mongoconnection";

const app = express();
const port = 3000;

app.get("/", async (_req: any, res: any) => {
  const db = (await database.connectionDB()).connection.collection("teste");
  console.log(await db.findOne({ name: "teste" }));
  res.json({
    application: "Hello World",
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} - Access on http://localhost:3000`);
});
