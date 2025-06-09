import type { CircleDTO } from "@DTOs/CircleDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { CreateCircleCommand } from "./CreateCircleCommand";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { CreateCircleSchema } from "./CreateCircleSchema";
import { LogicException } from "@Exceptions/LogicException";

@injectable()
export class CreateCircleUseCase implements UseCase<CreateCircleCommand, CircleDTO> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(command: CreateCircleCommand): Promise<CircleDTO> {
    const validated = await CreateCircleSchema.validate(command);

    const redundancy = await this.uow.circle.findByName(validated.name);
    if (redundancy) throw new LogicException.Redundancy("Circle already exists");

    const role = await this.uow.role.findByName("owner");
    if (!role) throw new LogicException.NotFound("Role 'owner' not found");

    const created = await this.uow.circle.create({
      name: validated.name, description: validated.description,
      members: { create: { roleId: role.id, userId: command.onwer } },
    });

    return {
      id: created.id,
      name: created.name,
      description: created.description,
    };
  };
};