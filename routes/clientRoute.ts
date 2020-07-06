import { Request, Response, Router } from "express";
import * as path from "path";
const router = Router();

export const clientRouteRegister = () => {
  router.get("/", homepageHandler);
  return router;
};

export const homepageHandler = (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "static", "client", "index.html"));
};
