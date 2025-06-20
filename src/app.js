import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(" MongoDB is connected. Express is working!");
});

export default app;
