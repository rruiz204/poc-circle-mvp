import type { UseCase } from "@UseCases/UseCase";
import type { ListCirclesQuery } from "./ListCirclesQuery";
import type { ListCirclesResponse } from "./ListCirclesResponse";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";

@injectable()
export class ListCirclesUseCase implements UseCase<ListCirclesQuery, ListCirclesResponse[]> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(query: ListCirclesQuery): Promise<ListCirclesResponse[]> {
    const circles = await this.uow.circle.list({
      members: {
        every: {
          userId: {
            equals: query.user
          },
        },
      },
    });

    return circles.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
    }));
  };
};