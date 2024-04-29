const express = require("express");
const app = express();
const mainApp = require("./app");

app.use("/", mainApp);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
