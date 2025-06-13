import { ContainerModule } from "inversify";

import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";
import { EmailRegisterUseCase } from "@UseCases/Auth/EmailRegister/EmailRegisterUseCase";

import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";
import { ListMyCirclesUseCase } from "@UseCases/Circles/ListMyCircles/ListMyCirclesUseCase";

export const Application = new ContainerModule((opts) => {
  opts.bind(EmailLoginUseCase).toSelf();
  opts.bind(EmailRegisterUseCase).toSelf();

  opts.bind(CreateCircleUseCase).toSelf();
  opts.bind(ListMyCirclesUseCase).toSelf();
});