import "dotenv/config";
import express from "express";
import app from "./app";

const port = process.env.APP_PORT || 3000;

import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

app.get("/", sayWelcome);

app
  .listen(port, () => {
    console.info(`Server is listening on http://localhost:${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
