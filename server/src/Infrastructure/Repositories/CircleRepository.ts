import type { Circle } from "@Models/Circle";
import { PrismaClient } from "generated/prisma";
import type { ICircleRepository } from "@Repositories/ICircleRepository";

export class CircleRepository implements ICircleRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(): Promise<Circle.Records> {
    return await this.prisma.circle.findMany();
  };

  public async delete(id: number): Promise<Circle.Entity> {
    return await this.prisma.circle.delete({ where: { id } });
  };

  public async create(params: Circle.CreateParams): Promise<Circle.Entity> {
    return await this.prisma.circle.create({ data: params });
  };

  public async update(id: number, params: Circle.UpdateParams): Promise<Circle.Entity> {
    return await this.prisma.circle.update({ data: params, where: { id } });
  };

  public async findById(id: number): Promise<Circle.Nullable> {
    return await this.prisma.circle.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Circle.Nullable> {
    return await this.prisma.circle.findUnique({ where: { name } });
  };

  public async addMember(userId: number, roleId: number, circleId: number): Promise<void> {
    await this.prisma.member.create({ data: { userId, roleId, circleId } });
  };

  public async removeMember(userId: number, circleId: number): Promise<void> {
    await this.prisma.member.deleteMany({ where: { userId, circleId } });
  };
};