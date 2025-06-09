import { Router } from "express";
import { Inversify } from "@Containers/Inversify";
import { CircleController } from "@Controllers/CircleController";
import { AuthenticationMiddleware } from "@Middlewares/AthenticationMiddleware";

const controller = Inversify.get(CircleController);

export const CircleRouter = Router();
CircleRouter.use(AuthenticationMiddleware);

CircleRouter.post("/", controller.create);