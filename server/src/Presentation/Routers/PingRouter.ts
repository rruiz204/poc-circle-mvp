import { Router } from "express";
import type { Request, Response } from "express";
import { AuthenticationMiddleware } from "@Middlewares/AthenticationMiddleware";

export const PingRouter = Router();

PingRouter.use(AuthenticationMiddleware);

PingRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});