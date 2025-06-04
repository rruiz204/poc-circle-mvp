import { Seeder } from "./Seeder";
import { Role } from "@Models/Role";
import { PrismaClient } from "generated/prisma";

export class RoleSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("role-seeder", context);
  };

  public async seed(): Promise<void> {
    await this.upsert(Roles);
    await this.remove(Roles);
  };

  private async upsert(roles: Role.CreateParams[]): Promise<void> {
    for (const role of roles) {
      await this.context.role.upsert({
        where: { name: role.name },
        update: { description: role.description },
        create: { name: role.name, description: role.description },
      });
    };
  };

  private async remove(roles: Role.CreateParams[]): Promise<void> {
    const names = roles.map(role => role.name);
    await this.context.role.deleteMany({
      where: { name: { notIn: names } }
    });
  };
};

const Roles: Role.CreateParams[] = [];