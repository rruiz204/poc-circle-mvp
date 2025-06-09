import { ContainerModule } from "inversify";
import { AuthController } from "@Controllers/AuthController";
import { CircleController } from "@Controllers/CircleController";

export const Presentation = new ContainerModule((opts) => {
  opts.bind(AuthController).toSelf();
  opts.bind(CircleController).toSelf();
});