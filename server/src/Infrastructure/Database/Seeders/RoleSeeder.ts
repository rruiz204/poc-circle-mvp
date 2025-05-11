import { Seeder } from "./Seeder";
import { Roles } from "@Security/Roles";
import { PrismaClient } from "generated/prisma";

export class RoleSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("role-seeder", context);
  };

  public async seed(): Promise<void> {
    for (const role of Roles) {
      await this.context.role.upsert({
        update: {
          description: role.description,
        },
        where: {
          name: role.name
        },
        create: {
          name: role.name,
          description: role.description,
        },
      });
    };
  };
};