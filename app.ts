const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

app.use(cors());
app.options("*", cors());

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

// route
const apiRouter = express.Router();

// Define your API routes here using apiRouter
apiRouter.get("/", (req: any, res: any) => {
  res.send("API Home");
});

// Mount the API router at the /api path
app.use("/api", apiRouter);

const port: string | number = process.env.PORT || 8080;

app.listen(port, () => {
  return console.log("Server running");
});
