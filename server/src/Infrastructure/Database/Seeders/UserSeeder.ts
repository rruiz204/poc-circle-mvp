import { Seeder } from "./Seeder";
import { PrismaClient } from "generated/prisma";

export class UserSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("user-seeder", context);
  };

  public async seed(): Promise<void> {
    
  };
};