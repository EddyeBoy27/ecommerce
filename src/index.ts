const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req: any, res: any) => {
  res.json({
    application: "Hello World",
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} - Access on http://localhost:3000`);
});
