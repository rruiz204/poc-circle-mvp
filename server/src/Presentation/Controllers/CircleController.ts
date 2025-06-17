import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";
import { ListMyCirclesUseCase } from "@UseCases/Circles/ListMyCircles/ListMyCirclesUseCase";

@injectable()
export class CircleController {
  constructor(
    @inject(CreateCircleUseCase) private readonly createCirleUseCase: CreateCircleUseCase,
    @inject(ListMyCirclesUseCase) private readonly listMyCirclesUseCase: ListMyCirclesUseCase,
  ) {
    this.list = this.list.bind(this);
    this.create = this.create.bind(this);
  };

  public async list(req: Request, res: Response): Promise<void> {
    const response = await this.listMyCirclesUseCase.execute({ userId: req.user.id });
    res.status(200).json(response);
  };

  public async create(req: Request, res: Response): Promise<void> {
    const response = await this.createCirleUseCase.execute({ ...req.body, onwer: req.user.id });
    res.status(200).json(response);
  };
};