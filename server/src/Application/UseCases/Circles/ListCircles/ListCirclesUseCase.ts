import type { UseCase } from "@UseCases/UseCase";
import type { ListCirclesQuery } from "./ListCirclesQuery";
import type { ListCirclesResponse } from "./ListCirclesResponse";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { MyCirclesSpec } from "@Specs/Circles/MyCirclesSpec";

@injectable()
export class ListCirclesUseCase implements UseCase<ListCirclesQuery, ListCirclesResponse[]> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(query: ListCirclesQuery): Promise<ListCirclesResponse[]> {
    const spec = new MyCirclesSpec({ userId: query.user });
    const circles = await this.uow.circle.list(spec);

    // console.log(circles[0].members[0].user);

    return circles.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      members: [],
    }));
  };
};