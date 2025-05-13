import type { Scope } from "@Models/Scope";
import { PrismaClient } from "generated/prisma";

export class PermissionRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Scope.Records> {
    return await this.prisma.scope.findMany();
  };

  public async findById(id: number): Promise<Scope.Nullable> {
    return await this.prisma.scope.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Scope.Nullable> {
    return await this.prisma.scope.findUnique({ where: { name } });
  };
};