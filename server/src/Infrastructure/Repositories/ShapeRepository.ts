import type { Shape } from "@Models/Shape";
import { PrismaClient } from "generated/prisma";
import type { IShapeRepository } from "@Repositories/IShapeRepository";

export class ShapeRepository implements IShapeRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Shape.Records> {
    return await this.prisma.shape.findMany();
  };

  public async findById(id: number): Promise<Shape.Nullable> {
    return await this.prisma.shape.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Shape.Nullable> {
    return await this.prisma.shape.findUnique({ where: { name } });
  };
};