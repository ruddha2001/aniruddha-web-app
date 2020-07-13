import { Request, Response, Router } from "express";
import { eventValidation } from "../middlewares";
const router = Router();

export const githubWebhookRouteRegister = () => {
  router.post("/", eventValidation, triggerHandler);
  return router;
};

export const triggerHandler = (req: Request, res: Response) => {
  console.log(JSON.parse(req.body.payload));
  res.sendStatus(200);
};
