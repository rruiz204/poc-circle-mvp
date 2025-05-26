import { PrismaClient } from "generated/prisma";

export abstract class Seeder {
  constructor(
    protected name: string,
    protected context: PrismaClient,
  ) {};

  abstract seed(): Promise<void>;

  public getName(): string {
    return this.name;
  };
};