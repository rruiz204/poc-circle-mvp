import type { Circle } from "@Models/Circle";
import { PrismaClient } from "generated/prisma";

export class CircleRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(spec: Circle.Spec): Promise<any> {
    return await this.prisma.circle.findMany({
      where: spec.toWhere(), include: spec.toInclude(),
    });
  };

  public async find(spec: Circle.Spec): Promise<any> {
    return await this.prisma.circle.findFirst({
      where: spec.toWhere(), include: spec.toInclude(),
    });
  };

  public async delete(spec: Circle.Spec): Promise<any> {
    return await this.prisma.circle.delete({
      where: spec.toUnique(), include: spec.toInclude(),
    });
  };

  public async create(params: Circle.CreateParams, spec: Circle.Spec): Promise<any> {
    return await this.prisma.circle.create({
      data: params,
      include: spec.toInclude(),
    });
  };

  public async update(params: Circle.UpdateParams, spec: Circle.Spec): Promise<any> {
    return await this.prisma.circle.update({
      data: params,
      where: spec.toUnique(),
      include: spec.toInclude(),
    });
  };
};