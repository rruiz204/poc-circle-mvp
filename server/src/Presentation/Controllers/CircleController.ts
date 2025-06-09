import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";

@injectable()
export class CircleController {
  constructor(
    @inject(CreateCircleUseCase) private readonly createCirleUseCase: CreateCircleUseCase,
  ) {
    this.create = this.create.bind(this);
  };

  public async create(req: Request, res: Response): Promise<void> {
    const response = await this.createCirleUseCase.execute({ ...req.body, onwer: req.user.id });
    res.status(200).json(response);
  };
};