import { Request, Response, Router } from "express";
const router = Router();

export const githubWebhookRouteRegister = () => {
  router.post("/", triggerHandler);
  return router;
};

export const triggerHandler = (req: Request, res: Response) => {
  console.log(JSON.parse(req.body.payload));
  res.sendStatus(200);
};
