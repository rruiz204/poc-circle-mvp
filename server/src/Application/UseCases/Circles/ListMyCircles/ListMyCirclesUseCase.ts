import type { UseCase } from "@UseCases/UseCase";
import type { CircleDTO } from "@DTOs/CircleDTO";
import type { ListMyCirclesQuery } from "./ListMyCirclesQuery";

import { Circle } from "@Models/Circle";
import { inject, injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { ListMyCirclesSchema } from "./ListMyCirclesSchema";
import { MyCirclesSpec } from "@Specs/Circles/MyCirclesSpec";

@injectable()
export class ListMyCirclesUseCase implements UseCase<ListMyCirclesQuery, CircleDTO[]> {
  constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) {};

  public async execute(query: ListMyCirclesQuery): Promise<CircleDTO[]> {
    const validated = await ListMyCirclesSchema.validate(query);
    const spec = new MyCirclesSpec({ userId: validated.userId });
  
    const circles = await this.prisma.circle.findMany({
      where: spec.toWhere(), include: Circle.WithMembers,
    });

    return circles.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      members: c.members.map((m) => ({
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
      })),
    }));
  };
};