require("dotenv").config();
import express from "express";
import { routeVariables } from "./constants";

import { clientRouteRegister } from "./routes";
import http from "http";
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "papyrus-client")));

app.use(`${routeVariables.clientURL}`, clientRouteRegister());

http.createServer(app).listen(process.env.PORT, function () {
  console.log(`Server started on Port ${process.env.PORT}`);
});
