import type { CircleDTO } from "@DTOs/CircleDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { CreateCircleCommand } from "./CreateCircleCommand";

import { Circle } from "@Models/Circle";
import { inject, injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { CreateCircleSchema } from "./CreateCircleSchema";
import { LogicException } from "@Exceptions/LogicException";

@injectable()
export class CreateCircleUseCase implements UseCase<CreateCircleCommand, CircleDTO> {
  constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) {};

  public async execute(command: CreateCircleCommand): Promise<CircleDTO> {
    const validated = await CreateCircleSchema.validate(command);

    const existing = await this.prisma.circle.findUnique({ where: { name: validated.name } });
    if (existing) throw new LogicException.Redundancy("Circle already exists!");

    const role = await this.prisma.role.findUnique({ where: { name: "owner" } });
    if (!role) throw new LogicException.NotFound("Role 'onwer' not found");

    const circle = await this.prisma.circle.create({
      data: {
        name: validated.name,
        description: validated.description,
        members: { create: { roleId: role.id, userId: command.onwer } },
      },
      include: Circle.WithMembers,
    });

    return {
      id: circle.id,
      name: circle.name,
      description: circle.description,
      members: circle.members.map((m) => ({
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
      })),
    };
  };
};