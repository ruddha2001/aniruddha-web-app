import { Request, Response, NextFunction } from "express";
import { logger } from "../constants";
export const eventValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.get("X-Github-Event") === "pull_request") {
      let payload = JSON.parse(req.body.payload);
      if (
        payload.pull_request.base.label === "ruddha2001:master" &&
        payload.pull_request.merged === true
      ) {
        next();
      }
    }
    res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    res.sendStatus(500);
  }
};
