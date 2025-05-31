import type { Space } from "@Models/Space";
import { PrismaClient } from "generated/prisma";
import type { ISpaceRepository } from "@Repositories/ISpaceRepository";

export class SpaceRepository implements ISpaceRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Space.Records> {
    return await this.prisma.space.findMany();
  };

  public async findById(id: number): Promise<Space.Nullable> {
    return await this.prisma.space.findUnique({ where: { id } });
  };
};