import { Request, Response, Router } from "express";
const router = Router();

export const clientRouteRegister = () => {
  router.get("/", homepageHandler);
  return router;
};

export const homepageHandler = (req: Request, res: Response) => {
  res.send("Migration to cloud in progress");
};
