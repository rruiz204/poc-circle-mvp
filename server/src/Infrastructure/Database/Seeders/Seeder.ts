import { PrismaClient } from "generated/prisma";

export abstract class Seeder {
  constructor(protected context: PrismaClient) {};
  abstract seed(): Promise<void>;
};