import { Seeder } from "./Seeder";
import { PrismaClient } from "generated/prisma";
import { Permissions } from "@Security/Permissions";

export class PermissionSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("permission-seeder", context);
  };

  public async seed(): Promise<void> {
    for (const permission of Permissions) {
      await this.context.permission.upsert({
        update: {
          description: permission.description
        },
        where: {
          name: permission.name
        },
        create: {
          name: permission.name,
          description: permission.description,
        },
      });
    };
  };
};