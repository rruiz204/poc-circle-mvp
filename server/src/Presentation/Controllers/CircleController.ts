import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { ListCirclesUseCase } from "@UseCases/Circles/ListCircles/ListCirclesUseCase";
import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";

@injectable()
export class CircleController {
  constructor(
    @inject(ListCirclesUseCase) private readonly listCirclesUseCase: ListCirclesUseCase,
    @inject(CreateCircleUseCase) private readonly createCirleUseCase: CreateCircleUseCase,
  ) {
    this.list = this.list.bind(this);
    this.create = this.create.bind(this);
  };

  public async list(req: Request, res: Response): Promise<void> {
    const response = await this.listCirclesUseCase.execute({ user: req.user.id });
    res.status(200).json(response);
  };

  public async create(req: Request, res: Response): Promise<void> {
    const response = await this.createCirleUseCase.execute({ ...req.body, onwer: req.user.id });
    res.status(200).json(response);
  };
};