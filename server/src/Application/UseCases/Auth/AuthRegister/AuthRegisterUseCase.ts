import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { AuthRegisterCommand } from "./AuthRegisterCommand";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/UnitOfWork";
import { AuthRegisterSchema } from "./AuthRegisterSchema";

@injectable()
export class AuthRegisterUseCase implements UseCase<AuthRegisterCommand, AuthDTO> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(command: AuthRegisterCommand): Promise<AuthDTO> {
    const validated = await AuthRegisterSchema.validate(command);

    throw new Error("Method not implemented.");
  };
};
