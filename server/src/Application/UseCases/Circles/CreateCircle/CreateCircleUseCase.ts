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

    const existing = await this.uow.circle.findByName(validated.name);
    if (existing) throw new LogicException.Redundancy("Circle already exists");

    const ownerRole = await this.uow.role.findByName("owner");
    if (!ownerRole) throw new LogicException.NotFound("Role 'owner' not found");

    const circle = await this.uow.circle.create({
      name: validated.name, description: validated.description,
      members: { create: { roleId: ownerRole.id, userId: command.onwer } },
    });

    return {
      id: circle.id,
      name: circle.name,
      description: circle.description,
    };
  };
};