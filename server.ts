import express from "express";
import { routeVariables } from "./constants";
require("dotenv").config();

import { clientRouteRegister } from "./routes";
import http from "http";

const app = express();

app.use(`${routeVariables.clientURL}`, clientRouteRegister());

http.createServer(app).listen(process.env.PORT, function () {
  console.log(`Server started on Port ${process.env.PORT}`);
});
