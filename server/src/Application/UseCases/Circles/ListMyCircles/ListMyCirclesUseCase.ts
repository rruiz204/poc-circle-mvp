import type { UseCase } from "@UseCases/UseCase";
import type { CircleDTO } from "@DTOs/CircleDTO";
import type { ListMyCirclesQuery } from "./ListMyCirclesQuery";

import { inject, injectable } from "inversify";
import { PrismaClient } from "generated/prisma";
import { ListMyCirclesSchema } from "./ListMyCirclesSchema";
import { MyCirclesSpec } from "@Specs/Circles/MyCirclesSpec";

@injectable()
export class ListMyCirclesUseCase implements UseCase<ListMyCirclesQuery, CircleDTO[]> {
  constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) {};

  public async execute(query: ListMyCirclesQuery): Promise<CircleDTO[]> {
    const validated = await ListMyCirclesSchema.validate(query);

    const spec = new MyCirclesSpec({ user: validated.user });
    const circles = await this.prisma.circle.findMany({ where: spec.toWhere() });

    return circles.map((c) => ({
      id: c.id, name: c.name,
      description: c.description,
    }));
  };
};