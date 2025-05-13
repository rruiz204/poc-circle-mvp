import { Seeder } from "./Seeder";
import { Roles } from "@Database/Data/Roles";
import { PrismaClient } from "generated/prisma";
import type { Role as Model } from "@Models/Role";

export class RoleSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("role-seeder", context);
  };

  public async seed(): Promise<void> {
    await this.upsert(Roles);
    await this.remove(Roles);
  };

  private async upsert(roles: Model.CreateParams[]): Promise<void> {
    for (const role of roles) {
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

  private async remove(roles: Model.CreateParams[]): Promise<void> {
    const existings = await this.context.role.findMany();
    const names = roles.map(role => role.name);

    for (const existing of existings) {
      if (!names.includes(existing.name)) {
        await this.context.role.delete({
          where: { name: existing.name }
        });
      };
    };
  };
};