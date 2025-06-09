import { ContainerModule } from "inversify";

import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";
import { EmailRegisterUseCase } from "@UseCases/Auth/EmailRegister/EmailRegisterUseCase";

import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";

export const Application = new ContainerModule((opts) => {
  opts.bind(EmailLoginUseCase).toSelf();
  opts.bind(EmailRegisterUseCase).toSelf();

  opts.bind(CreateCircleUseCase).toSelf();
});