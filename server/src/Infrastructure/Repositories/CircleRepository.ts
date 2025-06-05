import type { Circle } from "@Models/Circle";
import { PrismaClient } from "generated/prisma";
import type { ICircleRepository } from "@Repositories/ICircleRepository";

export class CircleRepository implements ICircleRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Circle.Records> {
    return await this.prisma.circle.findMany();
  };

  public async findById(id: number): Promise<Circle.Nullable> {
    return await this.prisma.circle.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Circle.Nullable> {
    return await this.prisma.circle.findUnique({ where: { name } });
  };
};