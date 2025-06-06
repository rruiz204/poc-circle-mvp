import type { Role } from "@Models/Role";
import { PrismaClient } from "generated/prisma";
import type { IRoleRepository } from "@Repositories/IRoleRepository";

export class RoleRepository implements IRoleRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Role.Records> {
    return await this.prisma.role.findMany();
  };

  public async findById(id: number): Promise<Role.Nullable> {
    return await this.prisma.role.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Role.Nullable> {
    return await this.prisma.role.findUnique({ where: { name } });
  };
};