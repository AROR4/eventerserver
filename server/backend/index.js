const express = require("express");
const app = express();
const mainApp = require("./app");
const serverless = require("serverless-http");

app.use("/", mainApp);

const port = process.env.PORT || 5000;
const handler = serverless(app);

module.exports.handler = async (event, context) => {
  return await handler(event, context);
};