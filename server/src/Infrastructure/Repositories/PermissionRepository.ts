import type { Permission } from "@Models/Permission";
import { PrismaClient } from "generated/prisma";

export class PermissionRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Permission.Records> {
    return await this.prisma.permission.findMany();
  };

  public async findById(id: number): Promise<Permission.Nullable> {
    return await this.prisma.permission.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Permission.Nullable> {
    return await this.prisma.permission.findUnique({ where: { name } });
  };
};