import type { Circle } from "@Models/Circle";
import type { Member } from "@Models/Member";

interface Response extends Circle.Entity {
  members: Member.WithUser[];
};

import type { UseCase } from "@UseCases/UseCase";
import type { CircleDTO } from "@DTOs/CircleDTO";
import type { ListMyCirclesQuery } from "./ListMyCirclesQuery";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { ListMyCirclesSchema } from "./ListMyCirclesSchema";
import { MyCirclesSpec } from "@Specs/Circles/MyCirclesSpec";

@injectable()
export class ListMyCirclesUseCase implements UseCase<ListMyCirclesQuery, CircleDTO[]> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(query: ListMyCirclesQuery): Promise<CircleDTO[]> {
    const validated = await ListMyCirclesSchema.validate(query);

    const spec = new MyCirclesSpec({ userId: validated.user });
    const circles: Response[] = await this.uow.circle.list(spec);

    return circles.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      members: c.members.map((m) => ({
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
        active: m.user.active,
      })),
    }));
  };
};